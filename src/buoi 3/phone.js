import React from 'react'

const Phone = (props) => {
    const {word,bgColor} = props.phone;
  return <div style ={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:bgColor,
        borderRadius:"10px",
        width:100,height:100
    }}>
      <h1 style={{ color: "#ffff", fontSize: "80px", fontWeight: 500 }}>{word}</h1>
    </div>
}

const BlogItem = (props) => {
    const { title, description } = props.blog;

    return (
        <div style={{ display: "flex" }}>
            <Phone word={title?.[0]} bgColor="yellow" />
            <div>
                <h2>{title}</h2>
                <p>{description}</p>

            </div>
        </div>
    )
}

export default BlogItem