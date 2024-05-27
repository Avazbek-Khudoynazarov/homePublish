import React, { useRef } from "react";
import { Button } from "@mui/material";
import { motion, useInView } from "framer-motion";

const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 120, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export function GrapCard() {
  const mainCardRef = useRef(null);
  const isInView = useInView(mainCardRef, { once: true, margin: "-100px" });

  return (
    <motion.div id={"grapCard-config"}>
      <span style={{ fontSize: "60px", fontWeight: "600", marginTop: "206px" }}>
        그래피툰의 어떤 서비스를 원하시나요?
      </span>
      <motion.div
        className={"mainCard"}
        ref={mainCardRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={container}
      >
        <motion.div className={"card"} variants={item}>
          <img
            style={{
              aspectRatio: "1 / 1",
              width: "55%",
              height: "55%",
              marginRight: "15px",
            }}
            src="../Icons/Group6.png"
            alt=""
          />
          <span
            style={{
              fontSize: "30px",
              fontWeight: "500",
              marginRight: "12.5%",
              marginBottom: "5px",
              color: "white",
            }}
          >
            캐릭터 모션 제작
          </span>
        </motion.div>
        <motion.div className={"card"} variants={item}>
          <img
            style={{
              aspectRatio: "1 / 1",
              width: "55%",
              height: "55%",
              marginRight: "15px",
            }}
            src="../Icons/Group6.png"
            alt=""
          />
          <span
            style={{
              fontSize: "30px",
              fontWeight: "500",
              marginRight: "12.5%",
              marginBottom: "5px",
              color: "white",
            }}
          >
            캐릭터 모션 제작
          </span>
        </motion.div>
        <motion.div className={"card"} variants={item}>
          <img
            style={{
              aspectRatio: "1 / 1",
              width: "55%",
              height: "55%",
              marginRight: "15px",
            }}
            src="../Icons/Group6.png"
            alt=""
          />
          <span
            style={{
              fontSize: "30px",
              fontWeight: "500",
              marginRight: "12.5%",
              marginBottom: "5px",
              color: "white",
            }}
          >
            캐릭터 모션 제작
          </span>
        </motion.div>
        <motion.div className={"card"} variants={item}>
          <img
            style={{
              aspectRatio: "1 / 1",
              width: "55%",
              height: "55%",
              marginRight: "15px",
            }}
            src="../Icons/Group6.png"
            alt=""
          />
          <span
            style={{
              fontSize: "30px",
              fontWeight: "500",
              marginRight: "12.5%",
              marginBottom: "5px",
              color: "white",
            }}
          >
            캐릭터 모션 제작
          </span>
        </motion.div>
      </motion.div>
      <motion.div className={"footCard"}>
        <span style={{ fontSize: "30px", fontWeight: "400" }}>
          간단한 폼 작성을 통해 문의 할 수 있습니다.{" "}
        </span>
        <span style={{ fontSize: "18px", fontWeight: "400" }}>
          🕒 Take 1 minutes
        </span>
        <Button
          style={{
            width: "252px",
            height: "80",
            borderRadius: "21px",
            background: "rgba(217, 217, 217, 1)",
            fontSize: "28px",
            fontWeight: "400",
            color: "rgba(0, 0, 0, 1)",
          }}
        >
          문의하기
        </Button>
      </motion.div>
    </motion.div>
  );
}
