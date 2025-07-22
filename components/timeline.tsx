import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Frontend Developer",
    company: "Tech Solutions Inc.",
    location: "Dominican Republic",
    period: "April 2024 - Present",
    description:
      "Specialist in user interface development using Blazor, with experience in endpoint testing, layout design, and service implementation to create modern, efficient, and user-centered applications.",
    technologies: ["React", "Blazor", "CSS"],
  },
  {
    title: "Frontend Developer",
    company: "WorkSynergy",
    location: "Dominican Republic",
    period: "September 2024 - December 2024",
    description:
      "Responsible for developing the user interface (UI) of a full-featured system. Implemented services for seamless communication with the backend and managed route protection to secure access to restricted areas.",
    technologies: ["React", "TypeScript", "Figma", "Zustand"],
  },
  {
    title: "Frontend Developer",
    company: "Nutri Hair",
    location: "Dominican Republic",
    period: "June 2025 – Present",
    description:
      "Designed and developed the frontend of a custom inventory and order management system tailored for beauty industry operations. Built responsive interfaces in React, focusing on usability, clarity, and efficient product navigation for salon managers and beauty consultants.Integrated Clerk for secure user authentication and role-based access, streamlining account creation and improving data protection.",
    technologies: ["React", "TypeScript", "Figma", "Zustand", "Clerk"],
  }
]

export function Timeline() {
  return (
    <section id="timeline" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Experience Timeline</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-primary to-purple-600"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8 pl-12 md:pl-0" : "md:pl-8 pl-12 md:pr-0"}`}
                  >
                    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <div className="space-y-2">
                          <div style={{flexWrap: "wrap"}} className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
