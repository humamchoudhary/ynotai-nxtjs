import Layout from "../components/Layout";
import Image from "next/image";
import { Typography, Space } from "antd";
import { colors } from "../public/utilities";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const AliceCarousel = dynamic(() => import("react-alice-carousel"), {
  ssr: false,
});
import "react-alice-carousel/lib/alice-carousel.css";
const responsive = {
  0: {
    items: 1,
  },
  600: {
    items: 3,
  },
  1024: {
    items: 5,
  },
};
const myLoader = () => {
  return "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png";
};
export default function App() {
  const services = [
    "Service 1",
    "Service 2",
    "Service 3",
    "Service 4",
    "Service 5",
    "Service 6",
    "Service 7",
    "Service 8",
  ];

  const serviceCards = services.map((service) => {
    return (
      <div key={service}>
        <div style={{ position: "relative" }}>
          <p
            style={{
              position: "absolute",
              left: "20px",
              color: colors.CTA,
              fontWeight: 800,
              zIndex: 20,
            }}
          >
            {service}
          </p>
          <div
            style={{
              backgroundColor: colors.Dark,
              width: "200px",
              borderRadius: "5px",
              height: "300px",
            }}
          >
            <Image
              width={200}
              height={300}
              draggable={true}
              style={{
                borderRadius: "5px",
                opacity: 0.5,
              }}
              src="/images/service1.jpg"
            />
          </div>
        </div>
      </div>
    );
  });
  const { Title } = Typography;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
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

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
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
            Our Services
          </Title>
          {loaded && (
            <AliceCarousel
              mouseTracking
              items={serviceCards}
              responsive={responsive}
              autoPlay
              autoPlayInterval={1000}
              animationDuration={1000}
              disableButtonsControls
              infinite
              touchTracking={true}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}
