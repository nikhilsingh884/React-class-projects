import React from 'react'

function Container({ children }) {
  return (
    <div>
      <div className="container-main bg-light px-5 py-5 mt-3">{children}</div>
    </div>
  )
}

export default Container;
