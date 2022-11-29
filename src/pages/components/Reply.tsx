import React from "react";
import styled from "styled-components";
import { Input } from "@chakra-ui/react";
import Airplane from "assets/img/airplane.svg";

type Props = {
  setIsTalk: (value: boolean) => void;
  setIsAnswer: (value: boolean) => void;
  name: string;
  setName: (value: string) => void;
};

const Reply = ({ setIsTalk, setIsAnswer, name, setName }: Props) => {
  const start = () => {
    if (name !== "") {
      setIsAnswer(true);
      setTimeout(() => {
        setIsTalk(true);
      }, 1500);
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setName(value);
  };

  return (
    <>
      <Box>
        <SmallBox>
          <Input
            className="text-400-14"
            w="208px"
            h="32px"
            onChange={onChange}
            textAlign="center"
            borderColor="#A0AEC0"
          />
          <BtnAirplane src={Airplane} onClick={start} />
        </SmallBox>
      </Box>
    </>
  );
};

export default Reply;

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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const BtnAirplane = styled.img`
  width: 24px;
  height: 24px;
  margin-top: 4px;
`;
