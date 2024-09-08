// import img21 from './../assets/edu2.jpg';
import Image from 'next/image';
import img22 from '@/assets/air.png';
import img23 from '@/assets/udemy.png';
import img24 from '@/assets/coursera.png';
import img25 from '@/app/Components/assets/degree.jpg'

function Education() {
  return (
    <>


    {/* master div */}
   <div className='flex flex-col space-y-10 md:hidden'>

   {/* start of div 1 for mobile */}
<div className='max-w-xs flex justify-center mx-auto '>
<Image  className='rounded-full' src={img25} alt="img25" />
</div>

<div>
<h1 className='font-heading-text font-semibold text-center text-5xl'>Education</h1>
</div>
<div>
    <h1 className=' font-body-text text-2xl text-center flex items-center justify-center'>My Qualifications and Certifications</h1>
</div>

<div className='flex justify-center p-4'>
    <h1 className=' font-body-text text-2xl text-center flex items-center justify-center'>Here{"'s"} what you need to know about my academic background 🙃</h1>
</div >

{/* end of div 1 for mobile */}







{/* start of div 2 for mobile */}

<div className=' font-heading-text font-semibold text-center text-2xl '>
{"{ Degree Received }"}
</div>



<div class=" flex justify-center  ">
<Image className='max-w-xs   flex  justify-center ' src={img22} alt="" />

</div>

{/* // </div> */}

<div className='flex flex-col space-y-10 border-2 mt-6 shadow-2xl p-2  rounded-lg'>
<div className='flex flex-col space-y-10 border-b-2 justify-start items-start p-6'>
<h1 className='text-xl font-semibold'>AIR UNIVERSITY, Islamabad</h1>
<h2 className='font-body-text text-center flex items-center justify-center text-lg'>Bachelor{"'s"} in Software Engineering</h2>
<h3 className='font-body-text  text-center flex items-center justify-center'>Sep 2021 - Jun 2025 (expected)</h3>
</div>
<div className='flex flex-col space-y-10 '>
<ul className='font-body-text text-base  space-y-10 p-4 '>
  <li>⚡ Gained extensive knowledge and insights through rigorous Computer Science courses covering areas such as Data Structures, Algorithms, Database Management Systems, Operating Systems, Machine Learning.</li>
  <li>
  ⚡ Got the inside scoop on the entire software development cycle and the industry{"'s"} processes by some specialized software engineering courses like Software Requirements Engineering, Software Design & Architecture, and Software Construction etc.
  </li>
  <li>
  ⚡ In addition to my academic pursuits, I have pursued courses in MERN Stack Development and explored the www world :)
  </li>
  <li>
  ⚡ The supportive environment at AIR have played a crucial role in my personal development, fostering diversity and building confidence. Additionally, the emphasis on community bonding techniques has greatly contributed to my growth.
  </li>
  <li>⚡  One of my most fulfilling extracurricular activities has been leading and managing tech communities including AIR Web community, AIR, AIR Media Club, and Orientation of AIR. These experiences have been incredibly fulfilling, allowing me to connect with like-minded individuals and contribute to the vibrant tech and non-tech ecosystem at AIR.</li>
</ul>
</div>

</div>

{/* end of div 2 for mobile */}



{/* start of div 3 for mobile */}
<div className='flex flex-col space-y-20 mx-auto text-xl font-body-text lg:text-2xl'>
  <h1 className='font-heading-text font-semibold text-center text-3xl p-6  '>
    {"{ Online Courses }"}
  </h1>



  
  <div className='flex flex-col max-w-lg border-2 shadow-xl'>
 
  <Image src={img23} className='w-full' alt="" />
 
 <div className=' text-lg sm:text-xl md:text-2xl lg:text-3xl'>
 <h5 className='px-6 py-10'>Next.js & React - The Ultimate Guide (incl. Two Paths!)</h5>
 <h5 className='flex  justify-center  '>JS MASTERY</h5>
 </div>
  </div>



  <div className='flex flex-col max-w-lg border-2 shadow-xl'>
 
 <Image src={img23} className='w-full '  alt="" />

<div className=' text-lg sm:text-xl md:text-2xl lg:text-3xl'>
<h5 className='px-6 py-10'>React - The Complete Guide 2024(incl Next js)</h5>
<p className='flex justify-center'> Maximilian Schwarzmuller</p>
</div>
 </div>

 <div className='flex flex-col max-w-lg border-2 shadow-xl'>
 
  <Image src={img23} className='w-full' alt="" />
 
 <div className=' text-lg sm:text-xl md:text-2xl lg:text-3xl'>
 <h5 className='px-6 py-10'>Tailwind CSS 3 | Learn By Building Multiple Projects A-Z </h5>
 <h5 className='flex  justify-center '>OAK Academy Team</h5>
 </div>
  </div>

  <div className='flex flex-col max-w-lg border-2 shadow-xl'>
 
  <Image src={img23} className='w-full' alt="" />
 
 <div className='px-6 py-10 text-lg sm:text-xl md:text-2xl lg:text-3xl'>
 <h5>Build Responsive Real-World Websites with HTML and CSS </h5>
 <h5>Jonas Schmedtmann</h5>
 </div>
  </div>

  


 

</div>

{/* end of div 3 for mobile */}


   </div>

   {/* end of master div for mobile */}



{/*  md div start */}
   <div className='hidden md:flex  flex-col space-y-20 mt-28  '>


<div className=' flex justify-around space-x-10'>
<div>
<div className='max-w-xs flex  items-center '>
<Image className='rounded-full' src={img25} alt="img25" />
</div>
</div>
<div className='flex flex-col text-center space-y-2 '>
<div>
<h1 className='font-heading-text font-semibold text-center text-5xl'>Education</h1>
</div>
<div>
    <h1 className='  flex   justify-center font-body-text text-2xl m-10'>My Qualifications and Certifications</h1>
</div>

<div className='flex justify-center'>
    <h1 className=' font-body-text text-2xl flex m-10'>Here{"'s"} what you need to know about my academic background 🙃</h1>
</div >
</div>

</div>

<div className=' font-heading-text font-semibold text-center text-5xl'>
{"{ Degree Received }"}
</div>

<div className='flex lg:flex-row md:flex-col justify-around items-center'>
<div className=' p-4'>

<Image className='max-w-xs  ' src={img22} alt="" />


</div>

<div className='flex flex-col  border-2 mt-6 shadow-2xl   rounded-lg'>
<div className='flex flex-col space-y-4 border-b-2 justify-center items-center p-6'>
<h1 className='text-xl font-semibold'>AIR UNIVERSITY , Islamabad</h1>
<h2 className='font-body-text text-lg'>Bachelor{"'s"} in Software Engineering</h2>
<h3 className='font-body-text text-lg'>Sep 2021 - Jun 2025 (expected)</h3>
</div>
<div className='flex flex-col  mx-4 '>
<ul className='font-body-text text-xl justify-evenly m-10 space-y-10 '>
<li>⚡ Gained extensive knowledge and insights through rigorous Computer Science courses covering areas such as Data Structures, Algorithms, Database Management Systems, Operating Systems, Machine Learning.</li>
  <li>
  ⚡ Got the inside scoop on the entire software development cycle and the industry{"'s"} processes by some specialized software engineering courses like Software Requirements Engineering, Software Design & Architecture, and Software Construction etc.
  </li>
  <li>
  ⚡ In addition to my academic pursuits, I have pursued courses in MERN Stack Development and explored the www world :)
  </li>
  <li>
  ⚡ The supportive environment at AIR have played a crucial role in my personal development, fostering diversity and building confidence. Additionally, the emphasis on community bonding techniques has greatly contributed to my growth.
  </li>
  <li>⚡ One of my most fulfilling extracurricular activities has been leading and managing tech communities including  AIR Web community,  AIR, AIR Media Club, and Orientation of AIR. These experiences have been incredibly fulfilling, allowing me to connect with like-minded individuals and contribute to the vibrant tech and non-tech ecosystem at AIR.</li>
