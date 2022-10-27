import { createContext, lazy, Suspense, useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import './App.css';
import {BOOK_PATH, CONTRIBUTE_PATH, COURSE_PATH, HOME_PATH} from "./constant/route";
import Layout from "./components/Layout";
import Courses from "./pages/courses";
import { QueryClient, QueryClientProvider } from 'react-query'
import SubHeading from "./components/SubHeading";

function App() {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <Layout>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path='*' element={<Courses />} />
                    </Routes>
                </Suspense>
            </Layout>
        </QueryClientProvider>
    );
}

export default App;
