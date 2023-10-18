import { useEffect, useState } from 'react';
import Question from '../componets/Question';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@material-ui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';

const Questions = () => {
    const [ questions, setQuestions ] = useState(null);
    const [ tab, setTab ] = useState(1);

    const handleChange = (event, tab) => {
        setTab(tab);
      };


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
        <Box sx={{ width: '100%', typography: 'body1' }}>
            {/* <TabContext value={tab}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Item Odfne" value="1" />
                    <Tab label="Item Two" value="2" />
                    <Tab label="Item Three" value="3" />
                </TabList>
                </Box>
                <TabPanel value="1">Itasdfasfem One</TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
            </TabContext> */}
        </Box>    
        
        
            // {console.log("questions before printing: ", questions)}
        
        
    )
}

export default Questions;