import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function notify(type = "add") {
  if (type === "add") {
    toast.success("Success Add New Todo !", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
  if (type === "delete") {
    toast.success("Success Delete Todo !", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
  if (type === "error") {
    toast.error("This Field Cannot Be Empty !", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}
