import React, { useEffect, useRef, useState } from 'react';
import './style/MyApp.css'

import NavBar from './NavBar/NavBar';
import Home from './MainFolder/Home/Home'
import Intro from './MainFolder/Introduce/Intro'
import Skill from './MainFolder/Skills/Skill'
import Project from './MainFolder/Project/Project'
import Contact from './MainFolder/Contact/Contact';

import { AppProvider } from './Context/AppContext';
import Certificate from './MainFolder/Certificate/Certificate';

function MyApp() {
    // let [Language, ChoiseLanguage] = useState(0);

    const ActiveRef = useRef(null);
    const Ref = useRef(null);

    const [activePage, setActivePage] = useState("Home")
    const [active, setActive] = useState("Home")

    const [TabToggle, setTabToggle] = useState(true)
    const [offset, setOffset] = useState(0);

    const executeScroll = () => {
        ActiveRef.current.scrollIntoView({ behavior: 'smooth' });
    }


    useEffect(() => {
        executeScroll();
    }, [TabToggle])


    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);

        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []); // Get scroll position


    useEffect(() => {

        const HomeHeigt = document.getElementById("HomeID");
        const IntroHeigt = document.getElementById("IntroduceID");
        const SkillHeigt = document.getElementById("SkillID");
        const ProjectHeigt = document.getElementById("ProjectID");
        const CertificateHeigt = document.getElementById("CertificateID");
        const ContactHeigt = document.getElementById("ContactID");

        const IntroHeigtPosition = HomeHeigt.offsetHeight - 1
        const SkillPosition = IntroHeigtPosition + IntroHeigt.offsetHeight - 1
        const ProjectPosition = SkillPosition + SkillHeigt.offsetHeight - 1
        const CertificatePosition = ProjectPosition + ProjectHeigt.offsetHeight - 1
        const ContactPosition = CertificatePosition + CertificateHeigt.offsetHeight - 1


        // console.log("==================================")
        // console.log(IntroHeigtPosition)
        // console.log(SkillPosition)
        // console.log(ProjectPosition)
        // console.log(ContactPosition)
        // console.log(offset)
        if (offset >= ContactPosition) {
            setActivePage("Contact")
            setActive("Contact")
        } else {
            if (offset >= CertificatePosition) {
                setActivePage("Certificate")
                setActive("Certificate")
            } else {
                if (offset >= ProjectPosition) {
                    setActivePage("Project")
                    setActive("Project")
                } else {
                    if (offset >= SkillPosition) {
                        setActivePage("Skill")
                        setActive("Skill")
                    } else {
                        if (offset >= IntroHeigtPosition) {
                            setActivePage("Introduce")
                            setActive("Introduce")
                        } else {
                            setActivePage("Home")
                            setActive("Home")
                        }
                    }
                }
            }
        }
    }, [offset])

    const Home_ContactButton = () => {
        setActivePage("Contact")
        setTabToggle(!TabToggle)
    }
    const IsActivePage = (page) => {
        return activePage == page ? ActiveRef : Ref
    }
    return (

        <div className='BKApp'>
            <AppProvider>
                <NavBar setActivePage={setActivePage} active={active} TabToggle={TabToggle} setTabToggle={setTabToggle} />
                <Home Home_ContactButton={Home_ContactButton} forwardedRef={IsActivePage("Home")} />
                <Intro forwardedRef={IsActivePage("Introduce")} />
                <Skill forwardedRef={IsActivePage("Skill")} />
                <Project forwardedRef={IsActivePage("Project")} />
                <Certificate forwardedRef={IsActivePage("Certificate")} />
                <Contact forwardedRef={IsActivePage("Contact")} />
            </AppProvider>
        </div>
    )
}

export default MyApp;