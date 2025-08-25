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
    })

    const projects = response.results.map((page: any) => {
      const properties = page.properties

      return {
        id: page.id,
        title: properties.Title?.title?.[0]?.plain_text || "",
        year: properties.Year?.number?.toString() || properties.year?.number?.toString() || "",
        coverImage:
          properties.CoverImage?.files?.[0]?.file?.url ||
          properties.CoverImage?.files?.[0]?.external?.url ||
          properties.coverimage?.files?.[0]?.file?.url ||
          properties.coverimage?.files?.[0]?.external?.url ||
          "",
        altText: properties.AltText?.rich_text?.[0]?.plain_text || properties.alttext?.rich_text?.[0]?.plain_text || "",
        backgroundColor: properties.BackgroundColor?.select?.name || properties.backgroundcolor?.select?.name || "blue",
        slug: properties.Slug?.rich_text?.[0]?.plain_text || properties.slug?.rich_text?.[0]?.plain_text || "",
      }
    })

    return projects.sort((a, b) => {
      const yearA = Number.parseInt(a.year) || 0
      const yearB = Number.parseInt(b.year) || 0
      return yearB - yearA
    })
  } catch (error) {
    console.error("Error fetching projects from Notion:", error)
    return []
  }
}

export function getBackgroundColorClass(color: string): string {
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
