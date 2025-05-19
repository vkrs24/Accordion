import { useState } from "react";
import { data } from "./data";
import "./Style.css";

export default function Accordion() {
  const [singleSelection, setSingleSelection] = useState(null);
  const [isMultiSelect, setIsMultiSelect] = useState(false);
  const [multiSelection, setMultiSelection] = useState([]);

  function toggleSingle(itemId) {
    setSingleSelection(singleSelection === itemId ? null : itemId);
  }

  function handleMultiSelection(itemId) {
    const newArr = [...multiSelection];
    const index = newArr.indexOf(itemId);
    if (index === -1) {
      newArr.push(itemId);
    } else {
      newArr.splice(index, 1);
    }
    setMultiSelection(newArr);
  }

  return (
    <div className="item">
      <button
        onClick={() => setIsMultiSelect(!isMultiSelect)}
        className="MltEnableBtn"
      >
        {!isMultiSelect ? "Enable Multiselection" : "Disable Multiselection"}
      </button>
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            className="title"
            key={item.id}
            onClick={() =>
              isMultiSelect
                ? handleMultiSelection(item.id)
                : toggleSingle(item.id)
            }
          >
            <div className="v1">
              <h1>{item.question}</h1>
              <span>+</span>
            </div>
            {(isMultiSelect
              ? multiSelection.includes(item.id)
              : singleSelection === item.id) && <p>{item.answer}</p>}
          </div>
        ))
      ) : (
        <div>No Data Found</div>
      )}
    </div>
  );
}
