import React from "react";
import styled from "styled-components";
import FairyIcon from "assets/img/fairy.png";
import { motion } from "framer-motion";

type Props = {
  w: number;
  h: number;
  text: string[];
  pw: number;
  ph: number;
};

const FirstTalkGirl = ({ w, h, text, pw, ph }: Props) => {
  return (
    <>
      <Box variants={talkVariants} initial="init" animate="end">
        <Fairy src={FairyIcon} />
        <Talk w={w} h={h}>
          <Triangle />
          <Rectangle pw={pw} ph={ph}>
            {text.map((content, index) => (
              <Text key={index}>{content}</Text>
            ))}
          </Rectangle>
        </Talk>
      </Box>
    </>
  );
};

export default FirstTalkGirl;

const Box = styled(motion.div)`
  padding-left: calc(50% - 360px / 2 + 36px);
  padding-right: calc(50% - 360px / 2 + 36px);
  display: flex;
  flex-direction: row;
`;

const Fairy = styled.img`
  width: 36px;
  height: 36px;
`;

const Talk = styled.div<{ w: number; h: number }>`
  width: ${(props) => props.w}px;
  height: ${(props) => props.h}px;
  margin-left: 6px;
  display: flex;
  flex-direction: row;
`;
const Triangle = styled.div`
  width: 0;
  height: 0;
  border-bottom: 6px solid transparent;
  border-top: 6px solid transparent;
  border-left: 6px solid transparent;
  border-right: 6px solid #edf2f7;
  margin-top: 7px;
`;

const Rectangle = styled.div<{ pw: number; ph: number }>`
  width: 100%;
  height: 100%;
  background: #edf2f7;
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

  color: #718096;
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
