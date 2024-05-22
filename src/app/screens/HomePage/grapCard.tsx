import React, { useEffect, useRef } from "react";
import { Button } from "@mui/material";
import { useScroll, motion, useTransform } from "framer-motion";

export function GrapCard() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div id={"grapCard-config"}>
      <span style={{ fontSize: "60px", fontWeight: "600", marginTop: "206px" }}>
        그래피툰의 어떤 서비스를 원하시나요?
      </span>
      <motion.div
        ref={ref}
        style={{ scale: scaleProgess, opacity: opacityProgress }}
        className={" mainCard"}
      >
        <div className={"card"}>
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
        </div>
        <div className={"card"}>
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
              marginRight: "39.5%",
              marginBottom: "5px",
              color: "white",
            }}
          >
            교육
          </span>
        </div>
        <div className={"card"}>
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
              marginRight: "34.5%",
              marginBottom: "5px",
              color: "white",
            }}
          >
            공모전
          </span>
        </div>
        <div className={"card"}>
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
              marginRight: "39.5%",
              marginBottom: "5px",
              color: "white",
            }}
          >
            협업
          </span>
        </div>
      </motion.div>
      <div className={"footCard"}>
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
      </div>
    </div>
  );
}
