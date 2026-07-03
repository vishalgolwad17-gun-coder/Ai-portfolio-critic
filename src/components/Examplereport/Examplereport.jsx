import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setShowreport } from "../../store/slices/Showreportslice";

const Examplereport = () => {

    const showreport = useSelector((state) => state.showreport.showreport);
    const dispatch = useDispatch();

  return (
    <>
      {showreport && <div className="fixed inset-0 bg-black/50 z-40 "></div>}

      {showreport && <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      md:w-[50%] w-[90%] h-[90vh] bg-white z-50 rounded-2xl shadow-2xl flex flex-col justify-center">

        <div className="flex justify-between items-center p-5 border-b">
          <h1 className="text-2xl font-bold">Example Report</h1>

          <button onClick={() => dispatch(setShowreport(false))} className="text-3xl hover:text-red-500">
            <i className="ri-close-line"></i>
          </button>
        </div>

        <img
          src="/Projectimages/Examplereport.png"
          alt="Example Report"
          className="w-full h-[80vh] object-contain rounded-b-2xl p-2 shadow-lg"
        />

      </div>}
    </>
  );
};

export default Examplereport;