import { motion } from "framer-motion";

export const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden max-w-screen-2xl mx-auto">

     
      <motion.div
        
        className="h-40 bg-fuchsia-300 absolute top-30 left-10 w-72 blur-3xl opacity-40"
        animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      
      <motion.div
        
        className=" h-80 bg-blue-300 absolute bottom-10 right-10 w-80 blur-2xl opacity-30"
        animate={{ y: [0, 50, 0], x: [0, -40, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      
      <motion.div
        className="h-60 bg-amber-600 absolute top-1/2 right-1/2 w-96 blur-3xl opacity-20 "
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 18, repeat: Infinity }}
      />

    </div>
  );
}
