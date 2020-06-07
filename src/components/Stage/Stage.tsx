import React from 'react'
import './Stage.scss'
import { StageProps } from './types'

const Stage: React.FC<StageProps> = ({ children, className }) => (
  <div className={`stage ${className}`}>
    {children}
  </div>
)

export default Stage

