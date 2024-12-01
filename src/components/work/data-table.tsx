"use client"

import * as React from "react";
import {
  useReactTable,
  ColumnDef,
  SortingState,
  VisibilityState,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from '@tanstack/react-table';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DataTablePagination } from "@/components/ui/data-table-pagination";
import { DataTableToolbar } from "./data-table-toolbar";
import { WorkTranslation, Project } from "@/shared/types/types";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/shared/config/i18n";
import ProjectModal from "@/components/work/project-modal";

interface DataTableProps<TData extends Project | WorkTranslation, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  language: Locale;
}

export function DataTable<TData extends Project | WorkTranslation, TValue>({ columns, data, language }: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState<Record<string, boolean>>({});
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [translations, setTranslations] = React.useState<WorkTranslation | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  // Загрузка переводов
  React.useEffect(() => {
    const loadTranslations = async () => {
      const dict = await getDictionary(language);
      setTranslations(dict.work);
    };

    loadTranslations();
  }, [language]);

  // Если переводов нет, показываем сообщение о загрузке
  const tableData = translations ? data : [];

  const table = useReactTable({
    data: tableData,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    globalFilterFn: (row, columnId, filterValue) => {
      const searchValue = filterValue.toLowerCase();
      const rowData = [
        row.getValue("title"),
        row.getValue("category"),
        row.getValue("description"),
        (row.getValue("stack") as { name: string }[]).map((tech) => tech.name.toLowerCase()).join(" "),
      ];
      return rowData.some((value) => typeof value === "string" && value.toLowerCase().includes(searchValue));
    },
  });

  if (!translations) {
    return (
      <div className="flex justify-center items-center h-full">
        <span>Loading...</span>
      </div>
    );
  }

  // Открытие модального окна с выбранным проектом
  const openModal = (project: Project) => {
    setSelectedProject(project); // Устанавливаем выбранный проект
    setIsModalOpen(true); // Открываем модальное окно
  };

  // Закрытие модального окна
  const closeModal = () => {
    setIsModalOpen(false); // Закрываем модальное окно
    setSelectedProject(null); // Сбрасываем выбранный проект
  };

  return (
    <div className="space-y-4">
      <DataTableToolbar table={table} language={language} />
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => {
                const project = row.original;
                return (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    onClick={() => {
                      if ('stack' in project && 'images' in project && 'live' in project) {
                        openModal(project); // Открытие модального окна при клике на проект
                      }
                    }}
                    className="transition-colors cursor-pointer hover:bg-accent/10"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  {translations.noResults}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination data={translations} table={table} />

      {/* Модальное окно для проекта */}
      {selectedProject && (
        <ProjectModal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />
      )}
    </div>
  );
}
