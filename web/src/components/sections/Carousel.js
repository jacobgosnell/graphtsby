import React, { useState, useEffect, useRef } from "react";
import { css } from "@emotion/core";
import gsap from "gsap";

// Components
import Container from "../layouts/Container";

// Images
import ImgBackgroundLogoWallpaper from "../_images/backgrounds/ImgBackgroundLogoWallpaper";
import ImgFeaturePineappleLarge from "../_images/features/ImgFeaturePineappleLarge";
import CardToggleContent from "../cards/CardToggleContent";
import ImgCarouselBackground2 from "../_images/_home/carousel-backgrounds/ImgCarouselBackground2";
import ImgCarouselBackground1 from "../_images/_home/carousel-backgrounds/ImgCarouselBackground1";
import ImgCarouselBackground3 from "../_images/_home/carousel-backgrounds/ImgCarouselBackground3";
import ImgCarouselThumb3 from "../_images/_home/carousel-thumbs/ImgCarouselThumb3";
import ImgCarouselThumb2 from "../_images/_home/carousel-thumbs/ImgCarouselThumb2";
import ImgCarouselThumb1 from "../_images/_home/carousel-thumbs/ImgCarouselThumb1";
import TitleMain from "../_base/titles/TitleMain";
import { colors } from "../../configs/_configSite";
import TextMain from "../_base/text/TextMain";

const data = [
  {
    title: "Know",
    content: [
      "Let knowledge become belief and fill the very being of your soul. When we believe the truth of who we are and the destiny we have, we are an unwavering banner that will not bend to the voices that seek to tear us down. Believe and be secure in the life that is given for you."
    ],
    imageBackground: (
      <ImgCarouselBackground1 id="carousel-background-image-1" />
    ),
    imageThumb: <ImgCarouselThumb1 />
  },
  {
    title: "Believe",
    content: [
      "Let knowledge become belief and fill the very being of your soul. When we believe the truth of who we are and the destiny we have, we are an unwavering banner that will not bend to the voices that seek to tear us down. Believe and be secure in the life that is given for you."
    ],
    imageBackground: (
      <ImgCarouselBackground2 id="carousel-background-image-2" />
    ),
    imageThumb: <ImgCarouselThumb2 />
  },
  {
    title: "Fullfill",
    content: [
      "Let knowledge become belief and fill the very being of your soul. When we believe the truth of who we are and the destiny we have, we are an unwavering banner that will not bend to the voices that seek to tear us down. Believe and be secure in the life that is given for you."
    ],
    imageBackground: (
      <ImgCarouselBackground3 id="carousel-background-image-3" />
    ),
    imageThumb: <ImgCarouselThumb3 />
  }
];

function useStateRef(initialValue) {
  const [value, setValue] = useState(initialValue);

  const ref = useRef(value);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return [value, setValue, ref];
}

