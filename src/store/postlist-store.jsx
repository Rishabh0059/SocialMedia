/* eslint-disable react/prop-types */
import {createContext,useReducer} from "react"

export const PostListContext=createContext({
postlist:[],
addPost:()=>{},
deletePost:()=>{}
})

// const DEFAULT_POST_LIST=[
//   {
//     id:"1",
//     title:"Summer Vacations",
//     body:"Hello this is Rishabh enjoying",
//     reactions:"4",
//     userId:"user-7",
//   },
//   {
//     id:"2",
//     title:"cfgj",
//     body:"Hello this is Rishabh enjoying",
//     reactions:"4",
//     userId:"user-18",
//   }
// ]

const postListReducer=(currPost,action)=>{
  let newPost= currPost;
  if(action.type==='DELETE_POST'){
    newPost=currPost.filter((post)=>post.id !== action.payload.postId)
  }
  else if(action.type==='ADD_POST'){
    newPost=[action.payload,...currPost];
  }
  return newPost;
}

const PostListProvider=({children})=>{

  const [postlist,dispatchPostList]=useReducer(postListReducer,[]);

  const addPost=(userId,title,body,tags)=>
    {
    dispatchPostList({
      type:'ADD_POST',
      payload:{
        id:Date.now(),
        userId:userId,
        title:title,
        body:body,
        tags:tags,
      }
    })
  }

  const deletePost=(postId)=>{
    dispatchPostList({
      type:'DELETE_POST',
      payload:{
        postId,
      }
    })
  }

  return (
    <PostListContext.Provider value={{
      postlist,addPost,deletePost
    }}>{children}</PostListContext.Provider>
  )
}

export default PostListProvider;