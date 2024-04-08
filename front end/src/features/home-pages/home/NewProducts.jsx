import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../ui/Button";
import BookCard from "../../../ui/BookCard";

const NewProducts = () => {
    return (
        <section className="section-padding">
            <div className="container">
                <div className="flex justify-center flex-col text-center">
                    <h2 className="text-7xl font-extrabold mb-6">
                        our <span className="text-brand-600">New</span> products
                    </h2>
                    <p className="max-w-[60rem] mx-auto text-[1.6rem] text-[var(--color-grey-400)]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Vitae, asperiores. Officiis eos maxime ex?
                        Consequatur, esse inventore vitae doloribus architectoo
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-12 mt-[8rem]">
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                </div>
            </div>
        </section>
    );
};

export default NewProducts;
