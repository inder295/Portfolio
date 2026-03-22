import { useState } from "react"
import eccomerce from "../../public/eccomerce.png"
import eccomerce_pdp from "../../public/eccomerce_pdp.png"
import Github from "./Github"
import { motion } from "framer-motion"
import chat from "../../public/chat-app-2.png"
import chat1 from "../../public/chatapp-1.png"

export const Projects = () => {

 
    const [isHover,setIsHover]=useState(false)

    const skills=["React Js","Express Js","Postgress Sql","Tailwind CSS","JavaScript","Stripe Api","Cloudinary Api","JWT"]

     const skills_chat=["React Js","Express Js","Mongodb","Tailwind CSS","JavaScript","Gemini Api","Cloudinary Api","JWT","Socket io"]
    return (
         <section className="mt-16 sm:mt-20" id="projects">
            <motion.h1 
            className="text-2xl sm:text-3xl font-bold text-center mt-10 underline"
            initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        >My Projects</motion.h1>

            <motion.div className="mt-8 sm:mt-10"
             >
               <motion.div className="w-full max-w-3xl mx-auto mt-8 shadow-md shadow-gray-200 rounded-xl p-4 sm:p-6 transition-transform duration-300 hover:shadow-xl hover:bg-gray-50"
               initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}>
                <img src={isHover ? eccomerce_pdp : eccomerce} alt="E-commerce Project"
                    onMouseEnter={()=>{setIsHover(true)}}
                    onMouseLeave={()=>{setIsHover(false)}}
                    className="w-full rounded-lg"
                />
                   <h2 className="text-lg sm:text-xl font-semibold mt-4">Burito E2E Ecommerce With Admin Panel</h2>
                   <p className="text-sm sm:text-base mt-2 text-gray-700">This is a full-stack e-commerce web application designed to provide a seamless online shopping experience for users while offering powerful management tools for administrators.</p>
                   <div className="flex flex-wrap gap-2 mt-3">
                    {
                       skills.map((skill,index)=>{
                        return <span key={index} className="px-3 py-1.5 bg-gray-200 rounded-2xl text-xs sm:text-sm">{skill}</span>
                       })
                    }
                   </div>
                    <div className="flex items-center justify-between mt-6">
                    <a href="https://ecommerce-qd6q.onrender.com/">
                      <button className="px-3 py-2 text-sm text-black bg-green-100 hover:bg-green-200 rounded-xl cursor-pointer hover:underline">Demo Link</button>
                    </a>  
                      <a href="https://github.com/inder295/Ecommerce.git">
                        <button><Github/></button>
                      </a>
                    </div> 

                </motion.div>     

                
            </motion.div> 

             <motion.div className="mt-8 sm:mt-10"
             >
               <motion.div className="w-full max-w-3xl mx-auto mt-8 shadow-md shadow-gray-200 rounded-xl p-4 sm:p-6 transition-transform duration-300 hover:shadow-xl hover:bg-gray-50"
               initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}>
                <img src={isHover ? chat1 : chat} alt="chat-app"
                    onMouseEnter={()=>{setIsHover(true)}}
                    onMouseLeave={()=>{setIsHover(false)}}
                    className="w-full rounded-lg"
                />
                   <h2 className="text-lg sm:text-xl font-semibold mt-4">Real Time Chat App </h2>
                   <p className="text-sm sm:text-base mt-2 text-gray-700">A full-stack real-time chat application built using the MERN stack with Socket.io for instant messaging. The app supports private chats, file sharing, message replies, and real-time online user tracking with a scalable backend architecture.</p>
                   <div className="flex flex-wrap gap-2 mt-3">
                    {
                       skills_chat.map((skill,index)=>{
                        return <span key={index} className="px-3 py-1.5 bg-gray-200 rounded-2xl text-xs sm:text-sm">{skill}</span>
                       })
                    }
                   </div>
                    <div className="flex items-center justify-between mt-6">
                        <a href="https://chat-app-wsb1.onrender.com/">
                      <button className="px-3 py-2 text-sm text-black bg-green-100 hover:bg-green-200 rounded-xl cursor-pointer hover:underline">Demo Link</button>
                      </a>
                      <a href="https://github.com/inder295/Chat-App-">
                        <button><Github/></button>
                      </a>
                    </div> 

                </motion.div>     

                
            </motion.div>      

           </section>  
    )
}

