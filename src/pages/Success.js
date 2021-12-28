import Content from "../components/Content";

const Success = () => {
    return (
        <div className="h-[calc(100vh_-_8rem)]">
            <Content 
                title="Success!"
                optionalClass="mx-auto mb-8 text-center"
                body="Thanks for getting in touch. I'll get back to you soon."
                center={true}
            />
        </div>
    )
}
  
export default Success;