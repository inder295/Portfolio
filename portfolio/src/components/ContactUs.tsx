import { motion } from "framer-motion"

export const ContactUs = () => {
  return (
    <section className='mb-20 mt-20' id="contact">
      <motion.h1 className="text-3xl font-bold text-center mt-10 underline"
       initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        >Contact Me</motion.h1>

      <motion.form className='max-w-sm mx-auto mt-10'
       initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}>

           <div className='mt-4'>
            <label htmlFor="name" className="block mb-2.5 text-sm font-medium text-heading">Name</label>
            <input type="text" id="name" className="bg-gray-100 border border-default-medium text-heading text-sm rounded-lg focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="John" required />
         </div>

        

        <div className='mt-4'>
            <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">Email</label>
            <input type="text" id="email" className="bg-gray-100 border border-default-medium text-heading text-sm rounded-lg focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="john@example.com" required />
        </div>

        <div className='mt-4'>
            <label htmlFor="message" className="block mb-2.5 text-sm font-medium text-heading">Message</label>
            <textarea id="message" className="bg-gray-100 border border-default-medium text-heading text-sm rounded-lg focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Your message here..." required></textarea>
        </div>

        <div className="mt-6">

             <button type="button" className="text-white w-full text-center bg-blue-500 box-border border border-transparent hover:bg-brand-strong rounded-2xl focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>

        </div>




        

      </motion.form>
    </section>
  )
}


