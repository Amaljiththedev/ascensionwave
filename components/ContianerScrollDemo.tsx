"use client";
import React from "react";
import { ContainerScroll } from "./container-scroll-animation";
import Image from "next/image";
 
export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden mt-24">
      <ContainerScroll
        titleComponent={
          <>
          </>
        }
      >
        <Image
          src='/linear.webp'
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
          priority
        />
      </ContainerScroll>
    </div>
  );
}