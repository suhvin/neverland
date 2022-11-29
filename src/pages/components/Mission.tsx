import React from "react";
import styled from "styled-components";

type Props = {
  setIsTalk: (value: boolean) => void;
  setIsAnswer: (value: boolean) => void;
  setIsMission: (value: boolean) => void;
  setIsEnd: (value: boolean) => void;
};

const Mission = ({ setIsTalk, setIsAnswer, setIsMission, setIsEnd }: Props) => {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("hello");
    const {
      currentTarget: { name },
    } = event;
    if (name === "btn1") {
      setIsEnd(true);
    } else if (name === "btn2") {
      setIsMission(true);
    }

    setIsAnswer(true);
    setTimeout(() => {
      setIsTalk(true);
    }, 1500);
  };

  return (
    <>
      <Box>
        <SmallBox>
          <Btn onClick={onClick} name="btn1">
            <Text>미안..</Text>
          </Btn>
          <Btn onClick={onClick} name="btn2">
            <Text>물론이지!</Text>
          </Btn>
        </SmallBox>
      </Box>
    </>
  );
};

export default Mission;

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
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Btn = styled.button`
  height: 32px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 999px;
  margin-top: 4px;

  border: 1px solid #a0aec0;
  background: white;
`;

const Text = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: #2d3748;
`;
