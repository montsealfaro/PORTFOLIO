import { useEffect, useRef } from "react"
import "./cursor.css"

export default function Cursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    let x = 0
    let y = 0
    let targetX = 0
    let targetY = 0

    const move = (e) => {
      targetX = e.clientX
      targetY = e.clientY
    }

    const animate = () => {
      // suavizado (lerp)
      x += (targetX - x) * 0.15
      y += (targetY - y) * 0.15

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${x}px, ${y}px)`
      }

      requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", move)
    animate()

    return () => window.removeEventListener("mousemove", move)
  }, [])

  return <div ref={cursorRef} className="cursor" />
}