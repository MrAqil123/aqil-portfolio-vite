import React from 'react'
import './index.css'

type Props = {
  spacing?: number
  thickness?: number
  color?: string // as comma-separated rgb e.g. "255,255,255"
  fadeDuration?: number
  className?: string
  children?: React.ReactNode
}

const GridOverlay: React.FC<Props> = ({
  spacing = 40,
  thickness = 1,
  color = '255,255,255',
  fadeDuration = 300,
  className = '',
  children,
}) => {
  const style: React.CSSProperties = {
    // using CSS custom properties to make adjustments easy and dynamic
    ['--grid-spacing' as any]: `${spacing}px`,
    ['--grid-thickness' as any]: `${thickness}px`,
    ['--grid-color' as any]: color,
    ['--fade-duration' as any]: `${fadeDuration}ms`,
  }

  return (
    <div className={`grid-overlay-wrapper ${className}`} style={style as React.CSSProperties}>
      {children}
      <div className="grid-overlay" aria-hidden="true" />
    </div>
  )
}

export default GridOverlay
