import React from 'react'
import { Link } from 'react-router'
import type { LogoProps } from '~/Types/interfaces.ts'

function Logo({image,format} : LogoProps) {
  return (
    <Link to="/">
      <img src={`/logo/${image}.${format}`} className="w-50 m-1" alt="Logo a11y" />
    </Link>
  )
}

export default Logo