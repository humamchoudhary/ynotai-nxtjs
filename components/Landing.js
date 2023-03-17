import { Typography, Carousel, Button } from "antd";
import Image from "next/image";
import { useState, useEffect } from "react";
import useViewportSizes from "use-viewport-sizes";

export default function Landing(props) {
  const [w, h, vpRefreshCb] = useViewportSizes();

  useEffect(() => {
    vpRefreshCb();
  }, []);
  console.log(w);
  console.log(h);
  const { Title } = Typography;

  return (
    <div>
      <Carousel
        effect="fade"
        autoplay
        style={{ background: "black" }}
        className="h-5/6"
      >
        <div>
          <Image
            style={{ objectFit: "cover", opacity: 0.6, height: "88vh" }}
            src="/images/AI.webp"
            width={w}
            height={h - 100}
            alt="AI"
            priority={true}
          />
        </div>
        <div>
          <Image
            style={{ objectFit: "cover", opacity: 0.6, height: "88vh" }}
            src="/images/Ai3.webp"
            className="h-5/6"
            width={w}
            height={h - 100}
            alt="AI"
            priority={true}
          />
        </div>
        <div>
          <Image
            style={{ objectFit: "cover", opacity: 0.6, height: "88vh" }}
            src="/images/Ai4.webp"
            className="h-5/6"
            width={w}
            height={h - 100}
            alt="AI"
            priority={true}
          />
        </div>
        <div>
          <Image
            style={{ objectFit: "cover", opacity: 0.6, height: "88vh" }}
            src="/images/Ai5.webp"
            className="h-5/6"
            alt="AI"
            width={w}
            height={h - 100}
            priority={true}
          />
        </div>
      </Carousel>

      <div
        style={{
          top: "50vh",
        }}
        className="-translate-y-1/2 flex flex-col w-full left-0 absolute lg:left-[278px]"
      >
        <Title
          style={{ color: "white" }}
          className="font2 text-5xl lg:text-7xl"
        >
          {props.main} <br></br> <span>{props.span}</span>
        </Title>
        <p style={{ fontSize: "1.3rem", color: "white" }}>{props.sub}</p>
      </div>
    </div>
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
