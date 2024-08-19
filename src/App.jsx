import { useState } from "react"
import CreatePost from "./components/CreatePost"
import Navbar from "./components/Navbar"
// import PostList from "./components/PostList"
import SideBar from "./components/SideBar"
import PostListProvider from "./store/postlist-store"
import Post from "./components/Post"




function App() {
  
const [selectedTab,setSelectedTab]=useState('');
  return (
    <PostListProvider>
       <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Navbar>
      <div className="flex">
      <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></SideBar>
      {selectedTab==='Home' ?  <Post></Post> : <CreatePost setSelectedTab={setSelectedTab}></CreatePost>}
      
      </div>
      </PostListProvider>
  )
}

export default App
