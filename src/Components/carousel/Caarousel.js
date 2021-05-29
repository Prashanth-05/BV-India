import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import "./carousel.css"
import car from '../../assests/car.jpg'
import carr from '../../assests/carr.jpg'
import car3 from '../../assests/car3.jpg'

const Caarousel = () => {
    return (
        <div className="slidder">
<Carousel fade >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={car}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carr}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={car3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            
        </div>
    )
}

export default Caarousel
