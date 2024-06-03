import { Button, Typography } from "@mui/material";
import React from "react";

const Five = () => {
  return (
    <div  style={{ display: "flex",paddingLeft:"15.42vw",paddingRight:"29.6vh",width:"100vw" }}>
      <div style={{ display: "flex", flexDirection: "column",gap:"11.73vh   " }}>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography style={{ fontSize: "2.99vw", color: "#212121"}}>
              Popular items
            </Typography>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <img src="src\assets\Frame 40.png" />
            <Typography style={{ fontSize: "1.53vw", color: "#434343",fontStyle:"Source Sans Pro"}}>Cheese Burger</Typography>
            <Typography style={{ fontSize: "1.53vw", color: "#FFB30E",fontStyle:"Source Sans Pro"}}>Burger Arena</Typography>
            <Typography style={{ fontSize: "1.53vw", color: "#212121",fontStyle:"Source Sans Pro"}}>$3.88</Typography>
            <Button>Order Now</Button>
          </div>
          <div>
            <img src="src\assets\Frame 40 (1).png" />
            <Typography style={{ fontSize: "1.53vw", color: "#434343",fontStyle:"Source Sans Pro"}}>Toffe’s Cake</Typography>
            <Typography style={{ fontSize: "1.53vw", color: "#FFB30E",fontStyle:"Source Sans Pro"}}>Top Sticks</Typography>
            <Typography style={{ fontSize: "1.53vw", color: "#212121",fontStyle:"Source Sans Pro"}}>$4.00</Typography>
            <Button>Order Now</Button>
          </div>
          <div>
            <img src="src\assets\Rectangle 336.png" />
            <Typography style={{ fontSize: "1.53vw", color: "#434343",fontStyle:"Source Sans Pro"}}>Dancake</Typography>
            <Typography style={{ fontSize: "1.53vw", color: "#FFB30E",fontStyle:"Source Sans Pro"}}>Cake World</Typography>
            <Typography style={{ fontSize: "1.53vw", color: "#212121",fontStyle:"Source Sans Pro"}}>$1.99</Typography>
            <Button>Order Now</Button>
          </div>
          <div>
            <img src="src\assets\Rectangle 336 (1).png" />
            <Typography style={{ fontSize: "1.53vw", color: "#434343",fontStyle:"Source Sans Pro"}}>Crispy Sandwitch</Typography>
            <Typography style={{ fontSize: "1.53vw", color: "#FFB30E",fontStyle:"Source Sans Pro"}}>Fastfood Dine</Typography>
            <Typography style={{ fontSize: "1.53vw", color: "#212121",fontStyle:"Source Sans Pro"}}>$3.00</Typography>
            <Button>Order Now</Button>
          </div>
          <div>
            <img src="src\assets\Frame 40 (2).png" />
            <Typography style={{ fontSize: "1.53vw", color: "#434343",fontStyle:"Source Sans Pro"}}>Thai  Soup</Typography>
            <Typography style={{ fontSize: "1.53vw", color: "#FFB30E",fontStyle:"Source Sans Pro"}}>Foody man</Typography>
            <Typography style={{ fontSize: "1.53vw", color: "#212121",fontStyle:"Source Sans Pro"}}>$2.79</Typography>
            <Button>Order Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Five;
