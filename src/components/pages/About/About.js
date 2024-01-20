import YoutubeEmbed from "./YoutubeEmbed";
import snimg from "../../../media/ks1.png";
import lg from "../../../media/d.png";
import ox from "../../../media/ox.png";
import cig from "../../../media/cignaaa.jpeg";
import a from "../../../media/a.jpeg";
import bc from "../../../media/bc.png";
import em from "../../../media/em.png";
import ghi from "../../../media/GHI.png";
import gw from "../../../media/GW.png";
import he from "../../../media/hf.png";
import hu from "../../../media/hu.jpeg";
import mg from "../../../media/mg.jpeg";
import mvp from "../../../media/mvp.webp";
import { Helmet } from "react-helmet-async";



const About = (props) => {
  const insurances = [
    { name: "Aetna Choice POS", logo: a },
    { name: "Aetna HMO", logo: a },
    { name: "BCBS Blue Card PPO", logo: bc },
    { name: "CIGNA HMO", logo: cig },
    { name: "CIGNA Open Access", logo: cig },
    { name: "CIGNA PPO", logo: cig },
    { name: "Empire BCBS HMO", logo: em },
    { name: "Empire BCBS PPO", logo: em },
    { name: "GHI PPO", logo: ghi },
    { name: "Healthfirst New York", logo: he },
    { name: "Humana ChoiceCare Network PPO", logo: hu },
    { name: "MagnaCare PPO", logo: mg },
    
    { name: "Oxford Health Freedom", logo: ox },
    { name: "Oxford Health Liberty", logo: ox }, 
    { name: "United Healthcare - Direct Choice Plus POS", logo: lg },
    { name: "United Healthcare - Direct Options PPO", logo: lg },
  ];
  return (
    <>
     <Helmet> 
          <title> Kaumudi Somnay MD</title>
          <meta name="description" content=" Dr. Kaumudi Somnay is a gastroenterologist in Flushing, New York and Valley Streamm who accepts following insurances"/>
          <link rel="canonical" href="/Insurances" />
        </Helmet>
      {/* <div className="grid md:grid-cols-2 font-montserrat  bg-skin p-4 pt-8 lg:p-20 xl:px-[15%] 2xl:pl-[20%] 2xl:pr-[25%]">
        {/* <div className="md:px-5 ">
          <img
            className="m-auto md:ml-auto md:h-[44rem] shadow-md dark:shadow-gray-100 "
            src={snimg}
            alt="Dr. Sonmay"
          />
        </div> 

        <div className="px-4 sm:px-12 ">
          <p className="text-brown font-medium tracking-widest mt-12 md:my-0">INTRODUCTION</p>
          <h1 className="text-5xl font-medium my-5">Dr Kaumudi Somnay</h1>
          <p className="text-gry font-medium tracking-wide py-2">
            Dr. Kaumudi Somnay is a gastroenterologist certified by the American
            Board of Internal Medicine with 30 years of experience. She
            completed a fellowship along with an advanced interventional year of
            training at Brigham and Women's Hospital, Harvard Medical
            School. She was a member of the teaching faculty at Johns Hopkins
            University School of Medicine, SUNY Downstate Medical Center, and
            New York Presbyterian, Queens.
          </p>
          <p className="text-gry font-medium tracking-wide py-2">
            Dr. Somnay was a recipient of the "Patient’s Choice Award"
            (2012-2013) and "Compassionate Doctor Recognition” from Vitals and
            was named one of the “Top Ten Doctors” by Murray Hill.
          </p>
          <p className="text-gry font-medium tracking-wide py-2">
            Dr. Somnay performs basic endoscopies including EGD
            (esophagogastroduodenoscopy) and colonoscopies. She also specializes
            in procedures such as ERCP (endoscopic retrograde
            cholangiopancreatography) enteral stents, and EUS (endoscopic
            ultrasound).
          </p>
        </div>
      </div> */}
      {/* <div className="text-center mt-20 mb-32">
        <YoutubeEmbed embedId="rokGy0huYEA"></YoutubeEmbed>
      </div> */}
      <div className="bg-skin py-20 sm:px-10 md:px-10 2xl:px-28 font-montserrat">
        <h1 className="text-5xl font-medium text-center text-brown tracking-wide mb-12 underline">
          Insurances Accepted
        </h1>
        <div className=" grid md:grid-cols-2 xl:grid-cols-3">
          {insurances.map((item) => (
            <div className="flex bg-white m-4">
              <img
                className="h-20 rounded-full m-4"
                src={item.logo}
                alt="Logo"
              />
              <div className="my-auto mx-4 text-2xl text-gry">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default About;
