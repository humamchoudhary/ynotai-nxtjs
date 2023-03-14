import Layout from "../components/Layout";
import Image from "next/image";
import { Typography, Space } from "antd";
import { colors } from "../public/utilities";
const myLoader = () => {
  return "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png";
};
export default function App() {
  const { Title } = Typography;
  return (
    <Layout main="Get your work done" span="Professionally">
      <div
        style={{
          paddingLeft: "278px",
          paddingRight: "278px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          justifyContent: "center",
          marginBottom: "6rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "15px 0px",
            justifyContent: "space-evenly",
          }}
        >
          <Image
            alt="google"
            width={250}
            height={80}
            src="logo.png"
            style={{ opacity: "60%" }}
            loader={myLoader}
          />
          <Image
            alt="google"
            width={250}
            height={80}
            src="logo.png"
            style={{ opacity: "60%" }}
            loader={myLoader}
          />
          <Image
            alt="google"
            width={250}
            height={80}
            src="logo.png"
            style={{ opacity: "60%" }}
            loader={myLoader}
          />
          <Image
            alt="google"
            width={250}
            height={80}
            src="logo.png"
            style={{ opacity: "60%" }}
            loader={myLoader}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Title
            style={{
              color: colors.Dark,
              fontSize: "4rem",
              fontWeight: "900",
              textAlign: "center",
            }}
          >
            Our Vision
          </Title>
          <Space
            direction="horizontal"
            size="large"
            style={{ marginTop: "2rem" }}
          >
            <div>
              <p
                style={{
                  color: colors.CTA,
                  fontSize: "2.5rem",
                  fontWeight: "900",
                  marginTop: 0,
                }}
              >
                Unlocking the Power of AI to Drive Business Growth
              </p>
              <p
                style={{
                  color: colors.Dark,
                  marginTop: 0,
                }}
              >
                At YnotAI, our vision is to revolutionize the way businesses
                operate and make decisions by harnessing the power of Artificial
                Intelligence. We strive to be the leading provider of AI-based
                solutions that drive growth, improve efficiency, and enhance
                customer experiences. Our mission is to empower businesses of
                all sizes to unlock the full potential of AI, enabling them to
                make data-driven decisions with confidence.
              </p>
            </div>
            <Image
              className="vision-img"
              src="/images/test.webp"
              alt="people working"
              width={600}
              height={400}
              style={{
                borderRadius: "5px",
              }}
            />
          </Space>
        </div>
      </div>
    </Layout>
  );
}
