import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearMessageCreated, getAllProducts } from "../../redux/actions.js";
import DataTable from "../../components/dataTable/DataTable.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LandingPage = () => {
  const dispatch = useDispatch();
  const messageCreated = useSelector((state) => state.messageCreated);

  //Mostrar mensaje cuando se crea un nuevo registro en el form con Toastify
  let currentToastIdSuccess = null;
  const mensaje_success_Toast = () => {
    if (currentToastIdSuccess) {
    toast.update(currentToastIdSuccess, {
        render: messageCreated,
        autoClose: 5000,
    });
    } else {
    currentToastIdSuccess = toast.success(messageCreated, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        toastId: "custom-toast-id",
        style: {
            marginTop: "60px",
            width: "600px",
        },
    });
    }
  };

  //Mostrar mensaje de error cuando se intenta crear un registro que ya existe
  let currentToastId = null;
  const mensaje_error_Toast = () => {
    if (currentToastId) {
      toast.update(currentToastId, {
        render: messageCreated,
        autoClose: 5000,
      });
    } else {
      currentToastId = toast.error(messageCreated, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        toastId: "custom-toast-id",
        style: {
          marginTop: "60px",
          width: "600px",
        },
      });
    }
  };
  
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  if(messageCreated.length > 0) {
    if(messageCreated === "The product already exists."){
      mensaje_error_Toast();
    }
    mensaje_success_Toast();
    dispatch(clearMessageCreated(""));
  }

    return (
      <div className=" bg-slate-400 w-full p-8 flex flex-col items-center justify-center">
          <ToastContainer/>
          <DataTable/>
      </div>
    )
  }
  
  export default LandingPage;