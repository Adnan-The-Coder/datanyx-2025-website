"use client"

import type React from "react"
import { cn } from "@/lib/utils"

type Props = {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  animate?: boolean
}

export function BackgroundGradient({ children, className, containerClassName, animate = true }: Props) {
  const animateClass = animate ? "animate-[bgshift_8s_ease-in-out_infinite_alternate]" : ""

  return (
    <>
      <div className={cn("relative p-[4px] group", containerClassName)}>
        {/* blurred glow layer */}
        <div
          className={cn(
            "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform",
            animateClass,
            "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]",
          )}
          style={animate ? { backgroundSize: "400% 400%" } : undefined}
          aria-hidden
        />
        {/* solid gradient layer */}
        <div
          className={cn(
            "absolute inset-0 rounded-3xl z-[1] will-change-transform",
            animateClass,
            "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]",
          )}
          style={animate ? { backgroundSize: "400% 400%" } : undefined}
          aria-hidden
        />
        <div className={cn("relative z-10", className)}>{children}</div>
      </div>

      <style jsx>{`
        @keyframes bgshift {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </>
  )
}