export default () => {
  const [ease] = useState("power1.inOut");
  const [loading, setLoading] = useState(false);
  const [locations, setLocations] = useState([0, 0, 0]);
  const [order, setOrder, orderRef] = useStateRef([
    "#carousel-item-0",
    "#carousel-item-1",
    "#carousel-item-2"
  ]);

  const clickSendToFront = e => {
    if (loading) return;
    const targetId = `#${e.currentTarget.id}`;
    order.forEach((id, i) => {
      if (id === targetId) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1050);

        if (i === 0) {
          // Right to left
          gsap.to(order[2], {
            duration: 0,
            css: { zIndex: 4 }
          });
          gsap.to(order[2], {
            duration: 0.5,
            scale: 0.5,
            ease
          });
          gsap.to(order[2], {
            duration: 0.5,
            ease,
            css: { transformOrigin: "right" }
          });
          gsap.to(order[2], {
            duration: 0.5,
            delay: 0.5,
            scale: 0.7,
            ease
          });
          gsap.to(order[2], {
            duration: 1,
            x: locations[0],
            ease
          });
          gsap.to(order[2], {
            duration: 0.5,
            delay: 0.5,
            ease,
            css: { transformOrigin: "left" }
          });

          // Left to center
          gsap.to(order[0], {
            duration: 0,
            css: { zIndex: 6 }
          });
          gsap.to(order[0], {
            duration: 1,
            x: locations[1],
            y: 0,
            scale: 1,
            ease
          });
          gsap.to(order[0], {
            duration: 0,
            delay: 0.2,
            css: { zIndex: 7 }
          });
          gsap.to(order[0], {
            duration: 0,
            delay: 1,
            css: { cursor: "unset" }
          });
          gsap.to(`${order[0]}-background-image`, {
            duration: 0,
            delay: 1,
            css: { pointerEvents: "none" },
            ease
          });
          gsap.to(`${order[0]}-background-image`, {
            duration: 1,
            delay: 1,
            css: {
              opacity: 0,
              transformOrigin: "center",
              pointerEvents: "none"
            },
            ease
          });

          // Center to Right
          gsap.to(order[1], {
            duration: 1,
            x: locations[2],
            scale: 0.7,
            ease
          });
          gsap.to(`${order[1]}`, {
            duration: 0,
            css: { transformOrigin: "right" }
          });
          gsap.to(`${order[1]}-background-image`, {
            duration: 1,
            ease,
            css: { opacity: 1 }
          });
          gsap.to(order[1], {
            duration: 0,
            delay: 0.5,
            css: { zIndex: 6 }
          });
          gsap.to(order[1], {
            duration: 0,
            delay: 0.8,
            css: { zIndex: 4 }
          });
          gsap.to(order[1], {
            duration: 0,
            css: { cursor: "pointer" }
          });
          gsap.to(`${order[1]}-background-image`, {
            duration: 0,
            css: { pointerEvents: "normal" },
            ease
          });

          setOrder([order[2], order[0], order[1]]);
        }

        if (i === 1) {
          // Do Nothing
        }

        if (i === 2) {
          // Center to left
          gsap.to(`${order[1]}`, {
            duration: 0,
            css: { transformOrigin: "left" },
            ease
          });
          gsap.to(order[1], {
            duration: 1,
            x: locations[0],
            scale: 0.7,
            ease
          });
          gsap.to(`${order[1]}-background-image`, {
            duration: 1,
            css: { opacity: 1 },
            ease
          });
          gsap.to(order[1], {
            duration: 0,
            delay: 0.5,
            css: { zIndex: 6 }
          });
          gsap.to(order[1], {
            duration: 0,
            delay: 0.8,
            css: { zIndex: 4 }
          });
          gsap.to(order[1], {
            duration: 0,
            delay: 1,
            css: { cursor: "pointer" }
          });
          gsap.to(`${order[1]}-background-image`, {
            duration: 0,
            delay: 1,
            css: { pointerEvents: "normal" },
            ease
          });

          // Right to center
          gsap.to(order[2], {
            duration: 1,
            x: locations[1],
            y: 0,
            scale: 1,
            ease
          });
          gsap.to(order[2], {
            duration: 0,
            delay: 0.2,
            css: { zIndex: 6 }
          });
          gsap.to(order[2], {
            duration: 0,
            delay: 0.5,
            css: { zIndex: 7 }
          });
          gsap.to(`${order[2]}-background-image`, {
            duration: 1,
            delay: 1,
            css: { opacity: 0 },
            ease
          });
          gsap.to(order[2], {
            duration: 0,
            css: { cursor: "unset" }
          });
          gsap.to(`${order[2]}-background-image`, {
            duration: 0,
            css: { pointerEvents: "none" },
            ease
          });

          // Left to right
          gsap.to(order[0], {
            duration: 0,
            css: { zIndex: 4 }
          });
          gsap.to(order[0], {
            duration: 0.5,
            scale: 0.5,
            ease
          });
          gsap.to(order[0], {
            duration: 0.5,
            ease,
            css: { transformOrigin: "left" }
          });
          gsap.to(order[0], {
            duration: 1,
            x: locations[2],
            ease
          });
          gsap.to(order[0], {
            duration: 0,
            delay: 0.5,
            ease,
            css: { transformOrigin: "right" }
          });
          gsap.to(order[0], {
            duration: 0.5,
            delay: 0.5,
            scale: 0.7,
            ease
          });

          setOrder([order[1], order[2], order[0]]);
        }
      }
    });
  };

  const initLocations = () => {
    const newLocations = [
      10,
      window.innerWidth / 2 -
        document.querySelector("#carousel-item-1").clientWidth / 2,
      window.innerWidth -
        10 -
        document.querySelector("#carousel-item-2").clientWidth
    ];

    orderRef.current.forEach((id, i) => {
      gsap.to(id, { x: newLocations[i] });
    });

    setLocations(newLocations);
  };

  useEffect(() => {
    initLocations();
    window.addEventListener("resize", () => {
      initLocations();
    });
  }, []);

  return (
    <Container height="100vh" vCenter hCenter fluid background="transparent">
      <ImgBackgroundLogoWallpaper />
      <ImgFeaturePineappleLarge />

      {data.map((d, i) => (
        <CardToggleContent
          id={`carousel-item-${i}`}
          onClick={clickSendToFront}
          cssProp={`
            position: absolute;
            left: 0;
            ${i === 0 ? "transform-origin: left;" : ""}
            ${i === 1 ? "transform-origin: center;" : ""}
            ${i === 2 ? "transform-origin: right;" : ""}

            z-index: ${i !== 1 ? "4" : "7"};
            transform: translateX(${locations[i]}px) ${
            i !== 1 ? "scale(0.7)" : ""
          };`}
        >
          <div
            id={`carousel-item-${i}-background-image`}
            css={css`
              z-index: 1;
              position: absolute;
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              height: 100%;
              ${i === 1 ? "opacity: 0" : ""}
            `}
          >
            {d.imageBackground}
            <TitleMain
              css={css`
                position: absolute;
                grid-column: span 3;
                margin: 0 auto;
                color: ${colors.gold};
              `}
            >
              {d.title}
            </TitleMain>
          </div>
          <div
            css={css`
              position: relative;
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              justify-items: center;
              align-items: center;
              height: 100%;
              width: 100%;
              background: #ffffff;
              box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.6);
            `}
          >
            <div
              css={css`
                box-sizing: border-box;
                grid-column: span 2;
                height: 100%;
                width: 100%;
                padding: 30px;
              `}
            >
              <TitleMain
                css={css`
                  text-align: center;
                `}
              >
                {d.title}
              </TitleMain>
              <TextMain>{d.content}</TextMain>
            </div>
            <div
              css={css`
                position: relative;
                grid-column: span 1;
                height: 100%;
                width: 100%;
              `}
            >
              {d.imageThumb}
            </div>
          </div>
        </CardToggleContent>
      ))}
    </Container>
  );
};
