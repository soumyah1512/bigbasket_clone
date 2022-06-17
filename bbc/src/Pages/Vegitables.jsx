import { Box, Button, Center, Flex, Grid, Image, Select, Tag, Text, Tooltip, Spinner  } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ReCar from '../Components/ReCar'
import Product from '../Components/Product';
import { getPosts } from '../Redux/app/action';
import { Pagination } from "@mui/material";

const Vegitables = () => {
    const veg = ['veg',1,2,3,4,5,6,7]

    const [page,setPage] = useState(1)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts(page))
    },[page])

    const products = useSelector((state) => state.app.data)
    const loading = useSelector((state) => state.app.loading)
    console.log(products)

    const handleChange = (event, value) => {
        setPage(value);
      };

  return (
    <>
    <Box backgroundColor='#F6F7F6'>
        <Box width='72%' margin='auto' borderRadius='20px' boxShadow='lg' >
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
            {loading ? <><Box padding='100px'><Center><Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl'/></Center></Box></> : 
            <>
            <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                {products.map((item,ind) => (
                    <Product item={item} key={ind}/>
                ))}
            </Grid>
            <Box padding='10px' marginBottom='30px'>
                <Center>
                    <Pagination count={3} page={page} onChange={handleChange} />
                </Center>
            </Box>
            </>}
        </Box>
    </Box>
    </>
  )
}

export default Vegitables