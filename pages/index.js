import Layout from "../components/Layout";
import Image from "next/image";
import { Typography } from "antd";
import { colors } from "../public/utilities";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const AliceCarousel = dynamic(() => import("react-alice-carousel"), {
  ssr: false,
});
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: {
    items: 2,
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
  const testimonials = [
    "Testimonials 1",
    "Testimonials 1",
    "Testimonials 1",
    "Testimonials 1",
  ];

  const serviceCards = services.map((service) => {
    return (
      <div key={service} className="mx-1">
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
              borderRadius: "5px",
            }}
            className="w-52 md:w-64"
          >
            <Image
              width={234}
              height={350}
              draggable={true}
              style={{
                borderRadius: "5px",
                opacity: 0.5,
              }}
              className="w-52 md:w-64"
              src="/images/service1.jpg"
            />
          </div>
        </div>
      </div>
    );
  });
  const testimonialCards = testimonials.map((testimonial) => {
    return (
      <div
        className="bg-CTA flex flex-col-reverse items-center justify-center gap-20 mx-1 p-5 lg:mx-5 lg:p-20 lg:flex-row"
        style={{
          borderRadius: "1rem",
        }}
      >
        <div
          className="user"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <div
            className="user_prof"
            style={{
              overflow: "hidden",
              backgroundColor: colors.Dark,
              borderRadius: "100%",
              backgroundImage: `url(
                "https://randomuser.me/api/portraits/women/94.jpg"
              )`,
              backgroundSize: "cover",
            }}
          ></div>
          <h1
            className="highlight"
            style={{ fontSize: "1.875rem", lineHeight: "2.25rem" }}
          >
            Random Name
          </h1>
        </div>
        <p className="msg text-4xl">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
        </p>
      </div>
    );
  });
  const { Title } = Typography;
  const [loaded, setLoaded] = useState(false);
  const [loaded2, setLoaded2] = useState(false);

  useEffect(() => {
    setLoaded(true);
    setLoaded2(true);
  }, []);
  return (
    <Layout main="Get your work done" span="Professionally">
      <div
        style={{
          justifyContent: "center",
          marginBottom: "6rem",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingLeft: "278px",
            paddingRight: "278px",
            paddingTop: "15px",
            paddingBottom: "15px",
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

        <div className="flex flex-col justify-center items-center px-6 mt-8 lg:px-[278px]">
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
          <div
            className="flex flex-col md:flex-row gap-16 items-center mb-11"
            style={{ marginTop: "2rem" }}
          >
            <div className="flex-1">
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
              className="h-full w-full flex-1"
              src="/images/test.webp"
              alt="people working"
              width={600}
              height={400}
              style={{
                borderRadius: "5px",
              }}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center px-6 mt-8 lg:px-[278px]">
          <Title
            style={{
              color: colors.Dark,
              fontSize: "4rem",
              fontWeight: "900",
              textAlign: "center",
              marginBottom: "5rem",
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

        <div className="flex flex-col justify-center items-center px-6 mt-8 py-24 bg-Dark min-h-screen lg:px-[278px]">
          <Title
            style={{
              color: colors.Light,
              fontSize: "4rem",
              fontWeight: "900",
              textAlign: "center",
              marginBottom: "5rem",
            }}
          >
            Why YNotAI
          </Title>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="Card">
              <Title
                style={{
                  color: colors.Light,
                  fontSize: "2.2rem",
                  textAlign: "center",
                  fontWeight: "800",
                }}
              >
                Title 1
              </Title>
              <ul>
                <li>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </li>
                <li>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </li>
                <li>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </li>
              </ul>
            </div>
            <div className="Card">
              <Title
                style={{
                  color: colors.Light,
                  fontSize: "2.2rem",
                  textAlign: "center",
                  fontWeight: "800",
                }}
              >
                Title 1
              </Title>
              <ul>
                <li>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </li>
                <li>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </li>
                <li>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </li>
              </ul>
            </div>
            <div className="Card">
              <Title
                style={{
                  color: colors.Light,
                  fontSize: "2.2rem",
                  textAlign: "center",
                  fontWeight: "800",
                }}
              >
                Title 1
              </Title>
              <ul>
                <li>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </li>
                <li>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </li>
                <li>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center px-6 mt-8 lg:px-[278px]">
          <Title
            style={{
              color: colors.Dark,
              fontSize: "4rem",
              fontWeight: "900",
              textAlign: "center",
              marginTop: "5rem",
              marginBottom: "5rem",
            }}
          >
            Testimonials
          </Title>

          {loaded2 && (
            <AliceCarousel
              mouseTracking
              items={testimonialCards}
              responsive={{
                0: {
                  items: 1,
                  itemsFit: "contain",
                },
                600: {
                  items: 1,
                },
                1024: {
                  items: 1,
                },
              }}
              autoPlay
              autoPlayInterval={3000}
              animationDuration={1000}
              disableButtonsControls
              infinite
              disableDotsControls
              touchTracking={true}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}
