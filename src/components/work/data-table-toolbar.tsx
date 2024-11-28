'use client';

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "@/components/ui/data-table-view-options";

import { DataTableFacetedFilter } from "@/components/ui/data-table-faceted-filter";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/shared/config/i18n";
import React from 'react';
import { WorkTranslation } from '@/shared/types/types';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  language: Locale;
}

export function DataTableToolbar<TData>({ table, language }: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  const [translations, setTranslations] = React.useState<WorkTranslation | null>(null);

  React.useEffect(() => {
    const loadTranslations = async () => {
      const dict = await getDictionary(language);
      setTranslations(dict.work);
    };

    loadTranslations();
  }, [language]);

  if (!translations) return null;

  const localizedCategories = [
    {
      value: "webDevelopment",
      label: translations.categories.webDevelopment,
    },
    {
      value: "appDevelopment",
      label: translations.categories.appDevelopment,
    },
    {
      value: "design",
      label: translations.categories.design,
    },
    {
      value: "businessCardSite",
      label: translations.categories.businessCardSite,
    },
    {
      value: "telegramBot",
      label: translations.categories.telegramBot,
    },
    {
      value: "landingPage",
      label: translations.categories.landingPage,
    },
  ];

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder={translations.filterProjects}
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
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
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            {translations.resetFilters}
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
