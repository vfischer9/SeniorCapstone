import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import linkedIn from '../src/images/linkedin.png'
import gitHub from '../src/images/github.png'
import test from '../src/images/test.png'
import home from '../src/images/home.png'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//highRisk = 3
//lowRisk = 1
//noRisk = 0


function Test() {

    const questions = [
		{
			questionText: 'Have you lost your sense of taste and/or smell?',
			answerOptions: [
				{ answerText: 'Yes', highRisk: true, lowRisk: false },
                { answerText: 'No', noRisk: true},
			],
		},
		{
			questionText: 'Have you experienced fever or chills?',
			answerOptions: [
				{ answerText: 'Yes', lowRisk: true, highRisk: false },
                { answerText: 'No', noRisk: true},
			],
		},
		{
			questionText: 'Have you been exposed to someone with COVID-19 in the last two weeks?',
			answerOptions: [
				{ answerText: 'Yes', highRisk: true, lowRisk: false },
                { answerText: 'No', noRisk: true },
			],
		},
		{
			questionText: 'Have you been experiencing a sore throat?',
			answerOptions: [
				{ answerText: 'Yes', lowRisk: true, highRisk: false },
                { answerText: 'No', noRisk: true },
			],
		},
        {
			questionText: 'Do you have a cough?',
			answerOptions: [
				{ answerText: 'Yes', lowRisk: true, highRisk: false },
                { answerText: 'No', noRisk: true },
			],
		},
        {
			questionText: 'Have you shortness of breath and/or difficulty breathing?',
			answerOptions: [
				{ answerText: 'Yes', highRisk: true, lowRisk: false },
                { answerText: 'No', noRisk: true },
			],
		},
        {
			questionText: 'Have you been experiencing fatigue?',
			answerOptions: [
				{ answerText: 'Yes', lowRisk: true, highRisk: false },
                { answerText: 'No', noRisk: true },
			],
		},
        {
			questionText: 'Do you have muscle or body aches?',
			answerOptions: [
				{ answerText: 'Yes', lowRisk: true, highRisk: false },
                { answerText: 'No', noRisk: true },
			],
		},
        {
			questionText: 'Do you experience head pain?',
			answerOptions: [
				{ answerText: 'Yes', lowRisk: true, highRisk: false },
                { answerText: 'No', noRisk: true },
			],
		},
        {
			questionText: 'have you had a runny nose or experienced congestion?',
			answerOptions: [
				{ answerText: 'Yes', lowRisk: true, highRisk: false },
				{ answerText: 'No', noRisk: true },
			],
		},
        {
			questionText: 'Do you have nausea and/or have experienced vomiting?',
			answerOptions: [
				{ answerText: 'Yes', lowRisk: true, highRisk: false },
				{ answerText: 'No', noRisk: true },
			],
		},
        {
			questionText: 'Have you had pain or pressure in the chest area?',
			answerOptions: [
				{ answerText: 'Yes', highRisk: true, lowRisk: false },
				{ answerText: 'No', noRisk: true },
			],
		},
        {
			questionText: 'Have you suddenly been experiencing new spouts of confusion?',
			answerOptions: [
				{ answerText: 'Yes', highRisk: true, lowRisk: false },
				{ answerText: 'No', noRisk: true },
			],
		},
		{
			questionText: 'Are you over the age of 65?',
			answerOptions: [
				{ answerText: 'Yes', highRisk: true, lowRisk: false },
				{ answerText: 'No', noRisk: true },
			],
		},
		{
			questionText: 'Have you recently been in a crowd of more than 10 people?',
			answerOptions: [
				{ answerText: 'Yes', lowRisk: true, highRisk: false },
				{ answerText: 'No', noRisk: true },
			],
		},
	];

	function goToTips() {
		console.log('The View Tips button was clicked.');
  }

    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (highRisk, lowRisk) => {
		
		if (highRisk) {
			setScore(score + 3);
		}
        else if (lowRisk) {
            setScore(score + 1);
        }

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};


    const getAvg = (userScore) => {
        var avg = ((userScore/27) * 100);
		console.log(avg);
		avg = avg.toFixed(2);
        return avg;
	};

	const getRisk = (userAverage) => {
		userAverage = ((score/27) * 100);
		if (userAverage > 0 && userAverage < 40){
			return 'Low Risk';
		}
		else if (userAverage > 39 && userAverage < 60){
			return 'Moderate Risk';
		}
		else if(userAverage > 59){
			return 'High Risk';
		}
	}
    
    return (
        <div className='testPage'>
            
             <Navbar className='navbar' variant="dark">
                <Nav className="mr-auto">
                    <Nav.Link href="/"><img className='homeIcon' src={home}></img></Nav.Link>
                </Nav>
            </Navbar>
            <br></br>
            <h3 className='questionTitle'>
				<img className='testIcon' src = {test} alt='testImage'></img>
				Begin Your Test By Answering The Following Questions
			</h3>
            <br></br>

			<div className='questionContainer'>
				{showScore ? (
					<div className='ml-2'>
						You scored {score} out of 27, which is {getAvg(score)}%. 
						This puts you in the '{getRisk(score)}' category. 
						Click below to view some of our tips to stay healthy. 
						<br></br>
						<Link to="/tips">
                        	<button className='mt-2' onClick={goToTips}> View Our Tips </button>
                    	</Link>
					</div>
				) : (
					<>
						<div className='ml-2'>
							<div className='mb-4'>
							<u><b><span>Question {currentQuestion + 1}</span>/{questions.length}</b></u>
							</div>
							<div className='question-text'>{questions[currentQuestion].questionText}</div>
						</div>
						<div className='ml-2 mt-2 answer-section'>
							{questions[currentQuestion].answerOptions.map((answerOption) => (
								<button className='yesOrNo' onClick={() => handleAnswerOptionClick(answerOption.highRisk, answerOption.lowRisk)}>{answerOption.answerText}</button>
							))}
						</div>
					</>
				)}

				<footer>
					© 2021 Built By Victoria Fischer.
					<a className='ml-2' href='https://www.linkedin.com/in/vfischer9/' target="blank" ><img className='linkedInPic' src={linkedIn} alt='linkedInImage'></img></a>
					<a className='ml-1' href='https://github.com/vfischer9' target="blank" ><img className='gitHubPic' src={gitHub} alt='gitHubImage'></img></a>
				</footer>
			</div>
		</div>
    )
}

export default Test
