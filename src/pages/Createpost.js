import React, { useState ,useEffect} from 'react'
import {addDoc, collection} from 'firebase/firestore'
import '../App.css'
import { async } from '@firebase/util';
import { useNavigate } from 'react-router-dom';
import {db,auth} from '../firebase.js';
function CreatePost  ({isAuth}) {
    const [title,setTitle]=useState("");
    const[postText,setPostText]=useState("");
    const postsCollectionRef=collection(db,"posts");
    let navigate=useNavigate();
    const createPost=async()=>{
        await addDoc(postsCollectionRef,{title:title,postText,author:{name:auth.currentUser.displayName,id:auth.currentUser.uid},
        });
        navigate("/");
    };
    useEffect(()=>{
        if(!isAuth)
        {
            navigate("/login");
        }
    },[]);
  return (
    <div className='createPostPage'>
        <div className='cpContainer'>
            <h1>Create Post</h1>
            <div className='inputGp'>
                <label>Title:</label>
                <input placeholder='Title..' onChange={(event)=>{
                    setTitle(event.target.value);
                }
                }/>
            </div>
            <div className='inputGp'>
                <label>Post</label>
                <textarea placeholder='post content..' onChange={(event)=>{
                    setPostText(event.target.value);
                }
                }/>
            </div>
            <button onClick={createPost}>Submit</button>
             </div>
    </div>
  );
}

export default CreatePost