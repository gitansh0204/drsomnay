import careers1 from "../../../media/s1.jpg";
import careers2 from "../../../media/s2.jpg";
import careers3 from "../../../media/s3.JPG";
import careers4 from "../../../media/17.png";

import CarouselComponent from "../../UI/CarouselComponent";

const StaffCarousel = () => {
  return (
    <div className=" py-20">
      <h1 className="text-brown text-5xl font-medium text-center mb-12 tracking-wide">
        OUR TEAM
      </h1>
      <CarouselComponent
        className="py-20 justify-center align-center"
      >
        <div className="">
          <img
            className="m-auto max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%]"
            src={careers1}
          />
        </div>
        <div className="">
          <img
            className="m-auto max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%]"
            src={careers3}
          />
        </div>
        
        <div className="">
          <img
            className="m-auto max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%]"
            src={careers2}
          />
        </div>
      </CarouselComponent>
    </div>
  );
};
export default StaffCarousel;
