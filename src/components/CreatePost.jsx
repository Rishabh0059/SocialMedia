/* eslint-disable react/prop-types */
import { PostListContext } from "../store/postlist-store";
import {useContext,useRef} from "react";

const CreatePost = ({setSelectedTab}) => {

   const {addPost}=useContext(PostListContext)
  
   const userIdElement=useRef();
   const titleElement=useRef();
   const bodyElement=useRef();
   const tagElement=useRef();
  

   const handleSubmitButton=()=>{
    const userId=userIdElement.current.value;
    const title=titleElement.current.value;
    const body=bodyElement.current.value;
    const tags=tagElement.current.value.split(' ');
    

    addPost(userId,title,body,tags);
    userIdElement.current.value="";
    titleElement.current.value="";
    bodyElement.current.value="";
    tagElement.current.value="";

    setSelectedTab('Home');
   }
  return (

    

    <div className="flex flex-col h-auto gap-6 pt-6 pb-6">
      <div className="px-10 flex flex-col gap-2">
        <label htmlFor="userId">UserId</label>
        <input
          id="userId"
          type="text"
          placeholder="Enter userId"
          className="border-solid p-2 border-2 bg-slate-300  md:w-80 w-50 border-black rounded-lg"
          ref={userIdElement}
        />
      </div>

      

      <div className="px-10 flex flex-col gap-2">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="Enter title"
          className="border-solid p-2 border-2 md:w-80 w-50 bg-slate-300 border-black rounded-lg"
          ref={titleElement}
        />
      </div>

      <div className="px-10 flex flex-col gap-2">
        <label htmlFor="content">Post Content</label>
        <textarea
          id="content"
          type="text"
          placeholder="How are you feeling today..."
          className="border-solid p-2 border-2 md:w-80 w-50 bg-slate-300 border-black rounded-lg"
          ref={bodyElement}
        />
      </div>

      <div className="px-10 flex flex-col gap-2">
        <label htmlFor="username">Tags</label>
        <input
          id="tags"
          type="text"
          placeholder="Enter tags"
          className="border-solid p-2 border-2 md:w-80 w-50 bg-slate-300 border-black rounded-lg"
         ref={tagElement}
        />
      </div>
    



      <button
        className="w-18 p-2 mx-10 bg-blue-400 rounded-xl text-white font-semibold cursor-pointer hover:bg-blue-900 text-2xl duration-200"
       onClick={handleSubmitButton}
      >
        Post
      </button>
    </div>
  );
};

export default CreatePost;
