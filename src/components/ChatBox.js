import React from 'react'
import {ChatState} from '../Context/ChatProvider'
import {ChakraProvider, Box} from '@chakra-ui/react'
import SingleChat from './SingleChat'

const ChatBox = ({fetchAgain, setFetchAgain}) => {

  const {selectedChat} = ChatState();

  return <ChakraProvider>
  <Box 
  display={{base: selectedChat ? "flex" : "none", md: "flex"}}
  alignItems="center"
  flexDir="column"
  p={3}
  bg="blue.900"
  w={{base: "100%", md: "68%"}}
  borderRadius="lg"
  borderWidth="1px"
  color={"white"}
  // opacity={"60%"}
  >
    <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>
    </Box>
  </ChakraProvider>
}

export default ChatBox
