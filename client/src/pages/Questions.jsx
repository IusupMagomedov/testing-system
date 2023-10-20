import { useEffect, useState } from 'react';
import Question from '../componets/Question';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

const Questions = () => {
    const [ questions, setQuestions ] = useState(null);
    const [ tab, setTab ] = useState(1);

    const handleChange = (event, tab) => {
        // console.log('Valuer of tab in handleChange function: ', tab);
        setTab(tab);
      };


    useEffect(() => {
        const fetchQuestions = async () => {
            const response = await fetch('/api/questions');
            const json = await response.json();
            console.log("json after fetch: ", json);
            if(response.ok) {
                setQuestions(json.questions);
            }
        }

        fetchQuestions();
    }, [])


    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            {/* <Question 
                questionData={questions}
            /> */}
            {/* {console.log("Array of questions in return section: ", questions)} */}
            {console.log("Value of tab in return section: ", tab)}
            <TabContext value={tab}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        {questions && questions.map(
                            ( question, index ) => 
                                <Tab label={question.title} value={index + 1} />
                            )}
                    </TabList>
                </Box>
                {questions && questions.map(
                    ( question, index ) => 
                        <TabPanel value={index + 1}>
                            <Question 
                                questionData={question}
                            />
                        </TabPanel>
                    )}
            </TabContext>
        </Box>    
        
        
            // {console.log("questions before printing: ", questions)}
        
        
    )
}

export default Questions;