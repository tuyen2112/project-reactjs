import React from 'react'

const DemoChildren = (props) => {
  console.log(props);
  
    const {children} = props;
  return (
    <div>{children}</div>
  )
}

export default DemoChildren
