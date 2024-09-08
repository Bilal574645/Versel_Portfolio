"use client";
import Image from "next/image";
import img1 from "@/assets/experience.svg";
import img23 from '@/assets/kksolution.jpeg';
import img24 from '@/assets/itsolerapvtltd_logo.jpeg';
import img25 from '@/assets/bit.png';
import img26 from '@/assets/RASS.png';

import { useState } from "react";

function Experience() {
  // State variables for toggling
  const [workOpen, setWorkOpen] = useState(false);
  const [volunteerOpen, setVolunteerOpen] = useState(false);

  // Handlers for toggling
  function handleWorkToggle() {
    setWorkOpen((prev) => !prev);
  }

  function handleVolunteerToggle() {
    setVolunteerOpen((prev) => !prev);
  }

  return (

    // master div
    <div className="flex flex-col space-y-14 p-4 m-4">

{/* for mobiles */}

{/* 1 */}
      <div className=" flex justify-center items-center md:hidden ">
        <Image className="max-w-md rounded-full" src={img1} alt="" />
      </div>
{/* 2 */}
      <div className="md:hidden">
        <h1 className="font-heading-text font-semibold text-center text-5xl ">Experience</h1>
      </div>
    {/* 3   */}
      <div className="md:hidden">
        <h2 className="flex font-body-text justify-center items-center text-center p-2 text-lg ">Work, Internship and Volunteership</h2>
      </div>
   {/* 4    */}
      <div className="md:hidden  flex justify-center">
        <p className='text-base  font-body-text text-center  max-w-md  '>
          {"I'm"} a passionate software engineer who loves crafting creative solutions with code. My main area of expertise revolves around building scalable applications using the MERN stack. Additionally, I have a strong enthusiasm for fostering tech communities and actively engage in various tech events. Guiding and supporting aspiring developers as they begin their career paths brings me immense joy because we all know the struggle of finding the missing semicolon. 😉
        </p>
      </div>

      {/* 1,2,3,4 for md */}
      <div className="hidden md:flex justify-around space-x-5 ">
      <div className=" flex  items-center  ">
        <Image className="max-w-xs lg:max-w-sm rounded-full" src={img1} alt="" />
      </div>
      {/* 2 */}
    <div className="flex flex-col mt-10 space-y-10 ">
    <div >
        <h1 className="font-heading-text font-semibold text-center text-5xl  ">Experience</h1>
      </div>
    {/* 3   */}
      <div >
        <h2 className="flex font-body-text text-2xl text-center justify-center p-2 ">Work, Internship and Volunteership</h2>
      </div>
   {/* 4    */}
      <div >
        <p className='text-2xl text-center font-body-text mx-2 p-2  '>
          {"I'm"} a passionate software engineer who loves crafting creative solutions with code. My main area of expertise revolves around building scalable applications using the MERN stack. Additionally, I have a strong enthusiasm for fostering tech communities and actively engage in various tech events. Guiding and supporting aspiring developers as they begin their career paths brings me immense joy because we all know the struggle of finding the missing semicolon. 😉
        </p>
      </div>
    </div>
    
      </div>

      

      {/* Work Section */}
      <div className="shadow-xl mt-10" onClick={handleWorkToggle}>

      {/* div for work */}
        <div className="flex justify-between border-2 p-4 cursor-pointer">
          <h1 className="font-primary-text text-2xl font-bold ">Work</h1>
          <p>

{/* icon */}
          {workOpen ? (
<>
<svg
className="w-6 h-4 cursor-pointer "
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    version="1.1"
   
    viewBox="0 0 256 256"
    xmlSpace="preserve"
  >
    <g
      style={{
        stroke: "none",
        strokeWidth: 0,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        fill: "none",
        fillRule: "nonzero",
        opacity: 1,
      }}
      transform="translate(1.4066 1.4066) scale(2.81 2.81)"
    >
      <path
        d="M 86.5 48.5 h -83 C 1.567 48.5 0 46.933 0 45 s 1.567 -3.5 3.5 -3.5 h 83 c 1.933 0 3.5 1.567 3.5 3.5 S 88.433 48.5 86.5 48.5 z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "rgb(29,29,27)",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="matrix(1 0 0 1 0 0)"
        strokeLinecap="round"
      />
      <path
        d="M 86.5 48.5 h -83 C 1.567 48.5 0 46.933 0 45 s 1.567 -3.5 3.5 -3.5 h 83 c 1.933 0 3.5 1.567 3.5 3.5 S 88.433 48.5 86.5 48.5 z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "rgb(29,29,27)",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="matrix(1 0 0 1 0 0)"
        strokeLinecap="round"
      />
    </g>
  </svg>
</>

          ): (

            <>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" className="w-6 h-6 svg-inline--fa fa-plus text-text-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
            </svg>
            </>
          )}


          




          </p>
        </div>

        {workOpen && (
<>
{/* //div for mobile */}
          <div className="flex flex-col space-y-10 p-4 border-2 px-2 md:hidden text-center ">

            <div className="flex justify-center text-center ">
              <Image className="w-60 h-60 rounded-full" src={img23} alt="kksolution" />
            </div>

            <div>
              <h1 className=" font-body-text font-bold text-2xl">Web Development Intern</h1>
            </div>
            <div>
              <h2 className="text-2xl font-body-text font-bold">KKSOLUTIONS</h2>
            </div>
            <div>
              <p className="font-body-text text-2xl">April 2024 - June 2024</p>
            </div>
            <div>
              <p className="font-body-text text-2xl border-b-2 shadow-xl"> Islamabad, Pakistan</p>
            </div>
            <div>
            <ul className="text-base font-body-text p-2">
  <li><strong>Position:</strong> Web Development Intern at <strong>KKSOLUTIONS</strong> (April 2024 - June 2024).</li>
  <li><strong>Responsibilities:</strong></li>
  <ul>
    <li>Developed and maintained web applications using <strong>JavaScript</strong> and <strong>React</strong>, focusing on creating dynamic and responsive user interfaces.</li>
    <li>Designed and implemented interactive features to enhance user experience, including form validations, real-time updates, and data visualization components.</li>
    <li>Collaborated with the development team to optimize front-end performance, addressing issues related to speed and efficiency to improve overall application responsiveness.</li>
    <li>Participated in code reviews and contributed to the improvement of best practices and coding standards within the team.</li>
    <li>Assisted in troubleshooting and debugging issues, providing timely solutions to ensure smooth application functionality.</li>
    <li>Contributed to project documentation and prepared reports on development progress and technical challenges.</li>
  </ul>
</ul>

            </div>
          




          </div>

          {/* 2 */}

          <div className="flex flex-col space-y-10 p-4 border-2 px-2 md:hidden text-center ">

<div className="flex justify-center ">
  <Image className="w-60 h-60 rounded-full" src={img24} alt="kksolution" />
</div>

<div>
  <h1 className=" font-body-text font-bold text-2xl">AI Deep Learning Intern</h1>
</div>
<div>
  <h2 className="text-2xl font-body-text font-bold">ITSOLERA PVT LTD</h2>
</div>
<div>
  <p className="font-body-text text-2xl">JUNE 2024 - SEP 2024</p>
</div>
<div>
  <p className="font-body-text text-2xl border-b-2 shadow-xl"> Islamabad, Pakistan</p>
</div>
<div>
<ul className="text-base font-body-text p-2">
<li><strong>Responsibilities:</strong></li>
  <ul>
    <li>Worked on developing and implementing deep learning models for various AI applications, including computer vision and natural language processing.</li>
    <li>Participated in the design and training of convolutional neural networks (CNNs) and other advanced deep learning architectures.</li>
    <li>Conducted data preprocessing and augmentation to improve model accuracy and performance.</li>
    <li>Analyzed and interpreted model results, making adjustments to enhance predictive capabilities and efficiency.</li>
    <li>Collaborated with team members to integrate AI models into larger systems and applications.</li>
    <li>Assisted in preparing technical documentation and reports on project progress and findings.</li>
    <li>Contributed to the development of innovative solutions for real-world challenges using deep learning techniques.</li>
  </ul>
</ul>

</div>





</div>

{/* //end div for mobile  */}


{/* //div for md */}

<div className="hidden md:flex  border-2 space-x-20 ">
<div className="size-96 p-6">
              <Image className="rounded-full" src={img23} alt="kksolution"  />
            </div>

 <div className="flex flex-col space-y-5">
 <div>
 
            <div>
              <p className="font-body-text"> Islamabad, Pakistan</p>
            </div>
 </div>    
 <div>
              <h1 className="font-body-text font-bold text-2xl">Web Development Intern</h1>
            </div>
            <div>
              <h2 className="font-body-text text-2xl font-bold">KKSOLUTIONS</h2>
            </div>
            <div>
            <ul className="font-body-text text-2xl">
  <li><strong>Position:</strong> Web Development Intern at <strong>KKSOLUTIONS</strong> (April 2024 - June 2024).</li>
  <li><strong>Responsibilities:</strong></li>
  <ul>
    <li>Developed and maintained web applications using <strong>JavaScript</strong> and <strong>React</strong>, focusing on creating dynamic and responsive user interfaces.</li>
    <li>Designed and implemented interactive features to enhance user experience, including form validations, real-time updates, and data visualization components.</li>
    <li>Collaborated with the development team to optimize front-end performance, addressing issues related to speed and efficiency to improve overall application responsiveness.</li>
    <li>Participated in code reviews and contributed to the improvement of best practices and coding standards within the team.</li>
    <li>Assisted in troubleshooting and debugging issues, providing timely solutions to ensure smooth application functionality.</li>
    <li>Contributed to project documentation and prepared reports on development progress and technical challenges.</li>
  </ul>
</ul>

            </div>
            
            
 </div>       

 

</div>

{/* 2 */}

<div className="hidden md:flex  border-2 space-x-20 ">
<div className="size-96 p-6">
              <Image className="rounded-full" src={img24} alt="kksolution"  />
            </div>

 <div className="flex flex-col space-y-5">
 <div>
 
            <div>
              <p className="font-body-text text-2xl"> Islamabad, Pakistan</p>
            </div>
 </div>    
 <div>
              <h1 className="font-body-text font-bold text-2xl">Deep Learning Intern</h1>
            </div>
            <div>
              <h2 className="font-body-text text-2xl font-bold">ITSOLERA PVT LTD</h2>
            </div>
            <div>
            <ul className="font-body-text text-2xl">
            <li><strong>Position:</strong> AI Deep Learning Intern at <strong>ITSOLERA PVT LTD</strong> (June 2024 - September 2024).</li>
  <li><strong>Responsibilities:</strong></li>
  <ul>
    <li>Worked on developing and implementing deep learning models for various AI applications, including computer vision and natural language processing.</li>
    <li>Participated in the design and training of convolutional neural networks (CNNs) and other advanced deep learning architectures.</li>
    <li>Conducted data preprocessing and augmentation to improve model accuracy and performance.</li>
    <li>Analyzed and interpreted model results, making adjustments to enhance predictive capabilities and efficiency.</li>
    <li>Collaborated with team members to integrate AI models into larger systems and applications.</li>
    <li>Assisted in preparing technical documentation and reports on project progress and findings.</li>
    <li>Contributed to the development of innovative solutions for real-world challenges using deep learning techniques.</li>
  </ul>
</ul>

            </div>
            
            
 </div>       

 

</div>

{/* end div for div */}

</>

 

        )}
      </div>

      {/* Volunteer Section */}
      <div className="shadow-xl mt-10 cursor-pointer " onClick={handleVolunteerToggle}>
        <div className="flex justify-between border-2 p-4">
          <h1 className="font-primary-text text-2xl font-bold ">Volunteerships</h1>
          <p>

{volunteerOpen ? (
<>
<svg
className="w-6 h-4 cursor-pointer"
xmlns="http://www.w3.org/2000/svg"
xmlnsXlink="http://www.w3.org/1999/xlink"
version="1.1"

viewBox="0 0 256 256"
xmlSpace="preserve"
>
<g
style={{
stroke: "none",
strokeWidth: 0,
strokeDasharray: "none",
strokeLinecap: "butt",
strokeLinejoin: "miter",
strokeMiterlimit: 10,
fill: "none",
fillRule: "nonzero",
opacity: 1,
}}
transform="translate(1.4066 1.4066) scale(2.81 2.81)"
>
<path
d="M 86.5 48.5 h -83 C 1.567 48.5 0 46.933 0 45 s 1.567 -3.5 3.5 -3.5 h 83 c 1.933 0 3.5 1.567 3.5 3.5 S 88.433 48.5 86.5 48.5 z"
style={{
stroke: "none",
strokeWidth: 1,
strokeDasharray: "none",
strokeLinecap: "butt",
strokeLinejoin: "miter",
strokeMiterlimit: 10,
fill: "rgb(29,29,27)",
fillRule: "nonzero",
opacity: 1,
}}
transform="matrix(1 0 0 1 0 0)"
strokeLinecap="round"
/>
<path
d="M 86.5 48.5 h -83 C 1.567 48.5 0 46.933 0 45 s 1.567 -3.5 3.5 -3.5 h 83 c 1.933 0 3.5 1.567 3.5 3.5 S 88.433 48.5 86.5 48.5 z"
style={{
stroke: "none",
strokeWidth: 1,
strokeDasharray: "none",
strokeLinecap: "butt",
strokeLinejoin: "miter",
strokeMiterlimit: 10,
fill: "rgb(29,29,27)",
fillRule: "nonzero",
opacity: 1,
}}
transform="matrix(1 0 0 1 0 0)"
strokeLinecap="round"
/>
</g>
</svg>
</>

): (

  <>
  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" className="w-6 h-6 svg-inline--fa fa-plus text-text-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
  </svg>
  </>
)}







</p>
        </div>

        {volunteerOpen && (

        <>
        {/* for mobiles */}
        <div className="flex flex-col border-2 px-2 text-center font-body-text text-2xl space-y-4 md:hidden">
            <div className="flex justify-center">
              <Image className="rounded-full" src={img25} alt="bits and bytes" />
            </div>
            <div>
              <h1 className="primary-text">Team Member (Web Development), AIR UNI BITS & BYTES SOCIETY</h1>
            </div>
            <div>
              <h2 className="secondary-text">Air University</h2>
            </div>
            <div>
              <p className="tertiary-text">December 2021 – Present</p>
            </div>
            <div>
              <p className="tertiary-text">Islamabad, Pakistan</p>
            </div>
            <div>
              <ul className="text-base space-x-2">
                <li>– Actively contributed to raising awareness among freshmen about current and future opportunities in web development.</li>
                <li>– Organized and managed seminars and workshops focused on the MERN and MEAN stacks, NEXT.JS fostering a collaborative learning environment and enhancing the technical skills of participants.</li>
            
              </ul>
            </div>
          </div>

          <div className="flex flex-col border-2 px-2 space-y-4 text-center font-body-text text-2xl md:hidden">
            <div className="flex justify-center">
              <Image className="rounded-full" src={img26} alt="kksolution" />
            </div>
            <div>
              <h1 className="primary-text">Team Member (Web Development), Robotics And Automation Society (R.A.A.S)</h1>
            </div>
            <div>
              <h2 className="secondary-text">Air University</h2>
            </div>
            <div>
              <p className="tertiary-text">December 2022 – Present</p>
            </div>
            <div>
              <p className="tertiary-text">Islamabad, Pakistan</p>
            </div>
            <div>
              <ul className="text-base space-y-2">
              <li><strong>Position:</strong> Developer at <strong>Robotics And Automation Society (R.A.A.S)</strong>.</li>
  <li><strong>Responsibilities:</strong></li>
  <ul>
    <li>Developed and implemented software solutions for robotics and automation projects, including control systems and user interfaces.</li>
    <li>Collaborated with team members to design and integrate algorithms for robotics applications, such as path planning and object recognition.</li>
    <li>Worked on coding and debugging software for embedded systems and microcontrollers used in robotic platforms.</li>
    <li>Contributed to the development of automation scripts and tools to streamline robotic operations and enhance system efficiency.</li>
    <li>Participated in testing and validation processes to ensure the reliability and accuracy of developed systems.</li>
    <li>Assisted in documenting code and technical processes to facilitate knowledge sharing and future development efforts.</li>
    <li>Engaged in troubleshooting and providing technical support to resolve issues related to robotic systems and software.</li>
  </ul>
            
              </ul>
            </div>
          </div>
          {/* end for mobiles */}

          {/* //div for md */}

          <div className="hidden  md:flex flex-col border-2 px-2 text-center font-body-text text-2xl space-y-4 ">
            <div className="flex justify-center p-8">
              <Image src={img25} className="rounded-full" alt="kksolution" />
            </div>
            <div>
              <h1 className=" ">Team Member (Web Development), AIR UNI BITS & BYTES SOCIETY</h1>
            </div>
            <div>
              <h2 className="">Air University</h2>
            </div>
            <div>
              <p className="tertiary-text">December 2021 – Present</p>
            </div>
            <div>
              <p className="tertiary-text">Islamabad, Pakistan</p>
            </div>
            <div>
              <ul className="text-xl space-y-2">
                <li>– Actively contributed to raising awareness among freshmen about current and future opportunities in web development.</li>
                <li>– Organized and managed seminars and workshops focused on the MERN and MEAN stacks, NEXT.JS fostering a collaborative learning environment and enhancing the technical skills of participants.</li>
            
              </ul>
            </div>
          </div>

          <div className="hidden md:flex flex-col border-2 px-2 font-body-text text-2xl text-center space-y-4">
            <div className="flex justify-center">
              <Image className="rounded-full" src={img26} alt="kksolution" />
            </div>
            <div>
              <h1 className="primary-text">Team Member (Web Development), Robotics And Automation Society (R.A.A.S)</h1>
            </div>
            <div>
              <h2 className="secondary-text">Air University</h2>
            </div>
            <div>
              <p className="tertiary-text">December 2022 – Present</p>
            </div>
            <div>
              <p className="tertiary-text">Islamabad, Pakistan</p>
            </div>
            <div>
              <ul className="text-xl">
              <li><strong>Position:</strong> Developer at <strong>Robotics And Automation Society (R.A.A.S)</strong>.</li>
  <li><strong>Responsibilities:</strong></li>
  <ul>
    <li>Developed and implemented software solutions for robotics and automation projects, including control systems and user interfaces.</li>
    <li>Collaborated with team members to design and integrate algorithms for robotics applications, such as path planning and object recognition.</li>
    <li>Worked on coding and debugging software for embedded systems and microcontrollers used in robotic platforms.</li>
    <li>Contributed to the development of automation scripts and tools to streamline robotic operations and enhance system efficiency.</li>
    <li>Participated in testing and validation processes to ensure the reliability and accuracy of developed systems.</li>
    <li>Assisted in documenting code and technical processes to facilitate knowledge sharing and future development efforts.</li>
    <li>Engaged in troubleshooting and providing technical support to resolve issues related to robotic systems and software.</li>
  </ul>
            
              </ul>
            </div>
          </div>

{/* end div for md */}
        </>
        )}
      </div>
    </div>
    //end of master div
  );
}

export default Experience;
