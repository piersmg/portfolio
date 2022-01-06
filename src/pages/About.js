import Content from "../components/Content";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="h-[calc(100vh_-_8rem)]">
            <Content 
                title="About me"
                optionalClass="mx-auto mb-8 text-center"
                body={<Body />}
                center={true}
            />
        </div>
    )
}

const Body = () => {
    return (
        <div className="flex flex-col justify-center items-center h-full">
            <div className="flex flex-col w-full max-w-3xl items-start">
                <p>I’m a website developer and designer based in London, currently working at Mews, a hospitality tech company.
                    I have experience in a lot of industries, from financial services to health and fitness
                    working in web dev, web design, UI design, web management and front-end development.
                    I get a kick out of designing websites that look good and feel good to use. <Link to="/contact">Get in touch</Link> to discuss how I can help you with your project.
                </p>
                <p>I have worked on many different types of sites: from templated site-builder sites, e.g. Wordpress or Wix, for the client that wants a website they can manage 
                    and update themselves without coming back to me; to websites using JS frameworks like React and Next, or enterpise-level Content Management Systems.
                </p>
                <p>I built this website using React and Tailwind CSS, and deployed it on Netlify.</p>
            </div>
        </div>
    )
}
  
export default About;