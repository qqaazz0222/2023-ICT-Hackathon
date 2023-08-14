import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// 스타일
import "./App.css";
// 기능
import ScrollToTop from "./Components/ScrollToTop";
import ClearSearch from "./Components/ClearSearch";
// 레이아웃
import BaseLayout from "./Layout/BaseLayout";
// 페이지
import Home from "./Pages/Home";
import OverView from "./Pages/OverView";
import Search from "./Pages/Search";
import My from "./Pages/My";
import CreateModel from "./Pages/CreateModel";
import SearchPopUp from "./Pages/SearchPopUp";
import Record from "./Pages/Record";
import Music from "./Pages/Music";
import Play from "./Pages/Play";

function App() {
    const [currentPage, setCurrentPage] = useState("");
    const [colorMode, setColorMode] = useState("light");
    console.log(colorMode);
    return (
        <div className="App">
            <BrowserRouter>
                <ScrollToTop />
                <ClearSearch />
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
                            path="/model"
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
                        <Route
                            path="/My"
                            element={
                                <My
                                    pageTitle="마이"
                                    setCurrentPage={setCurrentPage}
                                    setColorMode={setColorMode}
                                />
                            }
                        />
                        <Route
                            path="/model/create"
                            element={
                                <CreateModel
                                    pageTitle="음성모델 만들기"
                                    setCurrentPage={setCurrentPage}
                                    setColorMode={setColorMode}
                                />
                            }
                        />
                        <Route
                            path="/model/search"
                            element={
                                <SearchPopUp
                                    pageTitle="음성모델 만들기"
                                    setCurrentPage={setCurrentPage}
                                    setColorMode={setColorMode}
                                />
                            }
                        />
                        <Route
                            path="/model/record"
                            element={
                                <Record
                                    pageTitle="녹음"
                                    setCurrentPage={setCurrentPage}
                                    setColorMode={setColorMode}
                                />
                            }
                        />
                        <Route
                            path="/music"
                            element={
                                <Music
                                    pageTitle="음악"
                                    setCurrentPage={setCurrentPage}
                                    setColorMode={setColorMode}
                                />
                            }
                        />
                        <Route
                            path="/play"
                            element={
                                <Play
                                    pageTitle="재생"
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
