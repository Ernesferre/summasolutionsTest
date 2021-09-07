
import './App.css';
import { ChakraProvider, Container, Heading, Text, Flex, SimpleGrid, Box } from "@chakra-ui/react"
import { theme } from "./resources/theme"
import { listaProductos } from '../src/Components/productos'
import Card from './Components/Card';


function App() {
  return (
    <ChakraProvider theme={theme}>
      
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
          // bg="red.300"
          w={["95%", null, null, "60%"]}
          mt={6}
          mb={5}
          textAlign="center"
          fontSize={12}
          // justifyContent="center"
          // alignContent="center"
          mx="auto"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra macenas accumsan lacus vel facilisis.
        </Text>

      

        <SimpleGrid
          columns={[2,null,null,4]}
          alignSelf="center"
          w={["93%", "90%", "80%" , "75%"]}
          mb={5}
          alignContent="center"
          mx="auto"
          maxH="100%"
          
          >

                            
          {listaProductos.map((item) => (
              <Flex
                // columns={{ sm: 2, md: 2, lg: 4 }}
              >
                
                <Card
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
     
    </ChakraProvider>
  );
}

export default App;
