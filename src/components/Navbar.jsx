
import { useState } from "react";
import { TbCircleLetterF } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {

  const [nav,setNav]=useState(false);
  // const links=[
  //   {
  //     id:1,
  //     title:'About',
  //   },
  //   {
  //     id:2,
  //     title:'Feedback',
  //   },
    
  // ]
  return (
    <div className="flex items-center bg-slate-900 justify-between px-5 h-20 text-white">
      <div className="flex items-center font-bold gap-1 ">
        <div className="text-3xl text-purple-400"><TbCircleLetterF /></div>
        <h1 className="md:text-2xl text-1xl"> F-Book</h1>
      </div>

        <div>
          <p className="font-signature text-purple-400 text-2xl">Connect . Express . Socialize</p>
        </div>


     

      <div className="md:hidden" onClick={()=>setNav(!nav)}>
        {nav ? <RxCross1 size={30}/> : <GiHamburgerMenu size={30}/>}
      </div>

      {nav && <p className="flex flex-col align-top h-screen w-[45%] py-20 px-20 absolute duration:300 top-20 bottom-0 right-0 bg-gradient-to-b from-slate-300 via-slate-500 to-slate-700 text-xl"><span className="font-side font-extrabold 
      text-3xl pr-5">Come</span>
      <span className="font-side font-extrabold
      text-3xl  pr-5">Join</span>
      & <span className="font-side font-extrabold
      text-3xl mr-2">Express</span> Yourself</p>}
    </div>
  )
}

export default Navbar
