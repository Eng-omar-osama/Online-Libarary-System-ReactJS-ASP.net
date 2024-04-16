import BookMainDetails from "@/features/home-pages/book-details/BookMainDetails";
import MainHeroSection from "@/ui/MainHeroSection";
import PageLayout from "@/ui/PageLayout";
import React from "react";

const BookDetails = () => {
    return (
        <PageLayout>
            <MainHeroSection />

            <div className="container my-12">
                <BookMainDetails />
            </div>
        </PageLayout>
    );
};

export default BookDetails;
