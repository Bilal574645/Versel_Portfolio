// import { Link } from "react-router-dom";

"use client";

import Image from "next/image";
// import image0 from "../../assets/bilal.png";
import image0 from "@/assets/bilal.png"
import image2 from "@/assets/imgheader.jpg";
import img1 from "@/app/Components/assets/tech/html.png"
import img2 from "@/app/Components/assets/tech/css.png";
import img3 from "@/app/Components/assets/tech/javascript.png";
import img4 from "@/app/Components/assets/tech/reactjs.png";
import img5 from "@/app/Components/assets/tech/mongodb.png";
import img6 from "@/app/Components/assets/tech/nodejs.png";
import img7 from "@/app/Components/assets/tech/typescript.png";
import img8 from "@/app/Components/assets/tech/git.png";
import img9 from "@/app/Components/assets/tech/tailwind.png";
import img10 from "@/app/Components/assets/tech/figma.png";
import img11 from "@/app/Components/assets/tech/nodejs.png";
import img12 from "@/app/Components/assets/tech/redux.png";
import x from "@/app/Components/assets/x.jpg"
import instagram from "@/assets/instagram.png"
import insta2 from "@/assets/insta2.svg"

import fb from "@/app/Components/assets/fb.png"
import { useState } from "react";
import Link from "next/link";


import img21 from '@/assets/fb.png';
import img31 from '@/assets/github.png';
import img41 from '@/assets/insta.png';
import img51 from '@/assets/linkedin.png';


// import { useRouter } from "next/router";

