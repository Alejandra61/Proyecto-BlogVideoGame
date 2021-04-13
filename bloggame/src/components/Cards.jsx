import React from 'react'

import NavarHeader from "./navar.jsx";
import Content from "./body.jsx"
import Text from "./text"
import Footer from "./footer";


const Cards = () => {
    return (
        <div >
            <NavarHeader className="icon" />
            <Content />
            <Text text="hola a todos" />
            <Footer />
        </div>
    )
}

export default Cards
