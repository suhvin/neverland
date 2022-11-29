import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Profile from "assets/img/profile.svg";

type Props = {
  w: number;
  h: number;
  text: string[];
  pw: number;
  ph: number;
};

const FirstTalkUser = ({ w, h, text, pw, ph }: Props) => {
  return (
    <>
      <Box variants={talkVariants} initial="init" animate="end">
        <Talk w={w} h={h}>
          <Rectangle pw={pw} ph={ph}>
            {text.map((content, index) => (
              <Text key={index}>{content}</Text>
            ))}
          </Rectangle>
          <Triangle />
        </Talk>
        <User src={Profile} />
      </Box>
    </>
  );
};

export default FirstTalkUser;

const Box = styled(motion.div)`
  padding-left: calc(50% - 360px / 2 + 36px);
  padding-right: calc(50% - 360px / 2 + 36px);
  display: flex;
  flex-direction: row;
  float: right;
`;

const User = styled.img`
  width: 32px;
  height: 32px;
`;

const Talk = styled.div<{ w: number; h: number }>`
  width: ${(props) => props.w}px;
  height: ${(props) => props.h}px;
  margin-right: 6px;
  display: flex;
  flex-direction: row;
`;
const Triangle = styled.div`
  width: 0;
  height: 0;
  border-bottom: 6px solid transparent;
  border-top: 6px solid transparent;
  border-left: 6px solid #e7fffa;
  border-right: 6px solid transparent;
  margin-top: 7px;
`;

const Rectangle = styled.div<{ pw: number; ph: number }>`
  width: 100%;
  height: 100%;
  background: #e7fffa;
  border-radius: 8px;
  padding-left: ${(props) => props.pw}px;
  padding-top: ${(props) => props.ph}px;
`;

const Text = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;

  color: #21595c;

  text-align: center;
`;

const talkVariants = {
  init: {
    opacity: 0,
    scale: 0.5,
    x: 0,
  },
  end: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 2,
      bounce: 0.5,
    },
  },
};
