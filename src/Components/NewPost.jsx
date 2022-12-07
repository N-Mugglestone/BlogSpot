import {useState} from "react";
import axios from 'axios';
import Model from './Model.jsx'

const NewPost = ({}) => {

const [newAddPost, setNewAddPost]= useState('');
const [addPostMessage, setNewAddPostMessage] = useState('');

const makeNewPost = async (e) => {
e.preventDefault();


const newPost = new Model(newAddPost)

if(Object.keys(newPost).length){
try {
const res = await axios.post('http://localhost:3000/newPost/', newPost)
setNewAddPostMessage(res.data.message);
setNewAddPost('')
}
catch (err){
setNewAddPostMessage('there are problems, try again later and it should work... hopefully')}
}
}


    return (
        <>
            <div id="postComponent">
                <div>
                    <h1> Make a new Post </h1>
                    <form onSubmit={makeNewPost}>
                        <textarea
                            onChange={e => setNewAddPost(e.target.value)} type="text" placeholder="Write here..." value={newAddPost} ></textarea>
                        {addPostMessage && <small>{addPostMessage}</small>}
                        <br />
                        <input id="newPostButton" type="submit" value="Post" />
                    </form>
                </div>
            </div>
        </>
    )

  }
export default NewPost;




// return (
//         <>
//             <div id="postComponent">
//                 <div>
//                     <h1> Make a new Post </h1>
//                     <h2 className="postName">{firstName} {secondName}</h2>
//                     <form onSubmit={makeNewPost}>
//                         <textarea
//                             onChange={e => setNewAddPost(e.target.value)} type="text" placeholder="Write here..." value={newAddPost} ></textarea>
//                         {addPostMessage && <small>{addPostMessage}</small>}
//                         <br />
//                         <input id="newPostButton" type="submit" value="Post" />
//                     </form>
//                 </div>
//             </div>
//         </>
//     )