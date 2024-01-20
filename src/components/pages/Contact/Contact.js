import useInput from "../../../hooks/use-input";
import Map from "../../layout/Map";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons' 
import {
  faEnvelope,
  faLocationDot,
  faPhone,
  faIndustry,
} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { Helmet } from "react-helmet-async";
library.add(faInstagram); 

const isNotEmpty = (value) => value.trim() !== "";

const Contact = (props) => {
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
    value: locationValue,
    isValid: locationIsValid,
    hasError: locationHasError,
    valueChangeHandler: locationChangeHandler,
    inputBlurHandler: locationBlurHandler,
    reset: resetLocation,
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
    value: messageValue,
    isValid: messageIsValid,
    hasError:messageHasError,
    valueChangeHandler:messageChangeHandler,
    inputBlurHandler:messageBlurHandler,
    reset:resetMessage
  }=useInput(isNotEmpty);

  let formIsValid = false;

  if (yourNameIsValid && emailIsValid && locationIsValid && phoneIsValid&&messageIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    

    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");
    console.log(yourNameValue, emailValue, locationValue);
    // fetch(
    //   "https://lostandfound-cf220-default-rtdb.firebaseio.com/lostItems.json",
    //   {
    //     method: "POST",
    //     body: JSON.stringify({
    //       name: yourNameValue,
    //       email: emailValue,
    //       location: locationValue,
    //       phone: phoneValue,
    //       image:link
    //     }),
    //   }
    // );

    const data={
      Name:yourNameValue,Email:emailValue,Location:locationValue,Phone:phoneValue, Message:messageValue
    }

    axios.post('https://sheet.best/api/sheets/f27475ae-e5b2-41c8-b476-63a152fcf94b',data).then((response)=>{
      console.log(response);
      resetyourName();
    resetEmail();
    resetLocation();
    resetPhone();
    resetMessage();
    })

    
  };

  const yourNameClasses = yourNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";
  const locationClasses = locationHasError
    ? "form-control invalid"
    : "form-control";
  const phoneClasses = phoneHasError ? "form-control invalid" : "form-control";
  const messageClasses = messageHasError ? "form-control invalid" : "form-control";

  const handleChange = (e) => {
    e.preventDefault();

    // setFile(e.target.files[0]);
    // uploadFiles();
  };

  //   const uploadFiles = () => {
  //     if (!file) return;
  //     const storageRef = ref(storage, `/files/${file.name +v4()}`);
  //     const uploadTask = uploadBytesResumable(storageRef, file);

  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         const prog = Math.round(
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //         );

  //         setProgress(prog);
  //       },
  //       (err) => console.log(err),
  //       () => {
  //         getDownloadURL(uploadTask.snapshot.ref).then( async (url) =>
  //           setLink(url)
  //         );
  //       }
  //     );
  //   };

  return (
    <>
     <Helmet> 
          <title> Kaumudi Somnay MD</title>
          <meta name="description" content=" Dr. Kaumudi Somnay , Dr Somnay  gastroenterologist in Flushing, New York and Valley Stream"/>
          <link rel="canonical" href="/Contact" />
        </Helmet>
    <div className="font-montserrat bg-skin py-20 px-3 ">
        <h6 className="text-aboutText font-medium tracking-[0.18rem] mb-5 text-center">DIRECTLY TO YOU</h6>
        <h1 className="text-5xl text-center font-medium text-brown tracking-wide mb-12 underline">
          Our Locations
        </h1>
        <div className="grid md:grid-cols-2">
        <div className="mt-8 md:my-24 mx-4 sm:mx-8 lg:mx-24 xl:mx-28 2xl:mx-36 text-gry font-medium">
            <h3 className="text-2xl text-aboutText text-left font-medium mb-8">DOCTOR'S LOCATION 1</h3>
            <p className="flex mb-8">
              <FontAwesomeIcon
                className="text-xl text-brown mr-4 ml-2"
                icon={faLocationDot}
              />
            {/* <FontAwesomeIcon
                className="text-xl text-brown mr-4 ml-2"
                icon={faInstagram}
              /> */}
              <span>200 N Central Ave, Valley Stream, NY 11580 </span>
            </p>
            <p className="flex mb-8">
            
             <FontAwesomeIcon
                className="text-xl text-brown mr-4 ml-2"
                icon={faInstagram}
              /> 
              <span> somnay_kaumudi </span>
            </p>




            <p className="flex mb-8">
              <FontAwesomeIcon
                className="text-xl text-brown mr-4 ml-2"
                icon={faPhone}
              />{" "}
              <span>(516) 792-6867</span>
            </p>
        

            <p className="flex mb-8">
              <FontAwesomeIcon
                className="text-xl text-brown mr-4 ml-2"
                icon={faEnvelope}
              />
              <span className="text-brown">drsomnay@gmail.com</span>
            </p>
          </div>

          <div className="mt-8 mb-16 md:my-24 mx-4 sm:mx-8 lg:mx-24 xl:mx-28 2xl:mx-36 text-gry font-medium">
            <h3 className="text-2xl text-aboutText text-left font-medium mb-8">DOCTOR'S LOCATION 2</h3>
            <p className="flex mb-8">
              <FontAwesomeIcon
                className="text-xl text-brown mr-4 ml-2"
                icon={faLocationDot}
              />
              <span> 55-14 Main Street, First Floor, Flushing, NY, 11355</span>
            </p>
            <p className="flex mb-8">
            
            <FontAwesomeIcon
               className="text-xl text-brown mr-4 ml-2"
               icon={faInstagram}
             /> 
             <span> somnay_kaumudi </span>
           </p>

            <p className="flex mb-8">
              <FontAwesomeIcon
                className="text-xl text-brown mr-4 ml-2"
                icon={faPhone}
              />{" "}
              <span>(718) 321-0670</span>
            </p>

            <p className="flex mb-8">
              <FontAwesomeIcon
                className="text-xl text-brown mr-4 ml-2"
                icon={faEnvelope}
              />
              <span className="text-brown">drsomnay@gmail.com</span>
            </p>
          </div>
        </div>
        
        <h6 className="text-aboutText text-center font-medium tracking-[0.18rem]">AFFILIATED HOSPITALS</h6>
        <div className="my-12 text-gry font-medium text-left grid  md:grid-cols-2">
          <div className="m-6 sm:mx-8 lg:mx-24 xl:mx-28 2xl:mx-36">
            <h3 className="text-2xl text-aboutText font-medium mb-8">New York-Presbyterian Queens Hospital</h3>
            <p className="mb-8">
            
            </p>
            <p className="flex mb-8">
              <FontAwesomeIcon
                className="text-xl text-brown mr-4 ml-2"
                icon={faLocationDot}
              />
              <span>56-45 Main St, Queens, NY 11355, United States </span>
            </p>
            
            <p className="flex mb-8">
              <FontAwesomeIcon
                className="text-xl text-brown mr-4 ml-2"
                icon={faPhone}
              />{" "}
              <span>(718) 321-0670</span>
            </p>

            <p className="flex mb-8">
              <FontAwesomeIcon
                className="text-xl text-brown mr-4 ml-2"
                icon={faEnvelope}
              />
              <span className="text-brown">drsomnay@gmail.com</span>
            </p>
          </div>
          <div className="m-6 sm:mx-8 lg:mx-24 xl:mx-28 2xl:mx-36">
            <h3 className="text-2xl text-aboutText font-medium mb-8">Mount Sinai South Nassau Hospital</h3>
            <p className="mb-8">
            
            </p>
            <p className="flex mb-8">
              <FontAwesomeIcon
                className="text-xl text-brown mr-4 ml-2"
                icon={faLocationDot}
              />

              <span>One Healthy Way, Oceanside, NY 11572, United States </span>
            </p>
            <p className="flex mb-8">
              <FontAwesomeIcon
                className="text-xl text-brown mr-4 ml-2"
                icon={ faPhone}
              />{" "}
              <span>(718) 321-0670</span>
            </p>

            <p className="flex mb-8">
              <FontAwesomeIcon
                className="text-xl text-brown mr-4 ml-2"
                icon={faEnvelope}
              />
              <span className="text-brown">drsomnay@gmail.com</span>
            </p>
          </div>
          <div className="m-6 sm:mx-8 lg:mx-24 xl:mx-28 2xl:mx-36">
            <h3 className="text-2xl text-aboutText font-medium mb-8">
                 Mercy Hospital-Rockville Centre 
                 (Catholic Health System)</h3>
            <p className="mb-8">
              
            </p>
            <p className="flex mb-8">
              <FontAwesomeIcon
                className="text-xl text-brown mr-4 ml-2"
                icon={faLocationDot}
              />
              <span>1000 N Village Ave, Rockville Centre, NY 11570, USA </span>
            </p>
            <p className="flex mb-8">
              <FontAwesomeIcon
                className="text-xl text-brown mr-4 ml-2"
                icon={faPhone}
              />{" "}
              <span>(718) 321-0670</span>
            </p>

            <p className="flex mb-8">
              <FontAwesomeIcon
                className="text-xl text-brown mr-4 ml-2"
                icon={faEnvelope}
              />
              <span className="text-brown">drsomnay@gmail.com</span>
            </p>

          </div>
          
          {/* <div className="m-6 sm:mx-8 lg:mx-24 xl:mx-28 2xl:mx-36">
            <h3 className="text-2xl text-aboutText font-medium mb-8">St. Catherine of Siena Hospital</h3>
            <p className="mb-8">
              
            </p>
            <p className="flex mb-8">
              <FontAwesomeIcon
                className="text-xl text-brown mr-4 ml-2"
                icon={faLocationDot}
              />
              <span>38, Maple Circle, Simivalley, Sanco – 1234 567</span>
            </p>
            <p className="flex mb-8">
              <FontAwesomeIcon
                className="text-xl text-brown mr-4 ml-2"
                icon={faPhone}
              />{" "}
              <span>+00 123 456 7890</span>
            </p>

            <p className="flex mb-8">
              <FontAwesomeIcon
                className="text-xl text-brown mr-4 ml-2"
                icon={faEnvelope}
              />
              <span className="text-brown">support@derma.com</span>
            </p>
          </div> */}
          <div className="m-6 sm:mx-8 lg:mx-24 xl:mx-28 2xl:mx-36">
            <h3 className="text-2xl text-aboutText font-medium mb-8">Long Island Jewish Medical Center at Northwell Health</h3>
            <p className="mb-8">
             
            </p>
            <p className="flex mb-8">
              <FontAwesomeIcon
                className="text-xl text-brown mr-4 ml-2"
                icon={faLocationDot}
              />
              <span>270-05 76th Ave, Queens, NY 11040, United States</span>
            </p>
            <p className="flex mb-8">
              <FontAwesomeIcon
                className="text-xl text-brown mr-4 ml-2"
                icon={faPhone}
              />{" "}
              <span>(718) 321-0670</span>
            </p>

            <p className="flex mb-8">
              <FontAwesomeIcon
                className="text-xl text-brown mr-4 ml-2"
                icon={faEnvelope}
              />
              <span className="text-brown">drsomnay@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
      <div className="font-montserrat sm:mx-[15%] md:mx-[8%] lg:mx-[13%] xl:mx-[17%]">
      {/* <h1 className="text-center text-5xl font-medium m-6">Contact Form</h1> */}
      <p className="text-center text-gry mx-2 sm:mx-[10%] md:mx-[28%] my-16">
       FEEL FREE TO CONTACT US
      </p>
      <form className="text-center text-gry" onSubmit={submitHandler}>
        <div className="grid  md:grid-cols-2">
          <div className="relative m-4">
            <input
              type="text"
              id="name"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gry bg-transparent rounded-none border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-brown focus:outline-none focus:ring-0 focus:border-brown peer"
              placeholder=" "
              value={yourNameValue}
              onChange={yourNameChangeHandler}
              onBlur={yourNameBlurHandler}
            />
            <label
              htmlFor="name"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-brown peer-focus:dark:text-brown peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Your Name
            </label>
            {yourNameHasError && (
              <p className="error-text text-left">Please enter a valid name.</p>
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
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gry bg-transparent rounded-none border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-brown focus:outline-none focus:ring-0 focus:border-brown peer"
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
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gry bg-transparent rounded-none border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-brown focus:outline-none focus:ring-0 focus:border-brown peer"
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
              type="text"
              id="location"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gry bg-transparent rounded-none border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-brown focus:outline-none focus:ring-0 focus:border-brown peer"
              placeholder=" "
              value={locationValue}
              onChange={locationChangeHandler}
              onBlur={locationBlurHandler}
            />
            <label
              htmlFor="location"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-brown peer-focus:dark:text-brown peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Location
            </label>
            {locationHasError && (
              <p className="error-text text-left">
                Please enter a valid location.
              </p>
            )}
            {!locationHasError && (
              <p>
                <br />
              </p>
            )}
          </div>
        </div>

        <div className="relative m-4">
          
          <textarea
            id="message"
            className="h-40 block px-2.5 pb-2.5 pt-4 w-full text-sm text-gry bg-transparent rounded-none border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-brown focus:outline-none focus:ring-0 focus:border-brown peer"
            placeholder=" "
            value={messageValue}
            onChange={messageChangeHandler}
            onBlur={messageBlurHandler}
          ></textarea>
          <label
            htmlFor="message"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-brown peer-focus:dark:text-brown peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Your Message
          </label>
        </div>

        <div className="m-8">
          <button
            type="submit"
            onClick={props.onClick}
            className="bg-transparent hover:bg-brown text-brown hover:text-white py-4 px-5 border border-brown hover:border-transparent rounded"
            disabled={!formIsValid}
          >
            SUBMIT NOW
          </button>
        </div>
      </form>
    </div>
      <div className="w-300 h-150">
        <Map/>
      </div>
    </>
    
  );
};
export default Contact;
