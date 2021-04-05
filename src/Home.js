import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Home.css';

function Home() {

    function activateTest() {
          console.log('The Start Test button was clicked.');
    }


    return (
        <div>
            <h1 className='title'>Covid-19 Test</h1>
            <br></br>
            <p>Want to check your chances of having contracted COVID-19?</p>
            <p>Take our online test! </p>
            <p>We are <i>NOT</i> a 100% accurate or full-proof method for diagnosis.</p>
            <p>Our goal is simply to display user's hypothetical chances of having the virus, as well as to educate the public!</p>

            <Link to="/test">
                <button onClick={activateTest}> Start Test </button>
            </Link>
            

        </div>
    )
}

export default Home