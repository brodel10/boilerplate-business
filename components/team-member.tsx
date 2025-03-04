"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface TeamMemberProps {
  name: string
  position: string
  bio: string
  imageSrc: string
}

export function TeamMember({ name, position, bio, imageSrc }: TeamMemberProps) {
  return (
    <motion.div
      className="flex flex-col items-center text-center space-y-4"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-40 w-40 overflow-hidden rounded-full">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform hover:scale-110 duration-300"
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm text-primary">{position}</p>
        <p className="text-sm text-muted-foreground">{bio}</p>
      </div>
    </motion.div>
  )
}

