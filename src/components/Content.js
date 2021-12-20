const Content = ({title, body}) => {
    return (
        <div className='content-container'>
            <h1>
                {title}
            </h1>
            {body.length > 0 &&
            <div className='content-body'>{body}</div>
            }
        </div>
    )
};
  
export default Content;