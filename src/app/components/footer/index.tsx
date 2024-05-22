import React from "react";
import { Button } from "@mui/material";
import { HashLink as Link } from "react-router-hash-link";

export function Footer() {
  return (
    <div className={"footer-config"}>
      <div className={"mainFoot"}>
        <span
          style={{
            fontSize: "58px",
            fontWeight: "600",
            color: "rgba(255, 255, 255, 1)",
          }}
        >
          Start Now
        </span>
        <span
          style={{
            width: "50%",
            fontSize: "30px",
            fontWeight: "400",
            color: "rgba(255, 255, 255, 1)",
            textAlign: "center",
          }}
        >
          그래피툰으로 만들어지는 창의적이고 독창적인 멀티미디어 콘텐츠! 무료
          체험을 통해 아이디어를 현실로 만들고 세상에 공유해보세요.
        </span>
        <Button
          style={{
            fontSize: "28px",
            fontWeight: "600",
            color: "rgba(255, 255, 255, 1)",
          }}
          className={"gradient-button"}
        >
          무료 체험
        </Button>
        <img
          style={{
            position: "absolute",
            right: "80%",
            top: "-70px",
            aspectRatio: "1/1",
            width: "15%",
          }}
          src="../Icons/Group7.png"
          alt=""
        />
        <img
          style={{
            position: "absolute",
            top: "60%",
            right: "75%",
            aspectRatio: "1/1",
            width: "11%",
          }}
          src="../Icons/girl2.png"
          alt=""
        />
        <img
          style={{
            position: "absolute",
            aspectRatio: "1/1",
            width: "11%",
            left: "85%",
            top: "-5%",
          }}
          src="../Icons/girl3.png"
          alt=""
        />
      </div>
      <div className={"foot"}>
        <div
          style={{
            position: "relative",
            width: "150px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: "90px",
            marginTop: "10px",
          }}
        >
          <div>
            <Link to={"#nav-config"} smooth>
              <img
                style={{
                  aspectRatio: "1/1",
                  width: "90%",
                  height: "90%",
                  marginTop: "15px",
                  cursor: "pointer",
                }}
                src="../Icons/logoGrap.png"
                alt=""
              />
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "15px",
              alignItems: "end",
              height: "60%",
              marginBottom: "5px",
            }}
          >
            <a href="https://www.youtube.com/">
              <img src="../Icons/youtube.png" alt="" />
            </a>
            <a href="">
              <img src="../Icons/instagram.png" alt="" />
            </a>
          </div>
          <span
            style={{
              fontSize: "20px",
              fontWeight: "500",
              color: "rgba(95, 95, 95, 1)",
            }}
          >
            대한민국
          </span>
        </div>
        <div
          style={{
            width: "70%",
            height: "80%",
            marginLeft: "70px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              height: "80%",
              width: "150px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <span
              style={{
                fontSize: "26px",
                fontWeight: "600",
                color: "rgba(17, 116, 237, 0.95)",
              }}
            >
              서비스
            </span>
            <span className={"text"}>특징</span>
            <span className={"text"}>가격</span>
            <span className={"text"}>블로그</span>
          </div>
          <div
            style={{
              height: "80%",
              width: "150px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <span
              style={{
                fontSize: "26px",
                fontWeight: "600",
                color: "rgba(17, 116, 237, 0.95)",
              }}
            >
              회사
            </span>
            <span className={"text"}>소개</span>
            <span className={"text"}>프로그램</span>
            <span className={"text"}>문의</span>
          </div>
          <div
            style={{
              height: "80%",
              width: "150px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <span
              style={{
                fontSize: "26px",
                fontWeight: "600",
                color: "rgba(17, 116, 237, 0.95)",
              }}
            >
              지원
            </span>
            <span className={"text"}>개인정보</span>
            <span className={"text"}>이용약관</span>
            <span className={"text"}>쿠키</span>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "1px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            position: "absolute",
            fontSize: "20px",
            fontWeight: "500",
            color: "rgba(95, 95, 95, 1)",
            bottom: "25px",
          }}
        >
          Copyright © 2024{" "}
          <a
            style={{ textDecoration: "none" }}
            href="https://www.graphytoon.com/"
          >
            Melaka
          </a>{" "}
          Corp. All rights reserved.
        </span>
      </div>
    </div>
  );
}
