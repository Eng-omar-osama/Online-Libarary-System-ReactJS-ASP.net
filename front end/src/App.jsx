import "./globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "react-hot-toast";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import HomeLayout from "./ui/HomeLayout";
import NotFound from "./pages/NotFound";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";

function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 0,
            },
        },
    });

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={false} />

                <BrowserRouter>
                    <Routes>
                        <Route element={<HomeLayout />}>
                            <Route path="/" element={<Home />} />
                            <Route
                                path="/books/:id"
                                element={<BookDetails />}
                            />
                        </Route>

                        {/** admin routes **/}

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>

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
            </QueryClientProvider>
        </>
    );
}

export default App;
