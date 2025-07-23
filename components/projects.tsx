"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ExternalLink, Eye, ChevronLeft, ChevronRight } from "lucide-react"

interface Project {
  title: string
  description: string
  longDescription: string
  image: string
  gallery: string[]
  technologies: string[]
  liveUrl: string
  githubUrl: string
  features: string[]
  challenges: string[]
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website with smooth animations and responsive design.",
    longDescription:
      "A personal portfolio website showcasing modern web development techniques. Built with React and featuring smooth animations, responsive design, and optimized performance. Includes a blog section, project showcase, and contact functionality.",
    image: "/projects/portfolio/portfolio-img1.png",
    gallery: [
      "/projects/portfolio/portfolio-img1.png",
    ],
    technologies: ["React", "Framer Motion", "Tailwind CSS", "Vercel", "MDX"],
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Smooth scroll animations",
      "Responsive design system",
      "Blog with MDX support",
      "Contact form integration",
      "SEO optimization",
      "Performance optimization",
    ],
    challenges: [
      "Optimizing animation performance",
      "Implementing SEO best practices",
      "Creating a flexible content management system",
    ],
  },
  {
    title: "Nutri Hair",
    description: "Inventory & Order Management System.",
    longDescription:
      "Designed and developed the frontend of a custom inventory and order management system tailored for beauty industry operations. Built responsive interfaces in React, focusing on usability, clarity, and efficient product navigation for salon managers and beauty consultants. Integrated Clerk for secure user authentication and role-based access, streamlining account creation and improving data protection.",
    image: "/projects/nutrihair/nutrihair-img1.png",
    gallery: [
      "/projects/nutrihair/nutrihair-img1.png",
      "/projects/nutrihair/nutrihair-img2.png",
    ],
    technologies: ["React", "Framer Motion", "Tailwind CSS", "Vercel", "MDX"],
    liveUrl: "https://www.nutrihair.us",
    githubUrl: "#",
    features: [
      "Designed and developed the frontend of a custom inventory and order management system tailored for beauty industry operations.",
      "Built responsive interfaces in React, focusing on usability, clarity, and efficient product navigation for salon managers and beauty consultants.",
      "Integrated Clerk for secure user authentication and role-based access, streamlining account creation and improving data protection.",
      "Developed modules for real-time stock updates, order placement, and historical tracking, enabling faster and more accurate inventory decisions.",
      "Implemented dynamic dashboards and filtering tools, allowing users to quickly visualize order status, low-stock alerts, and sales summaries.",
    ],
    challenges: [
      "Optimizing animation performance",
      "Implementing SEO best practices",
      "Creating a flexible content management system",
    ],
  },
  {
    title: "Memory Caset Photo Gallery",
    description: "Photo Gallery",
    longDescription:
      "Designed and developed the frontend of a photo gallery for my personal photograph project. I love the masonry layout, so i build my own gallery.",
    image: "/projects/memorycaset-photogallery/memorycaset-img1.png",
    gallery: [
      "/projects/memorycaset-photogallery/memorycaset-img1.png",
    ],
    technologies: ["React", "CSS"],
    liveUrl: "https://www.memorycaset.com",
    githubUrl: "#",
    features: [
      "Masonry layout.",
    ],
    challenges: [
      "I did just for fun, i love taking photos",
    ],
  }
]

function ProjectGallery({ images, title }: { images: string[]; title: string }) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
        <img
          src={images[currentImage] || "/placeholder.svg"}
          alt={`${title} - Image ${currentImage + 1}`}
          className="w-full h-full object-cover"
        />
        {images.length > 1 && (
          <>
            <Button
              variant="secondary"
              size="icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`flex-shrink-0 w-20 h-12 rounded-md overflow-hidden border-2 transition-colors ${
                currentImage === index ? "border-primary" : "border-transparent"
              }`}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`${title} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function ProjectModal({ project }: { project: Project }) {
  return (
    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl">{project.title}</DialogTitle>
      </DialogHeader>

      <div className="space-y-6">
        {/* Gallery */}
        <ProjectGallery images={project.gallery} title={project.title} />

        {/* Description */}
        <div>
          <h4 className="text-lg font-semibold mb-2">About This Project</h4>
          <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <Badge key={index} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Features */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Key Features</h4>
          <ul className="space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Challenges */}

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4 border-t">
          <Button asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </a>
          </Button>
        </div>
      </div>
    </DialogContent>
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline">+{project.technologies.length - 4} more</Badge>
                    )}
                  </div>
                  <div className="flex gap-2 pt-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="default" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <ProjectModal project={project} />
                    </Dialog>
                    {
                      project.liveUrl !== "#" ?
                      <Button variant="outline" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    : <></>
                    }
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
