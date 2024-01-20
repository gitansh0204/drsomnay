import "./App.css";
import Contact from "./components/pages/Contact/Contact";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./components/pages/About/About";
import Services from "./components/pages/Services/Services";
import { useEffect, useState } from "react";
import ModalView from "./components/UI/ModalView";
import Careers from "./components/pages/Careers/Careers";
import Conditions from "./components/pages/Conditions/Conditions";
import Home from "./components/pages/Home/Home";
import Navbar from "./components/layout/Navbar";
import CurrentPage from "./components/layout/CurrentPage";



function App() {
  const [modalShown, setModalShown] = useState(false);
  const [modalState, setModalState] = useState({});
  const [path, setPath] = useState(null);
  const location = useLocation();
  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);
  const modalOpenHandler = () => {
    setModalShown(true);
  };
  const modalCloseHandler = () => {
    setModalShown(false);
  };
  // const WithNavbar = () => (
  //   <CurrentPage>
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="contact" element={<Contact />} />
  //       <Route path="about" element={<About />} />
  //       <Route
  //         path="services"
  //         element={
  //           <Services state={setModalState} onClick={modalOpenHandler} />
  //         }
  //       />
  //       <Route path="careers" element={<Careers />} />
  //       <Route
  //         path="conditions"
  //         element={
  //           <Conditions state={setModalState} onClick={modalOpenHandler} />
  //         }
  //       />
  //     </Routes>
  //   </CurrentPage>
  // );

  return (
    <>
      <Navbar />
      {/* {console.log(path)} */}
     <CurrentPage />
      {/* <CarouselComponent/> */}
      {modalShown && (
        <ModalView
          modalState={modalState}
          modalShown={modalShown}
          onClose={modalCloseHandler}
        />
      )}
      <Routes>
        <Route path="/" element={<Home state={setModalState} onClick={modalOpenHandler}/>} />
        <Route path="contact" element={<Contact />} />
        <Route path="insurances" element={<About />} />
        <Route
          path="procedures"
          element={
            <Services state={setModalState} onClick={modalOpenHandler} />
          }
        />
        <Route path="rotations" element={<Careers />} />
        <Route
          path="diseases"
          element={
            <Conditions state={setModalState} onClick={modalOpenHandler} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
