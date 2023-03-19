import { Flex } from "@chakra-ui/react";
import Switch from "../component/switch/Switch";
import { useSelector } from "react-redux";

const Section = ({ title }) => {
  return (
    <>
      <Flex
        gap={"20px"}
        marginLeft={"9%"}
        alignItems={"center"}
        padding={"0 12px"}
      >
        <h2> {title}</h2>
        <Flex>
          <Switch />
        </Flex>
      </Flex>
    </>
  );
};

export default Section;
