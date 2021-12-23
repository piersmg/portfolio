import Content from "../components/Content";
import { Link } from "react-router-dom";
import '../styles/home.css';
import MI_image from '../images/mi.jpg';
import UNQ_image from '../images/unq.jpg';
import HMAN_image from '../images/herniman.jpg';
import EMP_image from '../images/empower.jpg';
import Sleep_image from '../images/sleep.webp';
import Seascape_image from '../images/seascape.jpg';
import Attoe_image from '../images/attoe.webp';
import Mews_image from '../images/mews.jpg';

const projects = [
    {
        "title": "Mews",
        "desc": "Hubspot",
        "image": Mews_image,
        "link": "/mews"
    },
    {
        "title": "MarketInvoice",
        "desc": "React",
        "image": MI_image,
        "link": "/marketinvoice"
    },
    {
        "title": "Ultimate News Quiz",
        "desc": "Wordpress",
        "image": UNQ_image,
        "link": "/unq"
    },
    {
        "title": "Herniman",
        "desc": "Wordpress",
        "image": HMAN_image,
        "link": "/herniman"
    },
    {
        "title": "Empower",
        "desc": "Static HTML/CSS/JS",
        "image": EMP_image,
        "link": "/empower"
    },
    {
        "title": "Sleep Me Happy",
        "desc": "Shopify",
        "image": Sleep_image,
        "link": "/sleep-me-happy"
    },
    {
        "title": "Seascape",
        "desc": "Wordpress",
        "image": Seascape_image,
        "link": "/seascape"
    },
    {
        "title": "Attoe Aesthetics",
        "desc": "Wix",
        "image": Attoe_image,
        "link": "/attoe-aesthetics"
    },
]

const Home = () => {
    return (
        <>
            <Content title="Piers Garthwaite" body="" optionalClass="font-headline text-[10vw] md:text-7xl" />
            <Grid projects={projects} />
        </>
    )
}

function Grid(props) {
    const projects = props.projects;
    const gridItems = projects.map((project, index) =>
        <GridTile key={index} value={project} />  
    );
    return (
        <div className="grid md:grid-cols-2 grid-rows md:grid-rows-2 grid-flow-row gap-4 md:mt-16 mt-8">
            {gridItems}
        </div>
      );
} 

function GridTile(props) {
    const project = props.value;
    return(
        <Link to={project.link} className="project-item group relative will-change-transform origin-center max-h-[175px] md:max-h-72 2xl:max-h-96 transition-all">
            <img className="w-full h-full object-cover" src={project.image} alt="" />
            <div className="absolute bottom-1 left-3 sm:left-6 md:opacity-0 group-hover:opacity-100 transition-opacity sm:pb-4 text-white z-[1]">
                <h2 className="sm:text-3xl text-[100%]">{project.title}</h2>
                <p className="hidden sm:flex">{project.desc}</p>
            </div>
        </Link>
    )
}

export default Home;