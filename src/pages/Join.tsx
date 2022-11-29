import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import FirstTalkGirl from "./components/FirstTalkGirl";
import Reply from "./components/Reply";
import FirstTalkUser from "./components/FirstTalkUser";
import Mission from "./components/Mission";
import Party from "./components/Party";
import { dbService } from "myBase";

const Join = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [isMission, setIsMission] = useState(false);
  const [isParty1, setIsParty1] = useState(false);
  const [isParty2, setIsParty2] = useState(false);

  const [isTalk1, setIsTalk1] = useState(true);
  const [isTalk2, setIsTalk2] = useState(false);
  const [isTalk3, setIsTalk3] = useState(false);
  const [isTalk4, setIsTalk4] = useState(false);

  const [isAnswer1, setIsAnswer1] = useState(false);
  const [isAnswer2, setIsAnswer2] = useState(false);
  const [isAnswer3, setIsAnswer3] = useState(false);

  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (isEnd && name !== "") {
      inputDB();
      if (isMission) {
        navigate("/start");
      }
    }
  }, [isEnd]);

  const inputDB = async () => {
    dbService
      .collection("peter")
      .doc(name)
      .set({
        mission: isMission,
        name: name,
        party1: isParty1,
        party2: isParty2,
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const bottomComponent = () => {
    if (isTalk1 && !isTalk2) {
      return (
        <Reply
          setIsTalk={setIsTalk2}
          setIsAnswer={setIsAnswer1}
          name={name}
          setName={setName}
        />
      );
    } else if (isTalk2 && !isTalk3) {
      return (
        <Mission
          setIsTalk={setIsTalk3}
          setIsAnswer={setIsAnswer2}
          setIsMission={setIsMission}
          setIsEnd={setIsEnd}
        />
      );
    } else if (isTalk3 && isMission) {
      return (
        <Party
          setTalk={setIsTalk4}
          setIsAnswer={setIsAnswer3}
          setIsParty1={setIsParty1}
          setIsParty2={setIsParty2}
          setIsEnd={setIsEnd}
        />
      );
    }
  };

  return (
    <Box>
      <div className="margin80" />
      {isTalk1 && (
        <FirstTalkGirl
          w={200}
          h={56}
          text={["안녕! 내가 알려줄게!", "너는 이름이 어떻게 돼??"]}
          pw={25}
          ph={7}
        />
      )}

      <div className="margin24" />
      {isAnswer1 && (
        <FirstTalkUser w={100} h={32} text={[name]} pw={0} ph={6} />
      )}
      <div className="margin32" />
      <div className="margin24" />
      {isTalk2 && (
        <FirstTalkGirl
          w={220}
          h={32}
          text={[name + " 안녕! 네버랜드 갈거지?"]}
          pw={20}
          ph={6}
        />
      )}
      <div className="margin24" />
      {isAnswer2 && (
        <FirstTalkUser
          w={120}
          h={32}
          text={isMission ? ["물론이지!"] : ["미안.."]}
          pw={0}
          ph={6}
        />
      )}
      <div className="margin32" />
      <div className="margin24" />
      {isTalk3 &&
        (isMission ? (
          <FirstTalkGirl
            w={184}
            h={32}
            text={["파티에는 참석할거야?"]}
            pw={25}
            ph={6}
          />
        ) : (
          <FirstTalkGirl
            w={166}
            h={32}
            text={["어쩔 수 없지 ㅜㅜ"]}
            pw={30}
            ph={6}
          />
        ))}
      <div className="margin24" />
      {isAnswer3 && (
        <FirstTalkUser
          w={190}
          h={32}
          text={
            isParty2
              ? ["뒤풀이 1,2차 둘 다 갈게!"]
              : isParty1
              ? ["뒤풀이 1차만 가려고!"]
              : ["그날 뒤풀이는 힘들겠다.."]
          }
          pw={0}
          ph={6}
        />
      )}
      <div className="margin32" />
      <div className="margin24" />
      {isTalk4 && (
        <FirstTalkGirl
          w={190}
          h={56}
          text={["알았어! 내가 네버랜드로", "데려다줄게 😎"]}
          pw={27}
          ph={7}
        />
      )}

      {bottomComponent()}
    </Box>
  );
};

export default Join;

const Box = styled.div`
  height: 100vh;
  padding-left: calc(50% - 360px / 2 + 48px);
  padding-right: calc(50% - 360px / 2 + 48px);
  position: relative;
`;
