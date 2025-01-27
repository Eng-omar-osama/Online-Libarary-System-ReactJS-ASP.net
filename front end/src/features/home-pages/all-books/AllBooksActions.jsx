import BookCard from "@/ui/BookCard";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const AllBooksActions = () => {
    const [category, setCategory] = useState("all");
    const [searchParams, setSearchParams] = useSearchParams({}); // [1
    const handleCategoryChange = (newCategory) => {
        searchParams.set("category", newCategory);
        setSearchParams(searchParams);
    };

    const buttons = [
        { label: "all books", category: "all" },
        { label: "children", category: "children" },
        { label: "Adventure", category: "adventure" },
        { label: "Science Fiction", category: "science-fiction" },
        { label: "Fiction", category: "fiction" },
    ];
    useLayoutEffect(() => {
        setCategory(searchParams.get("category") || "all");
    }, [searchParams]);
    return (
        <section className="section-padding">
            <div className="container">
                <h2 className="text-center text-6xl font-[600] mb-12">
                    all books
                </h2>

                <div className="flex justify-center gap-8 text-[1.6rem] text-grey-500 font-[500] flex-wrap">
                    {buttons.map((button, index) => (
                        <button
                            key={index}
                            className={`py-4 px-7 rounded-xl ${
                                category === button.category
                                    ? "bg-brand-700 text-white"
                                    : "bg-gray-200 text-gray-600"
                            }`}
                            onClick={() =>
                                handleCategoryChange(button.category)
                            }
                        >
                            {button.label}
                        </button>
                    ))}
                </div>
                <div className="flex gap-12 mt-20 flex-wrap justify-center">
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                </div>
            </div>
        </section>
    );
};

export default AllBooksActions;
