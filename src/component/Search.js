import { Flex, Heading, Input, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [Search, SetSearch] = useState();
  const navigate = useNavigate();

  const searchQuerySubmitHandler = (e) => {
    e.preventDefault();
    navigate(`/Search/${Search}`);
  };

  const handleChange = (event) => {
    SetSearch(event.target.value);
  };
  return (
    <Flex
      className="ImgSearch"
      justify="center"
      align="flex-start"
      direction="column"
      padding="3%"
    >
      <Heading
        as="h2"
        fontSize={"3em"}
        fontWeight={"700"}
        lineHeight={"1"}
        m={"0"}
      >
        Welcome.
      </Heading>

      <Heading as="h3" fontSize={"2em"} fontWeight={"600"}>
        Millions of movies to discover. Explore now.
      </Heading>
      <Flex w={"100%"}>
        <form onSubmit={searchQuerySubmitHandler} className="form">
          <Input
            w={"100%"}
            h={"30"}
            placeholder="Search for a movie, TV show , a person....."
            type="text"
            border="none"
            paddingTop={"10"}
            paddingLeft={"20"}
            paddingBottom="10"
            onChange={handleChange}
            className="searchInpt"
          />
          <Button
            w={"600"}
            h={"50"}
            p="20"
            borderRadius={"30"}
            color={"white"}
            marginLeft={"-50"}
            type="submit"
            className="searchBtn"
          >
            Search
          </Button>
        </form>
      </Flex>
    </Flex>
  );
};

export default Search;
