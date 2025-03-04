"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export function MainNav() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="flex items-center justify-center space-x-8 text-sm font-medium">
      {navItems.map((item) => {
        const isActive = pathname === item.href

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`relative transition-colors hover:text-foreground/80 ${
              isActive ? "text-foreground" : "text-foreground/60"
            }`}
          >
            {item.label}
            {isActive && (
              <motion.div
                className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-primary"
                layoutId="navbar-indicator"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
          </Link>
        )
      })}
    </nav>
  )
}

