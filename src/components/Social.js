import { HStack } from '@chakra-ui/react'
import Icon from '@chakra-ui/icon'
import React from 'react'
import {FaFacebook, FaTwitter, FaSkype, FaGoogle} from 'react-icons/fa'


function Social() {
    return (
        <HStack spacing="24px">
            <Icon as={FaGoogle} boxSize="50" />
            <Icon as={FaFacebook} boxSize="50" />
            <Icon as={FaTwitter} boxSize="50" />
            <Icon as={FaSkype} boxSize="50" />
        </HStack>
    )
}

export default Social
