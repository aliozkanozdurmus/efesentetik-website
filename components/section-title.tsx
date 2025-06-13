"use client"

import { motion } from "framer-motion"

interface SectionTitleProps {
  title: string
  subtitle: string
  light?: boolean
}

export default function SectionTitle({ title, subtitle, light = false }: SectionTitleProps) {
  return (
    <motion.div
      className="mx-auto max-w-[58rem] text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2
        className={`font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl ${
          light ? "gradient-text-light" : "gradient-text"
        }`}
      >
        {title}
      </h2>
      <div className="mx-auto w-24 h-1 my-4 rounded-full bg-gradient-to-r from-brown-600 to-gold-500"></div>
      <p className={`mt-4 sm:text-lg ${light ? "text-white/80" : "text-muted-foreground"}`}>{subtitle}</p>
    </motion.div>
  )
}
