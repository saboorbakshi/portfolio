import React from 'react'

interface LinkProps {
  label: string
  url: string
}

export default function Link({ label, url }: LinkProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="hover:underline">
      {label}
    </a>
  )
}
