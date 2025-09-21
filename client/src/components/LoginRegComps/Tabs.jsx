import { useLogReg } from "../../contexts/LogRegContext"

export default function Tabs({children}) {

    const {currTab, handleSetTab} = useLogReg();

  return (
    <div className="flex flex-col justify-center items-center h-[90vh] relative">
        <div className="flex w-[30vw] justify-around text-xl border-b-2 pb-0 border-gray-200 p-4 z-5 bg-white">
          <p
            className={
              currTab === "user"
                ? "text-blue-500 underline-offset-5 underline"
                : ""
            }
            onClick={() => handleSetTab("user")}
          >
            User
          </p>
          <p
            className={
              currTab === "hospital"
                ? "text-blue-500 underline-offset-5 underline"
                : ""
            }
            onClick={() => handleSetTab("hospital")}
          >
            Hospital
          </p>
        </div>
        {children}
      </div>
  )
}
