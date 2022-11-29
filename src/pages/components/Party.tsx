import React from "react";
import styled from "styled-components";

type Props = {
  setTalk: (value: boolean) => void;
  setIsAnswer: (value: boolean) => void;
  setIsParty1: (value: boolean) => void;
  setIsParty2: (value: boolean) => void;
  setIsEnd: (value: boolean) => void;
};

const Party = ({
  setTalk,
  setIsAnswer,
  setIsParty1,
  setIsParty2,
  setIsEnd,
}: Props) => {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("hello");
    const {
      currentTarget: { name },
    } = event;
    if (name === "btn1") {
    } else if (name === "btn2") {
      setIsParty1(true);
    } else if (name === "btn3") {
      setIsParty1(true);
      setIsParty2(true);
    }

    setIsAnswer(true);
    setTimeout(() => {
      setTalk(true);
      setTimeout(() => {
        setIsEnd(true);
      }, 2000);
    }, 1500);
  };

  return (
    <>
      <Box>
        <SmallBox>
          <Btn onClick={onClick} name="btn1">
            <Text>힘들어</Text>
          </Btn>
          <Btn onClick={onClick} name="btn2">
            <Text>뒤풀이 1차만</Text>
          </Btn>
          <Btn onClick={onClick} name="btn3">
            <Text>1,2차 둘다!</Text>
          </Btn>
        </SmallBox>
      </Box>
    </>
  );
};

export default Party;

const Box = styled.div`
  width: 264px;
  position: absolute;
  height: 100px;
  bottom: 0px;
`;

const SmallBox = styled.div`
  width: 100%;
  height: 32px;
  margin-top: 4px;
  padding-left: 0px;
  padding-right: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Btn = styled.button`
  height: 32px;
  padding-left: 14px;
  padding-right: 14px;
  border-radius: 999px;
  margin-top: 4px;

  border: 1px solid #a0aec0;
  background: white;
`;

const Text = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  color: #2d3748;
`;
