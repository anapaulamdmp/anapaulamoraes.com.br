import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-xl md:text-xl font-medium text-foreground mb-2 xl:mb-4">Hi, I&apos;m Ana! 👋</h2>
            <h1
              className={`leading-snug md:leading-snug font-normal text-foreground md:text-4xl text-2xl transition-all duration-[800ms] mb-2 xl:mb-4`}
            >
              Inspired by craft and creativity & creating future-oriented experiences.
            </h1>
            <p className="text-xl md:text-xl font-normal text-muted-foreground mb-2 xl:mb-4 leading-relaxed">
              I&apos;m a senior designer based in Brazil with 8+ years of experience in tech and digital products,
              always exploring new grounds, ideas and taking on exciting projects.
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gray-800 overflow-hidden">
              <Image
                src="/ana-paula-headshot.png"
                alt="Ana Paula Moraes"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto px-6 pb-16 space-y-12">
        {/* Project 1 - Data Visualization */}
        <Card className="p-8 bg-blue-100 dark:bg-blue-900/20 border-0 shadow-sm">
          <div className="mb-6">
            <div className="bg-blue-900 rounded-lg p-6 mb-4">
              <Image
                src="/placeholder-2rj1q.png"
                alt="Data Visualization Dashboard"
                width={400}
                height={200}
                className="w-full rounded"
              />
            </div>
          </div>
          <div>
            <span className="text-sm text-blue-700 dark:text-blue-300 font-medium">2023</span>
            <h3 className="text-xl font-semibold text-foreground mt-1">
              Reshaping Data Visualization for Economic Activities
            </h3>
          </div>
        </Card>

        {/* Project 2 - Event Engagement */}
        <Card className="p-8 bg-green-100 dark:bg-green-900/20 border-0 shadow-sm">
          <div className="mb-6">
            <div className="bg-white rounded-lg p-6 mb-4">
              <Image
                src="/event-dashboard-customizable-pie.png"
                alt="Event Engagement Platform"
                width={400}
                height={200}
                className="w-full rounded"
              />
            </div>
          </div>
          <div>
            <span className="text-sm text-green-700 dark:text-green-300 font-medium">2023</span>
            <h3 className="text-xl font-semibold text-foreground mt-1">
              Transforming Event Engagement with Customizable Solutions
            </h3>
          </div>
        </Card>

        {/* Project 3 - Brazilian Design */}
        <Card className="p-8 bg-orange-100 dark:bg-orange-900/20 border-0 shadow-sm">
          <div className="mb-6">
            <div className="bg-gray-900 rounded-lg p-6 mb-4">
              <Image
                src="/brazilian-design-bar-chart.png"
                alt="Brazilian Design Mapping"
                width={400}
                height={200}
                className="w-full rounded"
              />
            </div>
          </div>
          <div>
            <span className="text-sm text-orange-700 dark:text-orange-300 font-medium">2021</span>
            <h3 className="text-xl font-semibold text-foreground mt-1">Mapping Brazilian Design in 2021</h3>
          </div>
        </Card>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">Nice to meet you.</h3>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              I'm a brazilian designer based in 📍 Curitiba - PR. I'm continuously looking for cool opportunities to
              explore and work on. If you feel like we should work together, send me a message!
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Let's connect</h4>
            <div className="space-y-2">
              <Button variant="ghost" className="justify-start p-0 h-auto text-muted-foreground hover:text-foreground">
                <ExternalLink className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto text-muted-foreground hover:text-foreground">
                <ExternalLink className="w-4 h-4 mr-2" />
                Instagram
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-border">
        <p className="text-sm text-muted-foreground">© 2024 All rights reserved</p>
      </footer>
    </main>
  )
}
