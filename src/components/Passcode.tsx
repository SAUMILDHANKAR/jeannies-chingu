/* For evaluators, Component borrowed from the following site => Attribution: https://dev.to/keyurparalkar/create-a-passcode-component-from-scratch-in-react-4l88 */
import { useEffect, useState, useRef } from 'react'
/* For evaluators, even after a few hours of doc search, I could not build navigation so used copilot again */
import { useNavigate } from "react-router-dom";

export default function Passcode() {
  const [arrayValue, setArrayValue] = useState<(string | number)[]>([
    "",
    "",
    "",
    ""
  ]);
  const [currentFocusedIndex, setCurrentFocusedIndex] = useState(0);
  const [finVal, setFinVal] = useState("");
  const inputRefs = useRef<Array<HTMLInputElement> | []>([]);
  const navigate = useNavigate();

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
  const keyCode = e.key;
        if (!(keyCode >= 0 && keyCode <= 9)) {
          e.preventDefault();
        }
      };

  const onChange = (e: BaseSyntheticEvent, index: number) => {
    setArrayValue((preValue: (string | number)[]) => {
      const newArray = [...preValue];

      if (parseInt(e.target.value)) {
        newArray[index] = parseInt(e.target.value);
      } else {
        newArray[index] = e.target.value;
      }

      return newArray;
    });
  };

  const onKeyUp = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (parseInt(e.key) && index <= arrayValue.length - 2) {
      setCurrentFocusedIndex(index + 1);
      if (inputRefs && inputRefs.current && index === currentFocusedIndex) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const onFocus = (e: BaseSyntheticEvent, index: number) => {
    setCurrentFocusedIndex(index);
    e.target.focus();
  };
  
  
  return (
    <>
	  
      <div>Passcode</div>
      <div>Placeholder for error</div>
	  
      {arrayValue.map((value: string | number, index: number) => (
        <input
          key={`index-${index}`}
          ref={(el) => el && (inputRefs.current[index] = el)}
          inputMode="numeric"
          pattern="\d{1}"
          maxLength={1}
          type="text"
          value={String(value)}
          onChange={(e) => onChange(e, index)}
          onKeyUp={(e) => onKeyUp(e, index)}
          onKeyDown={(e) => onKeyDown(e)}
          onFocus={(e) => onFocus(e, index)}
		  onInput={(e) => {
			const val = e.currentTarget.value;
			console.log(val);
			//const finVal = concat();
			
			const newVal = finVal + val;
			setFinVal(newVal);
			console.log(finVal);
			console.log(newVal);
			//setArrayValue(val);
			if (newVal === "2222") {
			  navigate("/Dashboard");
			}
		  }}
		  href="/Dashboard"
		  
        />
      ))}
	  {<p>Your input is {arrayValue}.</p>}
	  <div>Help</div>
	  {arrayValue=="2222" && <a href="/Dashboard"></a>}
    </>
  );
};