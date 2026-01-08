"use client"
import React, { useRef, useState, useEffect } from 'react'
import './index.css'

type Props = {
  spacing?: number
  thickness?: number
  color?: string // comma-separated rgb, e.g. "255,255,255"
  spotSize?: number
  fadeDuration?: number
  edgeRadius?: number // px of blurred edge
  className?: string
  children?: React.ReactNode
}

const GridSpotOverlay: React.FC<Props> = ({
  spacing = 40,
  thickness = 1,
  color = '255,255,255',
  spotSize = 50,
  fadeDuration = 220,
  edgeRadius = 12,
  className = '',
  children,
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const latestRef = useRef({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }, [])

  function onMove(e: React.MouseEvent) {
    const rect = wrapperRef.current?.getBoundingClientRect()
    if (!rect) return
    let x = e.clientX - rect.left - spotSize / 2
    let y = e.clientY - rect.top - spotSize / 2

    // clamp so the spot doesn't go far outside
    x = Math.max(-spotSize / 2, Math.min(x, rect.width - spotSize / 2))
    y = Math.max(-spotSize / 2, Math.min(y, rect.height - spotSize / 2))

    latestRef.current = { x, y }

    if (rafRef.current == null) {
      rafRef.current = requestAnimationFrame(() => {
        setPos(latestRef.current)
        rafRef.current = null
      })
    }
  }

  function onEnter(e: React.MouseEvent) {
    onMove(e)
    setVisible(true)
  }

  function onLeave() {
    setVisible(false)
  }

  // compute inner percent for mask so edgeRadius produces a smooth fade
  const innerPercent = Math.max(0, 50 - (edgeRadius / Math.max(1, spotSize)) * 50)
  const mask = `radial-gradient(circle at 50% 50%, rgba(0,0,0,1) ${innerPercent}%, rgba(0,0,0,0) 100%)`

  const spotStyle: React.CSSProperties = {
    width: `${spotSize}px`,
    height: `${spotSize}px`,
    left: `${Math.round(pos.x)}px`,
    top: `${Math.round(pos.y)}px`,
    opacity: visible ? 1 : 0,
    transition: `opacity ${fadeDuration}ms ease, transform 80ms linear`,
    backgroundImage: `repeating-linear-gradient(0deg, rgba(${color},1) 0 ${thickness}px, transparent ${thickness}px ${spacing}px), repeating-linear-gradient(90deg, rgba(${color},1) 0 ${thickness}px, transparent ${thickness}px ${spacing}px)`,
    backgroundSize: `${spacing}px ${spacing}px`,
    maskImage: mask,
    WebkitMaskImage: mask,
  }

  return (
    <div ref={wrapperRef} className={`grid-spot-wrapper ${className}`} onMouseMove={onMove} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      {children}
      <div className="grid-spot" style={spotStyle} aria-hidden="true" />
    </div>
  )
}

export default GridSpotOverlay
