import React from 'react'

export default function Image({ width = '100%', height = '100%', size = 'cover', src, ...props }) => (
  <div
    { ...props}
    style={{
      width,
        height,
        backgroundImage: `url('https://source.unsplash.com/random/800x600/?happy')`,
        backgroundSize: size,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }}
  />
)
