import { useEffect, useCallback } from "react";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  selectGists,
  selectGistsError,
  selectGistsLoading,
} from "../store/gists/selectors";
import { getAllGists } from "../store/gists/actions";

const Gists = () => {
  const dispatch = useDispatch();
  const gists = useSelector(selectGists);
  const loading = useSelector(selectGistsLoading);
  const error = useSelector(selectGistsError);

  const requestGists = useCallback(async () => {
    dispatch(getAllGists());
  }, []);

  useEffect(() => {
    requestGists();
  }, []);

  const renderGist = useCallback(
    (gist) => <li key={gists.id}>{gist.id || "No description!!!"}</li>,
    []
  );

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <>
        <h3>Error!!!</h3>
        <button onClick={requestGists}>Repeat request</button>
      </>
    );
  }

  return <ul>{gists.map(renderGist)}</ul>;
};

export default Gists;
