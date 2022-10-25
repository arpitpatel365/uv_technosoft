import React from "react";
import './Portfolio.css';


function Portfolio() {
    
    return(
        <React.Fragment>
            <br/>
            <h1 className="Portfolio_Heading">See Our Ecommerce Website Design and Development Portfolio</h1> <br/>
            <ol>
                <li className="Portfolio_calculator"> <span className='EMI_Cal'> EMI Calculator</span> 
            <div className="project1">
            <p>Here, in this website made in React.js framework, we can create account, and after doing log in with credentials, we can do calculation for month wise EMI. User data will be stored in local storage.</p>
            URL <span className="Project_1_Colon">:</span> <a className="Project_1_Link" href="https://emi-calculator-in-react.herokuapp.com/" target='_blank' rel="noreferrer"> <span className="Link_1">https://emi-calculator-in-react.herokuapp.com/ </span></a>
           </div>
            </li>
            <br/>

            <li className="Portfolio_ToDo"> <span className="ToDoApp_heading">ToDo App in React.js</span>
            <div className="project2">
            <p >Here, we can add notes, edit that notes and also delete that notes. This website is made in React.js framework.</p>
            URL <span className="Project_2_Colon"> :</span> <a className="Project_2_Link" href='https://crud-app-in-react56.herokuapp.com/' target='_blank' rel="noreferrer">https://crud-app-in-react56.herokuapp.com/</a>
           </div>

            </li>
            </ol>
            <br/>
        
        </React.Fragment>
    );
}

export default Portfolio;