import Content from "../components/Content";
import { Link } from "react-router-dom";
import '../styles/home.css';
import MI from '../images/mi.jpg';
import UNQ from '../images/unq.jpg';
import HMAN from '../images/herniman.jpg';
import EMP from '../images/empower.jpg';

const projects = [
    {
        id: 1,
        "title": "MarketInvoice",
        "image": MI,
        "link": "/marketinvoice"
    },
    {
        id: 2,
        "title": "Ultimate News Quiz",
        "image": UNQ,
        "link": "/unq"
    },
    {
        id: 3,
        "title": "Herniman",
        "image": HMAN,
        "link": "/herniman"
    },
    {
        id: 4,
        "title": "Empower",
        "image": EMP,
        "link": "/empower"
    },
]

const Home = () => {
    return (
        <>
            <Content title="Piers Garthwaite" body="" optionalClass="font-headline text-7xl" />
            <Grid projects={projects} />
        </>
    )
}

function Grid(props) {
    const projects = props.projects;
    const gridItems = projects.map((project) =>
        <GridTile key={project.id} value={project} />  
    );
    return (
        <div className="grid md:grid-cols-2 md:grid-rows-2 grid-flow-row gap-4 mt-16">
            {gridItems}
        </div>
      );
} 

function GridTile(props) {
    const project = props.value;
    console.log(project);
    return(
        <Link to={project.link} className="project-item group relative">
            <img className="w-full" src={project.image} alt="" />
            <h2 className="absolute bottom-1 left-6 text-3xl opacity-0 group-hover:opacity-100 transition-opacity pb-4 text-white z-[1]">
                {project.title}
            </h2>
        </Link>
    )
}

// const ExampleComponent = () => {
//   const history = useHistory();
//   const handleClick = () => history.push('/some-route');
  
//   return (
//     <button type="button" onClick={handleClick}>
//       Navigate to another route
//     </button>
//   );
// };
export default Home;