"use client"

import React,{useState} from 'react'
import Link from 'next/link';

const Nav = () => {
    const [open, setOpen] = useState(false);
  function handleNav() {
    setOpen((open) => !open);
  }
  return (
    <div className='shadow-2xl border-4 p-2 '>
       <div className="flex flex-col  m-2  ">
        {/* navigation start for mobile*/}
        <div className="flex justify-around  lg:hidden items-center  ">
          <div className="logo-div font-bilal-text text-2xl  ">
            <a href="/">
              <span className=" underline">
                &lt;
              </span>
              <span className="  lg:text-xl xl:text-2xl 2xl:text-3xl pr-1 pl-1 underline ">
                {" "}
                Muhammad Bilal
              </span>
              <span className="lg:text-xl xl:text-2xl 2xl:text-3xl underline">
                /&gt;
              </span>
            </a>
          </div>

          <div className="lg:hidden cursor-pointer" onClick={handleNav}>
            <svg
              className="w-10"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
            </svg>
          </div>
        </div>

        <div className="text-2xl opacity-[0.8] flex flex-col space-y-20   justify-start lg:hidden items-start">
          {open ? (
            <nav>
              <ul className="  p-0 m-0 font-primary-text  text-2xl font-normal ">
                <Link className="mb-2 flex items-start hover:font-extrabold" href="/">
                  Home
                </Link>
                <Link className="mb-2 flex items-start hover:font-extrabold" href="/education">
                  Education
                </Link>
                <Link className="mb-2 flex items-start hover:font-extrabold" href="/experience">
                  Experience
                </Link>
                <Link className="mb-2 flex items-start hover:font-extrabold" href="/project">
                  Projects
                </Link>
                <Link className="mb-2 flex items-start hover:font-extrabold" href="/contact">
                  Contact Me
                </Link>
              </ul>
            </nav>
          ) : (
            ""
          )}
        </div>

        {/* navigation end for mobile */}
        {/* navigation for lg */}
        <div className="hidden lg:flex justify-between  ">
          <div className="lg:logo-div text-2xl font-bilal-text ">
            <a href="/">
              <span className="lg:text-xl xl:text-2xl 2xl:text-3xl underline">
                &lt;
              </span>
              <span className="  lg:text-xl xl:text-2xl 2xl:text-3xl pr-1 pl-1 underline ">
                {" "}
                Muhammad Bilal
              </span>
              <span className="lg:text-xl xl:text-2xl 2xl:text-3xl underline">
                /&gt;
              </span>
            </a>
          </div>

          <div className="lg:text-lg   lg:opacity-[0.8] lg:flex   xs:hidden sm:hidden md:hidden] ">
            <nav className="lg:flex lg:justify-between ">
              <ul className="  flex space-x-4 font-primary-text text-2xl   ">
                <Link className="mb-2 border-transparent hover:font-extrabold hover:border-b-2 border-black" href="/">
                  Home
                </Link>
                <Link className="mb-2 hover:font-extrabold " href="/education">
                  Education
                </Link>
                <Link className="mb-2 hover:font-extrabold " href="/experience">
                  Experience
                </Link>
                
                <Link className="mb-2 hover:font-extrabold" href="/project">
                  Projects
                </Link>
                <Link className="mb-2  hover:font-extrabold" href="/contact">
                  Contact Me
                </Link>
              </ul>
            </nav>
          </div>

          {/* navigation for lg */}
        </div>
    </div>
    </div>
  )
}

export default Nav
