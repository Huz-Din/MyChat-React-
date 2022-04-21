import React from "react";
import { useCallback, useState } from "react";
import { changeVisibles, updateName } from "../store/profile/actions";
import { useDispatch, useSelector } from "react-redux";
import {
  FormControlLabel,
  Checkbox,
  FormGroup,
  TextField,
  Fab,
} from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";

const Profile = () => {
  //достаем (получаем) данные из хранилища store
  const { showName, name } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const [value, setValue] = useState(name);

  const setShowName = useCallback(() => {
    dispatch(changeVisibles);
  }, [dispatch]);

  const changeName = (e) => {
    setValue(e.target.value);
  };

  //for button press key Enter
  const saveName = () => {
    dispatch(updateName(value));
  };

  return (
    <div>
      <h1>Profile</h1>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox onClick={setShowName} />}
          label="Give me a name"
        />
      </FormGroup>
      <blockquote>{showName && <h3>{name}</h3>}</blockquote>
      <TextField
        style={{ marginRight: "20px" }}
        label="name"
        placeholder={"What do you name?"}
        type="text"
        value={value}
        onChange={changeName}
      />
      <Fab
        onClick={saveName}
        variant="extended"
        color="primary"
        aria-label="add"
      >
        <NavigationIcon sx={{ mr: 0.5 }} />
        Save changes
      </Fab>
    </div>
  );
};

export default Profile;
