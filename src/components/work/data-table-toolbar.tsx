import { Table } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { DataTableFacetedFilter } from "@/components/ui/data-table-faceted-filter";
import { Button } from "@/components/ui/button";
import { Cross2Icon } from "@radix-ui/react-icons";
import { WorkTranslation } from "@/shared/types/types";
import { useState, useEffect } from "react";
import { Locale } from '@/shared/config/i18n';
import { getDictionary } from '@/lib/dictionary';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  language: Locale;
}

export function DataTableToolbar<TData>({ table, language }: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  const [translations, setTranslations] = useState<WorkTranslation | null>(null);

  useEffect(() => {
    const loadTranslations = async () => {
      const dict = await getDictionary(language);
      setTranslations(dict.work);
    };

    loadTranslations();
  }, [language]);

  if (!translations) return null;

  const localizedCategories = [
    {
      value: translations.categories.webDevelopment,
      label: translations.categories.webDevelopment,
    },
    {
      value: translations.categories.appDevelopment,
      label: translations.categories.appDevelopment,
    },
    {
      value: translations.categories.design,
      label: translations.categories.design,
    },
    {
      value: translations.categories.businessCardSite,
      label: translations.categories.businessCardSite,
    },
    {
      value: translations.categories.telegramBot,
      label: translations.categories.telegramBot,
    },
    {
      value: translations.categories.landingPage,
      label: translations.categories.landingPage,
    },
  ];

  return (
    <div className="flex items-center justify-between bg-[#1c1c22] p-4 rounded-lg shadow-md">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder={translations.filterProjects}
          value={(table.getState().globalFilter as string) ?? ""}
          onChange={(event) =>
            table.setGlobalFilter(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px] text-white placeholder:text-gray-400 bg-[#2a2a33] border border-[#444] rounded-lg"
        />
        {table.getColumn("category") && (
          <DataTableFacetedFilter
            column={table.getColumn("category")}
            title={translations.category}
            options={localizedCategories}
          />
        )}
        {isFiltered && (
          <Button
            variant="outline"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-3 bg-transparent text-accent hover:bg-accent-hover"
          >
            {translations.resetFilters}
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
