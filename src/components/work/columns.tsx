import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Project } from "@/shared/types/types";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";

export const columns: ColumnDef<Project>[] = [
    {
        accessorKey: "title",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Title" />
        ),
        cell: ({ row }) => (
          <h3 className="text-xl text-white">{row.original.title}</h3>
        ),
    },
    {
        accessorKey: "category",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Category" />
        ),
        cell: ({ row }) => (
          <span className="text-white">{row.original.category || "N/A"}</span>
        ),
    },
    {
        accessorKey: "description",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Description" />
        ),
        cell: ({ row }) => (
          <p className="text-white/80 text-sm">{row.original.description}</p>
        ),
    },
    {
        accessorKey: "stack",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Tech Stack" />
        ),
        cell: ({ row }) => (
          <div className="flex flex-wrap gap-2">
              {row.original.stack.map((tech, index) => (
                <Badge key={index} variant="outline" className="bg-[#232329] text-accent border-accent hover:bg-accent/10">
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
                className="rounded-md shadow-md"
              />
          </div>
        ) : (
          <span className="text-white/60">No images</span>
        ),
    },
    {
        accessorKey: "startDate",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Start Date" />
        ),
        cell: ({ row }) => (
          <span className="text-white">
            {new Date(row.original.startDate).toLocaleDateString()}
          </span>
        ),
    },
    {
        accessorKey: "endDate",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="End Date" />
        ),
        cell: ({ row }) => (
          <span className="text-white">
            {row.original.endDate ? new Date(row.original.endDate).toLocaleDateString() : "Ongoing"}
          </span>
        ),
    },
];
