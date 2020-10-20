import React from "react";
import { Container, Row, Col, Button, Card, Image } from "react-bootstrap";
import styled from "styled-components";
import FujiCard from "../assets/FujiCard.png";
const Styles = styled.div`
  .SideSpace {
    margin: 0% 10%;
    -webkit-flex-direction: row; 
    flex-direction: row;
  }
  .CardSec {
    padding: 4%;
  }
  .CardRadius {
    border-radius: 50px 70px 70px 0;
    filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.5));
  }
  .CardPic {
    border-radius: 50px 70px 0 0;
  }
  .CardTitle {
    color: #c73d13;
    font-size: 140%;
    font-family: "Noto Serif JP", serif;
    font-weight: bold;
  }
  .CardText {
    font-size: 80%;
  }
  .CardButton {
    font-size: 80%;
    border-radius: 50px 70px 70px 0;
    filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.3));
  }
`;

const MenuCardColumn = ({ cardData }) => (
  <Col className="CardSec" xs={12} md={4}>
    <Card className="CardRadius">
      <Card.Img
        className="CardPic"
        variant="top"
        src={cardData.cardImg}
        alt="FujiCard"
      />
      <Card.Body>
        <Card.Title className="CardTitle">{cardData.cardTitle}</Card.Title>
        <Card.Text>
          <p className="CardText">{cardData.cardText}</p>
        </Card.Text>
        <Button href="#/" className="CardButton" variant="primary">
          詳しく
        </Button>
      </Card.Body>
    </Card>
  </Col>
);

export const MenuCard = () => (
    <Styles>
    <Container fluid>
      <Row className="SideSpace">
       {CardData.map(data => (
           <MenuCardColumn cardData={data} />
       ))}
      </Row>
    </Container>
  </Styles>
);


const CardData = [
  {
    cardImg: FujiCard,
    cardTitle: "焼肉",
    cardText:
      "市場直送の新鮮で選りすぐりの部位を 美味しく召し上がって頂けるように、 スタッフ自ら仕込み提供しています。",
  },
  {
    cardImg: FujiCard,
    cardTitle: "刺身・一品料理・生野菜",
    cardText:
      "安心安全を第一にスタッフ自ら仕込んだ新鮮な牛の刺身と、当店自慢の本場 韓国料理の味を是非。",
  },
  {
    cardImg: FujiCard,
    cardTitle: "ご飯もの・スープ",
    cardText: "先代から受け継がれたレシピは、牛から出汁をとりじっく手間暇かけたスー プです。",
  },
  {
    cardImg: FujiCard,
    cardTitle: "お飲物",
    cardText: "店長自らピックアップした日本と韓国両方のお酒を取り揃えています。",
  },
  {
    cardImg: FujiCard,
    cardTitle: "デザート",
    cardText: "一番人気のソフトクリーム以外にも、フレッシュなフルーツのアイスも取り 揃えています。",
  },
  {
    cardImg: FujiCard,
    cardTitle: "宴会コース料理",
    cardText: "幹事さまの手間を省く為に分かりやすく、満足していただけるコースをご用 意しております。",
  },
  {
    cardImg: FujiCard,
    cardTitle: "韓国ランチ",
    cardText: "リーズナブルに本格韓国料理を楽しんで召し上がって頂けるメニューをご用 意しています。",
  }
];