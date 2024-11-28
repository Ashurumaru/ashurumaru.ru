'use client';

import { DataTable } from './data-table';
import { Heading } from '@/components/ui/heading';
import { columns } from './columns';
import { WorkTranslation } from '@/shared/types/types';
import { Locale } from "@/shared/config/i18n";

interface ProjectClientProps {
  data: WorkTranslation;
  language: Locale;
}

export const ProjectClient: React.FC<ProjectClientProps> = ({ data, language }) => {
  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`${(data.title)} (${data.projects.length})`}
          description={data.description}
        />
      </div>
      <DataTable columns={columns} data={data.projects} language={language} />
    </>
  );
};
