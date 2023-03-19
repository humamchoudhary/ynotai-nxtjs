import { Typography } from "antd";
import { colors } from "../public/utilities";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const AliceCarousel = dynamic(() => import("react-alice-carousel"), {
  ssr: false,
});
import "react-alice-carousel/lib/alice-carousel.css";

const Testimonial = () => {
  const { Title } = Typography;
  const testimonials = [
    "Testimonials 1",
    "Testimonials 1",
    "Testimonials 1",
    "Testimonials 1",
  ];

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
  const [loaded2, setLoaded2] = useState(false);

  useEffect(() => {
    setLoaded2(true);
  }, []);

  return (
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
  );
};

export default Testimonial;
