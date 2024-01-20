import lg from "../../../media/colono.jpg";
import ercp from "../../../media/11.png";
import col from "../../../media/colnew.png";
import eus from "../../../media/looo.png";
import fib from "../../../media/egdnew.png";
import { Link } from "react-router-dom";
import TestimonialCarousel from "./TestimonialCarousel";
import StaffCarousel from "./StaffCarousel";
import Map from "../../layout/Map";
import About from "./About";
import { Helmet } from "react-helmet-async";
import HomeCarousel from "./HomeCarousel";

const Home = (props) => {
  const services = [
    {
      img: fib,
      name: "EGD",
      description:
        "Upper GI endoscopy is a procedure to view the upper digestive tract.",
      questions: [
        {
          qs: "What is an upper GI endoscopy?",
          ans: "An upper GI endoscopy is done by a gastroenterologist, who has special training. An upper GI endoscopy can be done in a hospital or an outpatient office. Your doctor will look at the inside of your esophagus — the tube that links your stomach and your mouth —  your stomach and the start of your small intestine.\n An upper GI endoscopy can be helpful in finding health problems or figuring out the reason you are having certain symptoms, like trouble or pain when swallowing, pain in the stomach, or bleeding. In many cases, an upper GI endoscopy is a better test than X-rays, since the doctor is able to see more clearly.\n .",
        },
        {
          qs: "How is an EGD Done?",
          ans: "An EGD is done with an instrument called an endoscope. The endoscope is a long, thin tube outfitted with a camera and a bright light. It is inserted in the mouth and slowly passed through your upper GI, while the camera sends detailed video images to a monitor for analysis by your gastroenterologist\nTools can also be passed through the tube. They can be used to:. <br/> ● Remove objects that are lodged in the esophagus or stomach.<br/> ● Perform tissue biopsies and removing polyps. <br/> ● Dilate strictures (abnormal narrowing of a passage such as the esophagus).<br/> ● Stop bleeding.<br/> ● Perform endoscopic surgery.<br/> ● Perform laser surgery.<br/> ● Air pressure is also used to inflate the upper GI, so your doctor can see a larger area and see the lining in greater detail.",
        },
        {
            qs: "When is an Upper GI Endoscopy Necessary?",
            ans: "An EGD is often used to explore the hidden causes of inexplicable symptoms, including:\n <br/> ● Unexplained weight loss.<br/> ● Black or tarry stools.<br/> ● Anemia. <br/> ● Trouble swallowing.",
          },
          {
            qs: "How Should I Prepare for an Upper GI Endoscopy?",
            ans: "Since the procedure concerns your digestive tract, you may not eat anything up to eight hours prior. Your stomach and duodenum (the first part of the small intestine immediately beyond the stomach) must be empty so that they can be viewed in as much detail as possible. Your doctor may permit you to take sips of water. Do not take any medications or herbs that can cause bleeding, including:<br/> ● Antacids.<br/> ● Aspirin (Bayer, Excedrin).<br/> ● Ibuprofen (Motrin, Advil).<br/> ● Green tea.<br/> ● Vitamin E.Garlic. <br/> ● Anti-clotting medications (Coumadin, Plavix).<br/> ● Estrogen creams or patches. <br/> ● Diabetes medications.<br/> ●  Antidepressants. <br/> ● Chewing gum and smoking are also off-limits..",
          },
          {
            qs: "What Happens During an Upper GI Endoscopy??",
            ans: "During an upper GI endoscopy, a plastic mouth guard is placed in your mouth to keep it open, protect your teeth from the endoscope and prevent you from accidentally biting it.Monitors are connected to your body that keep track of your breathing, heartbeat, and blood pressure.\n You will be placed on your side, and your doctor will slowly guide the endoscope into your mouth and through your digestive tract. The camera on the end of the endoscope will send images to a monitor that your doctor will observe throughout the procedure to detect any abnormalities.\n The endoscope will release air into your stomach, inflating it so the lining can be more easily seen. If necessary, the doctor will pass surgical instruments through the tube to detach polyps or take biopsies.\n The whole procedure takes approximately 30 minutes.",
          },
          {
            qs:"What Happens After an Upper GI Endoscopy?",
            ans:"After the EGD, you’ll be closely monitored as the sedative wears off to ensure that there are no complications. You may feel bloated from the air that was in your stomach and be gassy. Also, your throat may be sore. Gargling with warm salt water can provide relief. Your doctor will tell you when you can eat again and when you can resume taking any medications you discontinued for the procedure.\n \n Be sure to make arrangements in advance for a responsible adult to drive you home. You cannot drive when you are under the influence of a sedative, even if it’s wearing off. It would also be helpful if the person who drove you home can stay with you for about two hours."
          }
      ],
    },
  
    {
      img: col,
      name: "Colonoscopy",
      description:
        "It examines the large intestine using a flexible tube with a camera to detect abnormalities or diseases.",
      questions: [
        {
          qs: "What is Colonoscopy?",
          ans: "A colonoscopy is a procedure that allows your doctor to see the entire length of your large intestine and rectum. It is the “gold standard” of colorectal exams because it is the most accurate colon cancer test. It not only detects abnormalities but can eliminate them before they become malignant. This makes a colonoscopy a great part of a preventative health regime.",
        },
        {
          qs: "Why do I need a colonoscopy?",
          ans: "Of all the colorectal exams available, a colonoscopy is best at detecting and removing growths or lesions before they become dangerous. Many other types of screenings only detect an abnormality after it has begun bleeding or exhibiting signs of a more advanced condition. \n \n This procedure can provide an accurate diagnosis without resorting to an operation. This is why a colonoscopy is the best choice for maintaining colon health.",
        },
        
        {
          qs: "How do I prepare for a colonoscopy?",
          ans: "To prepare for a colonoscopy, you’ll need to do a bowel prep before the procedure, which removes all traces of feces from your colon. A bowel prep typically includes medication changes or adjustments. Your doctor may adjust your medications up to seven days before your colonoscopy. Topping the list are blood thinners, including:<br/> ● Coumadin <br/> ● Plavix \n \n You’ll also need to stop taking: <br/> ● Antidiarrheal medications, including Imodium and Pepto Bismol. <br/> ● NSAIDs (non-steroidal anti-inflammatory drugs) such as Aleve or Advil<br/> ● Certain diabetic medications. <br/> ● Iron supplements. <br/> ● Fiber supplements such as Benefiber and Metamucil.\n \n Your doctor will put you on a clear liquid diet a day before the colonoscopy. A clear liquid is one you can read a magazine through. These include: <br/> ● Water <br/> ● Apple Juice <br/> ● Ginger Ale <br/> ● Broth (beef, vegetable, or chicken)\n \n One of the most important parts of bowel prep is clearing all traces of waste from your colon. This is so your doctor has an unobstructed view of your intestine and can clearly see any abnormalities. You’ll be asked to take a laxative or an enema to flush out all fecal matter. Because of this, you will have diarrhea until your colon is completely evacuated.",
        },

        {
          qs: "What happens during a colonoscopy?",
          ans: "A colonoscopy is an outpatient procedure that takes about 30 to 60 minutes. \n \n You will be asked to change into a hospital gown when you arrive. You will lie down on an examination table, and intravenous sedation will be administered. You will not be aware of what is happening during the colonoscopy or remember anything afterward.  \n After the anesthesia takes effect, your doctor will insert a colonoscope into your anus and guide it through your intestine. A colonoscope is a flexible tube equipped with a light and a camera. It is about five feet long (the length of your colon) and half an inch wide. Air is also introduced to inflate the colon, making its walls more visible. \n \n The colonoscope’s camera relays images to a monitor so your doctor can look at a detailed, real-time view of your intestine. The scope also has an attachment that can remove polyps or questionable-looking tissue for lab analysis.",
        },
        {
          qs: "What Happens After the Colonoscopy?",
          ans: "After the colonoscopy, you’ll stay under observation for one or two hours to make sure you’re okay. You’ll feel groggy and sluggish. You won’t be able to drive, so you’ll need someone to take you home. This must be someone you know rather than an Uber or taxi driver. You shouldn’t drive for about 24 hours after the procedure.\n \n Some rectal bleeding is normal if you have had a polyp removed and shouldn’t cause concern.\n \n You may feel bloated or cramped afterward as air is released from your colon. Walking may help pass the gas. Don’t be embarrassed. The staff knows this is a normal part of the process.",
        },
      ],
    },
    {
      img: ercp,
      name: "ERCP",
      description:
        "ERCP is a technique that uses X-ray to view the bile and pancreatic ducts",
      questions: [
        {
          qs: "What is an ERCP?",
          ans: "ERCP is a procedure conducted when a disorder of the bile ducts or pancreatic ducts is suspected. It combines upper gastrointestinal endoscopy and X-rays (fluoroscopy) to view, diagnose and treat obstructions and illnesses. An endoscope is a thin, flexible tube outfitted with a light and miniature camera.",
        },
        {
          qs: "Why an ERCP is done?",
          ans: "You may need ERCP to find the cause of unexplained abdominal pain or yellowing of the skin and eyes (jaundice). It may be used to get more information if you have pancreatitis or cancer of the liver, pancreas, or bile ducts. \n \n Other things that may be found with ERCP include: \n  <br/> ● Blockages or stones in the bile ducts <br/> ● Fluid leakage from the bile or pancreatic ducts <br/> ● Blockages or narrowing of the pancreatic ducts <br/> ● Tumors <br/> ● Infection in the bile ducts",
        },

        {
          qs: "How do I prepare for an ERCP?",
          ans: "Recommendations for ERCP preparation include the following: \n <br/> ● Your healthcare provider will explain the procedure and you can ask questions.<br/> ● You may be asked to sign a consent form that gives your permission to do the test. Read the form carefully and ask questions if something is not clear.<br/> ● Tell your healthcare provider if you have ever had a reaction to any contrast dye, or if you are allergic to iodine. <br/> ●  Tell your healthcare provider if you are sensitive to or are allergic to any medicines, latex, tape, or anesthesia.<br/> ● Do not to eat or drink liquids for 8 hours before the procedure. You may be given other instructions about a special diet for 1 to 2 days before the procedure.<br/> ● If you are pregnant or think you could be, tell your healthcare provider.<br/> ● Tell your healthcare provider of all medicines (prescribed and over-the-counter) and herbal supplements that you are taking. <br/> ● Tell your healthcare provider if you have a history of bleeding disorders or if you are taking any blood-thinning medicines (anticoagulants), aspirin, ibuprofen, naproxen, or other medicines that affect blood clotting. You may be told to stop these medicines before the procedure. <br/> ● If you have heart valve disease, your healthcare provider may give you antibiotics before the procedure. <br/> ● You will be awake during the procedure, but a sedative will be given before the procedure. Depending on the anesthesia used, you may be completely asleep and not feel anything. You will need someone to drive you home. <br/> ● Follow any other instructions your provider gives you to get ready.  ",
        },
        {
          qs: "What happens during an ERCP?",
          ans: "First, you’ll gargle with an anesthetic or have one sprayed in your throat. This will numb your throat to ease your gag reflex. Next, you’ll intravenously receive a sedative to keep you relaxed. General anesthesia may also be an option.Then, you’ll lie on your side or back on an X-ray table. A guard will be placed in your mouth to prevent you from biting the endoscope and to protect your teeth and mouth.\n Next, your doctor will guide an endoscope through your esophagus, stomach, and small intestine until it arrives at your bile ducts. Air may be blown into the area to enlarge it for easier viewing. This may make your abdomen feel bloated.\n Then a contrast medium is released into the ducts, and a particular type of X-ray imaging called fluoroscopy is done. A contrast medium is a dye that accentuates specific internal organs to be more easily seen and studied.\nDon’t worry, though. It won’t permanently color your bones, organs, or tissues. It will be eliminated in your urine and bowel movements.\n  After the bile duct has been examined, the endoscope is adjusted to face the pancreatic ducts, and the procedure is repeated.\n Video from the endoscope’s camera is transmitted in real-time to a computer screen for your doctor’s evaluation \n It’s also possible for small tools to be sent through the endoscope to:\n <br/> ● Break up or remove stones.<br/> ● Perform a biopsy. Brush cytology is a type of biopsy that enables your doctor to remove tissue from inside the ducts with a brush-like apparatus that attaches to the endoscope. The cells are then analyzed for abnormalities. <br/> ● Remove tumors from the ducts.<br/> ● Insert stents. These are small tubes inserted into narrow ducts so that they stay open. Temporary stents can also be used to stop bile leaks.\n \n  Other procedures may also be done at this time, including removal of tissue, fluid samples, gallstones, or various obstructions.ERCP can take anywhere from 30 minutes to two hours. This depends upon the extent of the procedures your doctor performs.",
        },
        {
          qs: " What Happens After ERCP?",
          ans: " After ERCP, you will spend 1 to 2 hours in a recovery room to make sure you are alright. Your blood pressure, pulse, and breathing will be monitored to ensure they are stable. Your throat may be sore for a day or two, making swallowing uncomfortable, and you could briefly experience bloating and nausea.\n You may need to be hospitalized overnight, and your doctor will determine if this is necessary. Until your gag reflex resumes, you won’t be permitted to eat or drink anything. Your doctor will also let you know if you can resume eating your normal diet and taking your regular medications.",
        },
      ],
    },
    {
      img: eus,
      name: "EUS",
      description:
        "EUS helps doctors see, evaluate, and diagnose conditions in and near the gastrointestinal tract.",
      questions: [
        {
          qs: "What is an EndoScopic Ultrasound?",
          ans: "Endoscopic ultrasonography (EUS) allows your doctor to examine your esophageal and stomach linings as well as the walls of your upper and lower gastrointestinal tract. The upper tract consists of the esophagus, stomach and duodenum; the lower tract includes your colon and rectum. EUS is also used to study other organs that are near the gastrointestinal tract, including the lungs, liver, gall bladder and pancreas. \n Endoscopists are highly trained specialists who welcome your questions regarding their credentials, training and experience. Your endoscopist will use a thin, flexible tube called an endoscope that has a built-in miniature ultrasound probe. Your doctor will pass the endoscope through your mouth or anus to the area to be examined. Your doctor then will use the ultrasound to use sound waves to create visual images of the digestive tract.",
        },
        {
          qs: "Why do I need an EndoScopic Ultrasound?",
          ans: "Your doctor may have found a lesion or abnormality at a prior endoscopy study (upper endoscopy or colonoscopy) or on an X-ray test, such as a computerized tomography (CT) scan.\n An endoscopic ultrasound (EUS) will allow your doctor to see very detailed ultrasound images of the lesion or abnormality. The bowel wall and nearby organs and structures (such as lymph nodes or blood vessels) can also be seen. If a biopsy (taking a small piece of tissue to look at under a microscope) is needed, fine needle aspiration (FNA) can be performed. Your doctor will use the ultrasound image to guide a thin needle through the endoscope to take the biopsy.",
        },

        {
          qs: "How do I prepare for an EUS?",
          ans: "For EUS of the upper gastrointestinal tract, you should have nothing to eat or drink, usually for six hours before the examination. Your doctor will tell you when to start this fasting and whether it is advisable to take your regular prescription medications.\n For EUS of the rectum or colon, your doctor will instruct you to either consume a colonic cleansing solution or to follow a clear liquid diet combined with laxatives or enemas prior to the examination. The procedure might have to be rescheduled if you don’t follow your doctor’s instructions carefully.    ",
        },
        {
          qs: "What happens during an EUS?",
          ans: "Practices vary among doctors, but for an EUS examination of the upper gastrointestinal tract, some endoscopists spray your throat with a local anesthetic before the test begins. Most often you will receive sedatives intravenously to help you relax. You will most likely begin by lying on your left side. After you receive sedatives, your endoscopist will pass the ultrasound endoscope through your mouth, esophagus and stomach into the duodenum. The instrument does not interfere with your ability to breathe. The actual examination generally takes less than 60 minutes. Many do not recall the procedure. Most patients consider it only slightly uncomfortable, and many fall asleep during it. \n An EUS examination of the lower gastrointestinal tract can often be performed safely and comfortably without medications, but you’ll receive a sedative if the examination will be prolonged or if the doctor will examine a significant distance into the colon. You will start by lying on your left side with your back toward the doctor. Most EUS examinations of the rectum generally take less than 45 minutes. You should know that if a needle biopsy of a lesion or drainage of a cyst is performed during the EUS, then the procedure will be longer and may take up to two hours.                ",
        },
        {
          qs: "What happens after EUS?",
          ans: "If you received sedatives, you will be monitored in the recovery area until most of the sedative medication’s effects have worn off. If you had an upper EUS, your throat might be a little sore. You might feel bloated because of the air and water that were introduced during the examination.\n You’ll be able to eat after you leave the procedure area, unless you’re instructed otherwise.\n Your doctor generally can inform you of the preliminary results of the procedure that day, but the results of some tests, including biopsies, may take several days.",
        },
        {
          qs: "What are the possible complications of EUS?",
          ans: " Although complications can occur, they are rare when doctors with specialized training and experience perform the EUS examination. Bleeding might occur at a biopsy site, but it’s usually minimal and rarely requires follow-up. You might have a slight sore throat for a day or so. Nonprescription anesthetictype throat lozenges help soothe a sore throat. \n Other potential but uncommon risks of EUS include a reaction to the sedatives used, aspiration of stomach contents into your lungs, infection, and complications from heart or lung diseases. One major but very uncommon complication of EUS is perforation. This is a tear through the lining of the intestine that might require surgery to repair.\n The possibility of complications increases slightly if a needle biopsy is performed during the EUS examination, including an increased risk of pancreatitis or infection. These risks must be balanced against the potential benefits of the procedure and the risks of alternative approaches to the condition.",
        },
      ],
    },
   
  ];

  return (
    <>
        <Helmet> 
          <title> Kaumudi Somnay MD|GASTROENTEROLOGIST|Flushing,NY|Valley Stream,NY</title>
          <meta name="description" content=" Dr. Kaumudi Somnay is a "/>
          <link rel="canonical" href="/Home" />
        </Helmet>
    <HomeCarousel/>
      <div className="lg:flex m-8 mb-32">
      <div className="sm:mx-auto lg:w-7/12 sm:grid z-100 grid-cols-2 2xl:ml-[7%]">
  {services.map((item) => (
    <div className="flex my-6 sm:m-3 justify-center">
      <div className="group h-[20rem] w-[26rem] [perspective:1000px]">
        <div className="relative h-full w-full rounded-xl shadow-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
          <div className="absolute inset-0 bg-white rounded-xl p-16 [backface-visibility:hidden]">
            <img
              className="h-28 rounded-full m-4 mx-auto"
              src={item.img}
              grid
              alt="Logo"
            />
            <h2 className="font-montserrat text-center text-brown font-semibold text-2xl">
              {item.name}
            </h2>
          </div>
          <div className="absolute inset-0 h-full w-full rounded-xl bg-skin px-12 py-20 text-center [transform:rotateX(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <p className="text-gry">{item.description}</p>
              <button
                className="my-8 bg-transparent hover:bg-brown text-brown hover:text-white py-2 px-5 border-2 border-brown hover:border-transparent tracking-widest"
                onClick={() => {
                  props.onClick();
                  props.state(item);
                }}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>



        {/* <div className="mx-auto lg:w-7/12 grid grid-cols-2 gap-4 -mt-16 md:-mt-24 2xl:ml-[7%]">
  {services.map((item) => (
    <div className="flex my-6 sm:m-3 justify-center">
      <div className="group w-[26rem] h-[20rem] perspective-1000">
        <div className="relative w-full h-full rounded-xl shadow-2xl transform transition-all duration-500 transform-style-preserve-3d group-hover:rotate-x-180">
          <div className="absolute inset-0 bg-white rounded-xl p-16">
            <img
              className="h-28 rounded-full m-4 mx-auto"
              src={item.img}
              alt="Logo"
            />
            <h2 className="font-montserrat text-center text-brown font-semibold text-2xl">
              {item.name}
            </h2>
          </div>
          <div className="absolute inset-0 w-full h-full rounded-xl bg-skin px-12 py-20 text-center backface-hidden group-hover:rotate-x-180">
            <div className="flex min-h-full flex-col items-center justify-center">
              <p className="text-gry">
                {item.description}
              </p>
              <button
                className="my-8 bg-transparent hover:bg-brown text-brown hover:text-white py-2 px-5 border-2 border-brown hover:border-transparent tracking-widest"
                onClick={() => {
                  props.onClick();
                  props.state(item);
                }}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div> */}

        <div className="lg:w-5/12 my-24 md:m-20">
          <p className="text-brown font-medium ">
            <span className="font-black">━━━━━━━</span>
            <span className="tracking-widest mx-2">GASTROENTEROLOGIST</span>
          </p>
          <h1 className="text-4xl md:text-5xl font-medium my-4 md:my-8 text-brown">
            Gastroenterology Services
          </h1>
          <p className="text-gry font-medium tracking-wide py-2">
          Dr. Somnay consults on various kinds of gastrointestinal conditions. She performs basic endoscopies including EGD (esophagogastroduodenoscopy) and colonoscopies. She also specializes in advanced endoscopic procedures such as ERCP (endoscopic retrograde cholangiopancreatography), enteral stents, and EUS (endoscopic ultrasound).
          </p>
          <Link to="/services">
            <button className="mt-12 bg-transparent hover:bg-brown text-brown hover:text-white py-2 px-5 border-2 border-brown hover:border-transparent tracking-widest">
              OTHER PROCEDURES
            </button>
          </Link>
        </div>
      </div>
      <About/>
      <StaffCarousel/>
      <TestimonialCarousel />
      <Map />
    </>
  );
};
export default Home;
