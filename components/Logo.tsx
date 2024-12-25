"use client"

import React from "react"

import { GradientHeading } from "./GradientHeading"
import LogoCarousel from "./Logocarousel"

export function LogoCarouselDemo() {
  return (
    <div className="space-y-8  py-24">
      <div className="w-full max-w-screen-lg mx-auto flex flex-col items-center space-y-8">
        <div className="text-center text-white mb-10">
    
            <GradientHeading size="lg">Crafting Timeless Experiences with Cutting-Edge Technology.</GradientHeading>
  
        </div>

        <LogoCarousel columnCount={3} />
      </div>
    </div>
  )
}
