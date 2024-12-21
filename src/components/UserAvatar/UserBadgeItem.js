import React from 'react'
import { ChakraProvider, Box } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

const UserBadgeItem = ({user, handleFunction}) => {
  return (
   <ChakraProvider>
    <Box
    px={2}
    py={1}
    borderRadius="lg"
    m={1}
    mb={2}
    variant="solid"
    fontSize={12}
    backgroundColor="purple"
    color="white"
    cursor="pointer"
    onClick={handleFunction}
    >
        {user.name}
        <CloseIcon pl={1}/>
    </Box>
   </ChakraProvider>
  )
}

export default UserBadgeItem
