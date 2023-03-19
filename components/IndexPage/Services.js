import Image from "next/image";
import { Typography } from "antd";
import { colors } from "../../public/utilities";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const AliceCarousel = dynamic(() => import("react-alice-carousel"), {
  ssr: false,
});
import "react-alice-carousel/lib/alice-carousel.css";

const Services = () => {
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
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
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

  const { Title } = Typography;
  return (
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
  );
};

export default Services;
