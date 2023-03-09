import { colors } from "../public/utilities";
import Image from "next/image";
import { Space, Row, Col, Typography, Card, Button, Carousel } from "antd";
import Layout from "../components/Layout";
import useWindowSize from "../components/windowSize";
export default function Portfolio() {
  const { width } = useWindowSize();
  const { Title } = Typography;
  const { Meta } = Card;

  return (
    <Layout>
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
          Our Work
        </Title>
        <Row
          style={{
            display: "flex",
            width: width > 1200 ? "65rem" : "45rem",
            gap: "4rem 0",
          }}
          className="portfolio-projects"
        >
          <Col
            span={width > 1200 ? 8 : 12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              hoverable
              style={{ width: 300 }}
              cover={
                <Image
                  alt="project"
                  src="/../public/images/AI.webp"
                  width={300}
                  height={250}
                />
              }
            >
              <Meta
                title="Project Alpha"
                description="Project description goes here"
              />
            </Card>
          </Col>
          <Col
            span={width > 1200 ? 8 : 12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              hoverable
              style={{ width: 300 }}
              cover={
                <Image
                  alt="project"
                  src="/../public/images/Ai3.webp"
                  width={300}
                  height={250}
                />
              }
            >
              <Meta
                title="Project Alpha"
                description="Project description goes here"
              />
            </Card>
          </Col>
          <Col
            span={width > 1200 ? 8 : 12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              hoverable
              style={{ width: 300 }}
              cover={
                <Image
                  alt="project"
                  src="/../public/images/Ai4.webp"
                  width={300}
                  height={250}
                />
              }
            >
              <Meta
                title="Project Alpha"
                description="Project description goes here"
              />
            </Card>
          </Col>
          <Col
            span={width > 1200 ? 8 : 12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              hoverable
              style={{ width: 300 }}
              cover={
                <Image
                  alt="project"
                  src="/../public/images/Ai5.webp"
                  width={300}
                  height={250}
                />
              }
            >
              <Meta
                title="Project Alpha"
                description="Project description goes here"
              />
            </Card>
          </Col>
          <Col
            span={width > 1200 ? 8 : 12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              hoverable
              style={{ width: 300 }}
              cover={
                <Image
                  alt="project"
                  src="/../public/images/Ai4.webp"
                  width={300}
                  height={250}
                />
              }
            >
              <Meta
                title="Project Alpha"
                description="Project description goes here"
              />
            </Card>
          </Col>
          <Col
            span={width > 1200 ? 8 : 12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              hoverable
              style={{ width: 300 }}
              cover={
                <Image
                  alt="project"
                  src="/../public/images/AI.webp"
                  width={300}
                  height={250}
                />
              }
            >
              <Meta
                title="Project Alpha"
                description="Project description goes here"
              />
            </Card>
          </Col>
        </Row>
        {/* Banner */}
        <Space
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderRadius: "1rem",
            background: colors.CTA,
            padding: "0 3rem",
            paddingBottom: "1.3rem",
            marginTop: "8rem",
          }}
        >
          <Space
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
            }}
          >
            <Title
              style={{
                fontSize: "2rem",
                color: "white",
                fontWeight: "700",
                letterSpacing: "1px",
              }}
            >
              Rescue Your Company's Growth!
            </Title>
            <Title style={{ fontSize: "1rem", color: "white" }}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate
            </Title>
          </Space>
          <Button
            type="primary"
            style={{
              height: "3rem",
              fontWeight: "700",
              fontSize: "1rem",
              width: "8rem",
              letterSpacing: "1px",
              background: colors.Dark,
            }}
          >
            Hire Us
          </Button>
        </Space>
      </Space>
      {/* Testimonials */}
      <div
        style={{
          background: "#2B2D42",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Title
          style={{
            fontSize: "4rem",
            letterSpacing: "1px",
            fontWeight: "700",
            color: "white",
            textAlign: "center",
          }}
        >
          Our Clients
        </Title>
        <div style={{ padding: "5rem 15rem", borderRadius: "1rem" }}>
          <Carousel>
            <div>
              <Space
                style={{
                  borderRadius: "1rem",
                  height: "16rem",
                  background: colors.CTA,
                  width: "100%",
                  padding: "2rem 4rem",
                }}
              >
                <Image
                  src="/../public/images/AI.webp"
                  width={200}
                  height={200}
                  style={{ borderRadius: "50%" }}
                />
                <h1
                  style={{
                    fontSize: "1.5rem",
                    color: colors.Blue,
                    marginLeft: "1rem 2rem",
                    color: colors.DarkBlue,
                  }}
                >
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available
                </h1>
              </Space>
            </div>
            <div>
              <Space
                style={{
                  borderRadius: "1rem",
                  height: "16rem",
                  background: colors.CTA,
                  width: "100%",
                  padding: "2rem 4rem",
                }}
              >
                <Image
                  src="/../public/images/AI.webp"
                  width={200}
                  height={200}
                  style={{ borderRadius: "50%" }}
                />
                <h1
                  style={{
                    fontSize: "1.5rem",
                    color: colors.Blue,
                    marginLeft: "1rem",
                    color: "white    ",
                  }}
                >
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available
                </h1>
              </Space>
            </div>
            <div>
              <Space
                style={{
                  borderRadius: "1rem",
                  height: "16rem",
                  background: colors.CTA,
                  width: "100%",
                  padding: "2rem 4rem",
                }}
              >
                <Image
                  src="/../public/images/AI.webp"
                  width={200}
                  height={200}
                  style={{ borderRadius: "50%" }}
                />
                <h1
                  style={{
                    fontSize: "1.5rem",
                    color: colors.Blue,
                    marginLeft: "1rem",
                    color: "white    ",
                  }}
                >
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available
                </h1>
              </Space>
            </div>
            <div>
              <Space
                style={{
                  borderRadius: "1rem",
                  height: "16rem",
                  background: colors.CTA,
                  width: "100%",
                  padding: "2rem 4rem",
                }}
              >
                <Image
                  src="/../public/images/AI.webp"
                  width={200}
                  height={200}
                  style={{ borderRadius: "50%" }}
                />
                <h1
                  style={{
                    fontSize: "1.5rem",
                    color: colors.Blue,
                    marginLeft: "1rem",
                    color: "white    ",
                  }}
                >
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available
                </h1>
              </Space>
            </div>
          </Carousel>
        </div>
      </div>
    </Layout>
  );
}
