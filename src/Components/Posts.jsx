import PropTypes from 'prop-types';

function Posts({postsBody}) {

const {postsContent, firstName} = postsBody;

return (
    <>

<h1> Posts will go here </h1>
        <div classname = "card">
            <div className = "container">
                    <h4 className='PostsName'>{firstName}</h4>
                <p>{postsContent}</p>
            </div>
        </div>

    </>
    )
}

 Posts.propTypes = {
     postsContent: PropTypes.shape({
         firstName: PropTypes.string,
         postsBody: PropTypes.string
     })
 }

export default Posts;