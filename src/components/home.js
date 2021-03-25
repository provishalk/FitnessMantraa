import React from 'react'
import coinimg from '../Imeges/Coins.png'
import clockimg from '../Imeges/Clock.png'
import cardimg from '../Imeges/Card.png'
import dumbbleimg from '../Imeges/dumbble.png'
import gymFriends from '../Imeges/Friends.jpg'
import OnlineTrainer from '../Imeges/OnlineTrainer.jpg'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import MyNavBar from './MyNavBar'
import MyCarousel from './MyCarousel'
import './home.css'
const home = () => {
    return (
        <div>
            <MyNavBar />
            <MyCarousel />
            {/* <a href="./about"><button className="btn btn-primary">Next Page</button></a>
            <Link to='/about' className="btn btn-primary">Go to</Link> */}
            <div className="container mt-3 ml-2 mr-2 m-auto">
                <div className="row justify-content-center mt-4"><h1>Why FitnessMantra?</h1></div>
                <div className="row">
                    <div className="col-3">
                        <Card className="cardBody">
                            <div className="justify-content-md-center cardDiv cardDivImg">
                                <CardImg className="w-50 mt-3" top src={coinimg} alt="Card image cap" />
                            </div>
                            <CardBody>
                                <CardTitle tag="h5" className="cardHead">We are always open</CardTitle>
                                <CardText className="cardText">
                                    We think that everyone should have the opportunity to live a healthy life. Not just those with beefy wallets.</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-3">
                        <Card className="cardBody">
                            <div className="justify-content-md-center cardDiv cardDivImg">
                                <CardImg className="w-50 mt-3" top src={clockimg} alt="Card image cap" />
                            </div>
                            <CardBody>
                                <CardTitle tag="h5" className="cardHead">We are always open</CardTitle>
                                <CardText className="cardText">
                                    Exercise when it suits you. Our gyms are open 24 hours a day so you can work out when you have time.
                                    </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-3"><Card className="cardBody">
                        <div className="justify-content-md-center cardDiv cardDivImg">
                            <CardImg className="w-50 mt-4" top src={cardimg} alt="Card image cap" />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5" className="cardHead">One card, all gyms</CardTitle>
                            <CardText className="cardText">
                                As a member of, you train unlimited at over 260 gyms in five countries - all over the world.</CardText>
                        </CardBody>
                    </Card></div>
                    <div className="col-3"><Card className="cardBody">
                        <div className="justify-content-md-center cardDiv cardDivImg">
                            <CardImg className="w-50 mt-2" top src={dumbbleimg} alt="Card image cap" />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5" className="cardHead">Gym in the gym only for girls</CardTitle>
                            <CardText className="cardText">
                                With us, everyone is welcome. And we like freedom of choice. That is why we have our own department only for girls.</CardText>
                        </CardBody>
                    </Card>
                    </div>

                </div>
            </div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-6  align-self-center">
                        <p className="mb-0 lightGray">RIGHT NOW</p>
                        <h1 className="fontWeight700">RECRUIT A FRIEND - EXERCISE FREE</h1>
                        <p className="lightGray">Both you and your friend get a free training month. Each new friend, gives you a new free month.</p>
                        <button className="btn btn-primary px-2 py-2 ">KNOW MORE</button>
                    </div>
                    <div className="col-6">
                        <img src={gymFriends} className="w-100 p-3" />
                    </div>
                </div>
            </div>
            <div className="container-fluid background-of-div py-5 mt-5">
                <div className="row py-5 justify-content-center">
                    <div className="col-6">
                        <h1>Train safely with us</h1>
                        <p>All our gyms are open 24 hours a day, just as usual, but with a limited number of places.
                        We have also taken several measures against Covid-19, in accordance with
                        the Swedish Public Health Agency's recommendations so that you can feel safe
                             when you train with us.</p>
                        <button className="btn btn-primary px-2 py-2">READ MORE</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-6">
                        <img src={OnlineTrainer} className="w-100 p-3" />
                    </div>
                    <div className="col-6  align-self-center px-5">
                        <p className="mb-0 lightGray">TRAIN AT HOME</p>
                        <h1 className="fontWeight700">Training online for everyone</h1>
                        <p className="lightGray">Everyone is different and we want to offer training
                        online that suits everyone, regardless of who you are and what your goals are,
                        member or non-member. We have put together a number of different exercises
                        and sessions with different orientations - choose yourself if you want to
                               focus on one session or if you want to combine several in a row.</p>
                        <button className="btn btn-primary px-2 py-2 ">To our Online Passports</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <h1 className="align-center fontWeight700 text-center">Exercise & Health</h1>
                        <p className="w-75 text-center m-auto">Feeling good and feeling strong is not just about how hard you train
                             or how many hours you spend at the gym. Diet and food are at least
                              as important for the body's well-being. If you both exercise and 
                              eat right, you will quickly feel how your whole body feels good -
                               inside and out.</p>
                        <p className="mt-5 pt-5 text-center">©  2021 FitnessMantra</p>
                    </div>
                </div>
            </div>
            





        </div>
    )
}

export default home
