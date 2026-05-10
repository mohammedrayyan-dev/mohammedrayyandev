import React from 'react'

const Container = ({ children, className = " " }) => {
  return (
    <div className={`mx-auto max-w-[1600px] px-8 xl:px-12 ${className}`}>
      {children}
    </div>
  )
}

export default Container