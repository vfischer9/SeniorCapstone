import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import linkedIn from '../src/images/linkedin.png'
import gitHub from '../src/images/github.png'
import home from '../src/images/home.png'

function Tips() {

    function scrollToLow(){
        var elemToScroll = document.getElementById('lowRisk');
        elemToScroll.scrollIntoView({behavior: "smooth"})
    }

    function scrollToModerate(){
        var elemToScroll = document.getElementById('moderateRisk');
        elemToScroll.scrollIntoView({behavior: "smooth"})
    }

    function scrollToHigh(){
        var elemToScroll = document.getElementById('highRisk');
        elemToScroll.scrollIntoView({behavior: "smooth"})
    }


    return (
        
        <article className='tipsPage'>
            <Navbar className='navbar' variant="dark">
                <Nav className="mr-auto">
                    <Nav.Link href="/"><img className='homeIcon' src={home} href='homePic'></img></Nav.Link>
                </Nav>
            </Navbar>

            <br></br>

            <h4>Choose from the following categories</h4>
            
            <button onClick={scrollToLow}>Low Risk</button>
            <button onClick={scrollToModerate}>Moderate Risk</button>
            <button onClick={scrollToHigh}>High Risk</button>
           
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 id='lowRisk'>Low Risk</h1>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>


            <h1 id='moderateRisk'>Moderate Risk</h1>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <h1 id='highRisk'>High Risk</h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        </article>
    )
}

export default Tips