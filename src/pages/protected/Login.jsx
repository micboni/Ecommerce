import { useSelector } from "react-redux";
import UserLogin from "../../../components/UserLogin";
import Logout from "../../../components/Logout";

export default function Login() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  //const user = useSelector((state) => state.auth.user); -> da chiedere

  if (!isAuthenticated) {
    return <UserLogin />;
  }

  return (
    <div>
      Sei loggato come: Michele
      <Logout />
    </div>
  );
}
