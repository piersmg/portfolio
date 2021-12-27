const Content = ({title, body, optionalClass, center}) => {
    const regex = /text-[0-9]+/;
    let classesToAdd = 'text-4xl';
    if(optionalClass !== undefined) {
        console.log(optionalClass.search(regex))
        if (optionalClass.search(regex) > -1) {
            classesToAdd = optionalClass.substring(optionalClass.indexOf('text-'), optionalClass.indexOf(' '));
            optionalClass.replace(classesToAdd, '');
        }
        classesToAdd = `${optionalClass} ${classesToAdd}`;
    }
    return (
        <div className={`flex flex-col ${center === true ? 'items-center justify-center h-full' : ''}`}>
            <h1 className={`${classesToAdd}`}>
                {title}
            </h1>
            {(body.length > 0 || body !== undefined) &&
            <div className='content-body'>{body}</div>
            }
        </div>
    )
};
  
export default Content;