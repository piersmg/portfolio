import Content from "../components/Content";
import MI from '../images/mi';
import UNQ from '../images/unq.jpg';
import HMAN from '../images/herniman.jpg';
import EMP from '../images/empower.jpg';

const projects = [
    {
        id: 1,
        "title": "MarketInvoice",
        "image": {MI}
    },
    {
        id: 2,
        "title": "Ultimate News Quiz",
        "image": {UNQ}
    },
    {
        id: 3,
        "title": "Herniman",
        "image": {HMAN}
    },
    {
        id: 4,
        "title": "Empower",
        "image": {EMP}
    },
]

const Home = () => {
    return (
        <>
            <Content title="Piers Garthwaite" body="" optionalClass="font-headline text-7xl" />
            <Grid projects={projects} />,
        </>
    )
}

function Grid(props) {
    const projects = props.projects;
    const gridItems = projects.map((project) =>
        <GridTile key={project.id} value={project} />  
    );
    return (
        <div className="grid grid-flow-row">
            {gridItems}
        </div>
      );
} 

function GridTile(props) {
    const project = props.value;
    return(
        <div className="group">
            <img src={project.image} alt={`Image showing ${project.stitle}`} />
            <h2 className="text-3xl scale-0 group-hover:scale-100">
                {project.title}
            </h2>
        </div>
    )
}
  
export default Home;