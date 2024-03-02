'use client'

import { useState, useEffect } from "react"

export function useWidth() {
  const [width, setWidth] = useState(document.documentElement.clientWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(document.documentElement.clientWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return {
    width
  }
}
