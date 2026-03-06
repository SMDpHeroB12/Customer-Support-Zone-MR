import { use, useState } from "react";
import StatusCounterBox from "./StatusCounterBox";

import Card from "./Card";
import TaskStatus from "./TaskStatus";

const IssuesManagement = ({ fetchPromise }) => {
  const initialData = use(fetchPromise);
  const [data, setData] = useState(initialData);

  const inProgressTasks = data.filter(
    (issue) => issue.status === "In Progress",
  );
  const resolvedTasks = data.filter((issue) => issue.status === "Resolved");
  return (
    <>
      <StatusCounterBox data={data} />

      <section className="w-11/12 mx-auto grid lg:grid-cols-12 gap-6">
        <article className="grid lg:col-span-8  lg:grid-rows-15">
          <h2 className="font-semibold text-2xl dark-1  h-12 lg:row-span-1">
            Customer Tickets
          </h2>

          <div className="grid lg:grid-cols-2 gap-6 pb-10 row-span-14">
            {data
              .filter((issue) => issue.status !== "Resolved")
              .map((issuesData, index) => {
                return (
                  <Card
                    key={index}
                    issuesData={issuesData}
                    data={data}
                    setData={setData}
                  />
                );
              })}
          </div>
        </article>
        <aside className="grid lg:col-span-4 row-span-1 gap-2.5 lg:grid-rows-15 ">
          <h2 className="font-semibold text-2xl dark-1 h-12 lg:row-span-1">
            Task Status
          </h2>

          <TaskStatus
            inProgressTasks={inProgressTasks}
            resolvedTasks={resolvedTasks}
            setData={setData}
            data={data}
          />
        </aside>
      </section>
    </>
  );
};

export default IssuesManagement;
