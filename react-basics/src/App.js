import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"; 

function App(){
    return <>
        <BrowserRouter>
            <Switch>
                <Route exact path= "/">
                    Home
                </Route>
                <Route path= "/signin">
                    Sign In
                </Route>
            </Switch>
        </BrowserRouter>
        
        </>;
}

export default App;  