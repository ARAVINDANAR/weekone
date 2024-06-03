import { Button, Typography } from "@mui/material";
import React from "react";

const Ten = () => {
  return (
    <div style={{display: "flex", flexDirection: "column",paddingLeft:"15.28vw",paddingRight:"15.28vw",width:"100vw" }}>
      <>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: "36.04vw", height: "68.27vh" }}>
              <Typography>Best deals Crispy Sandwiches</Typography>
              <Typography>
                Enjoy the large size of sandwiches. Complete perfect slice of
                sandwiches.
              </Typography>
              <Button>Proceed to order</Button>
            </div>
            <div>
              <img src="src\assets\image (19).png" />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <img src="src\assets\image (19).png" />
            </div>
            <div style={{ width: "36.04vw", height: "68.27vh" }}>
              <Typography>Best deals Crispy Sandwiches</Typography>
              <Typography>
                Enjoy the large size of sandwiches. Complete perfect slice of
                sandwiches.
              </Typography>
              <Button>Proceed to order</Button>
            </div>
          </div>
        </div>
      </>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "36.04vw", height: "68.27vh" }}>
          <Typography>Best deals Crispy Sandwiches</Typography>
          <Typography>
            Enjoy the large size of sandwiches. Complete perfect slice of
            sandwiches.
          </Typography>
          <Button>Proceed to order</Button>
        </div>
        <div>
          <img src="src\assets\image (19).png" />
        </div>
      </div>
    </div>
  );
};

export default Ten;
