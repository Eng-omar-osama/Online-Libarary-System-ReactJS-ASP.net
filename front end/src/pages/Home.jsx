import React from "react";
import Hero from "../features/home-pages/home/Hero";
import About from "../features/home-pages/home/About";
import NewProducts from "../features/home-pages/home/NewProducts";

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <NewProducts />
        </div>
    );
};

export default Home;
