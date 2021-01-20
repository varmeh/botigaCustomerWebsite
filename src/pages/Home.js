import React from "react";
import { Header } from "../components/header/header";
import {Body } from "../components/body/body";
import { Footer } from "../components/footer/footer";


export function Home() {
    return (
        <div className="container">
            <Header />
            <Body/>
            <Footer/>
            <div className="rowSpace"/>
        </div>
    );
}

export default Home;
