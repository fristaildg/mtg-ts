import React from 'react'
import './Stage.scss'

interface StageProps {
  children: React.ReactNode
  className?: string
}

const Stage: React.FC<StageProps> = ({children, className}) => (
  <div className={`stage ${className}`}>
    {children}
  </div>
)

export default Stage

  