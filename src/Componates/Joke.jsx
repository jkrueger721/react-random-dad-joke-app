import React, { useState, useEffect } from "react";
import axios from "axios";

function Joke() {
  const [posts, setPosts] = useState([]);
  const fetchPost = async () => {
    try{
      const response = await axios("https://icanhazdadjoke.com/",{
        responseType: 'json',
        headers: { 'Accept': 'application/json'}
      });
      console.log(response.data);
      setPosts(response.data);
    }catch(err){
      console.log(err)
    }
    
  };
  useEffect(() => {
    fetchPost();
   }, []);
   return (
    <div>
      <p> {posts.joke} </p>
      <button onClick={fetchPost}> get Dad joke😂</button>
    </div>
  );
   
}

export default Joke
