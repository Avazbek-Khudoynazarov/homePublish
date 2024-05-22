import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import styled from "@mui/system/styled";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export function GrapChat() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsOpen(true);
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Button color="primary" onClick={toggleChat} className="chat_button">
        {isOpen ? (
          <CloseIcon
            style={{
              border: "1px solid yellow",
              right: "300px",
              bottom: "615px",
              position: "fixed",
            }}
          />
        ) : (
          <img
            style={{ position: "fixed" }}
            src="../Icons/grapIcon.png"
            alt="Open Chat"
          />
        )}
      </Button>

      {isOpen && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="mainChat">
            <div className="chatLogo">
              <img className="chatImg" src="../Icons/logo.png" alt="" />
              <img
                className="chatImg2"
                src="../Icons/notifications.png"
                alt=""
              />
              <img className="chatImg3" src="../Icons/Vector3.png" alt="" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                marginBottom: "17px",
              }}
            >
              <div
                style={{
                  width: "90px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  component="label"
                  startIcon={
                    <AddRoundedIcon
                      style={{
                        fontSize: "40px",
                        color: "rgba(17, 116, 237, 1)",
                        marginLeft: "15px",
                      }}
                    />
                  }
                >
                  <VisuallyHiddenInput type="file" aria-label="Upload file" />
                </Button>
              </div>
              <div className="chatInput" style={{ width: "90%" }}>
                <input
                  type="text"
                  name="message"
                  placeholder="Please Wait ..."
                  style={{
                    width: "70%",
                    height: "48px",
                    padding: "0 30px",
                    borderRadius: "50px",
                    fontSize: "20px",
                    outline: "none",
                    border: "none",
                  }}
                />
                <div
                  style={{
                    width: "120px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <img src="../Icons/Vector4.png" alt="" />
                  <img
                    style={{ marginRight: "10px" }}
                    src="../Icons/Vector5.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
