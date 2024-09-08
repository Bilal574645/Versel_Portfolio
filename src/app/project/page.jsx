import Image from "next/image";
import img1 from "@/assets/projects.svg";
import img7 from "@/app/Components/assets/tech/html.png";
import img2 from "@/app/Components/assets/tech/css.png";
import img3 from "@/app/Components/assets/tech/javascript.png";
import img4 from "@/app/Components/assets/tech/reactjs.png";
import img8 from '@/assets/github.png';

import img11 from '@/assets/new/Cplus.png';
import img12 from '@/assets/new/csharp.png';
import img13 from '@/assets/new/DL.png';
import img14 from '@/assets/new/java.png';
import img15 from '@/assets/new/nextjs.svg';
import img16 from '@/assets/new/shadcn-ui-seeklogo.svg';
import img17 from '@/assets/new/tailwind.png';





function Projects() {
  return (

    //master div
    <div className='flex flex-col space-y-10 justify-center items-center'>
     {/* 1st */}
        <div className="md:hidden">
        <Image className="max-w-sm sm:max-w-lg  mx-auto" src={img1} alt="bilal.image" />
        </div>
{/* 2nd */}
        <div className="md:hidden">
            <h1 className="font-heading-text font-semibold text-center text-5xl">Projects</h1>
        </div>
{/* 3rd */}
        <div className="md:hidden ">
            <p className=" font-body-text text-base   max-w-xl opacity-[0.8] p-4 space-y-6 m-4">With a deep understanding of JS,React, Next.js, Java, C++, C#,  and databases like MongoDB,MY-SQL my expertise lies in developing robust and scalable web applications. By harnessing the power of these technologies, I create engaging user interfaces that deliver exceptional experiences, effectively manage complex application states to ensure seamless data flow, develop efficient server-side APIs and design efficient data models and ensure secure data storage. My proficiency in these technologies enables me to deliver high-quality applications that meet the demands of modern web development. 🫡</p>
        </div>


{/* // for md screen */}
        <div className="hidden md:flex justify-around space-x-20">
        {/* 1st */}
        <div className="flex justify-center" >
        <Image className="max-w-xs lg:max-w-md xl:max-w-lg 2xl:max-w-xl" src={img1} alt="bilal.image" />
        </div>
{/* 2nd */}
   <div className="hidden md:flex flex-col space-y-10 ">
{/* 2nd */}
<div className="mt-10">
            <h1 className="font-heading-text font-semibold text-center text-5xl ">Projects</h1>
        </div>
{/* 3rd */}
        <div className="flex text-2xl font-body-text text-center max-w-xl">
            <p className="p-4" >With a deep understanding of JS,React, Next.js, Java, C++, C#,  and databases like MongoDB,MY-SQL my expertise lies in developing robust and scalable web applications. By harnessing the power of these technologies, I create engaging user interfaces that deliver exceptional experiences, effectively manage complex application states to ensure seamless data flow, develop efficient server-side APIs and design efficient data models and ensure secure data storage. My proficiency in these technologies enables me to deliver high-quality applications that meet the demands of modern web development. 🫡</p>
        </div>
   </div>

        </div>

        
{/* div for mobile */}

<div className="md:hidden space-y-10 ">

        {/* project 1 */}
        <div className="flex flex-col max-w-md sm:max-w-sm  border-2 space-x-3">
        <h1 className="flex justify-center text-xl font-body-text   font-bold ">CAR RENTAL SYSTEM</h1>
        <div>
            <h3 className="text-lg font-body-text  p-4   opacity-[0.8]">A fully functional Car Rental System built with C# (ASP.NET Core) and React. It allows users to browse and rent cars,  The system includes an admin dashboard for managing car listings, bookings, and rental history.

            Key technologies: C#, React, SQL Server,</h3>
        </div>
        <div className="space-y-4">
            <p className="flex justify-center font-body-text text-lg font-bold">Created in December 2023</p>
        </div>
        <div className="flex justify-center items-center p-4">
        <Image className="size-10" src={img12} alt="" />
        <Image className="size-10" src={img2} alt="" />
        <Image className="size-10" src={img3} alt="" />
        </div>
        </div>

        {/* project2 */}
        <div className="flex flex-col max-w-md  border-2 space-x-3">
        <h1 className="flex justify-center text-xl  font-bold ">LABOUR BOOKING SYSTEM</h1>
        <div>
            <h3 className="text-lg p-4  font-body-text opacity-[0.8]">A Java-based Labour Booking System that connects clients with skilled or unskilled laborers. The platform allows users to post job listings, book laborers, and manage schedules. Labourers can create profiles showcasing their skills and availability, while clients can leave reviews after jobs are completed. An admin panel is included for managing users and monitoring activity.
            Key technologies: Java, MySQL/SQLite, REST APIs
            </h3>
        </div>
        <div className="space-y-4">
            <p className="flex justify-center font-body-text font-bold text-lg">Created in January 2024</p>
        </div>
        <div className="flex justify-center items-center p-4 ">
        <Image className="size-10" src={img14} alt="" />
        <Image className="size-10" src={img2} alt="" />
        <Image className="size-10" src={img3} alt="" />
        <Image className="size-10" src={img4} alt="" />
        </div>
        </div>

        {/* project3 */}
        <div className="flex flex-col max-w-md  border-2 space-x-3">
        <h1 className="flex justify-center text-xl  font-bold ">Optical Character Recognition (OCR) Project</h1>
        <div>
            <h3 className="font-body-text p-4 text-lg ">Developed during an internship at Insolera Pvt Ltd, this project focuses on building an OCR system to convert printed and handwritten text into digital format. Key tasks included dataset creation, data preprocessing, feature extraction, model selection, and training. The final system was deployed with a user-friendly interface for real-world use, capable of accurately digitizing text.</h3>
        </div>
        <div className="space-y-4">
            <p className="flex justify-center font-sans font-bold">Created in July 2024</p>
        </div>
        <div className="flex justify-center items-center p-4">
        <Image className="size-10" src={img13} alt="" />
        <Image className="size-10" src={img15} alt="" />
        <Image className="size-10" src={img17} alt="" />
        </div>
        </div>

        {/* project4 */}
        <div className="flex flex-col max-w-md  border-2 space-x-4 font-body-text">
        <h1 className="flex justify-center text-center text-xl  font-bold ">Advanced ASL Recognition Using Deep Learning</h1>
        <div>
            <h3 className="text-lg p-4  opacity-[0.8]">This project focuses on developing a Convolutional Neural Network (CNN) using Keras to classify ASL gestures. The key steps include data collection, preprocessing, model training, and performance evaluation. Refinement is achieved by analyzing incorrect predictions to improve accuracy.</h3>
        </div>
        <div className="space-y-4">
            <p className="flex justify-center font-body-text font-bold">Created in Aug 2024</p>
        </div>
        <div className="flex justify-center items-center p-4">
        <Image className="size-10"src={img13} alt="" />
        <Image className="size-10" src={img16} alt="" />
        <Image className="size-10" src={img3} alt="" />
        <Image className="size-10" src={img4} alt="" />
        </div>
        </div>

        {/* project5 */}
        <div className="flex flex-col max-w-md font-body-text  border-2 space-x-3">
        <h1 className="flex justify-center text-xl  font-bold ">Detecting Violence in Videos</h1>
        <div>
            <h3 className="text-lg p-4  opacity-[0.8]">This project focuses on developing a deep learning model to detect violent content in videos and generate automatic trigger warnings. The model, trained using datasets like the Violent Flows Dataset and the Hockey Fight Videos Dataset, aims to achieve over 90% accuracy using transfer learning techniques.</h3>
        </div>
        <div>
            <p className="flex justify-center  font-bold">Created in Sep 2024</p>
        </div>
        <div className="flex justify-center items-center p-4 ">
        <Image className="size-10" src={img13} alt="" />
        <Image className="size-10" src={img15} alt="" />
        <Image className="size-10" src={img3} alt="" />
        <Image className="size-10" src={img4} alt="" />
        </div>
        </div>

        {/* project6 */}

        <div className="flex flex-col max-w-md font-body-text   border-2">
        <h1 className="flex justify-center text-xl  font-bold text-center ">CNN-based Framework for Comparison of Contactless to Contact-based Fingerprints</h1>
        <div>
            <h3 className="text-lg  p-4  opacity-[0.8]">Project Lead: DL Team Alpha at ITSOLERA PVT LTD <br/>

This project aims to develop a CNN-based framework for accurately comparing contactless 2D fingerprint images with contact-based fingerprints. The framework focuses on leveraging the benefits of contactless acquisition, such as hygiene and deformation-free features, while ensuring high matching accuracy.</h3>
        </div>
        <div>
            <p className="flex justify-center font-bold">Created in July 2024</p>
        </div>
        <div className="flex justify-center items-center  p-4">
        <Image className="size-10" src={img17} alt="" />
        <Image className="size-10" src={img13} alt="" />
        <Image className="size-10" src={img3} alt="" />
        <Image className="size-10" src={img4} alt="" />
        </div>
        </div>

       
</div>

{/* end div for mobiles */}



{/* for md size */}
<div className="hidden lg:hidden md:flex flex-col">
{/* 1 row */}
<div className="flex justify-evenly space-x-4 p-4">


  {/* project 1 */}
  <div className="flex flex-col max-w-sm   border-2 space-x-3">
        <h1 className="flex justify-center text-xl font-body-text   font-bold ">CAR RENTAL SYSTEM</h1>
        <div>
            <h3 className="text-lg font-body-text  p-4   opacity-[0.8]">A fully functional Car Rental System built with C# (ASP.NET Core) and React. It allows users to browse and rent cars,  The system includes an admin dashboard for managing car listings, bookings, and rental history.

            Key technologies: C#, React, SQL Server,</h3>
        </div>
        <div className="space-y-4">
            <p className="flex justify-center font-body-text text-lg font-bold">Created in December 2023</p>
        </div>
        <div className="flex justify-center items-center p-4">
        <Image className="size-10" src={img12} alt="" />
        <Image className="size-10" src={img2} alt="" />
        <Image className="size-10" src={img3} alt="" />
        </div>
        </div>

    {/* project2 */}
      <div className="flex flex-col max-w-sm  border-2 space-x-3">
        <h1 className="flex justify-center text-xl  font-bold ">LABOUR BOOKING SYSTEM</h1>
        <div>
            <h3 className="text-lg p-4  font-body-text opacity-[0.8]">A Java-based Labour Booking System that connects clients with skilled or unskilled laborers. The platform allows users to post job listings, book laborers, and manage schedules. Labourers can create profiles showcasing their skills and availability, while clients can leave reviews after jobs are completed. An admin panel is included for managing users and monitoring activity.
            Key technologies: Java, MySQL/SQLite, REST APIs
            </h3>
        </div>
        <div className="space-y-4">
            <p className="flex justify-center font-body-text font-bold text-lg">Created in January 2024</p>
        </div>
        <div className="flex justify-center items-center p-4 ">
        <Image className="size-10" src={img14} alt="" />
        <Image className="size-10" src={img2} alt="" />
        <Image className="size-10" src={img3} alt="" />
        <Image className="size-10" src={img4} alt="" />
        </div>
        </div>    


</div>
{/* 2 row */}
<div className="flex justify-evenly space-x-4 p-4">
 {/* project3 */}
 <div className="flex flex-col max-w-sm  border-2 space-x-3">
        <h1 className="flex justify-center text-xl  font-bold ">Optical Character Recognition (OCR) Project</h1>
        <div>
            <h3 className="font-body-text p-4 text-lg ">Developed during an internship at Insolera Pvt Ltd, this project focuses on building an OCR system to convert printed and handwritten text into digital format. Key tasks included dataset creation, data preprocessing, feature extraction, model selection, and training. The final system was deployed with a user-friendly interface for real-world use, capable of accurately digitizing text.</h3>
        </div>
        <div className="space-y-4">
            <p className="flex justify-center font-sans font-bold">Created in July 2024</p>
        </div>
        <div className="flex justify-center items-center p-4">
        <Image className="size-10" src={img13} alt="" />
        <Image className="size-10" src={img15} alt="" />
        <Image className="size-10" src={img17} alt="" />
        </div>
        </div>

        {/* project4 */}
        <div className="flex flex-col max-w-sm  border-2 space-x-4 font-body-text">
        <h1 className="flex justify-center text-center text-xl  font-bold ">Advanced ASL Recognition Using Deep Learning</h1>
        <div>
            <h3 className="text-lg p-4  opacity-[0.8]">This project focuses on developing a Convolutional Neural Network (CNN) using Keras to classify ASL gestures. The key steps include data collection, preprocessing, model training, and performance evaluation. Refinement is achieved by analyzing incorrect predictions to improve accuracy.</h3>
        </div>
        <div className="space-y-4">
            <p className="flex justify-center font-body-text font-bold">Created in Aug 2024</p>
        </div>
        <div className="flex justify-center items-center p-4">
        <Image className="size-10"src={img13} alt="" />
        <Image className="size-10" src={img16} alt="" />
        <Image className="size-10" src={img3} alt="" />
        <Image className="size-10" src={img4} alt="" />
        </div>
        </div>
</div>

{/* 3 row */}
<div className="flex justify-evenly space-x-4 p-4">
 {/* project5 */}
 <div className="flex flex-col max-w-sm font-body-text  border-2 space-x-3">
        <h1 className="flex justify-center text-xl  font-bold ">Detecting Violence in Videos</h1>
        <div>
            <h3 className="text-lg p-4  opacity-[0.8]">This project focuses on developing a deep learning model to detect violent content in videos and generate automatic trigger warnings. The model, trained using datasets like the Violent Flows Dataset and the Hockey Fight Videos Dataset, aims to achieve over 90% accuracy using transfer learning techniques.</h3>
        </div>
        <div>
            <p className="flex justify-center  font-bold">Created in Sep 2024</p>
        </div>
        <div className="flex justify-center items-center p-4 ">
        <Image className="size-10" src={img13} alt="" />
        <Image className="size-10" src={img15} alt="" />
        <Image className="size-10" src={img3} alt="" />
        <Image className="size-10" src={img4} alt="" />
        </div>
        </div>

        {/* project6 */}

        <div className="flex flex-col max-w-sm font-body-text   border-2">
        <h1 className="flex justify-center text-xl  font-bold text-center ">CNN-based Framework for Comparison of Contactless to Contact-based Fingerprints</h1>
        <div>
            <h3 className="text-lg  p-4  opacity-[0.8]">Project Lead: DL Team Alpha at ITSOLERA PVT LTD <br/>

This project aims to develop a CNN-based framework for accurately comparing contactless 2D fingerprint images with contact-based fingerprints. The framework focuses on leveraging the benefits of contactless acquisition, such as hygiene and deformation-free features, while ensuring high matching accuracy.</h3>
        </div>
        <div>
            <p className="flex justify-center font-bold">Created in July 2024</p>
        </div>
        <div className="flex justify-center items-center  p-4">
        <Image className="size-10" src={img17} alt="" />
        <Image className="size-10" src={img13} alt="" />
        <Image className="size-10" src={img3} alt="" />
        <Image className="size-10" src={img4} alt="" />
        </div>
        </div>
</div>
</div>

{/* end for md size */}

{/*for lg size */}

<div className="hidden lg:flex flex-col justify-evenly space-y-10 ">
{/* 1st row */}
<div className="flex font-body-text   space-x-10 ">


 {/* project 1 */}
 <div className="flex flex-col max-w-sm   border-2 space-x-3">
        <h1 className="flex justify-center text-xl font-body-text   font-bold ">CAR RENTAL SYSTEM</h1>
        <div>
            <h3 className="text-lg font-body-text  p-4   opacity-[0.8]">A fully functional Car Rental System built with C# (ASP.NET Core) and React. It allows users to browse and rent cars,  The system includes an admin dashboard for managing car listings, bookings, and rental history.

            Key technologies: C#, React, SQL Server,</h3>
        </div>
        <div className="space-y-4">
            <p className="flex justify-center font-body-text text-lg font-bold">Created in December 2023</p>
        </div>
        <div className="flex justify-center items-center p-4">
        <Image className="size-10" src={img12} alt="" />
        <Image className="size-10" src={img2} alt="" />
        <Image className="size-10" src={img3} alt="" />
       
        </div>
        </div>

        {/* project2 */}
        <div className="flex flex-col max-w-sm   border-2 space-x-3">
        <h1 className="flex justify-center text-xl  font-bold ">LABOUR BOOKING SYSTEM</h1>
        <div>
            <h3 className="text-lg p-4  font-body-text opacity-[0.8]">A Java-based Labour Booking System that connects clients with skilled or unskilled laborers. The platform allows users to post job listings, book laborers, and manage schedules. Labourers can create profiles showcasing their skills and availability, while clients can leave reviews after jobs are completed. An admin panel is included for managing users and monitoring activity.
            Key technologies: Java, MySQL/SQLite, REST APIs
            </h3>
        </div>
        <div className="space-y-4">
            <p className="flex justify-center font-body-text font-bold text-lg">Created in January 2024</p>
        </div>
        <div className="flex justify-center items-center p-4 ">
        <Image className="size-10" src={img14} alt="" />
        <Image className="size-10" src={img2} alt="" />
        <Image className="size-10" src={img3} alt="" />
        <Image className="size-10" src={img4} alt="" />
        </div>
        </div>

        {/* project3 */}
        <div className="flex flex-col max-w-sm   border-2 space-x-3">
        <h1 className="flex justify-center text-xl  font-bold ">Optical Character Recognition (OCR) Project</h1>
        <div>
            <h3 className="font-body-text p-4 text-lg ">Developed during an internship at Insolera Pvt Ltd, this project focuses on building an OCR system to convert printed and handwritten text into digital format. Key tasks included dataset creation, data preprocessing, feature extraction, model selection, and training. The final system was deployed with a user-friendly interface for real-world use, capable of accurately digitizing text.</h3>
        </div>
        <div className="space-y-4">
            <p className="flex justify-center font-sans font-bold">Created in July 2024</p>
        </div>
        <div className="flex justify-center items-center p-4">
        <Image className="size-10" src={img13} alt="" />
        <Image className="size-10" src={img15} alt="" />
        <Image className="size-10" src={img17} alt="" />
        </div>
        </div>

</div>
{/* 2 row */}
<div className="flex font-body-text space-x-10 ">
   {/* project4 */}
   <div className="flex flex-col max-w-sm  border-2 space-x-4 font-body-text">
        <h1 className="flex justify-center text-center text-xl  font-bold ">Advanced ASL Recognition Using Deep Learning</h1>
        <div>
            <h3 className="text-lg p-4  opacity-[0.8]">This project focuses on developing a Convolutional Neural Network (CNN) using Keras to classify ASL gestures. The key steps include data collection, preprocessing, model training, and performance evaluation. Refinement is achieved by analyzing incorrect predictions to improve accuracy.</h3>
        </div>
        <div className="space-y-4">
            <p className="flex justify-center font-body-text font-bold">Created in Aug 2024</p>
        </div>
        <div className="flex justify-center items-center p-4">
        <Image className="size-10"src={img13} alt="" />
        <Image className="size-10" src={img16} alt="" />
        <Image className="size-10" src={img3} alt="" />
        <Image className="size-10" src={img4} alt="" />
        </div>
        </div>

        {/* project5 */}
        <div className="flex flex-col max-w-sm font-body-text  border-2 space-x-3">
        <h1 className="flex justify-center text-xl  font-bold ">Detecting Violence in Videos</h1>
        <div>
            <h3 className="text-lg p-4  opacity-[0.8]">This project focuses on developing a deep learning model to detect violent content in videos and generate automatic trigger warnings. The model, trained using datasets like the Violent Flows Dataset and the Hockey Fight Videos Dataset, aims to achieve over 90% accuracy using transfer learning techniques.</h3>
        </div>
        <div>
            <p className="flex justify-center  font-bold">Created in Sep 2024</p>
        </div>
        <div className="flex justify-center items-center p-4 ">
        <Image className="size-10" src={img13} alt="" />
        <Image className="size-10" src={img15} alt="" />
        <Image className="size-10" src={img3} alt="" />
        <Image className="size-10" src={img4} alt="" />
        </div>
        </div>

        {/* project6 */}

        <div className="flex flex-col max-w-sm font-body-text   border-2">
        <h1 className="flex justify-center text-xl  font-bold text-center ">CNN-based Framework for Comparison of Contactless to Contact-based Fingerprints</h1>
        <div>
            <h3 className="text-lg  p-4  opacity-[0.8]">Project Lead: DL Team Alpha at ITSOLERA PVT LTD <br/>

This project aims to develop a CNN-based framework for accurately comparing contactless 2D fingerprint images with contact-based fingerprints. The framework focuses on leveraging the benefits of contactless acquisition, such as hygiene and deformation-free features, while ensuring high matching accuracy.</h3>
        </div>
        <div>
            <p className="flex justify-center font-bold">Created in July 2024</p>
        </div>
        <div className="flex justify-center items-center  p-4">
        <Image className="size-10" src={img17} alt="" />
        <Image className="size-10" src={img13} alt="" />
        <Image className="size-10" src={img3} alt="" />
        <Image className="size-10" src={img4} alt="" />
        </div>
        </div>
</div>

</div>

{/* end for lg size */}





        <div className="flex border-2 px-6 py-2 my-4 bg-gray-800 text-white">
<a className="flex justify-center items-center" href="https://github.com/Bilal574645">

<div><h2>More Projects</h2></div>
<div><Image className="w-6 h-6 ml-1 bg-slate-50 rounded-full" src={img8} alt="github" /></div>


</a>
        </div>

   
    </div>



   

    //end of master div
  )
}

export default Projects
