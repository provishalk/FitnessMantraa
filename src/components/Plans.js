import React from 'react'
import MyNavBar from './MyNavBar'
import './About.css'

const Plans = () => {
    return (
        <div>
            <MyNavBar/>
            <div className="container-fluid bg-of-text p-4">
                <div className="row p-5">
                    <div className="col-12 text-center ">
                        <div className="col-6 m-auto">
                            <p className="m-0 about-font-size">BOOST YOUR HEALTH</p>
                            <h1 className="font-weight-bold gol-head">Training tips</h1>
                            <p className="gol-para">Here we have collected everything from concrete exercises to general training tips. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Plans
