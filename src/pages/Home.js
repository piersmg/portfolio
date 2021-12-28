import Content from "../components/Content";
import { Link } from "react-router-dom";
import '../styles/home.css';
// import MI_image from '../images/mi.jpg';
// import UNQ_image from '../images/unq.jpg';
// import HMAN_image from '../images/herniman2.jpg';
// import EMP_image from '../images/empower.jpg';
// import Sleep_image from '../images/sleep2.webp';
// import Seascape_image from '../images/seascape.jpg';
// import Attoe_image from '../images/attoe.webp';
// import Mews_image from '../images/mews.jpg';

const projects = [
    {
        "title": "Mews",
        "desc": "Hubspot",
        "image": "/images/mews.jpg",
        "link": "/mews"
    },
    {
        "title": "Herniman",
        "desc": "Wordpress",
        "image": "/images/herniman2.jpg",
        "link": "/herniman"
    },
    {
        "title": "Empower",
        "desc": "Static HTML/CSS/JS",
        "image": "/images/empower.jpg",
        "link": "/empower"
    },
    {
        "title": "Sleep Me Happy",
        "desc": "Shopify",
        "image": "/images/sleep2.webp",
        "link": "/sleep-me-happy"
    },
    {
        "title": "Seascape",
        "desc": "Wordpress",
        "image": "/images/seascape.jpg",
        "link": "/seascape"
    },
    {
        "title": "Attoe Aesthetics",
        "desc": "Wix",
        "image": "/images/attoe.webp",
        "link": "/attoe-aesthetics"
    },
    {
        "title": "MarketFinance",
        "desc": "React (previously MarketInvoice)",
        "image": "/images/mi.jpg",
        "link": "/marketfinance"
    },
    {
        "title": "Ultimate News Quiz",
        "desc": "Wordpress",
        "image": "/images/unq.jpg",
        "link": "/ultimate-news-quiz"
    }
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
        <GridTile key={index} value={project} index={index} />  
    );
    return (
        <div className="grid md:grid-cols-2 grid-rows md:grid-rows-2 grid-flow-row gap-4 md:mt-16 mt-8">
            {gridItems}
        </div>
      );
} 

function GridTile(props) {
    const project = props.value;
    const index = props.index;
    return(
        <Link to={project.link} className="project-item group relative will-change-transform origin-center max-h-[175px] md:max-h-72 2xl:max-h-96 transition-all">
            <img className="w-full h-full object-cover" src={`${project.image}`} alt="" loading={`${index > 3 ? 'lazy' : ''}`} />
            <div className="absolute bottom-1 left-3 sm:left-6 transition-opacity sm:pb-4 text-white z-[1]">
                <h2 className="sm:text-3xl text-[100%]">{project.title}</h2>
                <p className="hidden sm:flex mb-0">{project.desc}</p>
            </div>
        </Link>
    )
}

export default Home;