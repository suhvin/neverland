import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Forest from "../assets/animation/forest.gif";
import Forest3 from "../assets/animation/forest3.gif";
import TopImg from "../assets/img/top.png";
import TopImg2 from "../assets/img/top2.png";
import Pic from "../assets/img/pic.png";
import Music from "../assets/audio/music.mp3";
import { motion } from "framer-motion";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import CustomModal from "./components/CustomModal";

const Start = () => {
  const [isAni, setIsAni] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    let audio = new Audio(Music);
    audio.play();
    onAni();
  }, []);

  const onAni = () => {
    setTimeout(() => {
      setIsAni(false);
    }, 3000);
  };

  const render = () => {
    if (!isAni) {
      return (
        <Div variants={divVariants} initial="init" animate="end">
          <Top src={TopImg2} />
          <SmallBox>
            <Img2 src={Pic} />
            <Text1>Neverland Auction</Text1>
            <Text2>장소 : 웬디의 정원</Text2>
            <Text3>일시 : 2022-10-08 12:45:00</Text3>
            <Text4>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              by 남최조
            </Text4>
          </SmallBox>
          <Btn onClick={onOpen}>Go Neverland</Btn>
          {/* <Text5>Go Neverland 버튼은 금요일에 활성화됩니다!</Text5> */}
        </Div>
      );
    }
  };

  return (
    <>
      <Box>
        {isAni && (
          <Img
            src={Forest3}
            variants={imgVariants}
            initial="init"
            animate="end"
          />
        )}
        {render()}
        <CustomModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      </Box>
    </>
  );
};

export default Start;

const Div = styled(motion.div)``;

const Top = styled.img`
  width: 100%;
`;

const Box = styled.div`
  width: 100%;
  // padding-left: calc(50% - 360px / 2 + 20px);
  // padding-right: calc(50% - 360px / 2 + 20px);
`;

const SmallBox = styled.div`
  width: 260px;
  height: 300px;
  margin-left: calc(50% - 260px / 2);
  margin-top: 50px;
  border: 1px solid #e2e8f0;
`;

const Img = styled(motion.img)`
  width: 100%;
  margin-top: 150px;
`;

const Img2 = styled(motion.img)`
  width: 100%;
`;

const Btn = styled(Button)`
  width: 260px;
  margin-left: calc(50% - 260px / 2);
  margin-top: 20px;
  color: #2d3748;
`;

const Text1 = styled(motion.div)`
  width: 100%;
  margin-top: 20px;
  margin-left: 20px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;

  color: #000000;
`;

const Text2 = styled(motion.div)`
  width: 100%;
  margin-top: 25px;
  margin-left: 20px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;

  color: #000000;
`;
const Text3 = styled(motion.div)`
  width: 100%;
  margin-top: 10px;
  margin-left: 20px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;

  color: #000000;
`;
const Text4 = styled(motion.div)`
  width: 100%;
  margin-top: 27px;
  margin-left: 20px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;

  color: #718096;
`;

const Text5 = styled(motion.div)`
  width: 260px;
  margin-top: 10px;
  margin-left: calc(50% - 260px / 2);
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 10px;

  text-align: right;

  color: #718096;
`;

const imgVariants = {
  init: {
    opacity: 1,
    scale: 1,
    x: 0,
  },
  end: {
    opacity: 0,
    scale: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 1,
      duration: 5,
      // bounce: 0.5,
    },
  },
};

const divVariants = {
  init: {
    opacity: 0,
    scale: 1,
    x: 0,
  },
  end: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0,
      duration: 3,
      // bounce: 0.5,
    },
  },
};
