import React, { createContext, useContext, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const GSAPContext = createContext(gsap)

export function GSAPProvider({ children }) {
  const rootRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.animate-in').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30, filter: 'blur(8px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.9,
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

        card.addEventListener('pointermove', (event) => {
          const rect = card.getBoundingClientRect()
          const x = (event.clientX - rect.left) / rect.width
          const y = (event.clientY - rect.top) / rect.height

          gsap.to(card, {
            rotateX: (0.5 - y) * 12,
            rotateY: (x - 0.5) * 15,
            y: -6,
            duration: 0.25,
            ease: 'power2.out',
          })

          card.style.boxShadow = `0 24px 60px rgba(0, 240, 255, 0.14), 0 16px 30px rgba(191, 95, 255, 0.08)`
        })

        card.addEventListener('pointerleave', () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            y: 0,
            duration: 0.45,
            ease: 'power3.out',
          })
          card.style.boxShadow = originalShadow
        })
      })
    }, rootRef)

    return () => ctx.revert()
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
