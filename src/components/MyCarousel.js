import './MyCarousel.css'
import React from 'react'
import pushup from '../Imeges/1.jpg'
import dumbbel from '../Imeges/3.jpg'
import equipments from '../Imeges/4.jpg'
import run from '../Imeges/5.jpg'
import Carousel from 'react-bootstrap/Carousel'
import logo from '../Imeges/logo.png'
const MyCarousel = () => {
    return (
        <>
            <Carousel className="slider">
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={pushup}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    <div className='carouselDiv'>
                            <h3 className="carouselHead">Fitness Mantra</h3>
                            <img src={logo} className='carouselLogo col'/>
                        </div>
                        <p className="tagline">INTRODUCING FITNESS PASSION</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={dumbbel}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    <div className='carouselDiv'>
                            <h3 className="carouselHead">Fitness Mantra</h3>
                            <img src={logo} className='carouselLogo col'/>
                        </div>
                        <p className="tagline">INTRODUCING FITNESS PASSION</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  interval={2000}>
                    <img
                        className="d-block w-100"
                        src={equipments}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    <div className='carouselDiv'>
                            <h3 className="carouselHead">Fitness Mantra</h3>
                            <img src={logo} className='carouselLogo col'/>
                        </div>
                        <p className="tagline">INTRODUCING FITNESS PASSION</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  interval={2000}>
                    <img
                        className="d-block w-100"
                        src={run}
                        alt="Four slide"
                    />
                    <Carousel.Caption>
                        <div className='carouselDiv'>
                            <h3 className="carouselHead">Fitness Mantra</h3>
                            <img src={logo} className='carouselLogo col'/>
                        </div>
                        
                        <p className="tagline">INTRODUCING FITNESS PASSION</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default MyCarousel
