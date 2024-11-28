import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Project } from "@/shared/types/types";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";

export const columns: ColumnDef<Project>[] = [
    {
        accessorKey: "category",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Category" />
        ),
        cell: ({ row }) => row.original.category || "N/A",
    },
    {
        accessorKey: "title",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Title" />
        ),
        cell: ({ row }) => row.original.title,
    },
    {
        accessorKey: "description",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Description" />
        ),
        cell: ({ row }) => row.original.description,
    },
    {
        accessorKey: "stack",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Tech Stack" />
        ),
        cell: ({ row }) => (
          <div>
              {row.original.stack.map((tech, index) => (
                <Badge key={index} variant="outline" className="mr-2">
                    {tech.name}
                </Badge>
              ))}
          </div>
        ),
    },
    {
        accessorKey: "images",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Images" />
        ),
        cell: ({ row }) => row.original.images.length > 0 ? (
          <div className="flex space-x-2">
              <Image
                src={row.original.images[0]}
                alt="Project image"
                width={64}
                height={64}
                className="rounded-md"
              />
          </div>
        ) : (
          "No images"
        ),
    },
    {
        accessorKey: "startDate",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Start Date" />
        ),
        cell: ({ row }) => new Date(row.original.startDate).toLocaleDateString(),
    },
    {
        accessorKey: "endDate",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="End Date" />
        ),
        cell: ({ row }) => row.original.endDate ? new Date(row.original.endDate).toLocaleDateString() : "Ongoing",
    },
];
