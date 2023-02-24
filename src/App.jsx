
import { useState } from "react";
import Button from "./Button";
import Alert from "./Alert";
import Badge from "./Badge";
import Card from "./Card";
import Modal from "./Modal";
import { ImWarning } from "react-icons/im";
import { MdDone } from "react-icons/md";

function handleClick() {
  alert("Dismiss");
}

function App() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  return (
    <div>
      <div className="flex flex-col border-b items-center border-black">
        <h1 className="font-semibold text-lg p-5 text-neutral-600">
          Buttons with different color, size, title and one disabled button!
        </h1>
        <div className=" flex gap-2 p-10">
          <Button title="Gray" color="light" size="small" />
          <Button title="Green" color="green" size="medium" />
          <Button title="Red" color="red" size="large" />
          <Button title="Disabled" size="large" disabled />
        </div>
      </div>
      <h1 className="flex justify-center pt-10 text-lg font-semibold text-gray-600">
        Alert 
      </h1>
      <div className="flex justify-center items-center p-10 border-b border-black ">
        <Alert
          icon={<ImWarning />}
          title="Stop!"
          color="warning"
          onDismiss={handleClick}
        />
        <Alert title="Warning!!" color="error" onDismiss={handleClick} />
        <Alert title="Ok" onDismiss={handleClick} color="good" />
      </div>
      <div className="border-b border-black">
        <h1 className="flex justify-center pt-10 text-lg font-semibold text-gray-600">
          Badges
        </h1>
        <div className="flex gap-2 justify-center pt-10 mb-10">
          <Badge icon={<MdDone />} size="small" color="red" />
          <Badge icon={<MdDone />} color="blue" />
          <Badge icon={<MdDone />} size="medium" color="light" />
        </div>
      </div>
      <div className="flex p-20 justify-center flex-col border-b border-black">
      <h1 className="flex justify-center pt-10 text-lg font-semibold text-gray-600">
          A picture With view of Bangladesh!
        </h1>
        <h1 className="flex justify-center pt-20 text-lg font-semibold text-gray-600">Card</h1>
        <Card className="flex justify-center flex-col pt-10 mb-10" href="https://www.bing.com/images/search?q=maldev+image&qpvt=maldev+image&form=IGRE&first=1" 
   imgAlt="En bild på bron i Mostar"
   imgSrc="https://www.finolhu.com/wp-content/uploads/2019/05/finolhu-maledives-beach-club.jpg" 
   />
        </div> 
      <div>
        <div className="flex p-20 justify-center flex-col">
          <h1 className="flex justify-center pt-20 text-lg font-semibold text-red-600">
            Modal
          </h1>
          <div className="flex justify-center mt-10">
            <button
              className="flex p-9 border bg-amber-700 border-black rounded-md  "
              onClick={() => setShow(true)}
            >
              Click Me
            </button>
          </div>
          <Modal show={show} onClose={() => setShow(false)} size="medium">
            <Modal.Header> Modal</Modal.Header>
            <Modal.Body>
              <p>
              Jordan Walke created FaxJS, the early prototype of React – shipped a search element on Facebook.
              </p>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
        </div>
       
      </div>
    </div>
  );
}

export default App;