import { Typography } from "@mui/material";
import React from "react";

const Seventh = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"11.73vh",width:"100vw"}}>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "62.01vw",
            paddingLeft: "15.42vw"
          }}
        >
          <div>
            <Typography style={{ fontSize: "2.99vw", color: "#212121",fontStyle:"Source Sans Pro"}}>Search by Food</Typography>
          </div>
          <div>
            <Typography style={{ fontSize: "1.25vw", color: "#FFB30E",fontStyle:"Source Sans Pro"}}>view all</Typography>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingLeft: "15.42vw",
          paddingRight: "29.6vh",
        }}
      >
        <div style={{ width: "15.14vw", height: "36vh" }}>
          <img src="src\assets\Image (6).png" />
          <Typography
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",fontSize:"1.53vw",fontStyle:"Source Sans Pro",color:"#424242"
            }}
          >
            pizza
          </Typography>
        </div>
        <div style={{ width: "15.14vw", height: "36vh" }}>
          <img src="src\assets\Image (14).png" />
          <Typography
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",fontSize:"1.53vw",fontStyle:"Source Sans Pro",color:"#424242"
            }}
          >
            Burger
          </Typography>
        </div>
        <div style={{ width: "15.14vw", height: "36vh" }}>
          <img src="src\assets\Image (15).png" />
          <Typography
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",fontSize:"1.53vw",fontStyle:"Source Sans Pro",color:"#424242"
            }}
          >
            Noodels
          </Typography>
        </div>
        <div style={{ width: "15.14vw", height: "36vh" }}>
          <img src="src\assets\Image (16).png" />
          <Typography
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",fontSize:"1.53vw",fontStyle:"Source Sans Pro",color:"#424242"
            }}
          >
            Sub-Sandiwch
          </Typography>
        </div>
        <div style={{ width: "15.14vw", height: "36vh" }}>
          <img src="src\assets\Image (17).png" />
          <Typography
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",fontSize:"1.53vw",fontStyle:"Source Sans Pro",color:"#424242"
            }}
          >
            Chowein
          </Typography>
        </div>
        <div style={{ width: "15.14vw", height: "36vh"  }}>
          <img src="src\assets\Image (18).png" />
          <Typography
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",fontSize:"1.53vw",fontStyle:"Source Sans Pro",color:"#424242"
            }}
          >
            Steak
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Seventh;
