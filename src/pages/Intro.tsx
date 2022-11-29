import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { Input } from "@chakra-ui/react";
import SearchIcon from "../assets/img/search.svg";
import { motion } from "framer-motion";

const Intro = () => {
  const navigate = useNavigate();

  const [word, setWord] = useState("");
  const [isOk, setIsOk] = useState(false);
  const [isText, setIsText] = useState(false);

  const [fontColor, setFontColor] = useState("#2D3748");
  const [borderColor, setBorderColor] = useState("#A0AEC0");

  // const onChange = (event: any) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setWord(value);
  // };

  useEffect(() => {
    setTimeout(() => {
      setWord("w");
      setTimeout(() => {
        setWord("ww");
        setTimeout(() => {
          setWord("www");
          setTimeout(() => {
            setWord("www.");
            setTimeout(() => {
              setWord("www.n");
              setTimeout(() => {
                setWord("www.ne");
                setTimeout(() => {
                  setWord("www.nev");
                  setTimeout(() => {
                    setWord("www.neve");
                    setTimeout(() => {
                      setWord("www.never");
                      setTimeout(() => {
                        setIsOk(true);
                        onText();
                      }, 0);
                    }, 400);
                  }, 400);
                }, 400);
              }, 400);
            }, 400);
          }, 200);
        }, 400);
      }, 400);
    }, 1500);
  }, []);

  const onText = () => {
    setTimeout(() => {
      setIsText(true);
      onSelect();
    }, 1000);
  };

  const onSelect = () => {
    setTimeout(() => {
      setFontColor("#4EC8C2");
      setBorderColor("#4EC8C2");
      // setFontColor("#319795");
      // setBorderColor("#319795");
      offSelect();
    }, 2500);
  };

  const offSelect = () => {
    setTimeout(() => {
      setFontColor("#2D3748");
      setBorderColor("#A0AEC0");
      setTimeout(() => {
        navigate("/gift");
      }, 1100);
    }, 800);
  };

  return (
    <>
      <Box>
        <SmallBox>
          <Search variant="filled" value={word} />
          <Icon src={SearchIcon} />
        </SmallBox>
        {isOk && (
          <Neverland
            variant="flushed"
            w={230}
            value="    www.neverland.com"
            color={fontColor}
            borderColor={borderColor}
          />
        )}
        {isText && (
          <Text variants={textVariants} initial="init" animate="end">
            네버랜드?
            <br />한 번 클릭해볼까?
          </Text>
        )}
      </Box>
    </>
  );
};

export default Intro;

const Box = styled.div`
  padding-left: calc(50% - 360px / 2 + 48px);
  padding-right: calc(50% - 360px / 2 + 48px);
`;
const SmallBox = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: row;
`;
const Search = styled(Input)`
  height: 35px;
  color: #2d3748;
`;
const Neverland = styled(Input)`
  width: 200px;
  height: 35px;
  margin-top: 7px;
`;

const Icon = styled.img`
  height: 25px;
  margin-left: 10px;
  margin-top: 8px;
`;

const Text = styled(motion.div)`
  width: 100%;
  margin-top: 100px;
  padding-left: calc(50% - 360px / 2 + 58px);

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
    scale: 1,
    x: -100,
  },
  end: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 3,
      // bounce: 0.1,
    },
  },
};
