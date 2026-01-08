"use client"
import React, { useRef, useEffect, useState } from 'react'
import './index.css'

type Props = {
  spacing?: number
  thickness?: number
  color?: string // comma-separated RGB e.g. "255,255,255"
  spotSize?: number
  edgeRadius?: number
  transitionDuration?: number
  touchHideDelay?: number
  className?: string
  children?: React.ReactNode
}

const GridRevealOverlay: React.FC<Props> = ({
  spacing = 40,
  thickness = 1,
  color = '255,255,255',
  spotSize = 50,
  edgeRadius = 12,
  transitionDuration = 1000,
  touchHideDelay = 800,
  className = '',
  children,
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const latestRef = useRef({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  const touchTimeoutRef = React.useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (touchTimeoutRef.current) window.clearTimeout(touchTimeoutRef.current)
    }
  }, [])

  function updatePositionFromEvent(clientX: number, clientY: number) {
    const rect = wrapperRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const y = Math.max(0, Math.min(clientY - rect.top, rect.height))

    latestRef.current = { x, y }

    if (rafRef.current == null) {
      rafRef.current = requestAnimationFrame(() => {
        const { x, y } = latestRef.current
        if (wrapperRef.current) {
          wrapperRef.current.style.setProperty('--mask-pos', `${Math.round(x)}px ${Math.round(y)}px`)
        }
        rafRef.current = null
      })
    }
  }

  function onMove(e: React.MouseEvent) {
    updatePositionFromEvent(e.clientX, e.clientY)
  }

  function onEnter(e: React.MouseEvent) {
    updatePositionFromEvent(e.clientX, e.clientY)
    setVisible(true)
  }

  function onLeave() {
    setVisible(false)
    if (touchTimeoutRef.current) {
      window.clearTimeout(touchTimeoutRef.current)
      touchTimeoutRef.current = null
    }
  }

  function onTouchStart(e: React.TouchEvent) {
    const t = e.touches[0]
    if (!t) return
    updatePositionFromEvent(t.clientX, t.clientY)
    setVisible(true)
    if (touchTimeoutRef.current) {
      window.clearTimeout(touchTimeoutRef.current)
      touchTimeoutRef.current = null
    }
  }

  function onTouchMove(e: React.TouchEvent) {
    const t = e.touches[0]
    if (!t) return
    updatePositionFromEvent(t.clientX, t.clientY)
  }

  function onTouchEnd() {
    if (touchTimeoutRef.current) window.clearTimeout(touchTimeoutRef.current)
    touchTimeoutRef.current = window.setTimeout(() => {
      setVisible(false)
      touchTimeoutRef.current = null
    }, touchHideDelay)
  }

  const style: React.CSSProperties = {
    ['--grid-spacing' as any]: `${spacing}px`,
    ['--grid-thickness' as any]: `${thickness}px`,
    ['--grid-color' as any]: color,
    ['--spot-size' as any]: `${spotSize}px`,
    ['--edge-radius' as any]: `${edgeRadius}px`,
    ['--transition-duration' as any]: `${transitionDuration}ms`,
    ['--mask-pos' as any]: `0px 0px`,
  }

  return (
    <div
      ref={wrapperRef}
      className={`grid-reveal-wrapper ${className}`}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={style as React.CSSProperties}
      data-visible={visible ? 'true' : 'false'}
    >
      {children}
      <div
        className="grid-layer"
        style={{ opacity: visible ? 1 : 0 }}
        aria-hidden="true"
      />
    </div>
  )
}

export default GridRevealOverlay
