import { GrFormClose } from "react-icons/gr";

const warnings = {
  color: {
    error: "bg-pink-600",
    warning: "bg-blue-600",
    good: "bg-gray-200",
  },
  size: {
    small: "text-",
  },
};

export default function Alert(props) {
  const { title, color, icon, onDismiss } = props;

  const warningClass = warnings.color[color];

  return (
    <div
      className={`flex relative py-5 px-20 mr-10 font-mono text-lg text-gray-600 rounded-xl shadow-lg ${warningClass}`}
    >
      <div>
        <div className="absolute top-0 left-0 p-10">{icon}</div>
        <div className="flex">{title}</div>
      </div>
      <button className=" absolute top-0 right-0 p-10" onClick={onDismiss}>
        {<GrFormClose />}
      </button>
    </div>
  );
}