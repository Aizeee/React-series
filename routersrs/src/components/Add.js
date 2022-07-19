import React, { useEffect } from 'react'



const Add = ({ball}) => {
    let tempRender = ""
    for(let item in ball){
    tempRender += ball[item] + " "}
    
    console.log(tempRender)
    const display = tempRender
    console.log(display)

    
    return (
        <main className="Add">
            <h1>hello</h1>
            <div className="addBall">
                {`${display}`}
            
            </div>
        </main>
    )
}

export default Add