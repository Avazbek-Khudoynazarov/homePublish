import React, { useCallback, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: -120, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export function Review() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const mainCardRef = useRef(null);
  const isInView = useInView(mainCardRef, { once: true, margin: "-70px" });

  const scrollHandler = useCallback(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      if (
        scrollContainer.scrollTop + scrollContainer.clientHeight >=
        scrollContainer.scrollHeight
      ) {
        scrollContainer.scrollTop = 0;
      }
    }
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", scrollHandler);
      return () => {
        scrollContainer.removeEventListener("scroll", scrollHandler);
      };
    }
  }, [scrollHandler]);

  return (
    <div id={"review-config"}>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
          marginTop: "5%",
          overflow: "hidden",
        }}
      >
        <span
          style={{ fontSize: "60px", fontWeight: "600", marginLeft: "25%" }}
        >
          사용자 후기 및 협업사
        </span>
        <img
          style={{
            aspectRatio: "1/1",
            width: "8%",
            height: "120px",
          }}
          src="../Icons/paper.png"
          alt=""
        />
      </div>
      <motion.div
        ref={mainCardRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={container}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "65px",
          marginTop: "2%",
        }}
      >
        <motion.div variants={item} className="reviewCard">
          <div
            style={{
              width: "73px",
              height: "73px",
              background: "rgba(217, 217, 217, 1)",
              marginLeft: "33px",
            }}
          ></div>
          <span
            style={{
              width: "80%",
              marginLeft: "33px",
              fontSize: "25px",
              fontWeight: "500",
            }}
          >
            그래피툰은 비즈니스 프레젠테이션을 혁신했습니다. 이제 역동적이고
            매력적이며 기억에 남습니다!
          </span>
          <span style={{ marginLeft: "33px" }}>운영 관계자</span>
        </motion.div>
        <motion.div variants={item} className="reviewCard">
          <div
            style={{
              width: "73px",
              height: "73px",
              background: "rgba(217, 217, 217, 1)",
              marginLeft: "33px",
            }}
          ></div>
          <span
            style={{
              width: "80%",
              marginLeft: "33px",
              fontSize: "25px",
              fontWeight: "500",
            }}
          >
            색다른 경험을 할 수 있어서 좋았고 기회가 된다면 더 많이 더 자주
            체험해보고 싶어요!
          </span>
          <span style={{ marginLeft: "33px" }}>ㅇㅇ초등학교 5학년 학생</span>
        </motion.div>
        <motion.div variants={item} className="reviewCard">
          <div
            style={{
              width: "73px",
              height: "73px",
              background: "rgba(217, 217, 217, 1)",
              marginLeft: "33px",
            }}
          ></div>
          <span
            style={{
              width: "80%",
              marginLeft: "33px",
              fontSize: "25px",
              fontWeight: "500",
            }}
          >
            그래피툰을 충분히 추천할 수 없습니다. 제 콘텐츠는 이제 진정으로
            청중을 사로잡는 이야기를 들려줍니다!
          </span>
          <span style={{ marginLeft: "33px" }}>
            oo초등학교 4학년 담임선생님
          </span>
        </motion.div>
      </motion.div>
      <div className="scroll">
        <div className="scroll-content" ref={scrollRef}>
          <img src="../Icons/ribbon.png" alt="" />
          <img src="../Icons/ribbon2.png" alt="" />
          <img src="../Icons/ribbon2.png" alt="" />
          <img src="../Icons/ribbon2.png" alt="" />
          <img src="../Icons/ribbon2.png" alt="" />
          <img src="../Icons/ribbon2.png" alt="" />
          <img src="../Icons/ribbon2.png" alt="" />
        </div>
      </div>
    </div>
  );
}

// TODO animation scroll
