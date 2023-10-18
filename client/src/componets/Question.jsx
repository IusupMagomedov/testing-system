import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



const Question = ( { questionData }) => {
    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">{questionData.title}</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
            >
                { questionData.options.map((option, index) => (
                    <FormControlLabel value={index} control={<Radio />} label={option.title} />
                ))}
            </RadioGroup>
        </FormControl>
    )
}

export default Question;

