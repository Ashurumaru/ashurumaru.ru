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

  React.useEffect(() => {
    const loadTranslations = async () => {
      const dict = await getDictionary(language);
      setTranslations(dict.work);
    };

    loadTranslations();
  }, [language]);

  const tableData = translations ? data : [];

  // Обновляем таблицу с использованием глобального фильтра
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
        (row.getValue("stack") as { name: string }[])
          .map((tech) => tech.name.toLowerCase())
          .join(" "),
      ];

      return rowData.some((value) => {
        if (typeof value === "string") {
          return value.toLowerCase().includes(searchValue);
        }
        return false;
      });
    },

  });

  // Loading state for translations
  if (!translations) {
    return (
      <div className="flex justify-center items-center h-full">
        <span>Loading...</span>
      </div>
    );
  }

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
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
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
    </div>
  );
}
