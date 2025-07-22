import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="rounded-lg shadow-lg w-full max-w-sm mx-auto"
                  />
                </div>
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    My name is Abel Belen, im Front-End developer with experience in creating intuitive and visually appealing user interfaces. I have worked on projects across various sectors, some focused on SAAS systems, applying a performance- and accessibility-centered approach.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    My goal is to enhance the efficiency and quality of digital experiences through the use of modern technologies and innovative strategies. I am skilled at identifying user needs and implementing effective solutions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
