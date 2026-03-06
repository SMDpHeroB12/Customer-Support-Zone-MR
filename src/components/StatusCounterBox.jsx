import { useEffect, useState } from "react";

const StatusCounterBox = ({ data }) => {
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  useEffect(() => {
    const inProgressData = data.filter(
      (element) => element.status === "In Progress",
    );
    const resolvedData = data.filter(
      (element) => element.status === "Resolved",
    );

    setInProgressCount(inProgressData.length);
    setResolvedCount(resolvedData.length);
  }, [data]);

  return (
    <div>
      <section>
        <div className="w-11/12 mx-auto">
          <div className=" pt-10 lg:pt-20 pb-7 lg:pb-20 grid lg:grid-cols-2 gap-5 ">
            <div
              className="rounded-md p-5 text-white lg:h-[250px] 
            bg-progress"
            >
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <span className="text-2xl">In-Progress</span>
                <span className="text-6xl font-semibold">
                  {inProgressCount}
                </span>
              </div>
            </div>
            <div
              className="rounded-md p-5 text-white lg:h-[250px] 
             bg-resolved"
            >
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <span className="text-2xl">Resolved</span>
                <span className="text-6xl font-semibold">{resolvedCount}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatusCounterBox;
