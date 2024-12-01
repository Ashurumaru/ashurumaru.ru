'use client';

import 'swiper/css';
import React, { useState, useEffect } from 'react';
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/shared/config/i18n';
import { WorkTranslation } from '@/shared/types/types';
import { ProjectClient } from '@/components/work/client';

type WorkPageProps = {
  params: {
    lang: Locale;
  };
};

const Work: React.FC<WorkPageProps> = ({ params: { lang } }) => {
  const [translations, setTranslations] = useState<WorkTranslation | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        setIsLoading(true);
        const dictionary = await getDictionary(lang);
        setTranslations(dictionary.work);
      } catch {
        setError('Не удалось загрузить данные');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTranslations();
  }, [lang]);

  if (isLoading) {
    return <div className="loading-indicator">Загрузка...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!translations) {
    return null;
  }

  return (
      <div className="container mx-auto">
          <ProjectClient
            data={translations}
            language={lang}
          />
      </div>
  );
};

export default Work;
