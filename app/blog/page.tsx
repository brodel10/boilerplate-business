import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { BlogPostCard } from "@/components/blog-post-card"
import { PageTransition } from "@/components/page-transition"

export const metadata = {
  title: "Blog | Business Name",
  description: "Stay updated with the latest news, insights, and announcements from our team.",
}

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "10 Ways to Improve Your Business Efficiency",
      excerpt: "Discover practical strategies to streamline your operations and boost productivity in your business.",
      date: "January 15, 2024",
      author: "John Doe",
      category: "Business Tips",
      imageSrc: "/placeholder.svg?height=300&width=500",
      slug: "improve-business-efficiency",
    },
    {
      id: 2,
      title: "The Future of Industry Trends in 2024",
      excerpt: "Explore the emerging trends that will shape the industry landscape in the coming year and beyond.",
      date: "January 22, 2024",
      author: "Jane Smith",
      category: "Industry Insights",
      imageSrc: "/placeholder.svg?height=300&width=500",
      slug: "industry-trends-2024",
    },
    {
      id: 3,
      title: "Case Study: How We Helped Client X Increase Revenue by 200%",
      excerpt: "Learn how our tailored approach helped a client achieve remarkable growth and success in their market.",
      date: "February 5, 2024",
      author: "Michael Johnson",
      category: "Case Studies",
      imageSrc: "/placeholder.svg?height=300&width=500",
      slug: "case-study-client-x",
    },
    {
      id: 4,
      title: "5 Essential Tools Every Business Should Use",
      excerpt: "Discover the must-have tools that can transform your business operations and drive better results.",
      date: "February 12, 2024",
      author: "Sarah Williams",
      category: "Tools & Resources",
      imageSrc: "/placeholder.svg?height=300&width=500",
      slug: "essential-business-tools",
    },
    {
      id: 5,
      title: "Understanding the Impact of New Regulations on Your Business",
      excerpt: "Get insights into how recent regulatory changes might affect your business and how to prepare.",
      date: "February 20, 2024",
      author: "John Doe",
      category: "Compliance",
      imageSrc: "/placeholder.svg?height=300&width=500",
      slug: "impact-new-regulations",
    },
    {
      id: 6,
      title: "Building a Strong Company Culture in a Remote Work Environment",
      excerpt: "Learn effective strategies for fostering a positive and productive culture with distributed teams.",
      date: "March 1, 2024",
      author: "Jane Smith",
      category: "Company Culture",
      imageSrc: "/placeholder.svg?height=300&width=500",
      slug: "remote-company-culture",
    },
  ]

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <PageHeader
          title="Our Blog"
          description="Stay updated with the latest news, insights, and announcements from our team."
        />

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>

            <div className="mt-16 flex justify-center">
              <nav className="flex items-center space-x-2">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background h-10 w-10 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  1
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md h-10 w-10 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  2
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md h-10 w-10 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  3
                </Link>
                <span className="mx-1">...</span>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md h-10 w-10 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  8
                </Link>
              </nav>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}

