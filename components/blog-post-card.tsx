"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface BlogPostProps {
  id: number
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  imageSrc: string
  slug: string
}

export function BlogPostCard({ post }: { post: BlogPostProps }) {
  return (
    <motion.div
      className="flex flex-col overflow-hidden rounded-lg border bg-background shadow-sm"
      whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.imageSrc || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform hover:scale-110 duration-500"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary">{post.category}</Badge>
          <span className="text-xs text-muted-foreground">{post.date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-sm text-muted-foreground">By {post.author}</span>
          <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
            <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-primary">
              Read More <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

