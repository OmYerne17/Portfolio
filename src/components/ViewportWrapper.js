'use client'
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function ViewportWrapper({ children, className }) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -200px 0px" // Adjust this value to control when animation triggers
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
} 