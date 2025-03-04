"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32" ref={ref}>
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our comprehensive suite of services is designed to meet all your business needs.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-16"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {[
            {
              title: "Feature One",
              description: "A powerful feature that helps you achieve your goals efficiently.",
              icon: "layers",
            },
            {
              title: "Feature Two",
              description: "An innovative solution that sets you apart from the competition.",
              icon: "zap",
            },
            {
              title: "Feature Three",
              description: "A comprehensive tool that streamlines your business processes.",
              icon: "settings",
            },
            {
              title: "Feature Four",
              description: "An advanced capability that enhances your productivity.",
              icon: "bar-chart",
            },
            {
              title: "Feature Five",
              description: "A flexible solution that adapts to your changing needs.",
              icon: "refresh-cw",
            },
            {
              title: "Feature Six",
              description: "A reliable service that you can count on for consistent results.",
              icon: "shield",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-start space-y-2 rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow"
              variants={item}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <div className="p-2 bg-primary/10 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
              <div className="flex items-center pt-4">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">Included in all plans</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

