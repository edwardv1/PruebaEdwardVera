import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/actions.js";
import DataTable from "../../components/dataTable/DataTable.jsx";

const LandingPage = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

    return (
      <div className=" bg-slate-400 w-full p-8 flex flex-col items-center justify-center">
          <DataTable/>
      </div>
    )
  }
  
  export default LandingPage;