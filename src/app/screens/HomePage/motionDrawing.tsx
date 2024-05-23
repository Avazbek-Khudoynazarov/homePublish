import React, { useRef } from "react";
import { Button } from "@mui/material";
import { useScroll, motion, useTransform, useInView } from "framer-motion";

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

export function MotionDrawing() {
  const ref = useRef<HTMLDivElement>(null);

  const textRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { margin: "-150px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div id={"motion-config"}>
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgess,
          opacity: opacityProgress,
        }}
        className={"motion1"}
      >
        <motion.div
          ref={ref}
          style={{
            scale: scaleProgess,
            opacity: opacityProgress,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img style={{ width: "80%" }} src="../Icons/Group2.png" alt="" />
        </motion.div>
        <div className={"drawing"}>
          <motion.div
            ref={ref}
            style={{
              scale: scaleProgess,
              opacity: opacityProgress,
            }}
          >
            <img src="../Icons/Group3.png" alt="" />
          </motion.div>
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
      </motion.div>
    </div>
  );
}