</ul>

</div>

</div>

<div>

</div>

</div>

<div className='flex flex-col space-y-20'>
<div className='flex justify-center font-bold text-2xl'>
<h1 className='font-heading-text text-5xl p-8 mx-auto'>
    {"{ Online Courses }"}
  </h1>
</div>


{/* divs1 for md */}

<div className=' flex space-x-20 font-body-text text-2xl  m-10 lg:hidden '>

{/* 1 */}
<div className='flex flex-col max-w-lg border-2  shadow-xl'>
 
 <Image src={img23} className='w-full' alt="" />

<div className='px-6 py-10 text-lg sm:text-xl md:text-2xl lg:text-3xl'>
<h5>Next.js & React - The Ultimate Guide (incl. Two Paths!)</h5>
<h5>JS Mastery</h5>
</div>
 </div>
 {/* 2 */}
 <div className='flex flex-col max-w-lg border-2 shadow-xl'>
 
 <Image src={img23} className='w-full' alt="" />

<div className='px-6 py-10 text-lg sm:text-xl md:text-2xl lg:text-3xl'>
<h5>React - The Complete Guide 2024 (incl. Next.js)</h5>
<h5>_Maximilian Schwarzmuller</h5>
</div>
 </div>
 
</div>

{/* end of div */}

{/* divs2 */}

