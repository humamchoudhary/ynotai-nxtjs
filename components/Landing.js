import { Typography, Carousel, Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import useViewportSizes from "use-viewport-sizes";

export default function Landing(props) {
  const [w, h, vpRefreshCb] = useViewportSizes();
  useEffect(() => {
    vpRefreshCb();
  }, []);
  const { Title } = Typography;

  return (
    <>
      <Carousel effect="fade" autoplay style={{ background: "black" }}>
        <div>
          <Image
            style={{ objectFit: "cover", opacity: 0.6 }}
            src="/../public/images/AI.webp"
            width={w}
            height={h - 100}
            alt="AI"
            priority={true}
          />
        </div>
        <div>
          <Image
            style={{ objectFit: "cover", opacity: 0.6 }}
            src="/../public/images/Ai3.webp"
            width={w}
            height={h - 100}
            alt="AI"
            priority={true}
          />
        </div>
        <div>
          <Image
            style={{ objectFit: "cover", opacity: 0.6 }}
            src="/../public/images/Ai4.webp"
            width={w}
            height={h - 100}
            alt="AI"
            priority={true}
          />
        </div>
        <div>
          <Image
            style={{ objectFit: "cover", opacity: 0.6 }}
            src="/../public/images/Ai5.webp"
            alt="AI"
            width={w}
            height={h - 100}
            priority={true}
          />
        </div>
      </Carousel>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          position: "absolute",
          top: "20rem",
          left: "278px",
        }}
      >
        <Title
          style={{ fontSize: "5rem", color: "white", width: "600px" }}
          className="font2"
        >
          {props.main} <br></br> <span>{props.span}</span>
        </Title>
        <p style={{ fontSize: "1.3rem", color: "white", width: "600px" }}>
          {props.sub}
        </p>
      </div>
    </>
  );
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
