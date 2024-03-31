import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";

import React, { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./navbar/Navbar";
import { Toaster } from "react-hot-toast";
import { useLocation } from "react-router";
import { styled } from "styled-components";

const StyleBody = styled.div`
    min-height: 93vh;
`;

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0,
        },
    },
});

const HomeLayout = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <QueryClientProvider client={queryClient}>
            <Toaster
                gutter={12}
                position="top-center"
                containerStyle={{ margin: "0px" }}
                toastOptions={{
                    success: {
                        duration: 3000,
                    },
                    error: {
                        duration: 5000,
                    },

                    style: {
                        fontSize: "16px",
                        maxWidth: "500px",
                        padding: "16px 24px",
                        backgroundColor: "var(--color-grey-0)",
                        color: "var(--color-grey-700)",
                    },
                }}
            />

            <Navbar />
            <StyleBody>
                <Outlet />
            </StyleBody>
            <Footer />
        </QueryClientProvider>
    );
};

export default HomeLayout;
