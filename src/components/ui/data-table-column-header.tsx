import {
    ArrowDownIcon,
    ArrowUpIcon,
    CaretSortIcon,
} from "@radix-ui/react-icons"
import { Column } from "@tanstack/react-table"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
    column: Column<TData, TValue>
    title: string
}

export function DataTableColumnHeader<TData, TValue>({
                                                         column,
                                                         title,
                                                         className,
                                                     }: DataTableColumnHeaderProps<TData, TValue>) {
    if (!column.getCanSort()) {
        return <div className={cn(className)}>{title}</div>
    }

    return (
      <div className={cn("flex items-center space-x-2", className)}>
          <DropdownMenu>
              <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center -ml-3 h-8 data-[state=open]:bg-accent"
                  >
                      <span>{title}</span>
                      {column.getIsSorted() === "desc" ? (
                        <ArrowDownIcon className="ml-2 h-4 w-4 text-accent" />
                      ) : column.getIsSorted() === "asc" ? (
                        <ArrowUpIcon className="ml-2 h-4 w-4 text-accent" />
                      ) : (
                        <CaretSortIcon className="ml-2 h-4 w-4 text-muted-foreground" />
                      )}
                  </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="shadow-lg rounded-md p-2">
                  <DropdownMenuItem
                    onClick={() => column.toggleSorting(false)}
                    className="flex items-center p-1 hover:bg-accent/10"
                  >
                      <ArrowUpIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                      Asc
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => column.toggleSorting(true)}
                    className="flex items-center p-1 hover:bg-accent/10"
                  >
                      <ArrowDownIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                      Desc
                  </DropdownMenuItem>
              </DropdownMenuContent>
          </DropdownMenu>
      </div>
    )
}
