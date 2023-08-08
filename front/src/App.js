import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// 스타일
import "./App.css";
// 기능
import ScrollToTop from "./Components/ScrollToTop";
// 레이아웃
import BaseLayout from "./Layout/BaseLayout";
// 페이지
import Home from "./Pages/Home";
import OverView from "./Pages/OverView";
import Search from "./Pages/Search";

function App() {
    const [currentPage, setCurrentPage] = useState("");
    const [colorMode, setColorMode] = useState("light");
    console.log(colorMode);
    return (
        <div className="App">
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<></>} />
                    <Route
                        element={
                            <BaseLayout
                                currentPage={currentPage}
                                colorMode={colorMode}
                            />
                        }
                    >
                        <Route
                            path="/home"
                            element={
                                <Home
                                    pageTitle="홈"
                                    setCurrentPage={setCurrentPage}
                                    setColorMode={setColorMode}
                                />
                            }
                        />
                        <Route
                            path="/overview"
                            element={
                                <OverView
                                    pageTitle="둘러보기"
                                    setCurrentPage={setCurrentPage}
                                    setColorMode={setColorMode}
                                />
                            }
                        />
                        <Route
                            path="/voicemodel"
                            element={
                                <OverView
                                    pageTitle="음성모델"
                                    setCurrentPage={setCurrentPage}
                                    setColorMode={setColorMode}
                                />
                            }
                        />
                        <Route
                            path="/search"
                            element={
                                <Search
                                    pageTitle="음성모델"
                                    setCurrentPage={setCurrentPage}
                                    setColorMode={setColorMode}
                                />
                            }
                        />
                    </Route>
                    {/* NotFound */}
                    <Route path="/*" element={<></>} />
                </Routes>
            </BrowserRouter>
        </div>

        // <Main />
    );
}

export default App;
