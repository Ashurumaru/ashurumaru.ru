"use client"

import * as React from "react"
import { Credenza, CredenzaContent, CredenzaHeader, CredenzaTitle, CredenzaBody, CredenzaFooter } from "@/components/ui/сredenza"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { Project, WorkTranslation } from '@/shared/types/types'
import Image from 'next/image'

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
      <CredenzaContent className="max-w-4xl w-full bg-primary text-accent rounded-lg shadow-lg">
        <CredenzaHeader className="relative">
          <CredenzaTitle className="text-3xl font-bold text-white">{title}</CredenzaTitle>
        </CredenzaHeader>

        <CredenzaBody className="px-6 py-4">
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

            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-accent hover:text-accent/80" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-accent hover:text-accent/80" />
          </Carousel>

          {/* Описание проекта */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">{data.description}</h3>
            <p className="text-accent">{projectDescription}</p>
          </div>

          {/* Стек технологий */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">{data.technology}</h3>
            <div className="flex flex-wrap gap-3">
              {stack.map((tech, index) => (
                <span key={index} className="bg-[#232329] text-accent border-accent hover:bg-accent/10 py-1 px-3 rounded-full text-sm">
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Период проекта */}
          <div className="mb-4 flex items-center">
            <h3 className="text-xl font-semibold text-white mr-2">{data.work_period}</h3>
            <p className="text-accent">{`${startDate} - ${endDate}`}</p>
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
