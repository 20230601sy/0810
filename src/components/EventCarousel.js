import { Container, Carousel } from 'react-bootstrap';
import { useState } from 'react';
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
          EVENT_LISTS.map(event => 
            <Carousel.Item key={event.id}>
              <img src={`${IMG_PATH}${event.img}`} alt="" style={{width: '800px', height:'300px'}} className='img-fluid'/>
            </Carousel.Item>
          )
        }
      </Carousel>
    </Container>
  );
}

export default EventCarousel;