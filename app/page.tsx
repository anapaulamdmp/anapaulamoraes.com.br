import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { getProjects, getBackgroundColorClass } from "@/lib/notion"

export default async function Home() {
  const projects = await getProjects()

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 opacity-0 translate-y-8 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
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
      <section className="max-w-4xl mx-auto px-6 opacity-0 translate-y-8 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards] pb-36">
        <div className="grid grid-rows-1 gap-8 md:gap-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-block flex flex-col transition-all duration-500 hover:scale-[1.02] opacity-0 translate-y-8"
              style={{
                animation: `fadeInUp 0.8s ease-out ${1.0 + index * 0.4}s forwards`,
              }}
            >
              <div
                className={`project-image-container flex ${getBackgroundColorClass(project.backgroundColor)} rounded-md md:rounded-xl`}
              >
                <Image
                  src={project.coverImage || "/placeholder.svg"}
                  alt={project.altText || project.title}
                  width={800}
                  height={500}
                  className="project-image hidden md:block w-full rounded-[8px] aspect-[16/10] object-cover hover:opacity-80 transition-all duration-500"
                />
                <Image
                  src={project.coverImage || "/placeholder.svg"}
                  alt={project.altText || project.title}
                  width={400}
                  height={300}
                  className="project-image md:hidden w-full rounded-[8px] aspect-[4/3] object-cover hover:opacity-80 transition-all duration-500"
                />
              </div>
              <div className="project-content flex flex-col flex-1 w-full py-4 md:py-8 font-normal transition-all duration-500">
                <div className="project-meta grid gap-1 md:gap-0 grid-rows-2 items-center h-full font-normal">
                  <span className="project-year text-sm text-foreground">{project.year}</span>
                  <span className="project-title w-full text-xl md:text-2xl text-foreground">{project.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-solid border border-b-[0] border-r-0 border-l-0 pt-10 mb-10 opacity-0 translate-y-8 animate-[fadeInUp_0.8s_ease-out_2.2s_forwards]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
          {/* First Column - Heading */}
          <div className="md:col-span-1 flex flex-col">
            <h3 className="text-2xl font-semibold text-foreground mb-8">Nice to meet you.</h3>
            <div className="w-full aspect-square overflow-hidden rounded-sm">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Profile_Img-tIfDdP9NpTCfv1Zlg0lDSQAVku9jgn.png"
                alt="Ana Paula Moraes"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Second Column - Paragraph Content */}
          <div className="md:col-span-2 flex items-center">
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
                My next adventure is taking woodworking/carpentry classes to bring to life some of my design vision -
                but on furnitures. If you think we'd make a great team, send me a message!
              </p>
            </div>
          </div>
        </div>

        {/* Let's Connect */}
        <div className="flex flex-col md:flex-row w-full pt-4 gap-4">
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
              <ExternalLink className="w-5 h-5" />
            </a>
            <a
              target="_blank"
              href="https://instagram.com/paulamdmp"
              className="flex flex-row w-full py-4 md:py-6 border-t-[1px] md:border-y-[1px] border-border justify-between items-center text-foreground text-base md:text-lg leading-relaxed hover:text-muted-foreground transition"
              rel="noreferrer"
            >
              <span>Instagram</span>
              <ExternalLink className="w-5 h-5" />
            </a>
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
