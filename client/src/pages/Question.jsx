import { useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const Question = () => {
    const [ questions, setQuestions ] = useState(null)

    useEffect(() => {
        const fetchQuestions = async () => {
            const response = await fetch('/api/questions');
            const json = await response.json();
            // console.log("json after fetch: ", json);
            if(response.ok) {
                setQuestions(json.questions);
            }
        }

        fetchQuestions();
    }, [])
    return (
        <>
            <div>
                Questions
            </div>
            {console.log("questions before printing: ", questions)}
            { questions && questions.map((question) => ( 
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">{question.title}</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                    >
                        { question.options.map((option, index) => (
                            <FormControlLabel value={index} control={<Radio />} label={option.title} />
                        ))}
                    </RadioGroup>
                </FormControl>
            ))}
        </>
        
    )
}

export default Question;