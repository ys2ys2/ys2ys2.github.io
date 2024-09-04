import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Introduction from "../components/Introduction";
import Projects from "../components/Projects";
import SideProject from "../components/SideProject";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Skip from "../components/Skip";
import Main from "../components/Main";

const HomeView = () => {
    return (
    <>
        <Skip />
        <Header />
        <Main>
            <Intro />
            <Introduction />
            <Projects />
            <SideProject />
            <Contact />
        </Main>
        <Footer/>
    </>
    );
};

export default HomeView;