/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { motion } from 'framer-motion';
import { CheckIcon } from './Icons';

function CardOtherFeatures({ desc, title, imageUrl }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeInOut', delay: 0.3 }}
      className="min-h-[35vh] md:min-h-[45] min-w-[20rem] max-h-max flex flex-col items-center px-7 py-8 bg-white rounded-lg shadow-xl"
    >
      <article className="mb-9 flex flex-col items-center justify-center">
        {/* title */}
        <h1 className="text-4xl font-bold font-poppins text-brand mb-3">
          {title}
        </h1>
        <img src={imageUrl} alt="feature-image" width="100px" height="auto" />
      </article>
      <ul className="grow w-full flex flex-col items-start justify-start text-left md:items-center">
        {desc && desc.map((dsc) => (
          <li key={dsc} className="w-full text-sm text-gray-700 mb-3 flex items-center gap-2">
            <CheckIcon size={16} color="#1C77FF" />
            <span>
              {dsc}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default CardOtherFeatures;
