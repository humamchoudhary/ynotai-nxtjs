import Layout from "../components/Layout";
import Image from "next/image";
import { Typography } from "antd";
const myLoader = () => {
  return "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png";
};
export default function App() {
  const { Title } = Typography;
  return (
    <Layout main="Get your work done" span="Professionally">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "10px 278px",
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
    </Layout>
  );
}
