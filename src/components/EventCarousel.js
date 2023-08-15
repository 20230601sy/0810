import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import { EVENT_LISTS } from '../constants/eventList';
import { IMG_PATH } from '../constants/path';

const EventCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container className='my-2'>
      <Carousel onSelect={handleSelect}>
        {
          // [1, 2, 3].map((num)=>
          //   <Carousel.Item key={num}>
          //     {/* <img src={`https://via.placeholder.com/800x200?text=Event Image ${num}`} alt="" className='full-width-on-mobile'/> */}
          //     <img src={`https://via.placeholder.com/800x200?text=Event Image ${num}`} alt="" class='img-fluid'/>
          //     {/* <ExampleCarouselImage text="First slide" /> */}
          //     {/* <Carousel.Caption> */}
          //       {/* <h3>First slide label</h3> */}
          //       {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          //     {/* </Carousel.Caption> */}
          //   </Carousel.Item>
          // )
          EVENT_LISTS.map(event => 
            <Carousel.Item key={event.id}>
              {/* <img src={`${IMG_PATH}${event.img}`} alt="" class='img-fluid'/> */}
              <img src={`${IMG_PATH}${event.img}`} alt="" style={{width: '800px', height:'300px'}} className='img-fluid'/>
              {/* <img src={`https://via.placeholder.com/800x200?text=Event Image ${event.id}`} alt="" class='img-fluid'/> */}
            </Carousel.Item>
          )
        }
      </Carousel>
    </Container>
  );
}

export default EventCarousel;