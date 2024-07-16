import React from "react"; 

function About({image, about}) {
    const defImg = "https://via.placeholder.com/215"

return (
    <aside>
        <img src = {image || defImg} alt = "blog logo" />
        <p>{about}</p>
        </aside>
);
}

export default About; 