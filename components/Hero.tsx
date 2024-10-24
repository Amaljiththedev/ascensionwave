'use client'

import { Pointer } from './cursor'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { GridBeam } from './gridBeam'

export const Example = () => (
  <div className="flex h-[700px] w-full flex-col justify-between rounded-lg bg-black text-white mt-24">
    <GridBeam className="sm:pl-16 pt-28 pl-4 flex items-center justify-center"> {/* Centered items */}
      <div className="flex h-full w-full flex-col justify-center items-center text-center"> {/* Center text */}
        <h1 className="text-4xl sm:text-6xl font-bold">100x Your Business Growth.</h1>
        <p className="text-base sm:text-lg text-neutral-400">Unlock potential with innovative web solutions.</p>
        <button className={`inline-flex items-center justify-center mt-10 rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-10 py-2 px-4 bg-slate-900 text-black hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200 group transform hover:scale-105 transition-transform duration-200`}>
        <span className="flex items-center space-x-2">
          <span>Get A Quote</span>
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-900 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-slate-900"></span>
          </span>
        </span>
      </button>
      </div>
    </GridBeam>
    
    <div  className="relative flex h-fit w-full items-end justify-center">
      
      <div className="relative h-[400px] w-full overflow-hidden">
        <div className="relative flex h-full w-full justify-end pt-4">
          
        </div>
      </div>
      <div className="absolute bottom-0 right-0 h-full w-3/4 rounded-full bg-gradient-to-br from-red-500 via-fuchsia-500 to-red-500 opacity-[0.3] blur-3xl" />
    </div>
  </div>
)

const AnimatedCursor: React.FC<{ className?: string; text: string }> = ({ className, text }) => (
  <motion.div
    initial={{ translateX: '0', translateY: '0' }}
    animate={{ translateX: ['0', '20px', '0'], translateY: ['0', '40px', '0'] }}
    transition={{ duration: 4, repeat: Infinity, bounce: true }}
    className="relative z-[2] flex items-center gap-4">
    <div
      className={cn(
        'w-fit rounded-full border border-red-400 px-2 py-1 text-white',
        className
      )}>
      {text}
    </div>
    <svg fill="none" height="18" viewBox="0 0 17 18" width="17">
      <path
        d="M15.5036 3.11002L12.5357 15.4055C12.2666 16.5204 10.7637 16.7146 10.22 15.7049L7.4763 10.6094L2.00376 8.65488C0.915938 8.26638 0.891983 6.73663 1.96711 6.31426L13.8314 1.65328C14.7729 1.28341 15.741 2.12672 15.5036 3.11002ZM7.56678 10.6417L7.56645 10.6416C7.56656 10.6416 7.56667 10.6416 7.56678 10.6417L7.65087 10.4062L7.56678 10.6417Z"
        fill="var(--red-500)"
        stroke="var(--red-400)"
        strokeWidth="1.5"
      />
    </svg>

  </motion.div>
)

// Similar components for Icon2, Icon3, and CornerDecorations...
