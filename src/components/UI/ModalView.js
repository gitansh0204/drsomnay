import Modal from "./Modal";

const ModalView = (props) => {  
  return (
    <Modal onClose={props.onClose} className="">
        <div className="float-right bg-black">
        <button className="text-gry text-3xl hover:text-black absolute top-3 right-3 " onClick={props.onClose}>X</button>

        </div>
    <div className="py-10 md:px-10">
        <div className="text-brown text-center text-5xl underline ">{props.modalState.name} FAQ </div>
        
        {props.modalState.questions.map((question) => (
          <div className="font-montserrat text-gry m-6">
            <h1 className="text-4xl m-2">{question.qs}</h1>
            <p style={{ whiteSpace: "pre-line" }} className="m-2 tracking-wide"> {question.ans.split("<br/>").join("\n")}</p>
          </div>
        ))}

    </div>
    </Modal>
  );
};
export default ModalView;
