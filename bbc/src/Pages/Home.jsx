import { Box, Center, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import Carousel from '../Components/Carousel'
import ReCar from '../Components/ReCar'

const Home = () => {
    const boxes = [1,2,3,4,5,6]
    const secCar = ['secCar',1,2]
    const banks = [1,2,3,4]
  return (
    <>
    <Box width='72%' margin='auto' borderRadius='30px' boxShadow='lg'>
        <Carousel/>
    </Box>
    <Box width='72%' margin='35px auto'>
        <Flex justifyContent='space-between'>
            {boxes.map((item) => (
                <Box>
                    <Center>
                        <Image src={`/boxes/${item}.webp`} width='90%' cursor={'pointer'}/>
                    </Center>
                </Box>
            ))}
        </Flex>
    </Box>
    <Box width='72%' margin='auto' borderRadius='30px' boxShadow='lg'>
        <ReCar arr={secCar}/>
    </Box>
    <Box width='72%' margin='35px auto'>
        <Flex justifyContent='space-between' gap={6}>
            {banks.map((item) => (
                <Box >
                    <Center>
                        <Image src={`/bankOff/${item}.webp`} width='100%' cursor={'pointer'} borderRadius='15px' _hover={{boxShadow: '2xl'}}/>
                    </Center>
                </Box>
            ))}
        </Flex>
    </Box>
    </>
  )
}

export default Home