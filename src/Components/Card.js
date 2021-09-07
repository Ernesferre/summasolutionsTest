import React from 'react'
import { Container, Heading, Text, Image, Flex, Box, Button } from "@chakra-ui/react"

const Card = ({id, imagen, precio, precioAnt, descripcion}) => {

    

    const handleDetail = (id) => {
        console.log("Enviaste articulo:", id)
    }
    
    return (
    
        <Container
            w={"16rem", "16rem", null, "16rem"}
            // mt={2}
            mb={2}
            alignSelf="center"
            // borderRadius={12}
            // boxShadow="dark-xl"
            // fontFamily="Georama"
            // position="relative"
            margin={"1rem", null, null, "0.5rem"}
            alignContent="center"
            bg="white"
            p={3}
            
            // border= "2px"
        >
            
                <Image
                    // borderTopRadius={10}
                    width="100%"
                    // h="5em"
                    src={imagen}
                    fallbackSrc="https://via.placeholder.com/382x300"
                    mb={[2, null, null , 4]}
                />
                    
                    <Flex 
                        flexDir="column"
                        // fontSize={8}
                    >

                        <Box
                            textAlign="left"
                            fontSize={["0.7rem", null, null, "0.9rem"]}
                            maxHeight="3em"
                            overflow="hidden"
                            color="dark"
                                    
                        >
                             {descripcion}
                        </Box>

                        <Box
                            mt={[2, null, null , 8]}
                            // mb={1}
                            textAlign="left"
                            fontSize={["0.7rem", null, null, "1rem"]}
                            // fontWeight="extrabold"
                            maxHeight="3em"
                            overflow="hidden"
                            color="gray.400"
                            >
                            Antes ${precioAnt}
                        </Box>

                        <Box
                            // mt={1}
                            mb={2}
                            textAlign="left"
                            fontSize={["1rem", null, null, "1.5rem"]}
                            fontWeight="black"
                            maxHeight="3em"
                            overflow="hidden"
                            color="dark"
                            >
                            ${precio}
                        </Box>

                    
                        <Button
                            onClick={() => handleDetail(id)}
                            bg="#23B202"
                            color="white"
                            h={[6,null, null, 8]}
                            borderRadius="full"
                            fontSize= "small"
                            _hover= {{
                                color: "#23B202",
                                bg: "white",
                                fontWeight: "bold",
                                boxShadow: "dark-lg"
                                
                            
                            }}
                            
                        >
                            VER DETALLES
                        </Button>

                    
                        
            
                    </Flex>
        </Container>

    )
}

export default Card
