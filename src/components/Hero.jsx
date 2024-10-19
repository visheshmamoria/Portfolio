import image from "/public/selfphoto.jpeg"
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src={image} 
            alt="Vishesh Mamoria" 
            className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] cursor-pointer rounded-full object-cover shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600" 
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
        >
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl whitespace-nowrap">
            Vishesh Mamoria
          </h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl md:text-3xl">System Admin</h3> 
          <p className="md:text-base text-sm text-gray-400">
            Experienced in managing Windows servers for hosting environments, with expertise in AWS and Azure. Skilled in server configurations, DNS, Active Directory, security, and automation using PowerShell. Focused on ensuring reliable, scalable, and secure hosting solutions while optimizing performance and uptime.
          </p>
        </motion.div>
        
      </div>
    </div>
  );
};

export default Hero;


