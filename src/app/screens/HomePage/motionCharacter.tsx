import React, { useRef } from "react";
import { Button } from "@mui/material";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -700,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const variant = {
  initial: {
    x: 700,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      staggerChildren: 0.1,
    },
  },
};

export function MotionCharacter() {
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { margin: "-150px" });

  return (
    <div id={"character-config"}>
      <motion.div
        variants={variants}
        initial="initial"
        ref={textRef}
        animate={isInView && "animate"}
        className={"character1"}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "82%",
          }}
        >
          <span
            style={{
              fontSize: "20px",
              fontWeight: "500",
              textAlign: "center",
              marginTop: "35px",
            }}
          >
            캐릭터 보유 기업기관 또는 개인은 모션 파일 제작 문의를 통해 협업
            가능합니다.
          </span>
        </div>
        <span
          style={{
            fontSize: "9px",
            fontWeight: "400",
            marginLeft: "50%",
          }}
        >
          *협의에 따라 변경될 수 있습니다.
        </span>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "3%",
          }}
        >
          <div className="charBox">
            <span style={{ fontSize: "12px", fontWeight: "900" }}>
              입점 신청
            </span>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <img src="../Icons/entry.png" alt="" />
              <Button
                style={{
                  fontSize: "7px",
                  fontWeight: "700",
                  width: "53px",
                  height: "13px",
                  borderRadius: "10px",
                  background: "rgba(0, 128, 203, 0.72)",
                  color: "rgba(255, 255, 255, 1)",
                }}
              >
                Step 1.
              </Button>
            </div>
            <span
              style={{
                fontSize: "9px",
                fontWeight: "400",
                width: "87px",
                textAlign: "center",
                marginTop: "6px",
              }}
            >
              입점 문의처 연락 or 입점 신청서 제출
            </span>
          </div>
          <img
            style={{ width: "30px", height: "30px" }}
            src="../Icons/arrow.png"
            alt=""
          />
          <div className="charBox">
            <span style={{ fontSize: "12px", fontWeight: "900" }}>미팅</span>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <img src="../Icons/meeting.png" alt="" />
              <Button
                style={{
                  fontSize: "7px",
                  fontWeight: "700",
                  width: "53px",
                  height: "13px",
                  borderRadius: "10px",
                  background: "rgba(0, 128, 203, 0.72)",
                  color: "rgba(255, 255, 255, 1)",
                }}
              >
                Step 2.
              </Button>
            </div>
            <span
              style={{
                fontSize: "9px",
                fontWeight: "400",
                width: "87px",
                textAlign: "center",
                marginTop: "6px",
              }}
            >
              시안 공유 및 모션 템플릿 제안
            </span>
          </div>
          <img
            style={{ width: "30px", height: "30px" }}
            src="../Icons/arrow.png"
            alt=""
          />

          <div className="charBox">
            <span style={{ fontSize: "12px", fontWeight: "900" }}>
              모션 파일 개발
            </span>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <img src="../Icons/setting.png" alt="" />
              <Button
                style={{
                  fontSize: "7px",
                  fontWeight: "700",
                  width: "53px",
                  height: "13px",
                  borderRadius: "10px",
                  background: "rgba(0, 128, 203, 0.72)",
                  color: "rgba(255, 255, 255, 1)",
                }}
              >
                Step 3.
              </Button>
            </div>
            <span
              style={{
                fontSize: "9px",
                fontWeight: "400",
                width: "87px",
                textAlign: "center",
                marginTop: "6px",
              }}
            >
              캐릭터 파일 애니메이팅 작업
            </span>
          </div>
          <img
            style={{ width: "30px", height: "30px" }}
            src="../Icons/arrow.png"
            alt=""
          />

          <div className="charBox">
            <span style={{ fontSize: "12px", fontWeight: "900" }}>
              그래피툰 업로드
            </span>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <img src="../Icons/upload.png" alt="" />
              <Button
                style={{
                  fontSize: "7px",
                  fontWeight: "700",
                  width: "53px",
                  height: "13px",
                  borderRadius: "10px",
                  background: "rgba(0, 128, 203, 0.72)",
                  color: "rgba(255, 255, 255, 1)",
                }}
              >
                Step 4.
              </Button>
            </div>
            <span
              style={{
                fontSize: "9px",
                fontWeight: "400",
                width: "87px",
                textAlign: "center",
                marginTop: "6px",
              }}
            >
              캐릭터 모션 파일 그래피툰 내 업로드
            </span>
          </div>
        </div>
        <div className={"charBox2"}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>제작된 모션 파일 업로드 예시</span>
            <img style={{ width: "60%" }} src="../Icons/Group4.png" alt="" />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>캐릭터가 활용된 콘텐츠</span>
            <img style={{ width: "60%" }} src="../Icons/Group5.png" alt="" />
          </div>
          <span
            style={{
              fontSize: "20px",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            * 그래피툰 에디터 페이지에서 좌측탭의 모션캐릭터 메뉴를 통해 사용할
            수 있습니다.
          </span>
        </div>
      </motion.div>
      <motion.div
        variants={variant}
        initial="initial"
        ref={textRef}
        animate={isInView && "animate"}
        className={"motion2"}
      >
        <span style={{ fontSize: "60px", fontWeight: "600" }}>
          Motion Character
        </span>
        <span style={{ fontSize: "30px", fontWeight: "600" }}>
          내 캐릭터가 살아 움직인다?!
        </span>
        <span style={{ width: "90%", fontSize: "25px", fontWeight: "500" }}>
          개발된 캐릭터 모션 파일은 그래피툰의 모션 캐릭터 메뉴에 추가되어
          드래그 앤 드롭만으로 다양한 콘텐츠를 만들 수 있습니다.
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
          모션 캐릭터 문의
        </Button>
      </motion.div>
    </div>
  );
}