function Header() {
  // const router = useRouter();
  const [open, setOpen] = useState(false);
  function handleNav() {
    setOpen((open) => !open);
  }

  return (
    <>
  
  
    <div className="flex flex-col space-y-20 p-6">
    

        <div className="flex items-center justify-center md:hidden">
          <div className="max-w-sm">
            <Image src={image0} className="rounded-full" alt="bilal" />
          </div>
        </div>

        <div className="flex flex-col space-y-10 items-center justify-center md:hidden">
          <div>
            <h1 className="font-heading-text font-semibold text-center text-4xl">Wassup! this is Bilal</h1>
          </div>
          <div className="font-body-text text-xl text-center flex items-center justify-center  ">
            A Full-stack developer (MERN,NEXT.JS) 💻 - Flutter Developer ☁️ -
            Problem Solver 🤔.
          </div>
        </div>

{/* social media images */}
        <div className="flex items-center justify-center md:hidden">
     
        <a href="https://www.facebook.com/profile.php?id=100017777015574&mibextid=ZbWKwL"><Image src={img21} alt='img1'/></a>
 <a href="https://github.com/Bilal574645"> <Image src={img31} alt='img1'/></a>
 <a href="https://www.instagram.com/actor_eg?igsh=YzljYTk1ODg3Zg=="> <Image src={img41} alt='img1'/></a>
 <a href="https://www.linkedin.com/in/muhammad-bilal-a21084244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <Image src={img51} alt='img1'/></a>

          
 

        </div>

        <div className="mx-auto my-4 flex px-6 py-4  items-center justify-center rounded-md bg-gray-700  text-white md:hidden">
         <a href="https://drive.google.com/file/d/1RCY-iGq9gym0-hl4kTylM_STEb-5WxT7/view?usp=sharing"> <h1 className="font-bilal-text text-3xl">Resume 📄</h1></a>
        </div>

        {/* //for md */}
        <div className="hidden md:flex justify-evenly items-center  ">
          <div>
          {/* 1st */}
            <div className="max-w-sm">
              <Image src={image0} className="rounded-full" alt="bilal" />
            </div>
          </div>
          {/* 2nd */}
          <div>
            <div className="flex flex-col space-y-32 items-center m-10">
              <div>
                <h1 className="font-heading-text font-semibold text-center text-5xl">Wassup! this is Bilal</h1>
              </div>
              {/* 3rd */}
              <div className=" font-body-text text-2xl flex m-10">
              A Full-stack developer (MERN,NEXT.JS) 💻 - Flutter Developer ☁️ -
              Problem Solver 🤔.
              </div>
            </div>

            <div className="flex justify-center items-center space-x-2  m-10">

           
            <a href="https://www.facebook.com/profile.php?id=100017777015574&mibextid=ZbWKwL"><Image src={img21} alt='img1'/></a>
 <a href="https://github.com/Bilal574645"> <Image src={img31} alt='img1'/></a>
 <a href="https://www.instagram.com/actor_eg?igsh=YzljYTk1ODg3Zg=="> <Image src={img41} alt='img1'/></a>
 <a href="https://www.linkedin.com/in/muhammad-bilal-a21084244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <Image src={img51} alt='img1'/></a>
            

            </div>



           


            <div className="flex justify-center m-10 ">
              <a href="https://drive.google.com/file/d/1RCY-iGq9gym0-hl4kTylM_STEb-5WxT7/view?usp=sharing">
              <button className=" bg-slate-800 px-4 py-2 flex justify-center items-center text-white rounded transition-colors duration-1000 ease-in-out hover:bg-black text-2xl font-bilal-text">
                Resume 📄
              </button>
              </a>
            </div>
          </div>
        </div>

        {/* What I do */}

        <div className="flex flex-col space-y-32">
          <div className="flex flex-col items-center justify-center space-y-10">
            <h1 className="font-heading-text font-semibold text-center text-3xl sm:text-5xl"> {"{ What I do ? }"} </h1>
            <h3 className="p-4 font-body-text text-2xl text-center">
              I love to code for contract based projects and help companies
              expand their businesses.🤜🤛
            </h3>
            <h4 className="p-4 text-center font-body-text text-2xl">
              My tech expertise are as follows:
            </h4>
          </div>

          <div className="flex flex-col justify-between lg:hidden  ">
            <div className="max-w-lg mx-auto">
              <Image src={image2} className="rounded-full" alt="bilal" />
            </div>
            <div className="flex flex-col  p-4 ">
             <div >
             <h1 className="font-heading-text font-semibold text-center text-3xl ">Full-stack Web Developement</h1>
             </div>
              <div className="flex p-6 m-8 justify-center ">
                <Image
                  src={img1}
                  
                  className="rounded-full size-20"
                  alt="bilal"
                />
                <Image
                  src={img2}
                  className="rounded-full size-20"
                  alt="bilal"
                />
                <Image
                  src={img3}
                  className="rounded-full size-20"
                  alt="bilal"
                />
                <Image
                  src={img4}
                  className="rounded-full size-20"
                  alt="bilal"
                />
              </div>
              <div className="flex p-4 justify-center">
                <Image
                  src={img5}
                  className="rounded-full size-20"
                  alt="bilal"
                />
                <Image
                  src={img6}
                  className="rounded-full size-20"
                  alt="bilal"
                />
                <Image
                  src={img7}
                  className="rounded-full size-20"
                  alt="bilal"
                />
                <Image
                  src={img8}
                  className="rounded-full size-20"
                  alt="bilal"
                />
              </div>
              <div className="flex p-4 justify-center">
                <Image
                  src={img9}
                  className="rounded-full size-20"
                  alt="bilal"
                />
                <Image
                  src={img10}
                  className="rounded-full size-20"
                  alt="bilal"
                />
                <Image
                  src={img11}
                  className="rounded-full size-20"
                  alt="bilal"
                />
                <Image
                  src={img12}
                  className="rounded-full size-20"
                  alt="bilal"
                />
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-evenly">


{/* for md screen */}
{/* 1 */}
<div>
<Image src={image2} className="rounded-full max-w-md" alt="bilal" />
</div>
{/* 2 */}
<div className="flex flex-col justify-center items-center  ">
             <div className="">
             <h1 className="font-heading-text font-semibold text-center text-5xl ">Full-stack Web Developement</h1>
             </div>
              <div className="flex p-4 ">
                <Image
                  src={img1}
                  className="rounded-full size-20"
                  alt="bilal"
                />
                <Image
                  src={img2}
                  className="rounded-full size-20"
                  alt="bilal"
                />
                <Image
                  src={img3}
                  className="rounded-full size-20"
                  alt="bilal"
                />
                <Image
                  src={img4}
                  className="rounded-full size-20"
                  alt="bilal"
                />
              </div>
              <div className="flex p-4">
                <Image
                  src={img5}
                  className="rounded-full size-20"
                  alt="bilal"
                />
                <Image
                  src={img6}
                  className="rounded-full size-20"
                  alt="bilal"
                />
                <Image
                  src={img7}
                  className="rounded-full size-20"
                  alt="bilal"
                />
                <Image
                  src={img8}
                  className="rounded-full size-20"
                  alt="bilal"
                />
              </div>
              <div className="flex p-4">
                <Image
                  src={img9}
                  className="rounded-full size-20"
                  alt="bilal"
                />
                <Image
                  src={img10}
                  className="rounded-full size-20"
                  alt="bilal"
                />
                <Image
                  src={img11}
                  className="rounded-full size-20"
                  alt="bilal"
                />
                <Image
                  src={img12}
                  className="rounded-full size-20"
                  alt="bilal"
                />
              </div>
            </div>



 </div>


        </div>
      </div>

      <div className="flex flex-col  space-y-5  font-body-text text-base p-6">
        <div className="flex items-start ">
          <p className=" my-3">
            ⚡ Developing responsive single page web applications front end
            using React.js, Next.js,  TailwindCSS,
            Material-UI, HTML/CSS and Bootstrap.
          </p>
        </div>
        <div className="flex items-start">
          <p className=" my-3">
            ⚡ Creating secure and fast backends for application utilizing
            Node.js and Express.js
          </p>
        </div>
        <div className=" flex items-start">
          <p className=" my-3">
            ⚡ Interacting with the databases like MongoDB and PostgreSQL using
            ORMs like Mongoose  respectively.
          </p>
        </div>
        <div className="flex items-start">
          <p className=" my-3">
            ⚡ Utilizing Clerk,Webhooks for efficient web Development and handle user Security
          </p>
        </div>
        <div className="flex items-start ml-0 p-0">
          <p className=" my-3">
            ⚡ Utilizing TypeScript for its powerful features like static typing
            etc to develop both front-end and back-end applications with
            enhanced code quality, maintainability, and scalability.
          </p>
        </div>
        <div className="flex flex-start">
          <p className=" my-3">
            ⚡ Developing and consuming RESTful APIs, employing modern
            programming practices to ensure integration.
          </p>
        </div>
        <div className="flex flex-start">
          <p className=" my-3">
            ⚡ Implementing secure authentication using Clerk and OAuth to enable
            robust and reliable user authentication and authorization.
          </p>
        </div>
        <div className="flex flex-start">
          <p className=" my-3">
            ⚡ Utilizing  Figma for seamless collaboration within
            cross-functional teams
          </p>
        </div>
      </div>

    </>
  );
}

export default Header;
