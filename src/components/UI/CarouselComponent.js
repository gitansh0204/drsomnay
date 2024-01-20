// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// function MyArrow({ direction, onClick }) {
//   const arrowStyle = {
//     position: 'absolute',
//     top: '50%',
//     transform: 'translateY(-50%)',
//     [direction === 'left' ? 'left' : 'right']: 0,
//     cursor: 'pointer',
//     zIndex: 1,
//   };

//   const arrowIconStyle = {
//     fontSize: 30,
//   };

//   const arrowIcon = direction === 'left' ? faChevronLeft : faChevronRight;

//   return (
//     <div style={arrowStyle} onClick={onClick}>
//       <FontAwesomeIcon icon={arrowIcon} style={arrowIconStyle} className="text-brown sm:m-6 md:m-14 lg:m-36" />
//     </div>
//   );
// }

// function CarouselComponent(props) {
//   return (
//     <Carousel
//       renderArrowPrev={(onClickHandler, hasPrev, label) =>
//         hasPrev && (
//           <MyArrow  direction="left" onClick={onClickHandler} />
//         )
//       }
//       renderArrowNext={(onClickHandler, hasNext, label) =>
//         hasNext && (
//           <MyArrow direction="right" onClick={onClickHandler} />
//         )
//       }
//       showStatus={false}
//       showThumbs={false}
//       infiniteLoop={true}
//       swipeable={true}
//       autoPlay={false}
//       useKeyboardArrows={true}
//       interval={5000}
//       transitionTime={500}
//     >
//       {props.children}
//     </Carousel>
//   );
// }

// export default CarouselComponent;


// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// function MyArrow({ direction, onClick }) {
//   const arrowStyle = {
//     position: 'absolute',
//     top: '50%',
//     transform: 'translateY(-50%)',
//     [direction === 'left' ? 'left' : 'right']: 0,
//     cursor: 'pointer',
//     zIndex: 1,
//   };

//   const arrowIconStyle = {
//     fontSize: 30,
//   };

//   const arrowIcon = direction === 'left' ? faChevronLeft : faChevronRight;

//   return (
//     <div style={arrowStyle} onClick={onClick}>
//       <FontAwesomeIcon icon={arrowIcon} style={arrowIconStyle} className="text-brown sm:m-6 md:m-14 lg:m-36" />
//     </div>
//   );
// }

// function CarouselComponent(props) {
//   return (
//     <Carousel
//       showIndicators={true}
//       renderIndicator={(onClickHandler, isSelected, index, label) => (
//         <li
//           style={{
//             display: "inline-block",
//             margin: "0 5px",
//             cursor: "pointer",
//             background: isSelected ? "#2B6CB0" : "#E2E8F0",
//             borderRadius: "50%",
//             width: "8px",
//             height: "8px",
//             transition: "background 0.25s ease",
//           }}
//           onClick={onClickHandler}
//           key={index}
//           data-testid={`carousel-indicator-${index}`}
//         />
//       )}
//       indicatorContainerProps={{
//         style: {
//           position: "absolute",
//           bottom: "20px",
//           left: 0,
//           right: 0,
//           margin: "auto",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         },
//       }}
//       renderArrowPrev={(onClickHandler, hasPrev, label) =>
//         hasPrev && <MyArrow direction="left" onClick={onClickHandler} />
//       }
//       renderArrowNext={(onClickHandler, hasNext, label) =>
//         hasNext && <MyArrow direction="right" onClick={onClickHandler} />
//       }
//       showStatus={false}
//       infiniteLoop={true}
//       swipeable={true}
//       autoPlay={false}
//       useKeyboardArrows={true}
//       interval={5000}
//       transitionTime={500}
//     >
//       {props.children}
//     </Carousel>
//   );
// }

// export default CarouselComponent;

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
  };

  const arrowIconStyle = {
    fontSize: 30,
  };

  const arrowIcon = direction === 'left' ? faChevronLeft : faChevronRight;

  return (
    <div style={arrowStyle} onClick={onClick}>
      <FontAwesomeIcon icon={arrowIcon} style={arrowIconStyle} className="text-maroon sm:m-6 md:m-14 lg:m-36" />
    </div>
  );
}

function CarouselComponent(props) {
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
    >
      {carouselItems}
    </Carousel>
  );
}

export default CarouselComponent;
