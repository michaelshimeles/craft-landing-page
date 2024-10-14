import React, { useRef } from 'react';
import {NavBar} from '../components/navbar';  // Adjust this path based on the actual location
import Hero from '../components/home-page/hero';
import FeatureHowitWorks from '../components/home-page/feature-list';
import FeatureImages from '../components/home-page/feature-carousel';
import FeatureServices from '../components/home-page/feature-set';
import FeatureCTAForm from '../components/home-page/feature-cta';
import Footer from '../components/home-page/footer';
import { Container, Main, Section } from '../components/craft';  // Ensure these are the correct import paths

export default function Home() {
    const heroRef = useRef(null);
    const howItWorksRef = useRef(null);
    const imagesRef = useRef(null);
    const servicesRef = useRef(null);
    const ctaFormRef = useRef(null);

    return (
        <>
            <NavBar
                heroRef={heroRef}
                howItWorksRef={howItWorksRef}
                imagesRef={imagesRef}
                servicesRef={servicesRef}
                ctaFormRef={ctaFormRef}
            />
            <Main>
                <Section>
                    <Container>
                        <div ref={heroRef}><Hero /></div>
                        <div ref={howItWorksRef}><FeatureHowitWorks /></div>
                        <div ref={imagesRef}><FeatureImages /></div>
                        <div ref={servicesRef}><FeatureServices /></div>
                        <div ref={ctaFormRef}><FeatureCTAForm /></div>
                        <Footer />
                    </Container>
                </Section>
            </Main>
        </>
    );
}
