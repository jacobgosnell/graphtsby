import React, { useState } from "react";
import gsap from "gsap";
import { css } from "@emotion/core";

// Components
import styled from "@emotion/styled";
import Container from "../layouts/Container";
import Grid from "../layouts/Grid";
import TitleMain from "../_base/titles/TitleMain";
import TextMain from "../_base/text/TextMain";
import ToggleTabs from "../toggles/ToggleTabs";

// Images
import ImgContentToggle1 from "../_images/_home/content-toggle/ImgContentToggle1";
import ImgContentToggle2 from "../_images/_home/content-toggle/ImgContentToggle2";
import ImgContentToggle3 from "../_images/_home/content-toggle/ImgContentToggle3";
import ImgContentToggleThumb1 from "../_images/_home/content-toggle-thumbs/ImgContentToggleThumb1";
import ImgContentToggleThumb2 from "../_images/_home/content-toggle-thumbs/ImgContentToggleThumb2";
import ImgContentToggleThumb3 from "../_images/_home/content-toggle-thumbs/ImgContentToggleThumb3";
import ToggleImageTab from "../toggles/ToggleTabImage";
import SVGGoldCrown from "../_images/features/SVGGoldCrown";

const Background = styled.section`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0;
`;

const Content = styled.section`
  margin: 0 auto;
`;

const data = [
  {
    title: "Wear Your Crown",
    imageBackground: <ImgContentToggle1 />,
    content: [
      `We get it... It’s hard sometimes to feel and embrace the truth
      that we are valued and made to shine with eachother by using the
      gifts we have from a walk thats uniquely our own. We need to
      remember from where that vestige of glory comes, and come together
      whenever we see it fade. So be encouraged and let that light shine
      out in the world, wear your crown!`
    ],
    imageThumb: <ImgContentToggleThumb1 />,
    color: ""
  },
  {
    title: "Our Mission",
    imageBackground: <ImgContentToggle2 />,
    content: [
      `We get it... It’s hard sometimes to feel and embrace the truth
      that we are valued and made to shine with eachother by using the
      gifts we have from a walk thats uniquely our own. We need to
      remember from where that vestige of glory comes, and come together
      whenever we see it fade. So be encouraged and let that light shine
      out in the world, wear your crown!`
    ],
    imageThumb: <ImgContentToggleThumb2 />,
    color: "#ffffff"
  },
  {
    title: "The Brand",
    imageBackground: <ImgContentToggle3 />,
    content: [
      `We get it... It’s hard sometimes to feel and embrace the truth
      that we are valued and made to shine with eachother by using the
      gifts we have from a walk thats uniquely our own. We need to
      remember from where that vestige of glory comes, and come together
      whenever we see it fade. So be encouraged and let that light shine
      out in the world, wear your crown!`
    ],
    imageThumb: <ImgContentToggleThumb3 />,
    color: ""
  }
];

export default () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const clickSetIndex = index => {
    if (!loading) {
      gsap.to(`#content-toggle-background-${activeIndex}`, 1, {
        css: { opacity: 0 }
      });
      gsap.to(`#content-toggle-background-${index}`, 1, {
        delay: 0.5,
        css: { opacity: 1 }
      });
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 500);
      setActiveIndex(index);
    }
  };

  return (
    <Container vCenter hCenter height="100vh" fluid background="#ffffff">
      <Grid cssProp="z-index: 1; padding-top: 10vh;" container>
        <Grid item xxs={4} xxsOffset={4}>
          <Content>
            <SVGGoldCrown cssProp="display: block; position: relative; margin: 0 auto;" />
            <TitleMain
              css={css`
                text-align: center;
                ${data[activeIndex].color !== ""
                  ? `color: ${data[activeIndex].color}`
                  : ""}
              `}
            >
              {data[activeIndex].title}
            </TitleMain>
            {data[activeIndex].content.map(
              item =>
                (typeof item === "string" && (
                  <TextMain
                    css={css`
                      max-width: 90%;
                      margin: 0 auto;
                      ${data[activeIndex].color !== ""
                        ? `color: ${data[activeIndex].color}`
                        : ""}
                    `}
                  >
                    {item}
                  </TextMain>
                )) ||
                (typeof item !== "string" && item)
            )}
          </Content>
        </Grid>

        <Grid item xxs={3} xxsOffset={9}>
          <ToggleTabs
            toggles={[
              data.map((item, i) => (
                <ToggleImageTab
                  image={item.imageThumb}
                  text={item.title}
                  onClick={clickSetIndex}
                  thisIndex={i}
                  activeIndex={activeIndex}
                />
              ))
            ]}
          />
        </Grid>
      </Grid>

      {data.map((item, i) => (
        <Background
          id={`content-toggle-background-${i}`}
          css={css`
            opacity: ${i === 0 ? 1 : 0};
          `}
        >
          {item.imageBackground}
        </Background>
      ))}
    </Container>
  );
};
