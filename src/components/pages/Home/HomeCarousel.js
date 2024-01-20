import lg from "../../../media/14.png";
import careers2 from "../../../media/homeCarousel.png";
import careers5 from "../../../media/20.png";
import careers6 from "../../../media/17.png";
import HomeCarouselComponent from "../../UI/HomeCarouselComponent";
const HomeCarousel = (props) => {
  return (
    <HomeCarouselComponent>
      

      <div className="text-white text-center align-center bg-brown grid lg:grid-cols-2">
        <h1 className="hidden lg:inline capitalize text-3xl md:text-3xl lg:text-4xl xl:text-5xl  py-20 align-center font-medium my-auto mx-[5%]">
          "Expert Care for Your Gut, by a Team You Can Trust."
        </h1>
        <img className="object-scale-down" src={careers5} />
      </div>

      <div className="text-white text-center align-center bg-brown grid lg:grid-cols-2">
        <h1 className="hidden lg:inline capitalize text-3xl md:text-3xl lg:text-4xl  xl:text-5xl py-20 align-center font-medium my-auto mx-[5%]">
          "Nurturing Digestive Wellness: Your Home for Gastroenterology Care."
        </h1>
        <img className="object-scale-down" src={lg} />
      </div>

      <div className="text-white text-center align-center bg-brown grid lg:grid-cols-2">
        <h1 className="hidden lg:inline capitalize text-3xl md:text-3xl lg:text-4xl xl:text-5xl  py-20 align-center font-medium my-auto mx-[5%]">
          Building better digestive health, one patient at a time.
        </h1>
        <img className="object-scale-down" src={careers6} />
      </div>

      <div className="text-white text-center align-center bg-brown grid lg:grid-cols-2">
        <h1 className="hidden lg:inline capitalize text-3xl md:text-3xl lg:text-4xl xl:text-5xl py-20 align-center font-medium my-auto mx-[5%]">
          "Empowering Tomorrow's Physicians: Real-world Learning in Clinical
          Rotations."
        </h1>
        <img className="object-scale-down" src={careers2} />
      </div>
    </HomeCarouselComponent>
  );
};
export default HomeCarousel;
