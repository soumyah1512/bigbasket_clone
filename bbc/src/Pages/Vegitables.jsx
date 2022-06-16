import { Box, Center, Flex, Grid, Image, Select, Tag, Text, Tooltip } from '@chakra-ui/react'
import React from 'react'
import ReCar from '../Components/ReCar'
import { MdOutlineDeliveryDining } from "react-icons/md";
import { Icon } from '@chakra-ui/react'

const Vegitables = () => {
    const veg = ['veg',1,2,3,4,5,6,7]
  return (
    <>
        <Box width='72%' margin='auto' borderRadius='30px' boxShadow='lg'>
            <ReCar arr={veg}/>
        </Box>
        <Box width='72%' margin='10px auto'>
            <Image src='fnv.webp'/>
        </Box>
        <Box width='72%' margin='10px auto'>
            <Flex>
                <Text fontSize='22px'>
                    Fruits & Vegitables
                </Text>
            </Flex>
            <Flex direction='row-reverse' padding='20px 0' borderBottom='1px dashed grey'>
                <Select width='300px'>
                    <option value='option1' padding='10px'>Relevance</option>
                    <option value='option2'>Pice - Low to High</option>
                    <option value='option3'>Pice - High to Low</option>
                    <option value='option4'>Rupee Saving - Low to High</option>
                    <option value='option5'>Rupee Saving - High to Low</option>
                </Select>
            </Flex>
        </Box>
        <Box width='72%' margin='10px auto'>
            <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                <Box border='1px solid black' padding='8px'>
                    <Box border='1px solid #EEEEEE' borderRadius='9px'>
                        <Flex sx={{position: 'absolute'}}  >
                            <Box padding='5px 8px' fontSize='12px' color='white' background={'#476E01'} borderTopLeftRadius={'10px'} borderBottomRightRadius={'10px'}>
                                43% OFF
                            </Box>
                        </Flex>
                        <Image borderRadius='9px' src='https://www.bigbasket.com/media/uploads/p/m/10000203_16-fresho-tomato-local.jpg'/>
                    </Box>
                    <Flex direction='row-reverse'>
                        <Tooltip fontSize='10px' label='Get it in 5 hrs'>
                            <Box p='1'>
                                <Tag >
                                    <Icon as={MdOutlineDeliveryDining} fontSize='16px' color='grey'/>&nbsp;
                                    <Text sx={{fontSize: '12px'}} color='grey'>5 hrs</Text>
                                </Tag>
                            </Box>
                        </Tooltip>
                    </Flex>
                    <Flex>
                        <Text color='grey' fontSize='13px'>
                            Fresho
                        </Text>
                    </Flex>
                    <Flex>
                        <Box width='200px' height='50px'>
                        <Text fontSize='15px' noOfLines={2}>
                            Onion
                        </Text>
                        </Box>
                    </Flex>
                </Box>
                
            </Grid>
        </Box>
    </>
  )
}

export default Vegitables