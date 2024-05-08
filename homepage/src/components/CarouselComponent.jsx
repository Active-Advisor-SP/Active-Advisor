import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import './carousel.css'

function CarouselComponent() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="carousel">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/64fa5d6d3a09ba1df59f52d4/0x0.jpg?format=jpg&crop=1920,1080,x0,y0,safe&height=900&width=1600&fit=bounds"
            alt=""
            style={{  width: "100%" }}
          />
          <Carousel.Caption>
            <h3>Weekly AcroYoga Classes For Everyone at Center Park!</h3>
            <p>
              Learning Acroyoga requires strength training, flexibility training
              and technique training. Strength training is accomplished through
              repetition of exercises like push-ups, hand walking and
              handstands. Flexibility training is best done at the end of a
              session with a partner. Learning good Acroyoga technique takes
              time and effort and is best learned with an expert teacher. One
              important Acroyoga technique is called bone stacking. This
              involves the base partner keeping arms and legs straight to
              maximize the weight load on bones rather than muscles to support
              the flyer.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/64fa5d6d3a09ba1df59f52d4/0x0.jpg?format=jpg&crop=1920,1080,x0,y0,safe&height=900&width=1600&fit=bounds"
            alt=""
            style={{  width: "100%" }}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/64fa5d6d3a09ba1df59f52d4/0x0.jpg?format=jpg&crop=1920,1080,x0,y0,safe&height=900&width=1600&fit=bounds"
            alt=""
            style={{  width: "100%" }}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
