import { motion } from "framer-motion";
import { clients } from "@/data/data";

function ClientsMarquee() {
  const ContentWrapper = () => (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: "-100%" }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="w-max flex flex-shrink-0"
    >
      {clients.map((client, key) => {
        return (
          <img src={client.logo} key={key} className="h-10 md:h-20 mr-5" />
        );
      })}
    </motion.div>
  );

  return (
    <div className="w-full max-w-7xl flex mx-auto overflow-hidden sliderGradient">
      <ContentWrapper />
      <ContentWrapper />
    </div>
  );
}

export default ClientsMarquee;
