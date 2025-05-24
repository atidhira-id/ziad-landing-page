import { CheckIcon } from "@/components/Icons";

function CardOtherFeatures({ row1, row2 }) {
  return (
    <div className="w-full flex justify-evenly items-center">
      <ul className="flex flex-col items-start justify-center md:items-center">
        {row1 &&
          row1.map((dsc) => (
            <li
              key={dsc}
              className="text-left min-w-fit w-full text-sm text-gray-700 mb-3 flex items-center justify-start gap-2"
            >
              <CheckIcon size={16} color="#1C77FF" />
              <span>{dsc}</span>
            </li>
          ))}
      </ul>
      <ul className="flex flex-col items-start justify-center md:items-center">
        {row2 &&
          row2.map((dsc) => (
            <li
              key={dsc}
              className="text-left min-w-fit w-full text-sm text-gray-700 mb-3 flex items-center justify-start gap-2"
            >
              <CheckIcon size={16} color="#1C77FF" />
              <span>{dsc}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CardOtherFeatures;
