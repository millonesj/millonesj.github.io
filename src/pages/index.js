import Head from 'next/head';
import PropTypes from 'prop-types';
import { getAllItems, getFeaturedItems } from '../lib/items-util';
import HeaderOne from '../components/header/header-1';
import Hero from '../components/home-page/hero';
import Services from '../components/home-page/services';
import About from '../components/home-page/about';
import PricingTab from '../components/home-page/pricing-tab';
import Testimonial from '../components/home-page/testimonial';
import Brand from '../components/home-page/brand';
import FeaturedPost from '../components/home-page/featured-post';
import LatestProject from '../components/home-page/latest-project';

function HomePage({
    heroItems,
    services,
    projects,
    pricingItems,
    testimonialItems,
    brandItems,
    posts,
}) {
    return (
        <>
            <Head>
                <title>Arkusi - Arquitectura y Diseño de interiores</title>
                <meta
                    name="description"
                    content="Arkusi Estudio - Expertos en arquitectura e interiorismo. ¡Exploramos tu mundo, creamos tus sueños! Descubre cómo transformamos espacios en experiencias únicas."
                />
                <meta
                    name="title"
                    content="Arkusi Estudio - Exploramos tu mundo, creamos tus sueños"
                />
                <meta
                    name="keywords"
                    content="Arkusi estudio, arquitectura, interiorismo, diseño de interiores, diseño de oficinas, ambientación de espacios, decoración de interiores, interiorismo residencial, interiorismo comercial"
                />
                <meta name="author" content="Arkusi Estudio"/>

                <meta
                    property="og:title"
                    content="Arkusi Estudio - Exploramos tu mundo, creamos tus sueños"
                />
                <meta
                    property="og:description"
                    content="Arkusi Estudio - Expertos en arquitectura e interiorismo. ¡Exploramos tu mundo, creamos tus sueños! Descubre nuestras creaciones inspiradoras."
                />
                <meta property="og:url" content="http://www.arkusi.com"/>
            </Head>
            <HeaderOne />
            <Hero heroItems={heroItems} />
            <Services services={services} />
            <LatestProject projects={projects} />
            <About />
            {/* <PricingTab pricingItems={pricingItems} /> */}
            {/* <Testimonial
                testimonialItems={testimonialItems}
                testimonialTitle="+1,250 Happy Clients"
            /> */}
            {/* <Brand brandItems={brandItems} /> */}
            {/* <FeaturedPost posts={posts} /> */}
        </>
    );
}

export function getStaticProps() {
    const heroItems = getAllItems('heros');
    const posts = getAllItems('posts');
    const projects = getAllItems('projects');
    const services = getAllItems('services');
    const pricingItems = getAllItems('pricing');
    const testimonialItems = getAllItems('testimonial');
    const brandItems = getAllItems('brands');
    const LatestProject = getFeaturedItems(projects);
    const FeaturedPost = getFeaturedItems(posts);

    return {
        props: {
            heroItems,
            projects: LatestProject,
            posts: FeaturedPost,
            services,
            pricingItems,
            testimonialItems,
            brandItems,
        },
    };
}

HomePage.propTypes = {
    heroItems: PropTypes.instanceOf(Object).isRequired,
    services: PropTypes.instanceOf(Object).isRequired,
    projects: PropTypes.instanceOf(Object).isRequired,
    pricingItems: PropTypes.instanceOf(Object).isRequired,
    testimonialItems: PropTypes.instanceOf(Object).isRequired,
    brandItems: PropTypes.instanceOf(Object).isRequired,
    posts: PropTypes.instanceOf(Object).isRequired,
};

export default HomePage;
