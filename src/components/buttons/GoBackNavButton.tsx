import { useNavigate, useLocation } from "react-router-dom";
import MainButton from "./MainButton";

export default function GoBackNavButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    if (location.state?.fromSearch) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <MainButton type="button" onClick={goBack} disabled={false}>
      Go Back
    </MainButton>
  );
}
