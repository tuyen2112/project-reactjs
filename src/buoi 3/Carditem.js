import React from 'react'

export const Thumnail = () => {
    return <div>Thumnail</div>
}
const Carditem = (props) => {
    const {title,icon,description} = props
  return (
    <div>
        <p>
            <p>{icon}</p>
            <h2>{title}</h2>
            <p>{description}</p>
        </p>
      
    </div>
  )
}

export default Carditem
