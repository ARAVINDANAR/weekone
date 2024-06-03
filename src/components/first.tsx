import { Button, Typography } from "@mui/material";

import React from "react";

const First = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "15.49vw",
        paddingLeft: "15.28vw",
        paddingRight: "15.28vw",
        width:"100vw"
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", gap: "1.8vw" }}>
        <div style={{ width: "0.14vw", height: "0.13vh" }}>
          <img src="src\assets\food wagon.png" />
        </div>
        <Typography>foodWAGON</Typography>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "39.24vw",
          height: "3.33vh",
        }}
      >
        <Typography>Deliver to:</Typography>

        <img src="src\assets\map-marker-alt.png" />

        <Typography>Current Location</Typography>
        <Typography>Mohammadpur Bus Stand, Dhaka</Typography>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <img src="src\assets\Search.png" />
        <div style={{ width: "6.81vw", height: "2.4vh" }}>
          <Typography>Search Food</Typography>
        </div>
        <Button>
          <img src="src\assets\user.png" />
          Login
        </Button>
      </div>
    </div>
  );
};

export default First;
