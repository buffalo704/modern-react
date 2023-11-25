import {useState} from "react";
import { GoChevronDown, GoChevronLeft} from "react-icons/go";

interface Item {
  id: number;
  label: string;
  content: string;
}

export interface AccordionProps {
  items: Item[];
}

export const Accordion = ({ items }: AccordionProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number>(-1);

  const handleClick = (index: number): void => {
    if (index === expandedIndex) {
      index = -1;
    }

    setExpandedIndex(index);
  }

  const listItems = items.map((item: Item, index: number) => {
    const isExpanded = index === expandedIndex;

    const content = isExpanded ? <div className="border-b p-5">{item.content}</div> : null;

    const icon = <span className="text-2xl">{isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}</span>;

    return (
      <div key={item.id}>
        <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)}>
          {item.label}
          {icon}
        </div>
        {content}
      </div>
    );
  });

  return (
    <div>
      <div className="border-x border-t rounded">{listItems}</div>
    </div>
  );
};
