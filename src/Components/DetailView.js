import React, { useEffect, useState } from 'react'
import { Box, Stack, Image, Heading, Text, Button, Flex } from "@chakra-ui/react"
import { useParams } from 'react-router'
import Swal from 'sweetalert2'
import { listaProductos } from './productos'
import { useHistory } from "react-router-dom";

const DetailView = () => {
    
    const [articulo, setArticulo] = useState({})
    
    const history = useHistory();
    

    //Extraigo el id de la url
    const productId  = useParams();
    const { id } = productId
    
    
    // Funcion que busca en un array el Id seleccionado
    const buscarProducto = (id) => {
        const findProductById = listaProductos.find(item => item.id == id )
        // console.log("Find Product By Id:", findProductById)
        setArticulo(findProductById)
    }

    // Regreso a Main View
    const handleBack = () => {
        history.push("./")
    }

    // Funcio de notificacion de compra
    const handleBuy = (id) => {
        // console.log("Has comprado el articulo:", id)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Felicitaciones, has comprado el articulo nro ${id}`,
            showConfirmButton: false,
            timer: 1500
          })
        
    }

    // Cuando la variable articulo cambia se llama a la funcion
    useEffect(() => {
        buscarProducto(id) 
    }, [articulo])


    // Desestructuracion
    const {descripcion, precio, imagen} = articulo

    return (
        <>
            <Button
                mt="1rem"
                ml="1rem"
                onClick={() => handleBack()}
            >
                Volver
            </Button>

            <Flex
                bg="white" 
                w={["95%", "90%", "70%", "60%"]}
                borderRadius={8}
                mt={["1rem", null , null, "5rem"]}
                mx="auto" 
                p={6} 
            >
                <Stack
                    direction={['column', "column" , "row" , "row"]}
                >

                
                    <Box
                        mx="auto" 
                        w={["100%", "100%", "100%", "50%"]}
                    >
                        <Image 
                            src={imagen}
                            mx="auto"  
                        />
                    </Box>
               
            
                    <Stack
                        p={2}
                        w={["100%", "100%", "100%", "70%"]}
                        mx="auto" 
                    >   
                           
                        <Heading 
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
                            fontSize="medium"
                            fontWeight="normal"
                        >
                            Producto: {articulo.id}
                        </Heading>
                            
                        <Text 
                            fontWeight="bold" 
                            fontSize="xl"           
                        > 
                            $ {precio}
                        </Text>

                        
                        <Button                          
                            onClick={() => handleBuy(articulo.id)}
                            bg="#23B202"
                            color="white"
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
