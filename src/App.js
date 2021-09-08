
import './App.css';
import MainView from './Components/MainView';
import DetailView from './Components/DetailView';
import { ChakraProvider} from "@chakra-ui/react"
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

import { theme } from "./resources/theme"


function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Switch>

          <Route exact path="/mainview" component= {MainView} />
          <Route path="/detailview/:id" component={DetailView}/>

          <Redirect to="/mainview" />
        

        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
