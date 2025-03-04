"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function TestimonialsSection() {
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
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" ref={ref}>
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what our clients have to say about our services.
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
              quote:
                "Working with this company has been a game-changer for our business. Their expertise and dedication have helped us achieve remarkable results.",
              author: "Jane Smith",
              title: "CEO, Company A",
            },
            {
              quote:
                "The team's attention to detail and commitment to excellence is unmatched. They consistently deliver high-quality solutions that exceed our expectations.",
              author: "John Doe",
              title: "Director, Company B",
            },
            {
              quote:
                "Their innovative approach and strategic insights have been invaluable to our growth. We consider them a true partner in our success.",
              author: "Sarah Johnson",
              title: "Marketing Manager, Company C",
            },
            {
              quote:
                "The level of professionalism and expertise they bring to the table is exceptional. They've helped us navigate complex challenges with ease.",
              author: "Michael Brown",
              title: "Operations Director, Company D",
            },
            {
              quote:
                "Their ability to understand our unique needs and deliver tailored solutions has been crucial to our success. Highly recommended!",
              author: "Emily Davis",
              title: "CTO, Company E",
            },
            {
              quote:
                "We've seen tangible results since partnering with them. Their strategic guidance and implementation have transformed our business.",
              author: "Robert Wilson",
              title: "Founder, Company F",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-start space-y-4 rounded-lg border bg-background p-6 shadow-sm hover:shadow-md transition-shadow"
              variants={item}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-primary"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground">"{testimonial.quote}"</p>
              <div className="mt-auto">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

