import React from "react";
import { Button } from "@mui/material";

export function MotionDrawing() {
  return (
    <div id={"motion-config"}>
      <div className={"motion1"}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img style={{ width: "80%" }} src="../Icons/Group2.png" alt="" />
        </div>
        <div className={"drawing"}>
          <div>
            <img src="../Icons/Group3.png" alt="" />
          </div>
        </div>
      </div>
      <div className={"motion2"}>
        <span style={{ fontSize: "60px", fontWeight: "600" }}>
          Motion Drawing
        </span>
        <span style={{ fontSize: "30px", fontWeight: "600" }}>
          내가 그린 그림이 춤을 추는 것처럼 움직인다면 어떨까요?!{" "}
        </span>
        <span style={{ width: "75%", fontSize: "25px", fontWeight: "500" }}>
          그림 파일 이미지를 업로드 하면 인공지능이 객체를 감지하고 사용자가
          선택한 동작에 따라 해당 객체를 움직이게 만들어줍니다!{" "}
        </span>
        <Button
          style={{
            width: "190px",
            height: "50px",
            border: "2px solid rgba(17, 116, 237, 1)",
            borderRadius: "3px",
            color: "rgba(17, 116, 237, 1)",
            fontSize: "22px",
            fontWeight: "600",
          }}
        >
          바로 시작하기
        </Button>
      </div>
    </div>
  );
}
