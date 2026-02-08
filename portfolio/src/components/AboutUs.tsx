import inderpreet_singh from "../../public/cropped_circle_image.png"

export const AboutUs = () => {
  return (
     <main className="mt-10" id="about">

            <div className="flex items-center justify-between py-4 shadow-md shadow-gray-200 rounded-lg ">
              <div className="w-1/2 px-4">
                  <img src={inderpreet_singh} alt="Inderpreet Singh"
                  className="w-[80%] h-[50%] object-cover rounded-xl  " />
              </div>

              <div className="w-1/2 px-4 text-lg">
                    <h1 className="text-3xl font-bold mb-4">Hello, I'm Inderpreet Singh</h1>
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

              </div>

              

         
            </div>
          </main>
  )
}

