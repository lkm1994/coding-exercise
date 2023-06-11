import "./App.css";
import { CircularProgress, Grid } from "@mui/material";
import RoutesComponent from "./utils/routes";
import { useSelector } from "react-redux";

function App() {
  const propsState = useSelector((state) => {
    return {
      isLoading: state.applicationReducer.isLoading,
    };
  });
  return (
    <Grid container>
      {propsState.isLoading && (
        <span className='loader'>
          <CircularProgress color="secondary" />
        </span>
      )}
      <RoutesComponent />
    </Grid>
  );
}

export default App;
