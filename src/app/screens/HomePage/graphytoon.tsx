import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const variant = {
  initial: {
    x: -500,
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

const variants = {
  initial: {
    x: 500,
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

export function Graphytoon() {
  const textRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(textRef, { margin: "-150px", once: true });

  const textRef2 = useRef<HTMLDivElement | null>(null);
  const isInView2 = useInView(textRef2, { margin: "-150px", once: true });

  return (
    <div className={"grap-config"}>
      <motion.div
        initial="initial"
        ref={textRef}
        animate={isInView ? "animate" : "initial"}
        variants={variant}
        className={"grapBox"}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            width: "80%",
          }}
        >
          <span style={{ fontSize: "53px", fontWeight: "600" }}>
            그래피툰을 선택하는 이유!
          </span>
          <span style={{ fontSize: "25px", fontWeight: "500" }}>
            Graphytoon은 일반적인 콘텐츠 제작 플랫폼이 아닌 멀티미디어
            애니메이션 제작을 위한 도구입니다.
          </span>
          <span style={{ fontSize: "25px", fontWeight: "500" }}>
            모션 드로잉, 모션 캐릭터, 텍스트, 이미지, 동영상 등 그래피툰만의
            좌측탭 메뉴를 효과적으로 활용하여 다양한 형태의 콘텐츠를 만들 수
            있습니다.
          </span>
          <span style={{ fontSize: "25px", fontWeight: "500" }}>
            뿐만 아니라, 교육적인 목적을 위한 콘텐츠 제작 수업, 공모전 개최 등
            다양한 프로그램을 제공합니다.
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "25px",
            width: "80%",
            height: "140px",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              width: "148px",
              height: "14px",
              background: "rgba(86, 179, 255, 1)",
            }}
          >
            <span
              style={{
                position: "absolute",
                fontSize: "25px",
                fontWeight: "500",
                bottom: "6px",
              }}
            >
              #애니메이션
            </span>
          </div>
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              width: "148px",
              height: "14px",
              background: "rgba(86, 179, 255, 1)",
            }}
          >
            <span
              style={{
                position: "absolute",
                fontSize: "25px",
                fontWeight: "500",
                bottom: "6px",
              }}
            >
              #애니메이션
            </span>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial="initial"
        ref={textRef2}
        animate={isInView2 ? "animate" : "initial"}
        variants={variants}
        className={"grapBox2"}
      >
        <div
          style={{
            width: "90%",
            height: "700px",
          }}
        >
          <video
            style={{
              width: "100%",
              height: "600px",
              aspectRatio: "1/1",
            }}
            src="../Video/video.mp4"
            autoPlay
            loop
            muted
          />
        </div>
      </motion.div>
    </div>
  );
}
