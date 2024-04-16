import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const HeroStyle = styled.header`
    background: radial-gradient(rgb(92 76 32 / 75%), rgb(0 0 0 / 90%)),
        url(/imgs/home_pages/hero.jpg) no-repeat;
    background-size: cover;
`;
const MainHeroSection = () => {
    return (
        <HeroStyle className=" pt-[25rem] pb-[15rem] text-center">
            <div className="container ">
                <div className="text-[#fff]">
                    <h2 className="text-brand-700 text-5xl font-bold mb-4">
                        book
                    </h2>
                    <h1 className="font-bold text-9xl">book name</h1>

                    <div className="text-3xl flex gap-2 justify-center items-center mt-12">
                        <Link className="" to="/">
                            home
                        </Link>
                        <span>/</span>
                        <span className="text-brand-700">book name</span>
                    </div>
                </div>
            </div>
        </HeroStyle>
    );
};

export default MainHeroSection;
