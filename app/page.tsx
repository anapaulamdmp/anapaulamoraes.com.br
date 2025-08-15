import Image from "next/image"
import { SquareArrowOutUpRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="max-w-[640px]">
            <h2 className="font-medium text-foreground mb-2 xl:mb-4 text-lg">Hi, I&apos;m Ana! 👋</h2>
            <h1
              className={`leading-snug md:leading-snug font-normal text-foreground text-2xl transition-all duration-[800ms] mb-2 xl:mb-4 md:text-4xl`}
            >
              Inspired by craft and creativity & creating future-oriented experiences.
            </h1>
            <p className="text-xl font-normal text-muted-foreground mb-2 xl:mb-4 leading-relaxed md:text-lg">
              I&apos;m a senior designer based in Brazil with 8+ years of experience in tech and digital products,
              always exploring new grounds, ideas and taking on exciting projects.
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gray-800 overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ProfilePic-H504YnHVHyC7dn21jeSSLnpjzCEtQq.png"
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
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="grid grid-rows-1 gap-8 md:gap-16">
          {/* Project 1 - Data Visualization */}
          <div className="flex flex-col transition-all duration-500 text-xl md:text-2xl text-gray-800 hover:text-blue-700 hover:scale-[1.02]">
            <div className="flex bg-blue-100 dark:bg-blue-900/20 rounded-md md:rounded-xl">
              <Image
                src="/placeholder-2rj1q.png"
                alt="Data Visualization Dashboard"
                width={800}
                height={500}
                className="hidden md:block w-full rounded-2xl aspect-[16/10] object-cover hover:opacity-80 transition-all duration-500"
              />
              <Image
                src="/placeholder-2rj1q.png"
                alt="Data Visualization Dashboard"
                width={400}
                height={300}
                className="md:hidden w-full rounded-lg aspect-[4/3] object-cover hover:opacity-80 transition-all duration-500"
              />
            </div>
            <div className="flex flex-col flex-1 w-full py-4 md:py-8 font-normal transition-all duration-500">
              <div className="grid gap-1 md:gap-0 grid-rows-2 items-center h-full font-semibold">
                <span className="text-sm col-span-2 text-blue-700">2024</span>
                <span className="w-full col-span-2">Reshaping Data Visualization for Economic Activities</span>
              </div>
            </div>
          </div>

          {/* Project 2 - Event Engagement */}
          <div className="flex flex-col transition-all duration-500 text-xl md:text-2xl text-gray-800 hover:text-blue-700 hover:scale-[1.02]">
            <div className="flex bg-green-100 dark:bg-green-900/20 rounded-md md:rounded-xl">
              <Image
                src="/event-dashboard-customizable-pie.png"
                alt="Event Engagement Platform"
                width={800}
                height={500}
                className="hidden md:block w-full rounded-2xl aspect-[16/10] object-cover hover:opacity-80 transition-all duration-500"
              />
              <Image
                src="/event-dashboard-customizable-pie.png"
                alt="Event Engagement Platform"
                width={400}
                height={300}
                className="md:hidden w-full rounded-lg aspect-[4/3] object-cover hover:opacity-80 transition-all duration-500"
              />
            </div>
            <div className="flex flex-col flex-1 w-full py-4 md:py-8 font-normal transition-all duration-500">
              <div className="grid gap-1 md:gap-0 grid-rows-2 items-center h-full font-semibold">
                <span className="text-sm col-span-2 text-blue-700">2024</span>
                <span className="w-full col-span-2">Transforming Event Engagement with Customizable Solutions</span>
              </div>
            </div>
          </div>

          {/* Project 3 - Brazilian Design */}
          <div className="flex flex-col transition-all duration-500 text-xl md:text-2xl text-gray-800 hover:text-blue-700 hover:scale-[1.02]">
            <div className="flex bg-orange-100 dark:bg-orange-900/20 rounded-md md:rounded-xl">
              <Image
                src="/brazilian-design-bar-chart.png"
                alt="Brazilian Design Mapping"
                width={800}
                height={500}
                className="hidden md:block w-full rounded-2xl aspect-[16/10] object-cover hover:opacity-80 transition-all duration-500"
              />
              <Image
                src="/brazilian-design-bar-chart.png"
                alt="Brazilian Design Mapping"
                width={400}
                height={300}
                className="md:hidden w-full rounded-lg aspect-[4/3] object-cover hover:opacity-80 transition-all duration-500"
              />
            </div>
            <div className="flex flex-col flex-1 w-full py-4 md:py-8 font-normal transition-all duration-500">
              <div className="grid gap-1 md:gap-0 grid-rows-2 items-center h-full font-semibold">
                <span className="text-sm col-span-2 text-blue-700">2021</span>
                <span className="w-full col-span-2">Mapping Brazilian Design in 2021</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-solid border border-b-[0] border-r-0 border-l-0 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* First Column - Heading */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-semibold text-foreground mb-8">Nice to meet you.</h3>
            <div className="w-full h-full min-h-[300px] rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ProfilePic-H504YnHVHyC7dn21jeSSLnpjzCEtQq.png"
                alt="Ana Paula Moraes"
                width={400}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Second Column - Paragraph Content */}
          <div className="md:col-span-2">
            <div className="w-full">
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a multidisciplinar designer, passionate for crafting and prototyping - and arts and manufacturing.
                My journey with design started when I was only 11, making tutorials for photoshop in youtube and forums
                as a hobby.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Since then I've built a background in graphic design, front-end, back-end, 3d modeling, dataviz, game
                dev and UX/UI design, always caring about processes and details that make all the difference.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My next step is taking woodworking/carpentry classes and bring to life some of my design vision - but on
                furnitures. If you think we'd make a great team, send me a message!
              </p>
            </div>
          </div>
        </div>

        {/* Let's Connect */}
        <div className="flex flex-col md:flex-row w-full gap-4 pt-4">
          {/* Left Column (1/3 on large screens) */}
          <div className="w-full mt-9 md:mt-0 md:w-1/3 rounded-xl">
            <h3 className="font-semibold md:font-normal text-foreground text-xl">Let&apos;s connect</h3>
          </div>

          {/* Right Column (2/3 on large screens) */}
          <div className="w-full md:w-2/3 rounded-xl flex flex-col">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/anapaulamoraesdsgn/"
              className="flex flex-row w-full py-4 md:py-6 border-t-[1px] border-border justify-between items-center text-foreground text-base md:text-lg leading-relaxed hover:text-muted-foreground transition"
              rel="noreferrer"
            >
              <span>Linkedin</span>
              <SquareArrowOutUpRight className="w-5 h-5" />
            </a>
            <a
              target="_blank"
              href="https://instagram.com/paulamdmp"
              className="flex flex-row w-full py-4 md:py-6 border-t-[1px] md:border-y-[1px] border-border justify-between items-center text-foreground text-base md:text-lg leading-relaxed hover:text-muted-foreground transition"
              rel="noreferrer"
            >
              <span>Instagram</span>
              <SquareArrowOutUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-border pb-24">
        <p className="text-sm text-muted-foreground">© 2024 All rights reserved</p>
      </footer>
    </main>
  )
}
