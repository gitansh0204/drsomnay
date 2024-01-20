import useInput from "../../../hooks/use-input";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "../../../firebaseConfig";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import CareersCarousel from "./CareersCarousel";
import { useNavigate } from "react-router-dom";
import TestimonialCarousel from "./TestimonialCarousel";
const isNotEmpty = (value) => value.trim() !== "";

const Careers = (props) => {
  const idRef=useRef();
  const navigate = useNavigate();
  const [link, setLink] = useState("");
  const [file, setFile] = useState(null);
  const [per, setPer] = useState(null);

  const [idLink, setIdLink] = useState("");
  const [idFile, setIdFile] = useState(null);
  const [idPer, setIdPer] = useState(null);

  const [aamcPer, setAamcPer] = useState(null);
  const [aamcFile, setAamcFile] = useState(null);
  const [aamcLink, setAamcLink] = useState("");

  const [score1Link, setScore1Link] = useState("");
  const [score1File, setScore1File] = useState(null);
  const [score1Per, setScore1Per] = useState(null);

  const [score2Link, setScore2Link] = useState("");
  const [score2File, setScore2File] = useState(null);
  const [score2Per, setScore2Per] = useState(null);
  
  const [visaLink, setVisaLink]= useState("");
  const [visaFile, setVisaFile]=useState(null);
  const [visaPer, setVisaPer]=useState(null);

  const [formSubmitted, setFormSubmitted]=useState(false);

  const {
    value: yourNameValue,
    isValid: yourNameIsValid,
    hasError: yourNameHasError,
    valueChangeHandler: yourNameChangeHandler,
    inputBlurHandler: yourNameBlurHandler,
    reset: resetyourName,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isNotEmpty);
  const {
    value: phoneValue,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhone,
  } = useInput(isNotEmpty);
  const {
    value: dobValue,
    isValid: dobIsValid,
    hasError: dobHasError,
    valueChangeHandler: dobChangeHandler,
    inputBlurHandler: dobBlurHandler,
    reset: resetDob,
  } = useInput(isNotEmpty);
  const {
    value: locationValue,
    isValid: locationIsValid,
    hasError: locationHasError,
    valueChangeHandler: locationChangeHandler,
    inputBlurHandler: locationBlurHandler,
    reset: resetLocation,
  } = useInput(isNotEmpty);
  const {
    value: interestValue,
    isValid: interestIsValid,
    hasError: interestHasError,
    valueChangeHandler: interestChangeHandler,
    inputBlurHandler: interestBlurHandler,
    reset:resetInterest,
  } = useInput(isNotEmpty);
  const {
    value: scoreValue,
    isValid: scoreIsValid,
    hasError: scoreHasError,
    valueChangeHandler: scoreChangeHandler,
    inputBlurHandler: scoreBlurHandler,
    reset: resetScore,
  } = useInput(isNotEmpty);
  const {
    value: ckValue,
    isValid: ckIsValid,
    hasError: ckHasError,
    valueChangeHandler: ckChangeHandler,
    inputBlurHandler: ckBlurHandler,
    reset: resetCk,
  } = useInput(isNotEmpty);
  const {
    value: startDateValue,
    isValid: startDateIsValid,
    hasError: startDateHasError,
    valueChangeHandler: startDateChangeHandler,
    inputBlurHandler: startDateBlurHandler,
    reset: resetStartDate,
  } = useInput(isNotEmpty);
  const {
    value: endDateValue,
    isValid: endDateIsValid,
    hasError: endDateHasError,
    valueChangeHandler: endDateChangeHandler,
    inputBlurHandler: endDateBlurHandler,
    reset: resetEndDate,
  } = useInput(isNotEmpty);
  const {
    value: visaValue,
    isValid: visaIsValid,
    hasError: visaHasError,
    valueChangeHandler: visaChangeHandler,
    inputBlurHandler: visaBlurHandler,
    reset: resetVisa,
  } = useInput(isNotEmpty);

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      console.log(name);
      const storageRef = ref(storage, `/resumes/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPer(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setLink(downloadURL);
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + idFile.name;
      console.log(name);
      const storageRef = ref(storage, `/ids/${idFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, idFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setIdPer(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setIdLink(downloadURL);
          });
        }
      );
    };
    idFile && uploadFile();
  }, [idFile]);

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + aamcFile.name;
      console.log(name);
      const storageRef = ref(storage, `/ids/${aamcFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, aamcFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setAamcPer(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setAamcLink(downloadURL);
          });
        }
      );
    };
    aamcFile && uploadFile();
  }, [aamcFile]);

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + score1File.name;
      console.log(name);
      const storageRef = ref(storage, `/ids/${score1File.name}`);
      const uploadTask = uploadBytesResumable(storageRef, score1File);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setScore1Per(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setScore1Link(downloadURL);
          });
        }
      );
    };
    score1File && uploadFile();
  }, [score1File]);

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + score2File.name;
      console.log(name);
      const storageRef = ref(storage, `/ids/${score2File.name}`);
      const uploadTask = uploadBytesResumable(storageRef, score2File);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setScore2Per(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setScore2Link(downloadURL);
          });
        }
      );
    };
    score2File && uploadFile();
  }, [score2File]);

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + visaFile.name;
      console.log(name);
      const storageRef = ref(storage, `/ids/${visaFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, visaFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setVisaPer(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setVisaLink(downloadURL);
          });
        }
      );
    };
    visaFile && uploadFile();
  }, [visaFile]);

  console.log(link);
  console.log(idLink);

  let formIsValid = false;
  const resumeChangeHandler = (event) => {
    setFile(event.target.files[0]);
  };
  const idChangeHandler = (event) => {
    setIdFile(event.target.files[0]);
  };
  const aamcChangeHandler = (event) => {
    setAamcFile(event.target.files[0]);
  };
  const score1ChangeHandler = (event) => {
    setScore1File(event.target.files[0]);
  };
  const score2ChangeHandler = (event) => {
    setScore2File(event.target.files[0]);
  };
  const visaFileChangeHandler=(event)=>{
    setVisaFile(event.target.files[0]);
  }

  if (yourNameIsValid && emailIsValid && phoneIsValid) {
    formIsValid = true;
  }
  const data = {
    name:yourNameValue,
    email:emailValue,
    phone:phoneValue,
    dob:dobValue,
    score1:scoreValue,
    score2:ckValue,
    startDate:startDateValue,
    endDate:endDateValue,
    interest:interestValue,
    resume: link,
    id:idLink,
    score1Link:score1Link,
    score2Link:score2Link,
    aamc:aamcLink,
    visa:visaValue,
    visaLink:visaLink
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    
    const resumeRef = collection(db, "Careers");
    addDoc(resumeRef, {
      Name: yourNameValue,
      Email: emailValue,
      Phone: phoneValue,
      Resume: link,
      Id: idLink,
      Aamc: aamcLink,
      VisaFile:visaLink,
      Visa:visaValue,
      Score1Link: score1Link,
      Score2Link: score2Link,
      Dob: dobValue,
      StartDate: startDateValue,
      EndDate: endDateValue,
      Score1: scoreValue,
      Score2: ckValue,
      FutureInterest: interestValue,

    });
    

    console.log("submitted form");
    

    try {
      const response = await fetch('http://localhost:5000/sendmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Failed to send email');
      }
  
      // Do something with the response if needed
      setFormSubmitted(true);
    } catch (error) {
      console.log('Error sending email:', error);
    }
    resetEmail();
    resetyourName();
    resetPhone();
    resetDob();
    resetScore();
    resetStartDate();
    resetEndDate();
    resetCk();
    resetVisa();
    resetInterest();
    idChangeHandler();
    setLink("");
    setAamcLink("");
    setIdLink("");
    setScore1Link("");
    setScore2Link("");
    setVisaLink("");
    setVisaFile(null);
    setFile(null);
    setAamcFile(null);
    setScore1File(null);
    setScore2File(null);
    setPer(null);
    setIdPer(null);
    setAamcPer(null);
    setScore1Per(null);
    setScore2Per(null);
    setIdFile(null);
  };

  return (

    <>
        <CareersCarousel />
      <div className="break-word px-[2%] sm:px-[3%] md:px-[4%] lg:px-[6%] xl:px-[8%] py-12">
        <p className="text-justify text-gry mx-2 mt-16">
          <p className="uppercase font-medium tracking-widest my-2">
            Clinical Rotations :{" "}
          </p>
          Clinical rotations are a vital part of medical training in the US. We
          offer a clinic-based rotation with on-site operating center for both
          US and foreign medical students and graduates. In this hands-on
          rotation, which can vary from one to three months, trainees work in
          clinics in the heart of New York under guidance of Dr. Somnay, a
          board-certified Gastroenterologist, to gain experience in various
          aspects of healthcare including seeing and managing patients,
          documenting notes in the electronic medical record and involvement in
          various office-based procedures. By the end of the rotation,
          applicants are trained for a smooth transition into residency.
        </p>
         
        <p className="text-justify text-gry mx-2">
          {/* Highlighted Features: */}
          <p className="uppercase font-medium tracking-widest my-2">
            Highlighted Features :{" "}
          </p>

          <ul>
            <li className="">
              ● A dedicated hour for group didactics and discussion of board
              questions for clinical reasoning enhancement and exam preparation.
            </li>
            <li className="">
              ● Opportunity to observe and assist in various endoscopic
              procedures like esophagogastroduodenoscopy, colonoscopy, and other
              advanced procedures in our on-site operating center.
            </li>
            <li className="">
              ● Access and experience with the EMR including pre-clinic chart
              reviewing and note and procedure documentation.
            </li>
          </ul>
        </p>
      </div>

      <div className="font-montserrat sm:mx-[15%] md:mx-[8%] lg:mx-[13%] xl:mx-[17%] my-24">
        <p className="text-center text-gry mx-2  mb-4"></p>
        <p className="text-center mx-2 mb-12 uppercase tracking-widest mt-12 ">
          Interested candidates must complete the following form to apply:
        </p>
        {!formSubmitted && <form className="text-center text-gry" onSubmit={submitHandler}>
          <div className="grid md:grid-cols-2">
            <div className={`relative m-4 `}>
              <input
                type="text"
                id="name"
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gry bg-transparent rounded-none border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-brown focus:outline-none focus:ring-0 focus:border-brown peer ${yourNameHasError? "border-brown":""}`}
                placeholder=" "
                value={yourNameValue}
                onChange={yourNameChangeHandler}
                onBlur={yourNameBlurHandler}
              />
              <label
                htmlFor="name"
                className={`absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-brown peer-focus:dark:text-brown peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 `}
              >
                Your Name
              </label>
              {yourNameHasError && (
                <p className="error-text text-left">
                  Please enter a valid name.
                </p>
              )}
              {!yourNameHasError && (
                <p>
                  <br />
                </p>
              )}
            </div>

            <div className="relative m-4">
              <input
                type="text"
                id="email"
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gry bg-transparent rounded-none border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-brown focus:outline-none focus:ring-0 focus:border-brown peer ${emailHasError? "border-brown":""}`}
                placeholder=" "
                value={emailValue}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-brown peer-focus:dark:text-brown peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Email
              </label>
              {emailHasError && (
                <p className="error-text text-left">Please enter an email.</p>
              )}
              {!emailHasError && (
                <p>
                  <br />
                </p>
              )}
            </div>

            <div className="relative m-4">
              <input
                type="phone"
                id="phone"
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gry bg-transparent rounded-none border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-brown focus:outline-none focus:ring-0 focus:border-brown peer ${phoneHasError? "border-brown":""}`}
                placeholder=" "
                value={phoneValue}
                onChange={phoneChangeHandler}
                onBlur={phoneBlurHandler}
              />
              <label
                htmlFor="phone"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-brown peer-focus:dark:text-brown peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Phone
              </label>
              {phoneHasError && (
                <p className="error-text text-left">
                  Please enter a valid Phone.
                </p>
              )}
              {!phoneHasError && (
                <p>
                  <br />
                </p>
              )}
            </div>

            <div className="relative m-4">
              <input
                type="date"
                id="dateofbirth"
                className={`block text-right px-2.5 pb-2.5 pt-4 w-full text-sm text-gry bg-transparent rounded-none border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-brown focus:outline-none focus:ring-0 focus:border-brown peer ${dobHasError? "border-brown":""}`}
                placeholder=" "
                value={dobValue}
                onChange={dobChangeHandler}
                onBlur={dobBlurHandler}
              />
              <label
                htmlFor="dateofbirth"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform top-3.5 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-brown peer-focus:dark:text-brown peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1/3 peer-focus:top-3.5 left-1"
              >
                Date of Birth
              </label>
              {dobHasError && (
                <p className="error-text text-left">
                  Please enter a valid date.
                </p>
              )}
              {!dobHasError && (
                <p>
                  <br />
                </p>
              )}
            </div>

            <div className="relative m-4">
              <input
                type="text"
                id="score"
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gry bg-transparent rounded-none border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-brown focus:outline-none focus:ring-0 focus:border-brown peer ${scoreHasError? "border-brown":""}`}
                placeholder=" "
                value={scoreValue}
                onChange={scoreChangeHandler}
                onBlur={scoreBlurHandler}
              />
              <label
                htmlFor="score"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-brown peer-focus:dark:text-brown peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                USMLE Score Step-1
              </label>
              {scoreHasError && (
                <p className="error-text text-left">
                  Please enter a valid Score.
                </p>
              )}
              {!scoreHasError && (
                <p>
                  <br />
                </p>
              )}
            </div>

            <div className="relative m-4">
              <input
                type="file"
                id="score1"
                className={`block pl-[7rem] s:pl-[17rem] xs:pl-[10rem] sm:pl-[14rem] md:pl-[10rem] lg:pl-[12rem] xl:pl-[12rem] 2xl:pl-[17rem] 3xl:pl-[22rem] pr-[0.5rem] pb-2.5 pt-4 w-full text-sm text-gry bg-transparent rounded-none border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-brown focus:outline-none focus:ring-0 focus:border-brown peer`}
                placeholder=" "
                onChange={score1ChangeHandler}
                onClick={(e) => (e.target.value = null)}
                // key={this.state.theInputKey || '' }
                // onBlur={resumeBlurHandler}
              />
              <label
                htmlFor="score1"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform top-3.5 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-brown peer-focus:dark:text-brown peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1/3 peer-focus:top-3.5 left-1"
              >
                Score1 File
              </label>
            </div>

            <div className="relative m-4">
              <input
                type="text"
                id="ck"
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gry bg-transparent rounded-none border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-brown focus:outline-none focus:ring-0 focus:border-brown peer ${ckHasError? "border-brown":""}`}
                placeholder=" "
                value={ckValue}
                onChange={ckChangeHandler}
                onBlur={ckBlurHandler}
              />
              <label
                htmlFor="ck"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-brown peer-focus:dark:text-brown peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                USMLE Score Step-2 CK
              </label>
              {ckHasError && (
                <p className="error-text text-left">Please enter a valid Score.</p>
              )}
              {!ckHasError && (
                <p>
                  <br />
                </p>
              )}
            </div>

            <div className="relative m-4">
              <input
                type="file"
                id="score2"
                className={`block pl-[7rem] s:pl-[17rem] xs:pl-[10rem] sm:pl-[14rem] md:pl-[10rem] lg:pl-[12rem] xl:pl-[12rem] 2xl:pl-[17rem] 3xl:pl-[22rem] pr-[0.5rem] pb-2.5 pt-4 w-full text-sm text-gry bg-transparent rounded-none border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-brown focus:outline-none focus:ring-0 focus:border-brown peer`}
                placeholder=" "
                onChange={score2ChangeHandler}
                onClick={(e) => (e.target.value = null)}
                // key={this.state.theInputKey || '' }
                // onBlur={resumeBlurHandler}
              />
              <label
                htmlFor="score2"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform top-3.5 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-brown peer-focus:dark:text-brown peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1/3 peer-focus:top-3.5 left-1"
              >
                Score2 File
              </label>
            </div>

            <div className="relative m-4">
              <input
                type="text"
                id="visa"
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gry bg-transparent rounded-none border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-brown focus:outline-none focus:ring-0 focus:border-brown peer ${ckHasError? "border-brown":""}`}
                placeholder=" "
                value={visaValue}
                onChange={visaChangeHandler}
                onBlur={visaBlurHandler}
              />
              <label
                htmlFor="visa"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-brown peer-focus:dark:text-brown peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Do You Have US Visa?
              </label>
              {visaHasError && (
                <p className="error-text text-left">Please enter a valid option.</p>
              )}
              {!visaHasError && (
                <p>
                  <br />
                </p>
              )}
            </div>

            <div className="relative m-4">
              <input
                type="file"
                id="visaFile"
                className={`block pl-[7rem] s:pl-[17rem] xs:pl-[10rem] sm:pl-[14rem] md:pl-[10rem] lg:pl-[12rem] xl:pl-[12rem] 2xl:pl-[17rem] 3xl:pl-[22rem] pr-[0.5rem] pb-2.5 pt-4 w-full text-sm text-gry bg-transparent rounded-none border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-brown focus:outline-none focus:ring-0 focus:border-brown peer`}
                placeholder=" "
                onChange={visaFileChangeHandler}
                onClick={(e) => (e.target.value = null)}
                // key={this.state.theInputKey || '' }
                // onBlur={resumeBlurHandler}
              />
              <label
                htmlFor="visaFile"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform top-3.5 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-brown peer-focus:dark:text-brown peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1/3 peer-focus:top-3.5 left-1"
              >
                Visa File
              </label>
            </div>

            <div className="relative m-4">
              <input
                type="date"
                id="startDate"
                className={`block text-right px-2.5 pb-2.5 pt-4 w-full text-sm text-gry bg-transparent rounded-none border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-brown focus:outline-none focus:ring-0 focus:border-brown peer ${startDateHasError? "border-brown":""}`}
                placeholder=" "
                value={startDateValue}
                onChange={startDateChangeHandler}
                onBlur={startDateBlurHandler}
              />
              <label
                htmlFor="startDate"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform top-3.5 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-brown peer-focus:dark:text-brown peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1/3 peer-focus:top-3.5 left-1"
              >
                Start Date
              </label>
              {startDateHasError && (
                <p className="error-text text-left">
                  Please enter a valid Date.
                </p>
              )}
              {!startDateHasError && (
                <p>
                  <br />
                </p>
              )}
            </div>

            <div className="relative m-4">
              <input
                type="date"
                id="endDate"
                className={`block text-right px-2.5 pb-2.5 pt-4 w-full text-sm text-gry bg-transparent rounded-none border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-brown focus:outline-none focus:ring-0 focus:border-brown peer ${endDateHasError? "border-brown":""}`}
                placeholder=" "
                value={endDateValue}
                onChange={endDateChangeHandler}
                onBlur={endDateBlurHandler}
              />
              <label
                htmlFor="endDate"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform top-3.5 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-brown peer-focus:dark:text-brown peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1/3 peer-focus:top-3.5 left-1"
              >
                End Date
              </label>
              {endDateHasError && (
                <p className="error-text text-left">
                  Please enter a valid Date.
                </p>
              )}
              {!endDateHasError && (
                <p>
                  <br />
                </p>
              )}
            </div>

            <div className="relative m-4">
              <input
                type="file"
                id="ID"
                ref={idRef}
                className={`block pl-[7rem] s:pl-[17rem] xs:pl-[10rem] sm:pl-[14rem] md:pl-[10rem] lg:pl-[12rem] xl:pl-[12rem] 2xl:pl-[17rem] 3xl:pl-[22rem] pr-[0.5rem] pb-2.5 pt-4 w-full text-sm text-gry bg-transparent rounded-none border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-brown focus:outline-none focus:ring-0 focus:border-brown peer`}
                placeholder=" "
                onChange={idChangeHandler}
                // value={""}
                onClick={(e) => (e.target.value = null)}
                // key={this.state.theInputKey || '' }
                // onBlur={resumeBlurHandler}
              />
              <label
                htmlFor="ID"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform top-3.5 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-brown peer-focus:dark:text-brown peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1/3 peer-focus:top-3.5 left-1"
              >
                Passport/ID
              </label>
              <p>
                <br />
              </p>
            </div>

            <div className="relative m-4 ">
              <input
                type="file"
                id="aamc"
                className={`block pl-[7rem] s:pl-[17rem] xs:pl-[10rem] sm:pl-[14rem] md:pl-[10rem] lg:pl-[12rem] xl:pl-[12rem] 2xl:pl-[17rem] 3xl:pl-[22rem] pr-[0.5rem] pb-2.5 pt-4 w-full text-sm text-gry bg-transparent rounded-none border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-brown focus:outline-none focus:ring-0 focus:border-brown peer`}
                placeholder=" "
                onChange={aamcChangeHandler}
                onClick={(e) => (e.target.value = null)}
                // key={this.state.theInputKey || '' }
                // onBlur={resumeBlurHandler}
              />
              <label
                htmlFor="aamc"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform top-3.5 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-brown peer-focus:dark:text-brown peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1/3 peer-focus:top-3.5 left-1"
              >
                AAMC Health Certificate
              </label>
              <p>
                <br />
              </p>
              {/* {resumeHasError && (
              <p className="error-text text-left">
                Please enter a valid location.
              </p>
            )}
            {!resumeHasError && (
              <p>
                <br />
              </p>
            )} */}
            </div>

            <div className="relative m-4">
              <input
                type="file"
                id="resume"
                className={`block pl-[7rem] s:pl-[17rem] xs:pl-[10rem] sm:pl-[14rem] md:pl-[10rem] lg:pl-[12rem] xl:pl-[12rem] 2xl:pl-[17rem] 3xl:pl-[22rem] pr-[0.5rem] pb-2.5 pt-4 w-full text-sm text-gry bg-transparent rounded-none border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-brown focus:outline-none focus:ring-0 focus:border-brown peer`}
                placeholder=" "
                onChange={resumeChangeHandler}
                onClick={(e) => (e.target.value = null)}
                // key={this.state.theInputKey || '' }
                // onBlur={resumeBlurHandler}
              />
              <label
                htmlFor="resume"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform top-3.5 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-brown peer-focus:dark:text-brown peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1/3 peer-focus:top-3.5 left-1"
              >
                Resume
              </label>
              <p>
                <br />
              </p>
              {/* {resumeHasError && (
              <p className="error-text text-left">
                Please enter a valid location.
              </p>
            )}
            {!resumeHasError && (
              <p>
                <br />
              </p>
            )} */}
            </div>
          </div>

          <div className="relative m-4">
            <textarea
              id="interest"
              className={`h-40 block px-2.5 pb-2.5 pt-4 w-full text-sm text-gry bg-transparent rounded-none border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-brown focus:outline-none focus:ring-0 focus:border-brown peer ${yourNameHasError? "border-brown":""}`}
              placeholder=" "
              value={interestValue}
              onChange={interestChangeHandler}
              onBlur={interestBlurHandler}
            ></textarea>
            <label
              htmlFor="interest"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-brown peer-focus:dark:text-brown peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Future Interest
            </label>
          </div>

          <div className="m-8">
            {/* <Link to="rotations/submitform"> */}
            <button
              type="submit"
              onClick={props.onClick}
              className="bg-transparent hover:bg-brown text-brown hover:text-white py-4 px-5 border border-brown hover:border-transparent rounded"
              disabled={
                !formIsValid ||
                (per !== null && per < 100) ||
                (idPer !== null && idPer < 100) ||
                (aamcPer !== null && aamcPer < 100)
              }
            >
              SUBMIT NOW
            </button>
            {/* </Link> */}
            
          </div>
        </form>}

        {formSubmitted && <p className=" text-center mx-2 mb-12 uppercase tracking-widest mt-12 ">
          Your response has been submitted
        </p>}
      </div>
      <TestimonialCarousel></TestimonialCarousel>
    
      {/* <Gallery/>
      <CarSlider/> */}
    </>
  );
};
export default Careers;