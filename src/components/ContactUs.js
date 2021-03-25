import './ContactUs.css'
import React from 'react'
import MyNavBar from './MyNavBar'
import img1 from '../Imeges/ContactImg1.jpg'
import ContactForm from './ContactForm'
import AddressIMG from '../Imeges/Address.png'
import PhoneLogo from '../Imeges/Phone.png'
import InstaLogo from '../Imeges/insta.png'
import FacebookLogo from '../Imeges/facebook.png'

const ContactUs = () => {
    return (
        <div>
            <MyNavBar />
            <div className="p-0 divimg">
                <img src={img1} className="col p-0"></img>
            </div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-6">
                        <ContactForm />
                    </div>
                    <div className="col-6 text-center">
                        <div className="w-50 ml-auto mr-auto">
                            <img src={AddressIMG} className="w-25" />
                            <p>Kothri Kalan<br />Madhya Pradesh 466114</p>
                        </div>
                        <div className="w-50 ml-auto mr-auto">
                            <img src={PhoneLogo} className="w-25" />
                            <p><strong>TOLL FREE</strong> 1800 234 0986</p>
                            <p>+91 7836456352</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="bottomDiv text-center ">
                <div className="w-25 bottomDiv1">
                    <img src={InstaLogo} className="insta" />
                    <img src={FacebookLogo} className="facebook ml-2" />
                </div>
            </div>

        </div>
    )
}

export default ContactUs
