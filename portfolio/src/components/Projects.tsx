import { useState } from "react"
import eccomerce from "../../public/eccomerce.png"
import eccomerce_pdp from "../../public/eccomerce_pdp.png"
import Github from "./Github"

export const Projects = () => {

    const [isHover,setIsHover]=useState(false)

    const skills=["React Js","Express Js","Postgress Sql","Tailwind CSS","JavaScript","Stripe Api","Cloudinary Api","JWT"]
    return (
         <section className="m-10">
            <h1 className="text-3xl font-bold text-center mt-10 underline">My Projects</h1>

            <div className="mt-10 ">
               <div className="w-md mt-10 shadow-md shadow-gray-200 rounded-lg p-4 hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:bg-gray-50">
                <img src={isHover ? eccomerce_pdp : eccomerce} alt="E-commerce Project"
                    onMouseEnter={()=>{setIsHover(true)}}
                    onMouseLeave={()=>{setIsHover(false)}}
                />
                   <h2 className="text-xl font-semibold mt-2">Burito E2e Eccomerce With Admin Panel</h2>
                   <p className="text-lg mt-2 pr-4">This is a full-stack E-commerce web application designed to provide a seamless online shopping experience for users while offering powerful management tools for administrators</p>
                   <div className="space-x-2 ">
                    {
                       skills.map((skill,index)=>{
                        return <button key={index} className="p-2 px-2.5 mt-2 bg-gray-200 rounded-2xl text-sm">{skill}</button>    
                       })
                    }
                   </div>
                    <div className="flex space-x-4 justify-between mt-8">
                    <button className="px-3 text-sm text-black bg-green-100 hover:bg-green-200 rounded-xl cursor-pointer hover:underline ">Demo Link</button>
                    <button><Github/></button>    
                    </div>  

                </div>     

                
            </div>      

           </section>  
    )
}

