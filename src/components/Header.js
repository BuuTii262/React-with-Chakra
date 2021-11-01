import React from 'react';
import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Circle, Flex, Stack, Text } from '@chakra-ui/layout';
import { Button  } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';



function Header() {

    const {colorMode} = useColorMode();
    const isDark = colorMode == "dark";//color mode
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)"); //Use for Responsive

    return (
        <Stack>
            <Circle position="absolute" bg="yellow.100" 
            opacity="0.1" w="300px" h="300px" alignSelf="flex-end" />
            <Flex direction={isNotSmallerScreen ? "row" : "column"} 
            spacing="200px" p={isNotSmallerScreen ? "32" : "0"} 
            alignSelf="flex-start">

                <Box mt={isNotSmallerScreen ? "0" : 16}>
                    <Text fontSize="5xl" fontWeight="semibold">Hi , I am</Text>
                    <Text fontSize="7xl" fontWeight="bold" 
                        bgGradient="linear(to-r, yellow.400, orange.500, red.600)" bgClip="text">
                        Sai Thiha Aung
                    </Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}>
                        Fullstack Web Developer bla bla bla bla bla bla bla bla bla...
                    </Text>
                    
                    <Button mt={8} colorScheme="blue" 
                    onClick={ ()=> window.open("https://www.youtube.com/")}>Hire Me</Button>

                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"} 
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius="full"
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src="https://c4.wallpaperflare.com/wallpaper/157/623/578/jisoo-blackpink-women-hd-wallpaper-preview.jpg" />

            </Flex>
        </Stack>
    )
}

export default Header
