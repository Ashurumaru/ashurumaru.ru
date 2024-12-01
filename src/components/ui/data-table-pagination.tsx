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

export function DataTablePagination<TData>({
                                               table,
                                               data,
                                           }: DataTablePaginationProps<TData>) {
    const pageCount = table.getPageCount();
    const currentPage = table.getState().pagination.pageIndex + 1;

    return (
      <div className="flex items-center justify-between px-2">
          <div className="flex-1 text-sm text-muted-foreground">
              {/* Тут можно добавить дополнительные элементы, если нужно */}
          </div>
          <div className="flex items-center space-x-6 lg:space-x-8">
              <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium">{data.rowsPerPage}</p>
                  <Select
                    value={`${table.getState().pagination.pageSize}`}
                    onValueChange={(value) => {
                        table.setPageSize(Number(value));
                    }}
                  >
                      <SelectTrigger className="h-8 w-[70px] bg-background text-foreground border border-border-strong rounded-md focus:ring-2 focus:ring-primary-500">
                          <SelectValue placeholder={String(table.getState().pagination.pageSize)} />
                      </SelectTrigger>
                      <SelectContent side="top" className="bg-white text-foreground rounded-md border border-border-strong">
                          {[10, 20, 30, 40, 50].map((pageSize) => (
                            <SelectItem key={pageSize} value={`${pageSize}`} className="hover:bg-accent hover:text-accent-foreground">
                                {pageSize}
                            </SelectItem>
                          ))}
                      </SelectContent>
                  </Select>

              </div>
              <div className="flex w-[100px] items-center justify-center text-sm font-medium">
                  {currentPage} {data.of} {pageCount}
              </div>
              <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    className="hidden h-8 w-8 p-0 lg:flex"
                    onClick={() => table.setPageIndex(0)}
                    disabled={!table.getCanPreviousPage()}
                  >
                      <span className="sr-only">{data.firstPage}</span>
                      <DoubleArrowLeftIcon className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="h-8 w-8 p-0"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                  >
                      <span className="sr-only">{data.previousPage}</span>
                      <ChevronLeftIcon className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="h-8 w-8 p-0"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                  >
                      <span className="sr-only">{data.nextPage}</span>
                      <ChevronRightIcon className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="hidden h-8 w-8 p-0 lg:flex"
                    onClick={() => table.setPageIndex(pageCount - 1)}
                    disabled={!table.getCanNextPage()}
                  >
                      <span className="sr-only">{data.lastPage}</span>
                      <DoubleArrowRightIcon className="h-4 w-4" />
                  </Button>
              </div>
          </div>
      </div>
    )
}
