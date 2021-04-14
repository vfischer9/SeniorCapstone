import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Home.css';
import { Navbar, Nav } from 'react-bootstrap';
import linkedIn from '../src/images/linkedin.png'
import gitHub from '../src/images/github.png'
import info from '../src/images/info.png'
import corgi from '../src/images/corgi.gif'

function Home() {

    function activateTest() {
          console.log('The Start Test button was clicked.');
    }


    return (
        <div className='homePage'>
            <Navbar className='navbar' variant="dark">
                <Nav className="mr-auto">
                    <Nav.Link href="/tips"><img className='infoPic' src={info} href='infoPic'></img></Nav.Link>
                </Nav>
            </Navbar>
            <br></br>
            
            <h1 className='title'>Covid-19 Test<img src={corgi} alt='corgiGif' className='corgiGif'></img></h1>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <div className='contain mt-4'>
                <br></br>
                <p>Want to check your chances of having contracted COVID-19?</p>
                <p>Take our online test! </p>
                <p>**DISCLAIMER: We are <i>NOT</i> a 100% accurate or full-proof method for diagnosis. Our goal is simply to display user's hypothetical chances of having the virus, as well as to educate the public! It is in <i>NO WAY</i> meant to be a means of diagnosis. If you think you have COVID-19, consult a medical professional right away. </p>

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