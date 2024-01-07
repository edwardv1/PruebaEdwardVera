import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, clearMessageCreatedOrUpdated, clearMessageDeleted } from "../../redux/features/productSlice.js";
import DataTable from "../../components/dataTable/DataTable.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Metrics from "../../components/metrics/Metrics.jsx";

const LandingPage = () => {
  const dispatch = useDispatch();
  const messageCreated = useSelector((state) => state.product.messageCreatedOrUpdated);
  const messageDeleted = useSelector((state) => state.product.messageDeleted);

  //Mostrar mensaje cuando se crea o elimina un registro en el form con Toastify
  let currentToastIdSuccess = null;
  const mensaje_success_Toast = () => {
    let messageToDisplay;
    if(messageCreated.length > 1){
      messageToDisplay = messageCreated;
    } else if(messageDeleted.length > 1) {
      messageToDisplay = messageDeleted;
    }
    if (currentToastIdSuccess) {
    toast.update(currentToastIdSuccess, {
        render: {messageToDisplay},
        autoClose: 5000,
    });
    } else {
    currentToastIdSuccess = toast.success(messageToDisplay, {
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
            width: "500px",
        },
    });
    }
  };

  //Mostrar mensaje de error cuando se intenta crear un registro en el form que ya existe
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
          width: "500px",
        },
      });
    }
  };
  
  //Ejecuto useEffect para obtener todos los productos
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  //Ejecuto funciones para mostrar mensajes mediante Toastify
  useEffect(() => {
    if (messageCreated && messageCreated.length > 0) {
      if (
        messageCreated === "The product already exists." ||
        messageCreated === "The product doesn't exist." ||
        messageCreated === "An unexpected situation occurred during product update."
      ) {
        mensaje_error_Toast();
      }
      mensaje_success_Toast();
      dispatch(clearMessageCreatedOrUpdated(""));
    }

    if (messageDeleted && messageDeleted.length > 0) {
      mensaje_success_Toast();
      dispatch(clearMessageDeleted(""));
    }
  }, [messageCreated, messageDeleted, dispatch]);

    return (
      <div className=" bg-slate-400 pb-6 w-full flex flex-col items-center justify-center">
          <ToastContainer id="toast"/>
          <div className=" flex w-full h-[60px] bg-blue-500 text-center items-center justify-center">
            <h1 id="title1" className=" text-4xl text-white"><b>DataTable</b></h1>
          </div>
          <DataTable/>
          <div className=" flex w-full mt-6 h-[60px] bg-blue-500 text-center items-center justify-center">
            <h1 id="title2" className=" text-4xl text-white"><b>Metrics</b></h1>
          </div>
          <Metrics/>
      </div>
    )
  }
  
  export default LandingPage;