import { motion } from "framer-motion";
import { clients } from "@/data/data";

function LogoWrapper() {
  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: "-100%" }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="w-max flex flex-shrink-0"
    >
      {clients.map((client, key) => {
        return (
          <img src={client.logo} key={key} className="h-10 md:h-16 mr-5" />
        );
      })}
    </motion.div>
  );
}

function ClientsMarquee() {
  return (
    <div className="w-full max-w-7xl flex mx-auto py-4 overflow-hidden sliderGradient">
      <LogoWrapper />
      <LogoWrapper />
    </div>
  );
}

export default ClientsMarquee;
