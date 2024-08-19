
import { MdDeleteOutline } from "react-icons/md";
import { PostListContext } from "../store/postlist-store";
import {useContext} from "react";
import NoPosts from "./NoPosts";

const Post = () => {
  
const {deletePost,postlist}=useContext(PostListContext);

  return (
    <div className="w-full h-auto md:grid  md:gap-8 md:grid-cols-2">

  {postlist.length===0 && <NoPosts></NoPosts> }
{postlist.map((posts)=>
  <div key={posts.id} className=" w-[350x] m-2 h-[310px] md:h-[330px] bg-gradient-to-r from-slate-400 to-slate-600 rounded-lg" onClick={()=>deletePost(posts.id)}>
      <div className=" flex flex-col mt-4 items-center">
        <div className="border-2 w-[90%] rounded-md border-white h-auto m-2 p-2" >
        <h3 className="place-items-center">{posts.title}</h3>
        </div>
    </div>

    <div className=" flex flex-col items-center">
        <div className="border-2 w-[90%] rounded-md border-white h-auto m-2 p-2">
        <h3 className="place-items-center">{posts.body}</h3>
        <span className="float-right md:p-3 text-white font-userName md:text-xl">@{posts.userId}</span>
        </div>
    </div>
    
    <div className=" flex flex-col items-center">
    <div  className="border-2 w-[90%] rounded-md border-white h-auto m-2 p-1 ">
      {posts.tags.map((tag)=>(
         <button key={tag} className="bg-white font-medium rounded-lg p-2 m-2">{tag}</button>
      ))}
    
      </div>
    </div>
    
   
      <button className=" md:mb-2 mb-1 bg-red-500 rounded-lg md:p-2 p-1 float-right hover:bg-red-700 duration-300 mr-3 items-center flex"><MdDeleteOutline size={20}/>Delete</button>
      
    </div>
)}
    

    </div>
  )
}


export default Post;


