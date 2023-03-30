/* eslint-disable react/self-closing-comp */
import { motion } from 'framer-motion';

function CardFeatures({ children: desc, title = 'title', imageUrl }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeInOut', delay: 0.3 }}
      className="flex items-center justify-center bg-white"
    >
      <div className="w-72 h-80 max-h-max px-4 pb-4 pt-8 flex flex-col items-center justify-center shadow-lg rounded-lg">
        {/* title */}
        <h3 className="w-fit mb-3 font-poppins font-bold text-xl text-blue-600 text-center">{title}</h3>
        {/* image */}
        {/* <div className="w-16 h-16 bg-blue-500 mb-8"></div> */}
        <img src={imageUrl} alt="feature-image" width="100px" height="auto" className="mb-5" />
        {/* desc */}
        <div className="grow">
          <p className="w-full text-center text-gray-500">
            {desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default CardFeatures;
