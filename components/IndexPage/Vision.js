import Image from "next/image";
import { Typography } from "antd";
import { colors } from "../public/utilities";
export default function Vision() {
  const { Title } = Typography;

  return (
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
            At YnotAI, our vision is to revolutionize the way businesses operate
            and make decisions by harnessing the power of Artificial
            Intelligence. We strive to be the leading provider of AI-based
            solutions that drive growth, improve efficiency, and enhance
            customer experiences. Our mission is to empower businesses of all
            sizes to unlock the full potential of AI, enabling them to make
            data-driven decisions with confidence.
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
  );
}
