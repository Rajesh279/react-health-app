import { CircularProgress, Grid, Stack } from "@mui/material";
import { useState } from "react";

export default function AppLoader(props) {
  const { loading } = props;
  return loading ? (
    <Grid
      position="relative"
      display="inline-flex"
      style={{ position: "absolute", zIndex: 1, left: "50%", top: "50%" }}
    >
      <CircularProgress size={100} />
    </Grid>
  ) : null;
}
