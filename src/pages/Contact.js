import Content from "../components/Content";
import Form from "../components/Form";
import '../styles/form.css';

const Contact = () => {
    return (
        <div className="h-[calc(100vh_-_8rem)]">
            <Content 
                title="Get in touch with me"
                body=""
                optionalClass="mx-auto"
            />
            <Form />
        </div>
    )
}
  
export default Contact;