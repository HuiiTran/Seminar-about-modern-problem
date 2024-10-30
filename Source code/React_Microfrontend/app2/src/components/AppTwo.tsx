import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Card, Col, Row, Input } from "antd";
import Meta from "antd/es/card/Meta";

const Counter = () => {
  return (
    <>
      <div style={{ overflow: "scroll", height: "400px" }}>
        <Col span={8}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="git.png"></img>}
            key="1"
          >
            <Meta title="Movie 1" description="Lượt xem: 100k" />
          </Card>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="./git.png"></img>}
            key="1"
          >
            <Meta title="Movie 2" description="Lượt xem: 100k" />
          </Card>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="git.png"></img>}
            key="1"
          >
            <Meta title="Movie 3" description="Lượt xem: 100k" />
          </Card>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="git.png"></img>}
            key="1"
          >
            <Meta title="Movie 4" description="Lượt xem: 100k" />
          </Card>
        </Col>
      </div>
    </>
  );
};

export default Counter;
