import Content from "../components/Content";
import Form from "../components/Form";
import '../styles/form.css';

const Contact = () => {
    return (
        <div className="h-[calc(100vh_-_8rem)] items-center justify-center flex flex-col">
            <Content 
                title="Get in touch with me"
                body=""
                optionalClass="mx-auto mb-8 text-center"
            />
            <Form />
        </div>
    )
}
  
export default Contact;