<div className=' flex space-x-20 font-body-text text-2xl  m-10 lg:hidden'>

{/* 1 */}
<div className='flex flex-col max-w-lg border-2  shadow-xl'>
 
 <Image src={img23} className='w-full' alt="" />

<div className='px-6 py-10 text-lg sm:text-xl md:text-2xl lg:text-3xl'>
<h5>Tailwind CSS 3 | Learn By Building Multiple Projects A-Z</h5>
<h5>OAK Academy Team</h5>
</div>
 </div>
 {/* 2 */}
 <div className='flex flex-col max-w-lg border-2 shadow-xl'>
 
 <Image src={img23} className='w-full' alt="" />

<div className='px-6 py-10 text-lg sm:text-xl md:text-2xl lg:text-3xl'>
<h5>Build Responsive Real-World Websites with HTML and CSS</h5>
<h5>Jonas Schmedtmann</h5>
</div>
 </div>
 
</div>
{/* end of div md */}








</div>



   </div>

   {/* lg div start here for cards */}
   {/* divs1 for lg */}

   <div className='hidden lg:flex flex-row justify-center space-x-20   font-body-text text-2xl  m-10'>

{/* 1 */}
{/* <div className='flex flex-col max-w-lg border-2  shadow-xl'>
 
 <Image src={img23} className='w-full' alt="" />

<div className='px-6 py-10 text-lg sm:text-xl md:text-2xl lg:text-3xl'>
<h5>Next.js & React - The Complete Guide (incl. Two Paths!)</h5>
<h5>_Maximilian Schwarzmuller</h5>
</div>
 </div> */}
 {/* 2 */}
 <div className='flex flex-col max-w-lg border-2 shadow-xl'>
 
 <Image src={img23} className='w-full' alt="" />

<div className='px-6 py-10 text-lg sm:text-xl md:text-2xl lg:text-3xl'>
<h5>Next.js & React - The Ultimate Guide (incl. Two Paths!)</h5>
<h5>JS Mastery</h5>
</div>
 </div>
 {/* 3 */}
   <div className='flex flex-col max-w-lg border-2 shadow-xl'>
 
  <Image src={img23} className='w-full' alt="" />
 
 <div className='px-6 py-10 text-lg sm:text-xl md:text-2xl lg:text-3xl'>
 <h5>React - The Complete Guide 2024 (incl. Next.js)</h5>
 <h5>_Maximilian Schwarzmuller</h5>
 </div>
  </div>

 
</div>

{/* end of div */}

{/* divs2 */}

<div className='hidden lg:flex space-x-20 justify-center font-body-text text-2xl  m-10'>

{/* 1 */}
<div className='flex flex-col max-w-lg border-2  shadow-xl'>
 
 <Image src={img23} className='w-full' alt="" />

<div className='px-6 py-10 text-lg sm:text-xl md:text-2xl lg:text-3xl'>
<h5>Tailwind CSS 3 | Learn By Building Multiple Projects A-Z</h5>
<h5>OAK Academy Team</h5>
</div>
 </div>
 {/* 2 */}
 <div className='flex flex-col max-w-lg border-2 shadow-xl'>
 
 <Image src={img23} className='w-full' alt="" />

<div className='px-6 py-10 text-lg sm:text-xl md:text-2xl lg:text-3xl'>
<h5>Build Responsive Real-World Websites with HTML and CSS</h5>
<h5>Jonas Schmedtmann</h5>
</div>
 </div>
 {/* 3 */}
   {/* <div className='flex flex-col max-w-lg border-2 shadow-xl'>
 
  <Image src={img23} className='w-full' alt="" />
 
 <div className='px-6 py-10 text-lg sm:text-xl md:text-2xl lg:text-3xl'>
 <h5>Next.js & React - The Complete Guide (incl. Two Paths!)</h5>
 <h5>_Maximilian Schwarzmuller</h5>
 </div>
  </div> */}

 
</div>
{/* end of div lg */}
    
    </>
  );
}

export default Education
