import inderpreet_singh from "../../public/cropped_circle_image.png";
import { motion } from "framer-motion";

export const AboutUs = () => {
  return (
    <main className="pt-8 sm:pt-12 lg:pt-16" id="about">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
        <motion.div
          className="w-full lg:w-2/5 px-2 sm:px-4"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={inderpreet_singh}
            alt="Inderpreet Singh"
            className="w-full max-w-sm mx-auto object-cover rounded-2xl bg-transparent mix-blend-multiply"
          />
        </motion.div>

        <motion.div
          className="w-full lg:w-3/5 px-2 sm:px-4 text-base sm:text-lg"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 className="text-2xl sm:text-3xl font-bold mb-4">
            Hello, I&apos;m Inderpreet Singh
          </motion.h1>
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Software Engineer</h2>

          <p className="mb-4 text-gray-700 leading-relaxed">
            I&apos;m a passionate full-stack developer who enjoys building scalable and
            user-friendly web applications. I specialize in the MERN/PERN stack and
            love transforming ideas into real, impactful digital experiences.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            I have hands-on experience developing responsive web applications,
            implementing secure authentication systems, and integrating payment
            gateways and APIs. I enjoy solving complex problems and continuously
            learning new technologies.
          </p>

          <p className="text-gray-700 leading-relaxed">
            My aim is to work with innovative teams where I can contribute to
            meaningful products while continuously growing as a developer.
          </p>
        </motion.div>
      </div>
    </main>
  );
};
