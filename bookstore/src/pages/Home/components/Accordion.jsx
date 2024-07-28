import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { Button } from "../../../components/Elements/Button";

export const Accordion = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-2 rounded bg-backgroundsecondary p-5">
      <div className="flex justify-between items-center">
        <h3 className="font-medium">{question}</h3>
        <Button onClick={() => setShow(!show)}>
          <BiPlus />
        </Button>
      </div>
      {show && <p>{answer}</p>}
    </div>
  );
};
