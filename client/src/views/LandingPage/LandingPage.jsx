import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearMessageCreated, clearMessageDeleted, getAllProducts } from "../../redux/actions.js";
import DataTable from "../../components/dataTable/DataTable.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LandingPage = () => {
  const dispatch = useDispatch();
  const messageCreated = useSelector((state) => state.messageCreated);
  const messageDeleted = useSelector((state) => state.messageDeleted);

  //Mostrar mensaje cuando se crea o elimina un registro en el form con Toastify
  let currentToastIdSuccess = null;
  const mensaje_success_Toast = () => {
    let messageToDisplay;
    if(messageCreated.length > 1){
      messageToDisplay = messageCreated
    } else if(messageDeleted.length > 1) {
      messageToDisplay = messageDeleted
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
            width: "600px",
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
          width: "600px",
        },
      });
    }
  };
  
  //Ejecuto useEffect para obtener todos los productos
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  //Ejecuto funciones para mostrar mensajes mediante Toastify
  if(messageCreated.length > 0) {
    if(messageCreated === "The product already exists."){
      mensaje_error_Toast();
    }
    mensaje_success_Toast();
    dispatch(clearMessageCreated(""));
  }
  if(messageDeleted.length > 0) {
    mensaje_success_Toast();
    dispatch(clearMessageDeleted(""));
  }

    return (
      <div className=" bg-slate-400 w-full p-8 flex flex-col items-center justify-center">
          <ToastContainer/>
          <DataTable/>
      </div>
    )
  }
  
  export default LandingPage;