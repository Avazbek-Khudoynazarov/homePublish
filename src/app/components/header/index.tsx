import React, { useEffect, useRef, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Button } from "@mui/material";
import { gsap, Power3 } from "gsap";
import { motion } from "framer-motion";

export function NavbarHome() {
  const [navLinkSize, setNavLinkSize] = useState("10rem");
  const [navLinkColor, setNavLinkColor] = useState("transparent");
  const [activeLink, setActiveLink] = useState("#nav-config");

  const listenScrollEvent = () => {
    if (window.scrollY > 10) {
      setNavLinkColor("#252734");
      setNavLinkSize("5rem");
    } else {
      setNavLinkColor("transparent");
      setNavLinkSize("10rem");
    }
  };

  let navLinkRef = useRef<HTMLDivElement>(null);
  let textItem = useRef<HTMLDivElement>(null);
  let imageItem = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navLinkRef.current) {
      gsap.to(navLinkRef.current, 1, {
        opacity: 1,
        ease: Power3.easeInOut,
        delay: 0.3,
      });
    }
    if (textItem.current) {
      gsap.to(textItem.current, 1, {
        opacity: 1,
        ease: Power3.easeInOut,
        delay: 0.3,
      });
    }
    if (imageItem.current) {
      gsap.to(imageItem.current, 0.8, {
        opacity: 1,
        ease: Power3.easeOut,
        delay: 0.3,
        x: 200,
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const handleLinkClick = (href: React.SetStateAction<string>) => {
    setActiveLink(href);
  };

  const textVariants = {
    initial: {
      x: -700,
      opacity: 0,
    },

    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const MotionButton = motion(Button);

  return (
    <div id="nav-config">
      <motion.span
        variants={textVariants}
        style={{
          position: "absolute",
          color: "black",
          fontSize: "90px",
          fontWeight: "600",
          marginBottom: "250px",
        }}
        initial="initial"
        animate="animate"
      >
        애니메이션 스토리텔링 콘텐츠 제작
      </motion.span>
      <motion.span
        variants={textVariants}
        style={{ position: "absolute", color: "black", fontSize: "40px" }}
        initial="initial"
        animate="animate"
      >
        내가 그린 그림이 움직이는 마법의 캔버스!
      </motion.span>

      <motion.button
        className={"btn-head"}
        style={{
          position: "absolute",
          width: "292px",
          height: "79px",
          color: "white",
          fontSize: "28px",
          marginTop: "270px",
          zIndex: "999",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        그래피툰 만들기
      </motion.button>
      <div className={"main-nav"}>
        <div className={"Navlink"} ref={navLinkRef}>
          <Link
            to="#nav-config"
            smooth
            style={{
              fontWeight: "bold",
              fontSize: "22px",
              color: activeLink === "#nav-config" ? "blue" : "black",
            }}
            onClick={() => handleLinkClick("#nav-config")}
          >
            <img src="../Icons/logo.png" alt="" />
          </Link>
          <Link
            className="link-design"
            to="#grapCard-config"
            smooth
            style={{
              color: activeLink === "#grapCard-config" ? "blue" : "black",
            }}
            onClick={() => handleLinkClick("#grapCard-config")}
          >
            문의하기
          </Link>
          <Link
            className="link-design"
            to="#character-config"
            smooth
            style={{
              color: activeLink === "#character-config" ? "blue" : "black",
            }}
            onClick={() => handleLinkClick("#character-config")}
          >
            서비스
          </Link>
          <Link
            className="link-design"
            to="#review-config"
            smooth
            style={{
              color: activeLink === "#review-config" ? "blue" : "black",
            }}
            onClick={() => handleLinkClick("#review-config")}
          >
            요금제
          </Link>
          <Link
            className="link-design"
            to="#edu-config"
            smooth
            style={{
              color: activeLink === "#edu-config" ? "blue" : "black",
            }}
            onClick={() => handleLinkClick("#edu-config")}
          >
            프로그램
          </Link>
          <Link
            className="link-design"
            to="#motion-config"
            smooth
            style={{
              color: activeLink === "#motion-config" ? "blue" : "black",
            }}
            onClick={() => handleLinkClick("#motion-config")}
          >
            블로그
          </Link>
        </div>
        <div
          ref={textItem}
          style={{
            marginRight: "7%",
            width: "220px",
            display: "flex",
            justifyContent: "space-between",
            opacity: "0",
          }}
        >
          <Button
            style={{
              width: "100px",
              height: "36px",
              color: "white",
              background: "rgba(16, 157, 225, 1)",
              zIndex: "999",
            }}
          >
            로그인
          </Button>
          <Button
            style={{
              width: "100px",
              height: "36px",
              border: "2px solid rgba(17, 116, 237, 1) ",
            }}
          >
            회원가입
          </Button>
        </div>
      </div>
      <div className={"imgBack"}>
        <img src="../Icons/Vector.png" alt="" />
        <img src="../Icons/Vector2.png" alt="" />
      </div>
    </div>
  );
}
