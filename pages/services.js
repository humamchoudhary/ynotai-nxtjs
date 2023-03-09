import Layout from "../components/Layout";
import useWindowSize from "../components/windowSize";
import { Space, Col, Row, Card, Typography } from "antd";
import { colors } from "../public/utilities";
import Image from "next/image";

export default function Service() {
  const { width } = useWindowSize();
  const { Meta } = Card;
  const { Title } = Typography;
  return (
    <Layout main="Get your work done" span="Professionally" sub="hello lol">
      <Space
        style={{
          padding: width > 1350 ? "3rem 278px" : "3rem 12rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: colors.Light,
        }}
      >
        <Title
          style={{
            fontSize: "3rem",
            fontWeight: "900",
            textAlign: "center",
            padding: "2rem 0",
          }}
        >
          Our Services
        </Title>
        <Row
          style={{
            display: "flex",
            gap: "3rem",
            justifyContent: "center",
          }}
          className="portfolio-projects"
        >
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <Card
              hoverable
              style={{ width: 350, border: "0.5px solid lightgrey" }}
              cover={
                <Image
                  alt="project"
                  src="/../public/images/service_cover.webp"
                  width={350}
                  height={250}
                  style={{ objectFit: "cover" }}
                />
              }
            >
              <Meta
                title="Special Service"
                description="Service description goes here"
              />
            </Card>
          </Col>

          <Col style={{ display: "flex", justifyContent: "center" }}>
            <Card
              hoverable
              style={{ width: 350, border: "0.5px solid lightgrey" }}
              cover={
                <Image
                  alt="project"
                  src="/../public/images/service_cover.webp"
                  width={350}
                  height={250}
                  style={{ objectFit: "cover" }}
                />
              }
            >
              <Meta
                title="Special Service"
                description="Service description goes here"
              />
            </Card>
          </Col>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <Card
              hoverable
              style={{ width: 350, border: "0.5px solid lightgrey" }}
              cover={
                <Image
                  alt="project"
                  src="/../public/images/service_cover.webp"
                  width={350}
                  height={250}
                  style={{ objectFit: "cover" }}
                />
              }
            >
              <Meta
                title="Special Service"
                description="Service description goes here"
              />
            </Card>
          </Col>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <Card
              hoverable
              style={{ width: 350, border: "0.5px solid lightgrey" }}
              cover={
                <Image
                  alt="project"
                  src="/../public/images/service_cover.webp"
                  width={350}
                  height={250}
                  style={{ objectFit: "cover" }}
                />
              }
            >
              <Meta
                title="Special Service"
                description="Service description goes here"
              />
            </Card>
          </Col>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <Card
              hoverable
              style={{ width: 350, border: "0.5px solid lightgrey" }}
              cover={
                <Image
                  alt="project"
                  src="/../public/images/service_cover.webp"
                  width={350}
                  height={250}
                  style={{ objectFit: "cover" }}
                />
              }
            >
              <Meta
                title="Special Service"
                description="Service description goes here"
              />
            </Card>
          </Col>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <Card
              hoverable
              style={{ width: 350, border: "0.5px solid lightgrey" }}
              cover={
                <Image
                  alt="project"
                  src="/../public/images/service_cover.webp"
                  width={350}
                  height={250}
                  style={{ objectFit: "cover" }}
                />
              }
            >
              <Meta
                title="Special Service"
                description="Service description goes here"
              />
            </Card>
          </Col>
        </Row>
      </Space>
    </Layout>
  );
}
