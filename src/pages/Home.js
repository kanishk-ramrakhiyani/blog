import React, { useEffect, useState } from "react";
import { getDocs, collection, query, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase.js";

// import { async } from '@firebase/util';

function Home({ isAuth }) {
  const [postLists, setPostList] = useState([{}]);
  const postsCollectionRef = collection(db, "posts");
  const [loading, setLoading] = useState(true);
  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    getPosts();
    // console.log("docs deleted and page refreshed");
  };

  const getPosts = async () => {
    const PostsRef = collection(db, "posts");
    const q = query(PostsRef);
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    setPostList(data);
    console.log(postLists);
    setLoading(false);
  };
  useEffect(() => {
    getPosts();
    // console.log("hello");
  }, []);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="homePage">
      {postLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1>{post.title}</h1>
              </div>
              <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    &#128465;
                  </button>
                )}
              </div>
            </div>
            <div className="postTextContainer">{post.postText}</div>
            <h3>@{post.author.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
