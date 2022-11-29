import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Happy from "../assets/animation/happy.gif";
import { motion } from "framer-motion";

const Gift = () => {
  const navigate = useNavigate();
  const [isText, setIsText] = useState(false);

  useEffect(() => {
    onText();
  }, []);

  const onText = () => {
    setTimeout(() => {
      setIsText(true);
      setTimeout(() => {
        navigate("/join");
      }, 4000);
    }, 1500);
  };

  return (
    <>
      <Box>
        <Img src={Happy} />
        {isText && (
          <Text variants={textVariants} initial="init" animate="end">
            아니 이런 상품을?!
            <br />
            네버랜드는 어떻게 가야하지?
          </Text>
        )}
      </Box>
    </>
  );
};

export default Gift;

const Box = styled.div`
  padding-left: calc(50% - 360px / 2 + 20px);
  padding-right: calc(50% - 360px / 2 + 20px);
`;

const Img = styled.img`
  width: 360px;
  margin-top: 50px;
`;

const Text = styled(motion.div)`
  width: 100%;
  margin-top: 0px;
  padding-left: calc(50% - 360px / 2 + 48px);

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 40px;

  color: #000000;
`;

const textVariants = {
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
