import { Table } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { DataTableFacetedFilter } from "@/components/ui/data-table-faceted-filter";
import { Button } from "@/components/ui/button";
import { Cross2Icon } from "@radix-ui/react-icons";
import { WorkTranslation } from "@/shared/types/types";


interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  data: WorkTranslation;
}

export function DataTableToolbar<TData>({ table, data }: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  const localizedCategories = [
    { value: data.categories.webDevelopment, label: data.categories.webDevelopment },
    { value: data.categories.appDevelopment, label: data.categories.appDevelopment },
    { value: data.categories.design, label: data.categories.design },
    { value: data.categories.businessCardSite, label: data.categories.businessCardSite },
    { value: data.categories.telegramBot, label: data.categories.telegramBot },
    { value: data.categories.landingPage, label: data.categories.landingPage },
  ];

  return (
    <div className="flex items-center justify-between bg-[#1c1c22] p-4 rounded-lg shadow-md">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder={data.filterProjects}
          value={(table.getState().globalFilter as string) ?? ""}
          onChange={(event) => table.setGlobalFilter(event.target.value)}
          className="h-8 w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] text-white placeholder:text-gray-400 bg-[#2a2a33] border border-[#444] rounded-lg"
        />
        {table.getColumn("category") && (
          <DataTableFacetedFilter
            column={table.getColumn("category")}
            title={data.category}
            options={localizedCategories}
          />
        )}
        {isFiltered && (
          <Button
            variant="outline"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-3 bg-transparent text-accent hover:bg-accent-hover"
          >
            {data.resetFilters}
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
