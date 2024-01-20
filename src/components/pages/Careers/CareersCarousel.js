import careers1 from "../../../media/careers1.jpeg";
import careers2 from "../../../media/careers2.jpeg";
import careers3 from "../../../media/careers3.jpeg";
import careers4 from "../../../media/careers4.jpeg";
import careers5 from "../../../media/careers5.jpeg";
import CarouselComponent from "../../UI/CarouselComponent";

const CareersCarousel = () => {
  return (
    <div className="bg-skin py-20">
      <h1 className="text-brown text-5xl font-medium text-center mb-12">
        Clinical Rotations
      </h1>
      <CarouselComponent
        className="py-20 justify-center align-center"
      >
        <div className="">
          <img
            className="m-auto max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%]"
            src={careers2}
          />
        </div>
       
        {/* <div className="">
          <img
            className="m-auto max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%]"
            src={careers3}
          />
        </div> */}

        <div className="">
          <img
            className="m-auto max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%]"
            src={careers4}
          />
        </div>
        <div className="">
          <img
            className="m-auto max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%]"
            src={careers5}
          />
        </div>
        {/* <div className="">
          <img
            className="m-auto max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%]"
            src={careers1}
          />
        </div> */}
      </CarouselComponent>
    </div>
  );
};
export default CareersCarousel;
