/* eslint-disable react/prop-types */

const SideBar = ({selectedTab,setSelectedTab}) => {
  return (
    <div className="min-h-screen max-h-max w-[30%] md:w-[20%] top-5 text-white bg-slate-800">
      <div className="flex flex-col gap-5 items-center py-20">

      <div className={`md:w-30 md:px-5 px-2 py-2 md:text-xl cursor-pointer hover:scale-105 duration-500 hover:bg-slate-900 items-center rounded-lg bg-slate-400 flex ${selectedTab==='Create Post' && `bg-slate-900`}`} onClick={()=>setSelectedTab('Create Post')}>Create Post</div>

        <div className={`md:w-30 md:px-12 px-8 py-1 cursor-pointer hover:scale-105 duration-500 hover:bg-slate-900 md:text-xl items-center rounded-lg bg-slate-400 ${selectedTab==='Home' && `bg-slate-900`}`} onClick={()=>setSelectedTab('Home')}>Posts</div>

      </div>
    </div>
  )
}

export default SideBar
