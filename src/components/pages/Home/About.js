import { Link } from "react-router-dom";
import snimg from "../../../media/ks1.png";
const About = (props) => {
  const appointments = [
    {
      des: "Attending in Gastroenterology, Department of Internal Medicine, New York-Presbyterian Queens Hospital.",
      startDate: "Nov 2010",
      endDate: "Present",
    },
    {
      des: "Acting Fellowship Program Director, Gastroenterology, Department of Internal Medicine, New York-Presbyterian Queens Hospital, Weill Medical College of Cornell University.",
      startDate: "Apr 2007",
      endDate: "Jan 2009",
    },
    {
      des: "Director of Endoscopic Research; Associate Fellowship Program Director- Academic Appointment and Teaching Appointment, Division of Gastroenterology, Department of Internal Medicine, New York-Presbyterian Queens Hospital, Weill Medical College of Cornell University.",
      startDate: "Oct 2005",
      endDate: "Apr 2007",
    },
    {
      des: "Director of Endoscopy, SUNY Downstate Medical Center; Kings County Hospital Medical Center.",
      startDate: "Jan 2004",
      endDate: "Oct 2005",
    },
    {
      des: "Visiting Associate Professor of Medicine, SUNY Downstate Medical Center.",
      startDate: "Jan 2004",
      endDate: "Oct 2005",
    },
    {
      des: "Assistant Professor of Medicine- Academic Appointment, Medical Staff Privileges, Department of Medicine, Johns Hopkins University School of Medicine.",
      startDate: "Sep 1999",
      endDate: "Dec 2003",
    },
  ];

  const fellowship = [
    {
      des: "Advanced Therapeutic Fellow in Endoscopy, trained in diagnostic and therapeutic ERCP and Endoscopic Ultrasound at the Brigham and Women’s Hospital and Harvard Medical School, Boston, MA. ",
      startDate: "July 1998",
      endDate: "June 1999",
    },
    {
      des: "Clinical and Research Fellow, Gastroenterology Division, Brigham and Women’s Hospital, Harvard Medical School, Boston, MA.",
      startDate: "July 1995",
      endDate: "June 1999",
    },
  ];
  return (
    <div className="bg-skin px-[1%] xl:px-[6%] 2xl:px-[12%] 3xl:px-[18%] py-[8%]">
      {/* <div className="grid md:grid-cols-2 font-montserrat  bg-skin p-4 pt-8 lg:p-20 xl:px-[15%] 2xl:pl-[20%] 2xl:pr-[25%]">
        <div className="md:px-5 ">
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

      <div className="lg:grid grid-cols-4">
        <div className="col-span-1">
          <img
            className="mx-[%] shadow-md dark:shadow-gray-100 "
            src={snimg}
            alt="Dr. Sonmay"
          />
        </div>

        <div className="mx-[4%] col-span-3 ">
          <p className="text-brown font-medium tracking-widest mt-12 md:my-0">
            INTRODUCTION
          </p>
          <h1 className="text-5xl font-medium my-5">Kaumudi Somnay, MD, FACG, FASGE</h1>
          <p className="text-gry font-medium tracking-wide py-2">
            Dr. Kaumudi Somnay is a gastroenterologist certified by the American
            Board of Internal Medicine with 30 years of experience. She
            completed a fellowship along with an advanced interventional year of
            training at Brigham and Women's Hospital, Harvard Medical School.
            She was a member of the teaching faculty at Johns Hopkins University
            School of Medicine, SUNY Downstate Medical Center, and New York
            Presbyterian, Queens.
          </p>
          <p className="text-gry font-medium tracking-wide py-2">
            Dr. Somnay was a recipient of the "Patient's Choice Award"
            (2012-2013) and "Compassionate Doctor Recognition” from Vitals and
            was named one of the “Top Ten Doctors” by Murray Hill.
          </p>
          <p className="text-gry font-medium tracking-wide py-2">
          Dr. Somnay performs basic endoscopies including EGD
            (esophagogastroduodenoscopy) and colonoscopies. She also specializes
            in advanced endoscopic procedures such as ERCP (endoscopic retrograde
            cholangiopancreatography), enteral stents, and EUS (endoscopic
            ultrasound). She is also actively involved in academia, teaching and research with students, interns and residents.

          </p>
        </div>
      </div>

      <div className="mt-12 mx-[4%] lg:mx-[0%]">
        <p className="text-brown font-medium tracking-widest mt-12 md:my-0">
          LANGUAGES SPOKEN
        </p>
        <ul className="flex py-2">
          <li className="mr-4 text-gry font-medium tracking-wide">English</li>
          <li className="mr-4 text-gry font-medium tracking-wide">Hindi</li>
          <li className="mr-4 text-gry font-medium tracking-wide">Marathi</li>
          <li className="mr-4 text-gry font-medium tracking-wide">Spanish</li>
        </ul>
      </div>

      <div className="mt-12 mx-[4%] lg:mx-[0%]">
        <p className="text-brown font-medium tracking-widest mt-12 md:my">
          EXPERTISE
        </p>
        <p className="text-gry font-medium tracking-wide py-2">
          Gastroesophageal reflux disease, Achalasia, Esophageal cancer, Celiac
          Disease, Gastritis, Peptic ulcer disease, Cholecystitis, Cholangitis,
          Gallstones, Gastric cancer, Gastrointestinal Stromal Tumors(GIST),
          Pancreatitis, Pancreatic cancer, Ampullary cancer, Hepatitis,
          Enteritis, Crohn's Disease, Irritable Bowel Syndrome, Enterocolitis,
          Small intestinal bacterial overgrowth (SIBO), Diverticulitis,
          Hemorrhoids, Ulcerative Colitis, Clostridium difficile colitis, Colon
          cancer. Advanced Endoscopic Procedures including ERCP, EUS, small
          bowel capsule endoscopy, enteral stents, pancreatico-biliary stents,
          colonic stents
        </p>
      </div>

      <div className="mt-12 mx-[4%] lg:mx-[0%]">
        <h1 className="text-brown font-medium tracking-widest ">
          PROFESSIONAL APPOINTMENTS
        </h1>
        {appointments.map((item) => (
          <div className="grid grid-cols-4 text-gry font-medium tracking-wide py-2">
            <p className="col-span-3">{item.des}</p>
            <p className="col-span-1 ml-auto">
              {item.startDate} - {item.endDate}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 mx-[4%] lg:mx-[0%]">
        <h1 className="text-brown font-medium tracking-widest mt-12 md:my-0">
          FELLOWSHIP
        </h1>
        {fellowship.map((item)=>(
            <div className="grid grid-cols-4 text-gry font-medium tracking-wide py-2">
            <p className="col-span-3">
              {item.des}
            </p>
            <p className="col-span-1 ml-auto">{item.startDate} - {item.endDate}</p>
          </div>
        ))}
        
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-[4%] lg:mx-[0%]">
        <div className="mr-2 mt-12 ">
          <h1 className="text-brown font-medium tracking-widest ">RESIDENCY</h1>
          <p className="text-gry font-medium tracking-wide py-2">
            SUNY Downstate Health Sciences University
          </p>
        </div>
        <div className="mr-2 mt-12 ">
          <h1 className="text-brown font-medium tracking-widest ">SCHOOL</h1>
          <p className="text-gry font-medium tracking-wide py-2">
          King Edward Memorial Hospital & Seth G.S. Medical College, India
          </p>
        </div>
        <div className="mr-2 mt-12 ">
          <h1 className="text-brown font-medium tracking-widest ">BOARD</h1>
          <p className="text-gry font-medium tracking-wide py-2">
          American Board of Internal Med-Gastroenterology
          </p>
        </div>
        <div className="mr-2 mt-12">
  <h1 className="text-brown font-bold tracking-widest underline">
    <a href="https://scholar.google.com/scholar?hl=en&amp;as_sdt=0%2C5&amp;q=Kaumudi+somnay&amp;btnG=" target="_blank">PUBLICATIONS</a>
  </h1>
</div>

      </div>
    </div>
  );
};
export default About;
