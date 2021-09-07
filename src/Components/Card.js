import React, { useEffect, useState } from 'react'
import { Container, Heading, Text, Image, Flex, Box, Button } from "@chakra-ui/react"
import { listaProductos } from './productos'
import { useHistory, Link } from "react-router-dom";


const Card = ({id, imagen, precio, precioAnt, descripcion}) => {


    const history = useHistory();

    // console.log(`La resolución de tu pantalla es:  ${window.innerWidth}`) 

    // Variable que controla el ancho de la pantalla para definir el texto del botton
    const [buttonText, setbuttonText] = useState("VER DETALLES")
    

    // Cuando la variable cambia, se lee el nuevo ancho y si es menor a 800 px entonces modifico el estado de la variable con su funcion
    // Debo refrescar para que se ejecuten los cambios
    useEffect(() => {
        if (window.innerWidth < 800) {
            setbuttonText("COMPRAR")
        }
    }, [buttonText])
    
    
    
    // Funcion que lee el id del producto seleccionado por el usuario
    const handleDetail = (id) => {
        history.push(`./detailview/${id}`)
    }
    
    return (
    
        <Container
            w={"16rem", "16rem", null, "16rem"}
            mb={2}
            alignSelf="center"
            margin={"1rem", null, null, "0.5rem"}
            alignContent="center"
            bg="white"
            p={3}
        >
            
                <Image
                    width="100%"
                    src={imagen}
                    fallbackSrc="https://via.placeholder.com/382x300"
                    mb={[2, null, null , 4]}
                />
                    
                    <Flex 
                        flexDir="column"
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
                            textAlign="left"
                            fontSize={["0.7rem", null, null, "1rem"]}
                            maxHeight="3em"
                            overflow="hidden"
                            color="gray.400"
                            >
                            Antes ${precioAnt}
                        </Box>

                        <Box
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
                            // to={`/detailview/${id}`}
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
                            {buttonText}
                        </Button>

                    
                        
            
                    </Flex>
        </Container>

    )
}

export default Card
