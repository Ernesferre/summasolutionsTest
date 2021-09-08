import React, { useEffect, useState } from 'react'
import { Box, HStack, SimpleGrid, Stack, Image, Center, Heading, Text, Button, VStack, Flex } from "@chakra-ui/react"
import { useParams } from 'react-router'
import Swal from 'sweetalert2'
import { listaProductos } from './productos'
import { useHistory, Link } from "react-router-dom";

const DetailView = () => {
    
    const [articulo, setArticulo] = useState({})
    
    const history = useHistory();
    

    const productId  = useParams();
    const { id } = productId
    console.log("Product Id:", id)
    
    const buscarProducto = (id) => {
        console.log("Id de Entrada a funcion:", id)
        const findProductById = listaProductos.find(item => item.id == id )
        console.log("Find Product By Id:", findProductById)
        setArticulo(findProductById)
    }

    const handleBack = () => {
        history.push("./")
    }

    const handleBuy = (id) => {
        console.log("Has comprado el articulo:", id)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Felicitaciones, has comprado el articulo nro ${id}`,
            showConfirmButton: false,
            timer: 1500
          })
        
    }

    useEffect(() => {
        buscarProducto(id) 
    }, [articulo])

    // Desestructuracion

    const {descripcion, precio, imagen} = articulo

    return (
        <>
            <Button
                onClick={() => handleBack()}
            >
                Volver
            </Button>

            <Flex
                bg="white" 
                w={["95%", "90%", "80%", "80%"]}
                
                // border="1px" 
                borderRadius={8}
                mt={["2rem", null , null, "5rem"]}
                // mb="3rem"
                // my="auto"
                mx="auto"
                // borderColor="gray.100" 
                p={6} 
                // d={{base: "grid", md: "grid"}}
            >
                <Stack
                    direction={['column', "column" , "row" , "row"]}
                >

                
                    <Box
                        mx="auto" 
                        // alignItems="center"
                        w={["100%", "100%", "100%", "50%"]}
                        // alignSelf="center"
                        // alignContent="center"
                        // justifyContent="center"
                        
                        // maxW={["220px","300px", "300px", "300px"]}
                        // bg="blackAlpha.300"
                    >
                        <Image 
                            src={imagen}
                            mx="auto"
                            // textAlign="center"
                            // alignContent="center"
                            // justifyContent="space-around" 
                            
                            // w="300px"  
                            
                        />
                    </Box>
               
            
                    <Stack
                        // alignItems="center"
                        p={2}
                        w={["100%", "100%", "100%", "70%"]}
                        bg=""
                        mx="auto" 
                        // maxW={["220px","300px", "300px", "400px"]}
                    >

                        {/* <Heading 

                            mb={2}
                        >
                            Producto Nro {articulo.id}
                        </Heading> */}
                        
                        
                        
                        <Heading 
                            // mb={2}
                            fontSize={20}
                        >
                            {descripcion}
                        </Heading>

                        <Text
                            fontSize="small"
                            color="gray.400"
                        >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra macenas accumsan lacus vel facilisis.
                        </Text>

                        <Heading 
                            // mb={2}
                            fontSize="lg"
                            fontSize={15}
                            // mb={5}
                        >
                            Producto: {articulo.id}
                        </Heading>
                            
                        <Text 
                            // fontFamily="Georama" 
                            fontWeight="bold"
                            
                        > 
                            $ {precio}
                        </Text>

                        
                        {/* <Box 
                            className="d-flex justify-content-center"
                            mt={4}
                        >

                            <button className= "btn btn-secondary" onClick={decrementar} disabled={qty <= 1 ? true : null }>  - </button>
                            <h2 className="hola strong mt-2 ml-3 mr-3">{qty}</h2>
                            <button className="btn btn-secondary" onClick={incrementar}  disabled= {qty === item.stock ? true : null }> + </button>	
                            

                        </Box> */}
                        
                        <Button                          
                            onClick={() => handleBuy(articulo.id)}
                            
                            bg="#23B202"
                            color="white"
                            // h={[1,null, null, 8]}
                            borderRadius="full"
                            fontSize= "small"
                            _hover= {{
                                color: "#23B202",
                                bg: "white",
                                fontWeight: "bold",
                                boxShadow: "dark-lg"
                            }}
                                
                        >
                            COMPRAR
                        </Button>
                
                    </Stack>
                </Stack>
            
        </Flex>
          
    
        </>
        
    )
}

export default DetailView
