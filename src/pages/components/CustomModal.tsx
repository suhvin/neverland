import { useDisclosure } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import React, { useState } from "react";
import styled from "styled-components";

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const CustomModal = ({ isOpen, onOpen, onClose }: Props) => {
  const [value, setValue] = useState("");
  const [name, setName] = useState("김드스");
  const [team, setTeam] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
    setName(event.target.value);
    setTeam(event.target.value.slice(4, 7));
  };

  const onClickButton = () => {
    if (name !== "김드스" && team !== "") {
      onClose();
      window.open(teamObj[team], "_blank");
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w={290} mt={200}>
          <ModalHeader>Enter your name</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Select placeholder="김드스" value={value} onChange={handleChange}>
              {nameList.map((elem, index) => (
                <option key={index} value={elem}>
                  {elem[0]}
                </option>
              ))}
            </Select>
          </ModalBody>

          <ModalFooter>
            <Button size="sm" mr={1} onClick={onClickButton}>
              Join Us
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomModal;

const nameList = [
  ["강인경", "배성호"],
  ["곽선호", "송원섭"],
  ["곽주은", "배기현"],
  ["권예린", "남시연"],
  ["김동조", "배성호"],
  ["김동희", "안수현"],
  ["김미정", "오예진"],
  ["김수빈", "오예진"],
  ["김찬희", "배기현"],
  ["나강문", "최예담"],
  ["남광민", "최예담"],
  ["류채원", "성예빈"],
  ["박경랑", "송원섭"],
  ["박나연", "최예담"],
  ["박성인", "배성호"],
  ["박성제", "배성호"],
  ["박성준", "성예빈"],
  ["박소영", "오예진"],
  ["박소정", "배기현"],
  ["박혜신", "성예빈"],
  ["서승우", "남시연"],
  ["손주완", "송원섭"],
  ["송서현", "성예빈"],
  ["신연우", "송원섭"],
  ["신현민", "남시연"],
  ["안희정", "배성호"],
  ["오원준", "오예진"],
  ["유동하", "배기현"],
  ["유서진", "남시연"],
  ["유재학", "최예담"],
  ["유채리", "최예담"],
  ["윤영준", "배기현"],
  ["이상민", "남시연"],
  ["이소정", "안수현"],
  ["이용진", "송원섭"],
  ["이윤아", "안수현"],
  ["이재원", "성예빈"],
  ["이준복", "안수현"],
  ["이채원", "송원섭"],
  ["장다은", "오예진"],
  ["전세환", "안수현"],
  ["전지원", "최예담"],
  ["정대철", "오예진"],
  ["정채영", "성예빈"],
  ["차유진", "최예담"],
  ["최경서", "배기현"],
  ["최돈학", "안수현"],
  ["최선우", "배성호"],
  ["홍세인", "오예진"],
  ["황새린", "남시연"],
];

type TeamObjType = {
  [index: string]: string;
};

const teamObj: TeamObjType = {
  오예진: "https://open.kakao.com/o/gYt7S3Fe",
  최예담: "https://open.kakao.com/o/glHqYgGe",
  배성호: "https://open.kakao.com/o/g9y0diGe",
  배기현: "https://open.kakao.com/o/g0BYclGe",
  성예빈: "https://open.kakao.com/o/gAYPHiGe",
  안수현: "https://open.kakao.com/o/gCyDCbGe",
  남시연: "https://open.kakao.com/o/gOsW4gGe",
  송원섭: "https://open.kakao.com/o/g09vRbGe",
};
