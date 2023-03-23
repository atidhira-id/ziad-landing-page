/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { motion } from "framer-motion";

function CardClients({ children: text = 'text', imgUrl }) {
  const randomNumber = Math.floor(Math.random() * 101) - 50;
  return (
    <motion.div
      initial={{ opacity: 0, x: randomNumber }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: 'easeInOut', delay: 0.3 }}
      className="min-w-[18rem] max-w-[20rem] flex items-center justify-center"
    >
      <div className="w-full h-full px-12 py-4 flex items-center justify-center gap-4 bg-white shadow-lg rounded-md">
        {/* <img src={} alt="image" /> */}
        <div className="w-10 h-10 bg-blue-500">
        </div>
        <h3 className="text-xl font-bold w-fit">
          {text}
        </h3>
      </div>
    </motion.div>
  )
}

export default CardClients;
