import React, { useEffect, useState } from "react";
import TopImg2 from "../assets/img/top2.png";
import Plus from "../assets/img/plus.svg";
import Minus from "../assets/img/minus.svg";
import GlassImg from "../assets/img/glass.jpg";
import styled from "styled-components";
import { useLocation } from "react-router";
import { dbService } from "myBase";
import { numberTypeAnnotation } from "@babel/types";

const Ticket = () => {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [score3, setScore3] = useState(0);
  const [score4, setScore4] = useState(0);
  const [score5, setScore5] = useState(0);
  const [score6, setScore6] = useState(0);
  const [score7, setScore7] = useState(0);
  const [score8, setScore8] = useState(0);
  const score = [
    score1,
    score2,
    score3,
    score4,
    score5,
    score6,
    score7,
    score8,
  ];
  const setScore = [
    setScore1,
    setScore2,
    setScore3,
    setScore4,
    setScore5,
    setScore6,
    setScore7,
    setScore8,
  ];
  const [isAdmin, setIsAdmin] = useState(false);
  const loc = useLocation().pathname;

  const plus = (index: number) => {
    setScore[index](score[index] + 1);
  };

  const minus = (index: number) => {
    setScore[index](score[index] - 1);
  };

  // const inputDB = async () => {
  //
  // };

  type DocType = {
    score1: number;
  };

  const init = (docData: any) => {
    setScore1(docData.score1);
    setScore2(docData.score2);
    setScore3(docData.score3);
    setScore4(docData.score4);
    setScore5(docData.score5);
    setScore6(docData.score6);
    setScore7(docData.score7);
    setScore8(docData.score8);
  };

  useEffect(() => {
    if (loc.includes("admin")) {
      setIsAdmin(true);
    }
    if (
      score1 === 0 &&
      score2 === 0 &&
      score3 === 0 &&
      score4 === 0 &&
      score5 === 0 &&
      score6 === 0 &&
      score7 === 0 &&
      score8 === 0
    ) {
      dbService
        .collection("peter")
        .doc("team")
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log(doc.data());
            init(doc.data());
          }
        })
        .catch((error) => {});
    }
  }, []);

  useEffect(() => {
    if (
      score1 !== 0 ||
      score2 !== 0 ||
      score3 !== 0 ||
      score4 !== 0 ||
      score5 !== 0 ||
      score6 !== 0 ||
      score7 !== 0 ||
      score8 !== 0
    ) {
      dbService
        .collection("peter")
        .doc("team")
        .update({
          score1: score[0],
          score2: score[1],
          score3: score[2],
          score4: score[3],
          score5: score[4],
          score6: score[5],
          score7: score[6],
          score8: score[7],
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [score1, score2, score3, score4, score5, score6, score7, score8]);

  return (
    <>
      <Top src={TopImg2} />
      <Box>
        {teamList.map((elem, index) => (
          <Team key={index}>
            <Title>
              {index + 1}조 ({elem})
            </Title>
            <SmallBox>
              <Glass src={GlassImg} />
              <Text>x{score[index]}</Text>
            </SmallBox>
            {isAdmin && (
              <LowBox>
                <Img src={Minus} onClick={() => minus(index)} />
                <Img2 src={Plus} onClick={() => plus(index)} />
              </LowBox>
            )}
          </Team>
        ))}
      </Box>
    </>
  );
};

export default Ticket;

const Top = styled.img`
  width: 100%;
`;

const Glass = styled.img`
  width: 40px;
  margin-left: 12px;
`;

const Box = styled.div`
  width: 100%;
  padding-left: calc(50% - 360px / 2 + 30px);
  padding-right: calc(50% - 360px / 2 + 30px);
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const SmallBox = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
`;

const LowBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Team = styled.div`
  width: 140px;
  height: 200px;
`;

const Title = styled.p`
  width: 100%;
  margin-top: 0px;
  margin-left: 18px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;

  text-align: left;

  color: #2d3748;
`;

const Text = styled.p`
  margin-top: 30px;
  margin-left: 12px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 40px;

  color: #2d3748;
`;

const Img = styled.img`
  width: 30px;
  margin-left: 45px;
`;

const Img2 = styled.img`
  width: 30px;
  margin-left: 10px;
`;

const teamList = [
  "오예진",
  "최예담",
  "배성호",
  "배기현",
  "성예빈",
  "안수현",
  "남시연",
  "송원섭",
];
