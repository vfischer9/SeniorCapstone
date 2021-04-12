import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import linkedIn from '../src/images/linkedin.png'
import gitHub from '../src/images/github.png'
import home from '../src/images/home.png'
import health from '../src/images/health.png'
import heros from '../src/images/heros.png'
import socialDist from '../src/images/socialDist.png'
import wash from '../src/images/wash.GIF'
import panda from '../src/images/panda.png'
import masks from '../src/images/masks.png'

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
            
            <div className='tips'>
                
                <h4 className='categories'>Jump To A Category:</h4>

                <div className='buttonsScroll'>   
                    <button className='scrollTo' onClick={scrollToLow}>Low Risk</button>
                    <button className='scrollTo' onClick={scrollToModerate}>Moderate Risk</button>
                    <button className='scrollTo' onClick={scrollToHigh}>High Risk</button>
                </div>

                <img className='healthImage' src={health} alt='healthPic'></img>

                
                <br></br>
                <br></br>

                <h1 id='lowRisk'><u>Low Risk</u></h1>
            
                    <div className='lowSection'>
                    <p>If you're risk level is low, you should still take precautions against the Coronavirus as being low risk does <i>not</i> equate to 
                    being immune. Stay safe by taking some simple precautions, such as social distancing, wearing a mask, keeping rooms 
                    well ventilated, avoiding crowds, cleaning your hands, 
                        and coughing into a bent elbow or tissue.</p>
                
                    <h5>Social Distancing</h5>
                    <p>Maintain at least a 1-metre distance between yourself and others.</p>
                    <p>Doing so can reduce your risk of infection when others cough, sneeze or speak.</p>
                    <p>Maintain an even <u>greater</u> distance between yourself and others when <u>indoors.</u></p>
                    <p>Avoid crowded or indoor settings, but if you can’t, then take precautions:</p>
                    <ul>
                        <li>Open a window to increase the amount natural ventilation.</li>
                        <li>Keep your mask on.</li>
                    </ul>


                    <br></br>
                    <h5>Wear A Mask</h5>

                    <p>The appropriate use, storage and cleaning or disposal are essential to make masks as effective as possible.</p>
                    <p>Masks that are labeled <b>disposable</b> should not be worn multiple times, and reusable masks should be washed very often.</p>
                    <p>Make sure your mask covers your nose, mouth and chin.</p>

                    <br></br>
                    <h5>Basic Hygiene</h5>
                    <p><b>Regularly</b> and thoroughly clean your hands with alcohol-based hand rub or wash with soap and water.</p>
                    <p>Avoid touching the area of your eyes, nose, and mouth until your hands are sterile.</p>
                    <p>Often clean and disinfect surfaces.</p>
                    <p>As always, <i>wear a mask</i> and <i>wash your hands</i>!</p>

                    <p>Credit: <a target='_blank' href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public'>World Health Organization</a></p>
                    </div>

                    <img src = {masks} alt='maskPic' className='maskPic'></img>


                    <h1 id='moderateRisk'><u>Moderate Risk</u></h1>
                    
                    <div className='modSection'>
                    <p>If you're risk level is moderate, you should take serious precautions against the Coronavirus, as being moderate risk 
                        means you have may to be more careful than others. Stay safe by following some simple advice for when you 
                        carry on your daily activities.</p>
                    
                    <h5>Grocery Shopping</h5>
                    <p>Try to minimize contact with others by using online shopping services with 
                        “contactless” delivery options as much as possible.</p>
                    <p>If delivery is unavailable, consider using drive-thru or in-store pickup services to minimize the length 
                        of time you spend in the store and the number of people you encounter.</p>
                    <p>If you <i>must</i> go to the store, consider shopping during less crowded times, stocking up on at least a week’s worth of food and supplies, 
                        and making a list before your trip to help you shop quickly and efficiently.</p>
                    <p>Wipe cart handles with a sanitizing wipe before use and use hand sanitizer immediately after 
                        leaving the store</p>
                    <p>Wash your fruits and vegetables, and also consider wiping down packaging — as well as your mobile phone, credit card, or other items that you 
                        touched during your trip</p>
                    

                    <br></br>
                    <h5>School & Work</h5>
                    <p>If your school or job has a remote option, choose to stay at home.</p>
                    <p>Promote hand hygiene at your workplace or child's school, as well as at home.</p>
                    <p>Make sure your child's school or your workplace has a developed schedule for routine cleaning. </p>
                    <p>Ventilation is one component of maintaining healthy environments, and is an important COVID-19 
                        prevention strategy for schools, childcare programs, and places of work.</p>
                    <p>Do <i><u>NOT</u></i> send your child to school or show up to work if yourself or your child
                    is experiencing COVID-19 symptoms.</p>
                    <p>Consider introducing "handwashing breaks" so other students/employees can wash their hands with soap and water every so often. </p>
                    <p>Advocate for flexible sick leave at work and extra sick days at school. </p>

                    <br></br>
                    <h5>Gyms & Fitness Centers</h5>
                    <p>If at all possible, consider at-home workouts rather than visiting a gym.</p>
                    <p>Limit high-intensity activities/workouts to the outdoors in order to maintain exertion level.</p>
                    <p>If your gym doesn't have adequate ventilation, look for ones that have high ceilings and use ventilation
                        practices, such as opening doors/windows.
                    </p>
                    <p>Frequently wipe down touched surfaces such as machines, weights, door handles, and other equipment before and after use.</p>
                    <p>Opt to visit the gym during off-peak hours to avoid crowds.</p>
                    <p>Keep your workouts as brief as possible to avoid prolonged exposure.</p>
                    <p>As always, <i>wear a mask</i> and <i>wash your hands</i>!</p>
                    <p>Credit: <a target='_blank' href='https://www.nuvancehealth.org/coronavirus/safety-tips-for-people-at-high-risk-of-serious-illness-from-covid-19/#:~:text=Wear%20a%20mask%2C%20wipe%20cart,immediately%20after%20leaving%20the%20store.'>Nuvance 
                    Health</a> & <a target='_blank' href='https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/going-out.html'>The CDC</a></p>
                    </div>

                    <img className='socialDistImage' src={socialDist} alt='socialDistPic'></img>


                    <h1 id='highRisk'><u>High Risk</u></h1>
                    
                    <div className='highSection'>
                    <p>If you're risk level is high, take the following precautions very seriously.
                        You must be extremely much more careful than others. Stay safe by following professional advice on 
                        how to navigate through the pandemic safely.</p>

                    <h5>Are You Considered "High Risk"?</h5>
                    <p>The following groups of people are considered "High Risk":</p>
                    <ul className='list'>
                        <li className='listPoint'>Adults who are 65 and older.</li>
                        <li>People who have a serious heart condition.</li>
                        <li>People with chronic lung disease.</li>
                        <li>People with moderate to severe asthma.</li>
                        <li>People with diabetes.</li>
                        <li>People with chronic kidney disease undergoing dialysis.</li>
                        <li>People with liver disease.</li>
                        <li>People who are immunocompromised.</li>
                        <li>People with cancer.</li>
                        <li>People with dementia or other neurological conditions.</li>
                        <li>People with down syndrome.</li>
                        <li>People with HIV.</li>
                        <li>People who are overweight or obese.</li>
                        <li>People who are pregnant.</li>
                        <li>People with sickle cell disease or thalassemia.</li>
                        <li>People who are smokers, current or former.</li>
                        <li>People who have had a solid organ or blood stem cell transplant.</li>
                        <li>People with cerebrovascular disease (strokes).</li>
                        <li>People with substance use disorders.</li>
                    </ul>

                    <br></br>
                    <h5>Stay Home</h5>
                    <p>If you are high risk, you should be staying home as much as possible. By staying home 
                        and avoiding contact with other people, your chances of contracting the virus are much lower.
                    </p>
                    <p>Stay stocked up on supplies to minimize the amount of times you have to leave your home. If you must go out, buy 
                        supplies in bulk. Try opting for many contact-less delivery systems.
                    </p>
                    <p>Try your hardest to avoid all means of cruise travel and non-essential air travel. </p>
                    <p>Create a personal support network of trusted individuals to run errands for you. They can 
                        check in with you by phone or video calls to ensure your wellness. Be sure to share your important 
                        health and medical information with them so they will know how to help you if needed.
                    </p>

                    <br></br>
                    <h5>Stop The Spread At Home</h5>
                    <p>Avoid sharing personal household items. Sharing items such as dishes, drinking 
                        glasses, eating utensils, or towels with other people in your home can be dangerous.
                    </p>
                    <p>Clean and disinfect high-touch surfaces in shared spaces.</p>
                    <p>Wash produce and packaging of any new items brought into your home. Also disinfect personal items 
                        that could have gotten germs such as keys, phone, glasses, etc.
                    </p>
                    <p>Do not allow visitors in your home and monitor the health of all household members.</p>

                    <br></br>
                    <h5>Have A Plan</h5>
                    <p>Creating a plan for if you get sick is vital for a high risk individual.</p>
                    <p>Try making a list of all medications and medical contacts so someone will know where to find health care documents, 
                        such as advance directives.
                    </p>
                    <p>Determine who will care for you at home should you get sick. Tell them what type of care you'd like if you became 
                        too ill and could no longer speak for yourself. 
                    </p>
                    <p>Have a 1-month supply of any medications you take on hand. Ask your local pharmacy or 
                        physician if prescriptions can be delivered to your home as well has have a supply of 
                        over-the-counter medications such as fever-reducers or cough suppressants. 
                    </p>
                    <p>Have a 2-week supply of food on hand. This includes food, water, household cleaning supplies, 
                        personal hygiene items, and medical supplies or equipment.
                    </p>    
                    <p>Find out if your doctor provides telemedicine services. This will allow you 
                        to communicate with your doctor over video, phone, or email, rather than face-to-face.
                    </p>
                    <p>As always, <i>wear a mask</i> and <i>wash your hands</i>!</p>
                    <p>Credit: <a target='_blank' href='https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/protect-your-home.html'>The CDC</a> <a target='_blank' href='https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html'>*</a>, <a target='_blank' href='https://brighamhealthhub.org/prevent-the-spread-of-covid-19-at-home/'>Brigham Health Hub</a> & <a target='_blank' href='https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/coronavirus-safety/for-people-at-higher-risk.html'>Red Cross</a></p>
                    </div>

                    <img className='pandaImg' src={panda} alt='pandaImg'></img>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    
                <footer className='foot'>
                    © 2021 Built By Victoria Fischer.
                    <a className='ml-2' href='https://www.linkedin.com/in/vfischer9/' target="blank" ><img className='linkedInPic' src={linkedIn} alt='linkedInImage'></img></a>
                    <a className='ml-1' href='https://github.com/vfischer9' target="blank" ><img className='gitHubPic' src={gitHub} alt='gitHubImage'></img></a>
                </footer>
            </div>
        </article>
        
    )
}

export default Tips