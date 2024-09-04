import React from "react";

function Post({title, description, image}){
    return(
        <div className="post">
            <div >
            <img src={image} alt={title} className="post-image" />
            </div>
            <h2>{title}</h2>
            <p>
                {description}            
            </p>
        </div>
    );
}
export default Post;