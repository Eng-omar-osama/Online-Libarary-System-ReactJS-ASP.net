import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
const NavStyle = styled.nav`
    background: var(--color-grey-0);
    position: fixed;
    width: 100%;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
    z-index: 99;
`;
const Item = styled.li`
    font-size: 1.6rem;
    font-weight: 500;
`;

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <NavStyle>
            <div className=" py-6 container flex justify-between items-center ">
                <Link className="flex items-center gap-5">
                    <div className=" w-20">
                        <img src="/logo.svg" alt="logo" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h1 className=" text-4xl text-brand-700 font-bold">
                            Books
                        </h1>
                        <p>Library System</p>
                    </div>
                </Link>
                <div className="flex gap-14 items-center">
                    <form action="">
                        <input
                            type="search"
                            placeholder="Search books"
                            className="p-2 border-2 border-brand-600 rounded-lg focus:outline-none focus:border-brand-700"
                        />
                    </form>
                    <div className="flex gap-6">
                        <Link>
                            <Button>login</Button>
                        </Link>
                        <Link>
                            <Button variation="secondary">Signup</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </NavStyle>
    );
};

export default Navbar;
