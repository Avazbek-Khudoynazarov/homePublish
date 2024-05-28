import React, { useState, useRef } from "react";
import { Button, Input } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { motion, AnimatePresence } from "framer-motion";

export function GrapChat() {
  const [open, setOpen] = useState(false);
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [reloadKey, setReloadKey] = useState(0);

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
    if (!open) {
      setInputValue("");
      setIsPickerVisible(false);
    }
  };

  const handleEmojiSelect = (emoji: { native: string }) => {
    setInputValue((prev) => prev + emoji.native);
  };

  const handleReset = () => {
    setReloadKey((prevKey) => prevKey + 1);
    setOpen(false);
  };

  const variants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    closed: { opacity: 0, x: "100%", transition: { duration: 0.5 } },
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
                <img src="../Icons/logo2.png" alt="" />
              </div>
              <div className={"bellIcon"}>
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
                  placeholder="Please Write here ..."
                  value={inputValue}
                  onChange={(e: {
                    target: { value: React.SetStateAction<string> };
                  }) => setInputValue(e.target.value)}
                />
                <div className="smileIcon">
                  <button
                    style={{
                      borderRadius: "50%",
                      height: "25px",
                      maxWidth: "40px",
                      border: "none",
                    }}
                    onClick={() => setIsPickerVisible(!isPickerVisible)}
                  >
                    {isPickerVisible ? (
                      <CloseIcon
                        style={{
                          cursor: "pointer",
                          color: "rgba(17, 116, 237, 1)",
                        }}
                      />
                    ) : (
                      <img
                        style={{
                          cursor: "pointer",
                          width: "23px",
                        }}
                        src="../Icons/Vector4.png"
                        alt="smile icon"
                      />
                    )}
                  </button>
                  <img
                    style={{
                      cursor: "pointer",
                      aspectRatio: "1/1",
                      width: "8px",
                      height: "24px",
                    }}
                    src="../Icons/Vector5.png"
                    alt="option icon"
                  />
                </div>
                {isPickerVisible && (
                  <div className="emoji-picker2">
                    <Picker
                      showPreview={false}
                      showSkinTones={false}
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
        <button
          className="btn"
          style={{ borderRadius: "50%" }}
          onClick={toggleChat}
        >
          {!open && (
            <img
              style={{
                cursor: "pointer",
              }}
              src="../Icons/grapIcon.png"
              alt="Chat Icon"
            />
          )}
        </button>
      </div>
    </div>
  );
}
