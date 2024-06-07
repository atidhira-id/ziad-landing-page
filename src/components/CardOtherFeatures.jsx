/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { motion } from 'framer-motion';
import { CheckIcon } from './Icons';

function CardOtherFeatures({ row1, row2 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeInOut', delay: 0.3 }}
      className="min-h-[35vh] md:min-h-[45] min-w-[20rem] w-max max-h-max flex gap-12 items-center px-7 py-8"
    >
      <ul className="w-full min-w-fit flex flex-col items-start justify-center text-left md:items-center">
        {row1 && row1.map((dsc) => (
          <li key={dsc} className="text-left min-w-fit w-full text-sm text-gray-700 mb-3 flex items-center justify-start gap-2">
            <CheckIcon size={16} color="#1C77FF" />
            <span>
              {dsc}
            </span>
          </li>
        ))}
      </ul>
      <ul className="w-full min-w-fit flex flex-col items-start justify-center text-left md:items-center">
        {row2 && row2.map((dsc) => (
          <li key={dsc} className="text-left min-w-fit w-full text-sm text-gray-700 mb-3 flex items-center justify-start gap-2">
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
