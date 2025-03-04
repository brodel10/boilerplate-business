"use client"

import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface ServiceProps {
  id: number
  title: string
  description: string
  price: string
  features: string[]
  imageSrc: string
}

export function ServiceCard({ service }: { service: ServiceProps }) {
  return (
    <motion.div
      className="flex flex-col overflow-hidden rounded-lg border bg-background shadow-sm"
      whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.imageSrc || "/placeholder.svg"}
          alt={service.title}
          fill
          className="object-cover transition-transform hover:scale-110 duration-500"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold">{service.title}</h3>
          <div className="text-xl font-bold text-primary">{service.price}</div>
        </div>
        <p className="mt-2 text-muted-foreground">{service.description}</p>
        <ul className="mt-4 space-y-2">
          {service.features.map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <Button asChild className="flex-1 transition-transform hover:scale-105">
            <Link href={`/contact?service=${service.id}`}>Get Started</Link>
          </Button>
          <Button asChild variant="outline" className="flex-1 transition-transform hover:scale-105">
            <Link href={`/services/${service.id}`}>Learn More</Link>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

