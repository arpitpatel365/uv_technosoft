import React,{useEffect} from 'react';
import { Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

function Error() {
    let navigate=useNavigate();
    useEffect(()=>{
        document.getElementById('App_Main_Heading').style.display='none' ;
        document.getElementById('App_Main_Navbar').style.display='none';
        document.getElementById('Main_Footer').style.display='none';
    })

    return (
        <React.Fragment>
            <br/>
            <h2>Sorry, Page not found !</h2> <br/>
            <Button variant="primary" onClick={()=>{navigate('/Home')}} >Go Back</Button>{' '}
        
        </React.Fragment>
    );
}

export default Error;
