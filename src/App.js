import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './routes/Route'


export const App = () => { //this is fat Arror  ==> ES6 ===> 2015

    return (
        <BrowserRouter>
            <Routes>
                {

                    routesgit .map((currentValue, index, arr) => {
                        return ( <Route key={index} path={currentValue.path} element={ currentValue.element} />)
                    })

            }


            </Routes>
        </BrowserRouter>
    )
}
