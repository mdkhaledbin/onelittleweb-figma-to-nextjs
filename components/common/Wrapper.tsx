import React from 'react'

const Wrapper = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <div className={`max-w-12/14 mx-auto px-4 py-4 ${className}`}>{children}</div>
  )
}

export default Wrapper