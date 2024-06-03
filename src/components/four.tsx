import { Typography } from "@mui/material";
import React from "react";

const Four = () => {
  return (
    <div style={{
        display: "flex",
        flexDirection:"column",
        gap:"9.47vh",width:"100vw"
      }}>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography style={{ fontSize: "2.99vw", color: "#F17228", }}>
            How does it work
          </Typography>
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingLeft: "18.61vw",
            paddingRight: "18.61vw",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography style={{ fontSize: "1.53vw", color: "#434343",fontStyle:"Source Sans Pro"}}>Select location</Typography>
            <Typography style={{ fontSize: "1.25vw", color: "#9E9E9E",fontStyle:"Open Sans"}}>
              Choose the location where your food will be delivered.
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography style={{ fontSize: "1.53vw", color: "#434343",fontStyle:"Source Sans Pro"}}>Choose order</Typography>
            <Typography style={{ fontSize: "1.25vw", color: "#9E9E9E",fontStyle:"Open Sans"}}>
              Check over hundreds of menus to pick your favorite food
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography style={{ fontSize: "1.53vw", color: "#434343",fontStyle:"Source Sans Pro"}}>Pay advanced</Typography>
            <Typography style={{ fontSize: "1.25vw", color: "#9E9E9E",fontStyle:"Open Sans"}}>
              It's quick, safe, and simple. Select several methods of payment
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography style={{ fontSize: "1.53vw", color: "#434343",fontStyle:"Source Sans Pro"}}>Enjoy meals</Typography>
            <Typography style={{ fontSize: "1.25vw", color: "#9E9E9E",fontStyle:"Open Sans"}}>
              Food is made and delivered directly to your home.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Four;
