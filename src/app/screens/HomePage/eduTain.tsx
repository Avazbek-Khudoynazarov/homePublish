import React, { useEffect, useRef } from "react";
import { Button } from "@mui/material";
import { useScroll, motion, useTransform, useInView } from "framer-motion";

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

export function EduTain() {
  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  const textRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { margin: "-150px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: ref2,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress2, [0, 1], [0.7, 1]);
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgess = useTransform(scrollYProgress2, [0, 1], [0.6, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div id={"edu-config"}>
      <div className={"edu1"}>
        <motion.div
          variants={variants}
          initial="initial"
          ref={textRef}
          animate={isInView && "animate"}
          className={"eduTitle"}
        >
          <span style={{ fontSize: "55px", fontWeight: "600" }}>
            에듀테인먼트 프로그램
          </span>
          <span
            style={{
              width: "85%",
              textAlign: "center",
            }}
          >
            모션 드로잉 미술과 허밍블럭스 음악으로 즐거운 학습을 경험하세요!
            우리의 에듀테인먼트 프로그램은 학습을 더욱 흥미롭게 만들어줍니다.
            그래피툰을 통해 새로운 학습 체험을 시작하세요.
          </span>
          <Button
            style={{
              width: "204px",
              height: "53px",
              fontSize: "22px",
              color: "rgba(17, 116, 237, 1)",
              border: "2px solid rgba(17, 116, 237, 1)",
            }}
          >
            자세히 보기
          </Button>
        </motion.div>
        <motion.div
          ref={ref}
          style={{
            scale: scaleProgess,
            opacity: opacityProgress,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img style={{ width: "85%" }} src="../Icons/image.png" alt="" />
        </motion.div>
      </div>
      <div className={"edu2"}>
        <motion.div
          ref={ref2}
          style={{ scale: scaleProgress, opacity: opacityProgess }}
          className={"eduImg"}
        >
          <img src="../Icons/Group.png" alt="" />
        </motion.div>
        <motion.div
          variants={variant}
          initial="initial"
          ref={textRef}
          animate={isInView && "animate"}
          className={"eduTitle"}
        >
          <span style={{ fontSize: "55px", fontWeight: "600" }}>
            다양한 콘텐츠 제작
          </span>
          <span
            style={{
              width: "85%",
              textAlign: "center",
            }}
          >
            그래피툰을 통해 동영상, 슬라이드부터 애니메이션까지 다양한 형태의
            콘텐츠를 쉽게 제작하세요! 카드뉴스, 릴스, 숏폼 등 저작권 걱정 없는
            나만의 창의적 콘텐츠를 만들 수 있습니다.
          </span>
          <Button
            style={{
              width: "204px",
              height: "53px",
              fontSize: "22px",
              color: "rgba(17, 116, 237, 1)",
              border: "2px solid rgba(17, 116, 237, 1)",
            }}
          >
            바로 시작하기
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
