import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MyArrow({ direction, onClick }) {
  const arrowStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    [direction === 'left' ? 'left' : 'right']: 0,
    cursor: 'pointer',
    zIndex: 1,
    width: '60px', // adjust this to match the size of your arrow icon
    height: '60px', // adjust this to match the size of your arrow icon
    background: 'rgba(255, 255, 255, 0.1)', // white color with low opacity
    borderRadius: '50%', // set border radius to half of width and height
    transition: 'background-color 0.2s ease',
    '&:hover, &:active': {
      background: 'rgba(255, 255, 255, 0.5)', // increase opacity when hovered or clicked
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      [direction === 'left' ? 'left' : 'right']: '50%',
      width: '10px',
      background: 'rgba(255, 255, 255, 0.1)', // white color with low opacity
      transform: 'translateX(-50%)',
      zIndex: -1,
    },
  };
   
  const arrowIconStyle = {
    fontSize: 50,
    color: 'rgba(255, 255, 255, 0.7)', // set icon color to white
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)', // center the icon inside the circular background
  };

  const arrowIcon = direction === 'left' ? faChevronLeft : faChevronRight;

  return (
    <div style={arrowStyle} onClick={onClick}>
      <div style={arrowIconStyle}>
        <FontAwesomeIcon icon={arrowIcon} />
      </div>
    </div>
  );
}


function HomeCarouselComponent(props) {
  let carouselItems = [];
  if (Array.isArray(props.children)) {
    carouselItems = props.children.map((child, index) => {
      return <div key={index}>{child}</div>;
    });
  } else {
    carouselItems = <div>{props.children}</div>;
  }

  return (
    <Carousel
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && <MyArrow direction="left" onClick={onClickHandler} />
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && <MyArrow direction="right" onClick={onClickHandler} />
      }
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      swipeable={true}
      autoPlay={true}
      useKeyboardArrows={true}
      interval={5000}
      transitionTime={500}
      dotPosition='top'
    >
      {carouselItems}
    </Carousel>
  );
}

export default HomeCarouselComponent;
