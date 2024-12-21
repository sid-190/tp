import {ChatState} from '../Context/ChatProvider';
import { ChakraProvider, Box} from '@chakra-ui/react';
import SideDrawer from "./miscellaneous/SideDrawer";
import MyChats from "./MyChats";
import ChatBox from "./ChatBox";
import { useState } from 'react';

const ChatsPage = () => {
 const { user } = ChatState();
const[fetchAgain, setFetchAgain] = useState(false)

  return (
    <div style={{width:'100%'}}>
      <ChakraProvider>
  {user && <SideDrawer/>}
    <Box
    display="flex"
    justifyContent="space-between"
    w="100%"
    h="91.5vh"
    p="10px"
    >
      {user && <MyChats fetchAgain={fetchAgain}/>}
      {user && <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>} 
    </Box>
  </ChakraProvider>

    </div>

  )
}

export default ChatsPage;
