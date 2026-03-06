import { toast } from "react-toastify";

const TaskStatus = ({ inProgressTasks, resolvedTasks, setData, data }) => {
  const handleComplete = (id) => {
    toast("Task marked as Resolved ");

    const updatedData = data.map((item) =>
      item.id === id ? { ...item, status: "Resolved" } : item,
    );
    setData(updatedData);
  };

  return (
    <div className="row-span-14 ">
      <h2 className="font-semibold text-xl pb-5 dark-1 ">In-Progress</h2>
      {inProgressTasks.length === 0 ? (
        <p className="gray-text">Select a ticket to add to Task Status</p>
      ) : (
        inProgressTasks.map((task) => (
          <div
            key={task.id}
            className="p-3.5 bg-white shadow-xl rounded-md mb-5"
          >
            <h3 className="font-semibold text-xl pb-4">{task.title}</h3>
            <button
              onClick={() => handleComplete(task.id)}
              className="btn w-full bg-[#02A53B] text-white"
            >
              Complete
            </button>
          </div>
        ))
      )}

      <div>
        <h2 className="font-semibold text-xl pb-5 dark-1">Resolved</h2>
        {resolvedTasks.length === 0 ? (
          <p className="gray-text pb-5">No resolved tasks yet.</p>
        ) : (
          resolvedTasks.map((task) => (
            <div
              key={task.id}
              className="p-3.5 bg-[#E0E7FF] shadow-xl rounded-md my-3.5"
            >
              <h3 className="font-semibold text-xl py-3 text-center">
                {task.title}
              </h3>
              <p className="bg-blue-300 py-2 text-center mx-auto">✅Resolved</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskStatus;
