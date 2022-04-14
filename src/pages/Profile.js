import { useCallback } from "react";
import { changeVisibles } from "../store/profile/actions";
import { useDispatch, useSelector } from "react-redux";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";

const Profile = () => {
  //достаем (получаем) данные из хранилища store
  const { showName, name } = useSelector((state) => state);
  const dispatch = useDispatch();

  const setShowName = useCallback(() => {
    dispatch(changeVisibles);
  }, [dispatch]);

  return (
    <div>
      <h1>Profile</h1>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox onClick={setShowName} />}
          label="Give me a name"
        />
      </FormGroup>
      {/* <button onClick={setShowName}>Give me a name</button> */}
      <blockquote>{showName && <h3>{name}</h3>}</blockquote>
    </div>
  );
};

export default Profile;
