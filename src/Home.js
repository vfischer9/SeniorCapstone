import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Home.css';
import linkedIn from '../src/images/linkedin.png'
import gitHub from '../src/images/github.png'

function Home() {

    function activateTest() {
          console.log('The Start Test button was clicked.');
    }


    return (
        <div>
            <h1 className='title'>Covid-19 Test</h1>
            <div className='contain mt-4'>
                <br></br>
                <p>Want to check your chances of having contracted COVID-19?</p>
                <p>Take our online test! </p>
                <p>We are <i>NOT</i> a 100% accurate or full-proof method for diagnosis.</p>
                <p>Our goal is simply to display user's hypothetical chances of having the virus, as well as to educate the public!</p>
                
                <div className='center'>
                    <Link to="/test">
                        <button onClick={activateTest}> Start Test </button>
                    </Link>
                </div>
            </div>

            <footer>
                © 2021 Built By Victoria Fischer.
                <a className='ml-2' href='https://www.linkedin.com/in/vfischer9/' target="blank" ><img className='linkedInPic' src={linkedIn} alt='linkedInImage'></img></a>
                <a className='ml-1' href='https://github.com/vfischer9' target="blank" ><img className='gitHubPic' src={gitHub} alt='gitHubImage'></img></a>
            </footer>
        </div>
    )
}

export default Home