import { Client } from "@notionhq/client"

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export interface Project {
  id: string
  title: string
  year: string
  coverImage: string
  altText: string
  backgroundColor: string
  slug?: string
}

export async function getProjects(): Promise<Project[]> {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        property: "Status",
        select: {
          equals: "Published",
        },
      },
    })

    const projects = response.results.map((page: any) => {
      const properties = page.properties

      return {
        id: page.id,
        title: properties.Title?.title?.[0]?.plain_text || "",
        year: properties.Year?.rich_text?.[0]?.plain_text || properties.year?.rich_text?.[0]?.plain_text || "",
        coverImage:
          properties.CoverImage?.files?.[0]?.file?.url || properties.CoverImage?.files?.[0]?.external?.url || "",
        altText: properties.AltText?.rich_text?.[0]?.plain_text || properties.altText?.rich_text?.[0]?.plain_text || "",
        backgroundColor: properties.BackgroundColor?.select?.name || properties.backgroundColor?.select?.name || "blue",
        slug: properties.Slug?.rich_text?.[0]?.plain_text || properties.slug?.rich_text?.[0]?.plain_text || "",
      }
    })

    return projects
  } catch (error) {
    console.error("Error fetching projects from Notion:", error)
    // Return fallback data if Notion fails
    return [
      {
        id: "1",
        title: "Reshaping Data Visualization for Economic Activities",
        year: "2024",
        coverImage: "/placeholder-2rj1q.png",
        altText: "Data Visualization Dashboard",
        backgroundColor: "blue",
      },
      {
        id: "2",
        title: "Transforming Event Engagement with Customizable Solutions",
        year: "2024",
        coverImage:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PersonalizacaoRoleta-Cover-R78UlxkwXe5nPguuwRFL9oBqx8momF.png",
        altText: "Event Engagement Platform",
        backgroundColor: "green",
      },
      {
        id: "3",
        title: "Mapping Brazilian Design in 2021",
        year: "2021",
        coverImage:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RBD21-Cover-kmuifYvCebHH6IzUNyqvLtNHOfN52o.png",
        altText: "Brazilian Design Mapping",
        backgroundColor: "orange",
      },
    ]
  }
}

function getBackgroundColorClass(color: string): string {
  const colorMap: { [key: string]: string } = {
    blue: "bg-blue-100 dark:bg-blue-900/20",
    green: "bg-green-100 dark:bg-green-900/20",
    orange: "bg-orange-100 dark:bg-orange-900/20",
    purple: "bg-purple-100 dark:bg-purple-900/20",
    red: "bg-red-100 dark:bg-red-900/20",
    yellow: "bg-yellow-100 dark:bg-yellow-900/20",
  }
  return colorMap[color.toLowerCase()] || colorMap.blue
}

export { getBackgroundColorClass }
