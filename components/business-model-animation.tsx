"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect"

export function BusinessModelAnimation() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  })

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2])
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2])
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2])
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2])
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2])

  return (
    <div className="relative w-full max-w-6xl mx-auto" ref={ref}>
      {/* Input Cards - Top */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 relative z-10">
        <motion.div
          className="glass-card p-4 border border-pink-400/30 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-8 h-8 mx-auto mb-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-xs">📱</span>
          </div>
          <p className="text-sm text-white font-medium">Instagram Post</p>
          <p className="text-xs text-muted-foreground">Visual content</p>
        </motion.div>

        <motion.div
          className="glass-card p-4 border border-blue-400/30 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="w-8 h-8 mx-auto mb-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-xs">🎥</span>
          </div>
          <p className="text-sm text-white font-medium">YouTube Video</p>
          <p className="text-xs text-muted-foreground">Video content</p>
        </motion.div>

        <motion.div
          className="glass-card p-4 border border-purple-400/30 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="w-8 h-8 mx-auto mb-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-xs">💾</span>
          </div>
          <p className="text-sm text-white font-medium">Content Bank</p>
          <p className="text-xs text-muted-foreground">Past posts</p>
        </motion.div>
      </div>

      {/* Animated Beams Effect */}
      <div className="relative h-[400px] overflow-hidden">
        <GoogleGeminiEffect
          pathLengths={[pathLengthFirst, pathLengthSecond, pathLengthThird, pathLengthFourth, pathLengthFifth]}
          title=""
          description=""
          className="relative"
        />

        {/* Central AI Engine Node */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <motion.div
            className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center text-white font-bold shadow-2xl text-xs text-center px-2 border-2 border-white/20"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
          >
            <div>
              <div className="text-lg mb-1">🤖</div>
              <div>AI Engine</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Output Cards - Bottom */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 relative z-10">
        {[
          { name: "LinkedIn Post", icon: "💼", color: "from-blue-600 to-blue-400" },
          { name: "Instagram Carousel", icon: "📸", color: "from-pink-600 to-purple-400" },
          { name: "Threads Post", icon: "🧵", color: "from-gray-600 to-gray-400" },
          { name: "Video Script", icon: "🎬", color: "from-red-600 to-orange-400" },
        ].map((output, i) => (
          <motion.div
            key={i}
            className="glass-card p-4 border border-white/20 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.1 }}
          >
            <div
              className={`w-8 h-8 mx-auto mb-2 bg-gradient-to-r ${output.color} rounded-lg flex items-center justify-center`}
            >
              <span className="text-white text-xs">{output.icon}</span>
            </div>
            <p className="text-sm text-white font-medium">{output.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
