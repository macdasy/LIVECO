import React from "react";
import Navbar from "./navbar.js";
import Landing from "./landing.js";
import Fourl from "./fourl.js";
import Pricing from "./pricing.js";
import Lsus from "./lsus.js";
import Sbw from "./sbw.js"
import Contact from "./contact.js";
import Footer from "./footer.js";

export default function Home(){
    return(
        <div className="home">
            <Navbar />
            <Landing />
            <Fourl />
            <Pricing />
            <Lsus />
            <Sbw /> 
            <Contact />
            <Footer />
        </div>
    );
}