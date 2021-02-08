import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import LinearProgress from "@material-ui/core/LinearProgress";

const Loading = () => {
  return (
    <div className="loader">
      <CircularProgress />
      <LinearProgress color="secondary" />
    </div>
  );
};

export default Loading;
