"use client"
import Image from 'next/image';
import img1 from '@/assets/Contact.svg';
import img2 from '@/assets/fb.png';
import img3 from '@/assets/github.png';
import img4 from '@/assets/insta.png';
import img5 from  '@/assets/twitter.png';
import img6 from '@/assets/linkedin.png';
import img7 from '@/assets/contact.jpg';
import img8 from '@/assets/email.png';

function Contact() {
  return (

    //  master div
   <div >
    <div className=' flex flex-col  mx-6 p-4'>

   {/* for mobile  */}

<div className='md:hidden space-y-10'>
{/* 1st */}
<div className='flex max-w-sm     mx-auto   '>
 <Image className='rounded-lg shadow-lg' src={img7}  alt='img1'/>
 </div>

  {/* 2nd     */}
      <div className='flex justify-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-4'>
        <h1 className='font-heading-text font-semibold text-center text-5xl'>Contact Me</h1>
      </div>

      {/* 3rd */}
      <div>
        <p className='font-body-text text-2xl text-center p-4 '>{"I'm"} practically the social media version of Batman, always lurking in the shadows of every platform, ready to swoop in and save the day! So, whether you need some industry wizardry or a tech talk virtuoso, just reach out to me. Let{"'s"} connect and sprinkle some laughter into the world of tech! 🤝</p>
      </div>

      {/* 4rd */}
      <div className='flex justify-center   '>
     <a href="https://www.facebook.com/profile.php?id=100017777015574&mibextid=ZbWKwL"> <Image src={img2}  className='size-14' alt='img1'/></a>
      
      <a href="https://github.com/Bilal574645"><Image src={img3} className='size-14' alt='img1'/></a>
     
     <a href="https://www.instagram.com/actor_eg?igsh=YzljYTk1ODg3Zg=="> <Image src={img4} className='size-14' alt='img1'/></a>

     <a href="https://www.linkedin.com/in/muhammad-bilal-a21084244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <Image src={img6} className='size-14' alt='img1'/></a>

     
      </div>

{/* 5rd */}

<div className='mx-auto text-xl py-2 flex justify-center '>
  <button 
    onClick={() =>
      window.location.href = 'mailto:bilal441465@gmail.com?subject=Your%20Subject%20Here&body=This%20is%20the%20body%20of%20the%20email'
    }
    className='shadow-2xl py-2 flex justify-center items-center bg-gray-800 text-white px-4 rounded-md'
  >
    <h1 className='font-bilal-text sm:text-lg md:text-xl lg:text-2xl'>
      Reach me via email
    </h1>
    <span className='size-4'>
      <img src={img7} alt="" />
    </span>
  </button>
</div>
</div>

 {/* end for mobile */}

{/* for md */}
   <div className='hidden md:flex justify-center p-8'>
   <h1 className='font-heading-text font-semibold text-center text-5xl'>Contact Me</h1>
   </div>
<div className='hidden md:flex justify-evenly space-x-10 '>



{/* 1st */}
<div className='flex my-auto ' >
 <Image src={img1} className='max-w-sm lg:max-w-lg mb-60' alt='img1'/>
 </div>

 <div className='flex flex-col space-y-24'>
  {/* 2nd     */}
  <div className='flex justify-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
       
      </div>

      {/* 3rd */}
      <div className='max-w-md lg:max-w-xl'>
        <p className='font-body-text   text-center text-2xl xl:text-3xl  '>{"I'm"} practically the social media version of Batman, always lurking in the shadows of every platform, ready to swoop in and save the day! So, whether you need some industry wizardry or a tech talk virtuoso, just reach out to me. Let{"'s"} connect and sprinkle some laughter into the world of tech! 🤝</p>
      </div>

      {/* 4rd */}
      <div className='flex justify-center items-center '>
 <a href="https://www.facebook.com/profile.php?id=100017777015574&mibextid=ZbWKwL"><Image src={img2} alt='img1'/></a>
 <a href="https://github.com/Bilal574645"> <Image src={img3} alt='img1'/></a>
 <a href="https://www.instagram.com/actor_eg?igsh=YzljYTk1ODg3Zg=="> <Image src={img4} alt='img1'/></a>
 <a href="https://www.linkedin.com/in/muhammad-bilal-a21084244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <Image src={img6} alt='img1'/></a>



      
     
     
      
     
      </div>

{/* 5rd */}

<div className='mx-auto text-xl py-2'>
  <button
    onClick={() =>
      window.location.href = 'mailto:bilal441465@gmail.com?subject=Your%20Subject%20Here&body=This%20is%20the%20body%20of%20the%20email'
    }
    className='shadow-lg py-2 flex justify-center items-center bg-gray-800 text-white px-4 rounded-md'
  >
    <h1 className='font-bilal-text sm:text-lg md:text-xl lg:text-2xl'>
      Reach me via email
    </h1>
    <span className='size-4'>
      <img src={img7} alt="" />
    </span>
  </button>
</div>


 </div>

</div>

    </div>
   </div>
  )
}

export default Contact
