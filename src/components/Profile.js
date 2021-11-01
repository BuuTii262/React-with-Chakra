import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import {DiJava,DiReact,DiLaravel} from 'react-icons/di';



function Profile() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)"); 

    return (
        // <div></div>
        
        <Flex direction={isNotSmallerScreen ? "row" : "column"} 
            w="100%" maxWidth={{base:"100vh", md:"75%", lg:"100%", xl:"100%"}}>
                <Box alignSelf="center" px="32" py="16">
                    <Heading fontWeight="extrabold" color="cyan.300" size="4xl">
                        1+
                    </Heading>
                    <Text fontSize="2xl" color="gray.400">Year of experience</Text>
                </Box>
                <Box alignSelf="center" px="32" py="16">
                <Text fontWeight="bold" fontSize="2xl">
                    Product Designer and Developer, specialized in web app development
                </Text>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
                    <Flex rounded="xl" direction="column" mt={4} bg="yellow.400" h="30vh" w="30vh" justify="flex-end"> 
                        <Icon color="white" p="4" as={DiJava} w="24" h="24" />
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                            Java App
                        </Text>
                    </Flex>

                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? "4" : "0"}
                     bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{bg: "yellow.400"}}> 
                        <Icon color="black" p="4" as={DiReact} w="24" h="24" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            React App
                        </Text>
                    </Flex>

                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? "4" : "0"} 
                    bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{bg: "yellow.400"}}> 
                        <Icon color="black" p="4" as={DiLaravel} w="24" h="24" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Laravel App
                        </Text>
                    </Flex>

                </Flex>

                </Box>
        </Flex>
    )
}

export default Profile
