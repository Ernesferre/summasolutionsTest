import React from 'react'
import { ChakraProvider, Container, Heading, Text, Flex, SimpleGrid, Box } from "@chakra-ui/react"
import { listaProductos } from './productos'
import Card from './Card';


const MainView = () => {





    return (
        <Box>  
            <Heading
                w={["80%", null, null, "100%"]}
                textAlign="center"
                fontWeight="bold"
                alignSelf="center"
                alignContent="center"
                mx="auto"
                mt={5}
            > 
                Summa Solutions FED Test
            </Heading>
        

            <Text
                w={["95%", null, null, "60%"]}
                mt={6}
                mb={5}
                textAlign="center"
                fontSize={12}
                mx="auto"
            >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra macenas accumsan lacus vel facilisis.
            </Text>

        

            <SimpleGrid
                columns={[2,3,null,4]}
                alignSelf="center"
                w={["93%", "90%", "80%" , "75%"]}
                mb={5}
                alignContent="center"
                mx="auto"
                maxH="100%"
            >

                                
            {listaProductos.map((item) => (
                <Flex>
                    
                    <Card
                    key={item.id}
                    id={item.id}
                    imagen={item.imagen}
                    precio={item.precio}
                    precioAnt={item.precioAnt} 
                    descripcion={item.descripcion}
                    />
                </Flex>
            ))
            }
                                
        </SimpleGrid>



    </Box>
    )
}

export default MainView
