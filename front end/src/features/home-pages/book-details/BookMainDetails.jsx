import BookCard from "@/ui/BookCard";
import Button from "@/ui/Button";
import React from "react";

const BookMainDetails = () => {
    return (
        <section className="flex gap-12 flex-wrap section-padding justify-center items-center">
            <div className=" basis-[50rem]  max-w-[50rem] ">
                <img src="/imgs/home_pages/book1.jpg" alt="book" />
            </div>
            <div className="basis-[55rem] ">
                <div className=" pb-6 mb-6 border-b-2 border-b-gray-200 ">
                    <h2 className="mb-6 font-[600] text-6xl">book name</h2>
                    <div className="text-[2rem] font-[300] text-grey-400">
                        by:{" "}
                        <span className="text-brand-700 font-[600]">
                            ali alaa
                        </span>
                    </div>
                </div>
                <p className="text-grey-400 mb-8 line-clamp-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi vitae eaque vero sit nemo corporis inventore
                    repellendus, dolores ducimus cupiditate magni magnam quam
                    iste delectus minus ullam tempora tenetur corrupti. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Animi
                    vitae eaque vero sit nemo corporis inventore repellendus,
                    dolores ducimus cupiditate magni magnam quam iste delectus
                    minus ullam tempora tenetur corrupti. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Animi vitae eaque vero
                    sit nemo corporis inventore repellendus, dolores ducimus
                    cupiditate magni magnam quam iste delectus minus ullam
                    tempora tenetur corrupti. amet consectetur adipisicing elit.
                    Animi vitae eaque vero sit nemo corporis inventore
                    repellendus, dolores ducimus cupiditate magni magnam quam
                    iste delectus minus ullam tempora tenetur corrupti. amet
                </p>

                <div className="text-2xl text-grey-400 font-[300] mb-8">
                    availability:{" "}
                    <span className="text-green-500 font-[600]">in stock</span>
                </div>
                <div className="text-2xl text-grey-400 font-[300] mb-8">
                    category:{" "}
                    <span className="text-grey-500 font-[600]">
                        programming
                    </span>
                </div>
                <Button variation="secondary">borrow</Button>
            </div>
            <div className="mt-[5rem] max-w-[120rem] text-[1.6rem] leading-[1.7] ">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi vitae eaque vero sit nemo corporis inventore
                    repellendus, dolores ducimus cupiditate magni magnam quam
                    iste delectus minus ullam tempora tenetur corrupti. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Animi
                    vitae eaque vero sit nemo corporis inventore repellendus,
                    dolores ducimus cupiditate magni magnam quam iste delectus
                    minus ullam tempora tenetur corrupti. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Animi vitae eaque vero
                    sit nemo corporis inventore repellendus, dolores ducimus
                    cupiditate magni magnam quam iste delectus minus ullam
                    tempora tenetur corrupti. amet consectetur adipisicing elit.
                    Animi vitae eaque vero sit nemo corporis inventore
                    repellendus, dolores ducimus cupiditate magni magnam quam
                    iste delectus minus ullam tempora tenetur corrupti. amet
                    consectetur adipisicing elit. Animi vitae eaque vero sit
                    nemo corporis inventore repellendus, dolores ducimus
                    cupiditate magni magnam quam iste delectus minus ullam
                    tempora tenetur corrupti. amet consectetur adipisicing elit.
                    Animi vitae eaque vero sit nemo corporis inventore
                    repellendus, dolores ducimus cupiditate magni magnam quam
                    iste delectus minus ullam tempora tenetur corrupti.
                </p>
            </div>
            <div className="flex gap-12 mt-20 flex-wrap justify-center">
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
            </div>
        </section>
    );
};

export default BookMainDetails;
