import React, { useState } from "react";
import { Button, styled, Input } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { motion, AnimatePresence } from "framer-motion";

export function GrapChat() {
  const [open, setOpen] = useState(false);
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

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

  const toggleChat = () => {
    setOpen(!open);
  };

  const handleEmojiSelect = (emoji: { native: string }) => {
    setInputValue((prev) => prev + emoji.native);
  };

  const variants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    closed: { opacity: 0, y: "100%", transition: { duration: 0.5 } },
  };

  return (
    <div className="chat-config">
      <AnimatePresence>
        {open && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            className="chat"
          >
            <div className="mainIcon">
              <div className="imgCon">
                <img
                  style={{ marginRight: "10%" }}
                  src="../Icons/logo2.png"
                  alt=""
                />
              </div>
              <img
                style={{
                  aspectRatio: "1/1",
                  width: "30px",
                  height: "30px",
                  cursor: "pointer",
                }}
                src="../Icons/notifications.png"
                alt=""
              />
              <img
                style={{
                  aspectRatio: "1/1",
                  width: "22px",
                  height: "22px",
                  marginTop: "3px",
                  cursor: "pointer",
                }}
                src="../Icons/Vector3.png"
                alt=""
              />
            </div>
            <div className="mainClose">
              <div className="closeIcon">
                <CloseIcon
                  onClick={toggleChat}
                  style={{ color: "rgba(255, 255, 255, 1)", fontSize: "28px" }}
                />
              </div>
            </div>
            <div className="footInput">
              <div className="addIcon">
                <Button
                  style={{ borderRadius: "50%" }}
                  component="label"
                  tabIndex={-1}
                  role={undefined}
                  startIcon={
                    <AddRoundedIcon
                      style={{
                        marginLeft: "14px",
                        fontSize: "40px",
                        fontWeight: "500",
                        color: "rgba(17, 116, 237, 1)",
                      }}
                    />
                  }
                >
                  <VisuallyHiddenInput type="file" />
                </Button>
              </div>
              <div className="mainInput">
                <Input
                  className="input"
                  disableUnderline={true}
                  placeholder="Please Wait ..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <div className="smileIcon">
                  <Button
                    style={{ borderRadius: "50%" }}
                    onClick={() => setIsPickerVisible(!isPickerVisible)}
                  >
                    {isPickerVisible ? (
                      <CloseIcon style={{ cursor: "pointer" }} />
                    ) : (
                      <img
                        style={{ cursor: "pointer" }}
                        src="../Icons/Vector4.png"
                        alt="smile icon"
                      />
                    )}
                  </Button>
                  <img
                    style={{
                      cursor: "pointer",
                      aspectRatio: "1/1",
                      width: "10px",
                      height: "30px",
                    }}
                    src="../Icons/Vector5.png"
                    alt="option icon"
                  />
                </div>
                {isPickerVisible && (
                  <div className="emoji-picker">
                    <Picker
                      data={data}
                      previewPosition="none"
                      onEmojiSelect={handleEmojiSelect}
                    />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="btnCon">
        <Button
          className="btn"
          style={{ borderRadius: "50%" }}
          onClick={toggleChat}
        >
          <img src="../Icons/grapIcon.png" alt="Chat Icon" />
        </Button>
      </div>
    </div>
  );
}
