import {
    ChevronLeftIcon,
    ChevronRightIcon,
    DoubleArrowLeftIcon,
    DoubleArrowRightIcon,
} from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { WorkTranslation } from "@/shared/types/types"

interface DataTablePaginationProps<TData> {
    table: Table<TData>
    data: WorkTranslation
}

export function DataTablePagination<TData>({ table, data }: DataTablePaginationProps<TData>) {
    const pageCount = table.getPageCount()
    const currentPage = table.getState().pagination.pageIndex + 1

    return (
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 py-2">
          <div className="text-sm text-muted-foreground"></div>

          {/* Пагинация */}
          <div className="flex items-center justify-between sm:space-x-4 mt-4 sm:mt-0 sm:justify-start sm:w-auto w-full">
              {/* Стрелки для навигации */}
              <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    className="h-8 w-8 p-0"
                    onClick={() => table.setPageIndex(0)}
                    disabled={!table.getCanPreviousPage()}
                  >
                      <DoubleArrowLeftIcon className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="h-8 w-8 p-0"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                  >
                      <ChevronLeftIcon className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="h-8 w-8 p-0"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                  >
                      <ChevronRightIcon className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="h-8 w-8 p-0"
                    onClick={() => table.setPageIndex(pageCount - 1)}
                    disabled={!table.getCanNextPage()}
                  >
                      <DoubleArrowRightIcon className="h-4 w-4" />
                  </Button>
              </div>

              {/* Выбор количества строк на странице */}
              <div className="flex items-center space-x-2 mt-4 sm:mt-0">
                  <p className="text-sm font-medium hidden sm:block">{data.rowsPerPage}</p>
                  <Select
                    value={`${table.getState().pagination.pageSize}`}
                    onValueChange={(value) => table.setPageSize(Number(value))}
                  >
                      <SelectTrigger className="sm:w-auto w-full text-sm h-8 bg-background text-foreground border border-border-strong rounded-md focus:ring-2 focus:ring-primary-500">
                          <SelectValue placeholder={String(table.getState().pagination.pageSize)} />
                      </SelectTrigger>
                      <SelectContent side="top">
                          {[10, 20, 30, 40, 50].map((pageSize) => (
                            <SelectItem
                              key={pageSize}
                              value={`${pageSize}`}
                              className="hover:bg-accent hover:text-accent-foreground"
                            >
                                {pageSize}
                            </SelectItem>
                          ))}
                      </SelectContent>
                  </Select>
              </div>
          </div>

          {/* Мобильная версия отображения текущей страницы */}
          <div className="flex items-center justify-center sm:hidden text-sm font-medium mt-4">
              <p>
                  {currentPage} {data.of} {pageCount}
              </p>
          </div>
      </div>
    )
}
