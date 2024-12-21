import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import { 
    ChakraProvider,
    Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text
 } from '@chakra-ui/react';
import Login from './Authentication/Login';
import SignUp from './Authentication/SignUp';
import { useState } from 'react';

const MainPage = () => {

  const navigate = useNavigate();
  const[user, setUser] = useState();

useEffect(() => {
   const userInfo =  JSON.parse(localStorage.getItem("userInfo"));

if(user){
   navigate("/HomePage")
}

}, [navigate]);
  return (
    <ChakraProvider>
<Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans">
          Consultify
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
    </ChakraProvider>
  )
}

export default MainPage;
