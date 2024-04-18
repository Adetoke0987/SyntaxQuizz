import React from "react"
import './question.css';
// import './Home.css'; 


const Questions =()=>{
    return(
        <>
            <div id="main">
                <div id="question">
                    {/* <h1>{Questions.category}</h1> */}
                    <h3>Please pick correctly</h3>
                    <p>who is presdent of nigeria</p>
                    
                    <div id="answers">
                        <span id="ans">option a</span>
                        <span id="ans">option b</span>
                        <span id="ans">option c</span>
                        <span id="ans">option d</span>
                    </div>


                </div>
            </div>
        </>
    )
}


export default Questions 