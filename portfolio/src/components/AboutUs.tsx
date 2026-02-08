import inderpreet_singh from "../../public/cropped_circle_image.png"
import { motion } from "framer-motion"

export const AboutUs = () => {
  return (
     <main className="flex justify-center items-center h-screen mt-[-20px]" id="about">

            <div className="flex items-center justify-between py-4  rounded-lg  flex-wrap mt-0">
              <motion.div className="w-1/2 px-4"
               initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                  <img src={inderpreet_singh} alt="Inderpreet Singh"
                  className="w-[80%] h-[50%] object-cover rounded-xl bg-transparent mix-blend-multiply  " />
              </motion.div>

              <motion.div className="w-1/2 px-4 text-lg"
               initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                    <motion.h1 className="text-3xl font-bold mb-4"
                     
                    >Hello, I'm Inderpreet Singh</motion.h1>
                     <h1 className="text-xl font-semibold mb-4">Software Engineer</h1>
                   <p className="mb-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora repellat quisquam porro blanditiis. Quas eaque quia eos quasi, asperiores, numquam alias voluptates libero qui fuga, nesciunt aperiam debitis similique maiores.
                   </p>

                   <p className="mb-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora repellat quisquam porro blanditiis. Quas eaque quia eos quasi, asperiores, numquam alias voluptates libero qui fuga, nesciunt aperiam debitis similique maiores.
                   </p>

                   <p className="mb-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora repellat quisquam porro blanditiis. Quas eaque quia eos quasi, asperiores, numquam alias voluptates libero qui fuga, nesciunt aperiam debitis similique maiores.
                   </p>

              </motion.div>

              

         
            </div>
          </main>
  )
}

