import React, { useEffect, useState } from 'react'
import { Box, HStack, SimpleGrid, Stack, Image, Center, Heading, Text, Button, VStack } from "@chakra-ui/react"
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

            <SimpleGrid
                bg="grey.200" 
                w='70%'
                border="1px" 
                borderRadius={8}
                mt="5rem"
                mb="3rem"
                mx="auto"
                borderColor="gray.100"
                height="25rem"
                // columns={6} 
                spacingY="10px" 
                spacingX="10px" 
                p={8} 
                d={{base: "grid", md: "grid"}}
            >
                <HStack>

                
                    <Box
                        alignItems="center"
                        w="50%"
                    >
                        <Image 
                            src={imagen} 
                            mx="auto" 
                            width="250px"  
                        />
                    </Box>
               
            
                <Box
                    p={2}
                >
                    <Heading 
                        mb={2}
                    >
                        Producto Nro {articulo.id}
                    </Heading>
                    
                    
                    <Heading 
                        mb={2}
                    >
                        {descripcion}
                    </Heading>

                        
                    <Text 
                        fontFamily="Georama" 
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
                            COMPRAR
                        </Button>
            
                </Box>
        </HStack>
            
        </SimpleGrid>
          
    
        </>
        
    )
}

export default DetailView
