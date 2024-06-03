import { Typography } from "@mui/material";
import React from "react";

const Six = () => {
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      <>
        <div
          style={{
            display: "flex",
            paddingLeft: "15.42vw",
            paddingRight: "29.6vh",
            flexDirection: "column",
            gap: "11.73vh",width:"100vw"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography style={{ fontSize: "2.99vw", color: "#212121"}}>Featured Restaurants</Typography>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div>
                  <img src="src\assets\Image (5).png" />
                  <Typography style={{ fontSize: "1.53vw", color: "#424242",fontStyle:"Source Sans Pro"}}>Foodworld</Typography>
                  <Typography style={{ fontSize: "1.53vw", color: "#F17228",fontStyle:"Source Sans Pro"}}>Opens Tomorrow</Typography>
                </div>
                <div>
                  <img src="src\assets\Image (7).png" />
                  <Typography style={{ fontSize: "1.53vw", color: "#424242",fontStyle:"Source Sans Pro"}}>Pizzahub</Typography>
                  <Typography style={{ fontSize: "1.53vw", color: "#F17228",fontStyle:"Source Sans Pro"}}>Opens Tomorr</Typography>
                </div>
                <div>
                  <img src="src\assets\Image (8).png" />
                  <Typography style={{ fontSize: "1.53vw", color: "#424242",fontStyle:"Source Sans Pro"}}>Donuts hut</Typography>
                  <Typography style={{ fontSize: "1.53vw", color: "#F17228",fontStyle:"Source Sans Pro"}}>Open Now</Typography>
                </div>
                <div>
                  <img src="src\assets\Image (9).png" />
                  <Typography style={{ fontSize: "1.53vw", color: "#424242",fontStyle:"Source Sans Pro"}}>Donuts hut</Typography>
                  <Typography style={{ fontSize: "1.53vw", color: "#F17228",fontStyle:"Source Sans Pro"}}>Open Now</Typography>
                </div>
              </div>
            </>
            <>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div>
                  <img src="src\assets\Image (10).png" />
                  <Typography style={{ fontSize: "1.53vw", color: "#424242",fontStyle:"Source Sans Pro"}}>Ruby Tuesday</Typography>
                  <Typography style={{ fontSize: "1.53vw", color: "#F17228",fontStyle:"Source Sans Pro"}}>Open Now</Typography>
                </div>
                <div>
                  <img src="src\assets\Image (11).png" />
                  <Typography style={{ fontSize: "1.53vw", color: "#424242",fontStyle:"Source Sans Pro"}}>Kurkata Fried Chicken</Typography>
                  <Typography style={{ fontSize: "1.53vw", color: "#F17228",fontStyle:"Source Sans Pro"}}>Open Now </Typography>
                </div>
                <div>
                  <img src="src\assets\Image (12).png" />
                  <Typography style={{ fontSize: "1.53vw", color: "#424242",fontStyle:"Source Sans Pro"}}>Red Square</Typography>
                  <Typography style={{ fontSize: "1.53vw", color: "#F17228",fontStyle:"Source Sans Pro"}}>Open Now</Typography>
                </div>
                <div>
                  <img src="src\assets\Image (13).png" />
                  <Typography style={{ fontSize: "1.53vw", color: "#424242",fontStyle:"Source Sans Pro"}}>Taco Bell</Typography>
                  <Typography style={{ fontSize: "1.53vw", color: "#F17228",fontStyle:"Source Sans Pro"}}>Open Now</Typography>
                </div>
              </div>
            </>
          </div>
        </div>
      </>
      <>
      <button>view all</button>
      </>
    </div>
  );
};

export default Six;
