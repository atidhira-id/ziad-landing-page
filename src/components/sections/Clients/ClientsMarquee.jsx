import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function LogoWrapper({ controls, data }) {
  return (
    <motion.div
      initial={{ x: 0 }}
      animate={controls}
      className="w-max flex flex-shrink-0"
    >
      {data.map((client, key) => (
        <div key={key} className="relative group mx-1">
          <img src={client.logo} className="h-10 md:h-16" />

          {/* Tooltip */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            {client.name}
          </div>
        </div>
      ))}
    </motion.div>
  );
}

function ClientsMarquee({ data }) {
  const controls = useAnimation();

  const duration = 30;
  const startMarquee = async () => {
    controls.start({
      x: "-100%",
      transition: {
        duration,
        repeat: Infinity,
        ease: "linear",
      },
    });
  };

  useEffect(() => {
    startMarquee();
  }, [controls]);

  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    startMarquee();
  };
  return (
    <motion.div
      className="w-full max-w-7xl flex mx-auto py-8 sliderGradient"
      onHoverStart={handleMouseEnter}
      onHoverEnd={handleMouseLeave}
    >
      <LogoWrapper controls={controls} data={data} />
      <LogoWrapper controls={controls} data={data} />
    </motion.div>
  );
}

export default ClientsMarquee;
