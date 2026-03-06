import { toast } from "react-toastify";
import calImg from "../assets/calendar.png";

const Card = ({ issuesData, data, setData }) => {
  const handleClick = () => {
    if (issuesData.status === "Open") {
      toast("Added to In Progress ");

      const updatedData = data.map((item) =>
        item.id === issuesData.id ? { ...item, status: "In Progress" } : item,
      );
      setData(updatedData);
    }
  };

  return (
    <div
      className="p-3.5  shadow-xl rounded-lg col-span-1 cursor-pointer bg-[#fff] max-h-56"
      onClick={handleClick}
    >
      <div className=" flex justify-between items-center ">
        <h3 className="font-semibold text-xl w-1/2">{issuesData.title}</h3>
        <div
          className={`w-40 h-9 rounded-full flex justify-between items-center px-2 ${
            issuesData.status === "In Progress"
              ? "bg-black text-white"
              : issuesData.status === "Resolved"
                ? "bg-blue-200 text-blue-600"
                : "bg-[#B9F8CF] text-[#0B5E06]"
          }`}
        >
          <span className="text-xl">🟢</span>
          <span className="font-medium pr-2">{issuesData.status}</span>
        </div>
      </div>

      <p className="gray-text py-3 lg:py-6">{issuesData.description}</p>

      <div className="flex justify-between">
        <div className="flex flex-col lg:flex-row lg:items-center gap-2">
          <span className="gray-text">#{issuesData.id}</span>
          <span
            className={`${
              issuesData.priority === "HIGH PRIORITY"
                ? "text-red-500 font-semibold"
                : issuesData.priority === "MEDIUM PRIORITY"
                  ? "text-yellow-500 "
                  : "text-green-500 "
            } px-2 rounded-sm`}
          >
            {issuesData.priority}
          </span>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-2 gray-text">
          <span className="font-semibold">{issuesData.customer}</span>
          <div className="flex items-center">
            <img className="w-6 pr-1" src={calImg} alt="" />
            <span>{issuesData.createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
