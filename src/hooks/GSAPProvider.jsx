import React, { createContext, useContext, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const GSAPContext = createContext(gsap)

export function GSAPProvider({ children }) {
  const rootRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      gsap.set('.animate-in', { opacity: 1, y: 0, filter: 'blur(0px)' })
      return undefined
    }

    const cleanupHandlers = []

    const ctx = gsap.context(() => {
      gsap.utils.toArray('.animate-in').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30, filter: 'blur(8px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 82%',
            },
          },
        )
      })

      gsap.utils.toArray('.floating-orb').forEach((orb, index) => {
        gsap.to(orb, {
          y: -20,
          x: index % 2 === 0 ? 12 : -12,
          duration: 4 + index,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      })

      gsap.utils.toArray('.floating-panel').forEach((panel, index) => {
        gsap.to(panel, {
          y: -12,
          rotate: index % 2 === 0 ? -1 : 1,
          duration: 4.5 + index,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      })

      gsap.utils.toArray('.project-card').forEach((card) => {
        const originalShadow = card.style.boxShadow || ''
        let rafId = null

        const animateCard = (x, y) => {
          const rect = card.getBoundingClientRect()
          const normalizedX = (x - rect.left) / rect.width
          const normalizedY = (y - rect.top) / rect.height

          gsap.to(card, {
            rotateX: (0.5 - normalizedY) * 9,
            rotateY: (normalizedX - 0.5) * 12,
            y: -4,
            duration: 0.22,
            ease: 'power2.out',
            overwrite: true,
          })

          card.style.boxShadow = '0 20px 50px rgba(0, 240, 255, 0.12), 0 12px 24px rgba(191, 95, 255, 0.08)'
        }

        const handlePointerMove = (event) => {
          if (rafId) return

          rafId = requestAnimationFrame(() => {
            animateCard(event.clientX, event.clientY)
            rafId = null
          })
        }

        const handlePointerLeave = () => {
          if (rafId) {
            cancelAnimationFrame(rafId)
            rafId = null
          }

          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            y: 0,
            duration: 0.35,
            ease: 'power3.out',
            overwrite: true,
          })
          card.style.boxShadow = originalShadow
        }

        cleanupHandlers.push(() => {
          card.removeEventListener('pointermove', handlePointerMove)
          card.removeEventListener('pointerleave', handlePointerLeave)
        })

        card.addEventListener('pointermove', handlePointerMove, { passive: true })
        card.addEventListener('pointerleave', handlePointerLeave)
      })
    }, rootRef)

    return () => {
      cleanupHandlers.forEach((cleanup) => cleanup())
      ctx.revert()
    }
  }, [])

  return (
    <GSAPContext.Provider value={gsap}>
      <div ref={rootRef}>{children}</div>
    </GSAPContext.Provider>
  )
}

export function useGSAP() {
  return useContext(GSAPContext)
}
