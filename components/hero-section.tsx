"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface HeroSectionProps {
  title: string
  description: string
  ctaText: string
  ctaLink: string
}

export function HeroSection({ title, description, ctaText, ctaLink }: HeroSectionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">{title}</h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{description}</p>
          </motion.div>
          <motion.div
            className="space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild size="lg" className="transition-transform hover:scale-105">
              <Link href={ctaLink}>{ctaText}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="transition-transform hover:scale-105">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

