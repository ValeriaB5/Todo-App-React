import {BsFillCheckSquareFill} from 'react-icons/bs';
import {MdDeleteForever} from 'react-icons/md';
import './TodoIcon.css';

const iconTypes = {
  "check": (color) => <BsFillCheckSquareFill className="Icon-svg" fill={color} />,
  "delete": (color) => <MdDeleteForever className="Icon-svg" fill={color} />,
};

function TodoIcon({ type, color, onClick }) {
  return (
    <span
      className={`Icon-container Icon-container-${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  )
}

export { TodoIcon };