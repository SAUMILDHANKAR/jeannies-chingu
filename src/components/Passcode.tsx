/* For evaluators, Component borrowed from the following site => Attribution: https://dev.to/keyurparalkar/create-a-passcode-component-from-scratch-in-react-4l88 */
import { useState, useRef } from 'react'
/* For evaluators, even after a few hours of doc search, I could not build navigation so used copilot again */
import { useNavigate } from "react-router-dom";
import { Box, Card } from '@mui/material';
import useBreakpoints from "../hooks/useBreakpoints";

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
  const { isMobile } = useBreakpoints();

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  const keyCode: (any) = e.key;
        if (!(keyCode >= 0 && keyCode <= 9)) {
          e.preventDefault();
        }
      };

  const onChange = (e: any, index: number) => {
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

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (parseInt(e.key) && index <= arrayValue.length - 2) {
      setCurrentFocusedIndex(index + 1);
      if (inputRefs && inputRefs.current && index === currentFocusedIndex) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const onFocus = (e: any, index: number) => {
    setCurrentFocusedIndex(index);
    e.target.focus();
  };
  
  
  return (
    <>
	  
      <div>Passcode</div>
      <div>Placeholder for error</div>
      {/*For evaluators: After a few hours of reading the docs, I could not make input width smaller, so used ChatGPT to replace with boxes, also din't know abt mx: 'auto', again ChatGPT*/}	  
      <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 1,
            mt: 2,
        }}
        >
        {arrayValue.map((value: string | number, index: number) => (
            <Box
            key={`index-${index}`}
            component="input"
            ref={(el: HTMLInputElement | null) => {
                if (el) inputRefs.current[index] = el;
            }}
            inputMode="numeric"
            pattern="\\d{1}"
            maxLength={1}
            type="text"
            value={String(value)}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e, index)}
            onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => onKeyUp(e, index)}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => onKeyDown(e)}
            onFocus={(e: React.FocusEvent<HTMLInputElement>) => onFocus(e, index)}
            onInput={(e: React.FormEvent<HTMLInputElement>) => {
                const val = e.currentTarget.value;
                console.log(val);

                const newVal = finVal + val;
                setFinVal(newVal);

                console.log(finVal);
                console.log(newVal);

                if (newVal === '2222') {
                navigate('/Dashboard');
                }
            }}
            sx={{
                width: { xs: 44, sm: 48, md: 56 },
                height: { xs: 44, sm: 48, md: 56 },
                textAlign: 'center',
                fontSize: { xs: 20, sm: 22, md: 24 },
                border: '1px solid #ccc',
                borderRadius: 1,
                bgcolor: 'white',
                color: 'black',
                outline: 'none',
                '&:focus': {
                borderColor: 'primary.main',
                boxShadow: (theme) => `0 0 0 2px ${theme.palette.primary.main}33`,
                },
            }}
            />
        ))}
      </Box>
      
      {<p>Your input is {arrayValue}.</p>}
      <Card
      sx={{
                width: isMobile ? '80px' : '160px',
                mx: 'auto',
                textAlign: 'center',
      }}
      >Help</Card>
	  
    </>
  );
};
