import React from "react";
import "../App.css";
import Button from "@mui/material/Button";
import { Container, Box, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Room: React.FC<any> = () => {
  const navigate = useNavigate();

  const onJoinRoom: any = () => {
    navigate("/joinroom");
  };
  const onCreateRoom: any = () => {
    navigate("/createroom");
  };
  return (
    <div>
      {" "}
      <div className="center">
        <h2 className="center">Hello Vijay</h2>
      </div>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          marginTop: 6,
          marginBottom: 6,
        }}
      >
        <Box
          sx={{
            border: 15,
            borderColor: "#282828",
            background: "#282828",
            //  width: 200,
            //  height: 200,
            flexDirection: "column",

            borderRadius: 7, // Adjust the border radius as needed
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#ffffff",
          }}
        >
          <Box
            sx={{
              borderColor: "#282828",
              backgroundImage:
                "linear-gradient(136deg, #f27021 0%, #e94057 50%, #8a2387 100%)",
              //  width: 200,
              //  height: 200,
              padding: 3,
              flexDirection: "column",

              borderRadius: 7, // Adjust the border radius as needed
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#ffffff",
            }}
          >
            <Button
              variant="contained"
              size="small"
              fullWidth
              sx={{
                alignSelf: "flex-start",
                margin: 1,
                padding: 5,
                marginLeft: 0,
                backgroundImage:
                  "linear-gradient(136deg, #f27021 0%, #e94057 50%, #8a2387 100%)",
                boxShadow: "none", // Remove the default button shadow
                "&:hover": {
                  boxShadow: "none", // Remove the button shadow on hover
                },
              }}
              onClick={() => onJoinRoom()}
            >
              Join Room
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            border: 15,
            borderColor: "#282828",
            background: "#282828",
            flexDirection: "column",
            borderRadius: 7,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#ffffff",
          }}
        >
          <Box
            sx={{
              borderColor: "#282828",
              backgroundImage:
                "linear-gradient(136deg, #f27021 0%, #e94057 50%, #8a2387 100%)",
              //  width: 200,
              //  height: 200,
              padding: 3,
              flexDirection: "column",

              borderRadius: 7, // Adjust the border radius as needed
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#ffffff",
            }}
          >
            <Button
              variant="contained"
              size="small"
              fullWidth
              sx={{
                alignSelf: "flex-start",
                margin: 1,
                marginLeft: 0,
                padding: 5,
                backgroundImage:
                  "linear-gradient(136deg, #f27021 0%, #e94057 50%, #8a2387 100%)",
                boxShadow: "none", // Remove the default button shadow
                "&:hover": {
                  boxShadow: "none", // Remove the button shadow on hover
                },
              }}
              onClick={() => onCreateRoom()}
            >
              Create Room
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};
export default Room;
