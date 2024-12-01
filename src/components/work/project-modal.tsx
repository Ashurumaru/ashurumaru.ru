"use client"

import * as React from "react"
import { Credenza, CredenzaContent, CredenzaHeader, CredenzaTitle, CredenzaBody, CredenzaFooter, CredenzaClose } from "@/components/ui/сredenza"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { Project, WorkTranslation } from '@/shared/types/types';
import Image from 'next/image';

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
  data: WorkTranslation
}

const ProjectModal = ({ project, isOpen, onClose, data }: ProjectModalProps) => {
  if (!project) {
    return null
  }

  const { title, description, longDescription, stack, images, live, github, startDate, endDate } = project

  const projectDescription = longDescription || description

  return (
    <Credenza open={isOpen} onOpenChange={(open) => { if (!open) onClose() }}>
      <CredenzaContent className="max-w-4xl w-full bg-white rounded-lg shadow-lg">
        <CredenzaHeader className="relative">
          <CredenzaTitle className="text-2xl font-bold text-gray-900">{title}</CredenzaTitle>
          <div className="absolute top-0 right-0 p-2">
            <CredenzaClose className="text-gray-500 w-8 h-8 hover:text-gray-700">
              <div onClick={onClose}>×</div>
            </CredenzaClose>
          </div>
        </CredenzaHeader>

        <CredenzaBody className="px-4 py-2">
          {/* Карусель с изображениями */}
          <Carousel orientation="horizontal" className="mb-6">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="flex justify-center">
                  <Image src={image} alt={`Project Image ${index + 1}`}
                         className="w-full max-h-96 object-cover rounded-md shadow-md" />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
          </Carousel>

          {/* Описание проекта */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{data.description}</h3>
            <p className="text-gray-600">{projectDescription}</p>
          </div>

          {/* Стек технологий */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{data.technology}</h3>
            <div className="flex flex-wrap gap-2">
              {stack.map((tech, index) => (
                <span key={index} className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full text-sm">
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Период проекта */}
          <div className="mb-4 flex items-center">
            <h3 className="text-xl font-semibold text-gray-800 mr-2">{data.work_period}</h3>
            <p className="text-gray-600">{`${startDate} - ${endDate}`}</p>
          </div>
        </CredenzaBody>

        <CredenzaFooter className="flex justify-between items-center p-4">
          <div>
            <Button
              variant="outline"
              size="sm"
              className="mr-4"
              onClick={() => window.open(live, "_blank")}
            >
              {data.go_to_site}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(github, "_blank")}
            >
              {data.GitHub_repository}
            </Button>
          </div>
        </CredenzaFooter>
      </CredenzaContent>
    </Credenza>
  )
}

export default ProjectModal
