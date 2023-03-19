import { colors } from "../public/utilities";
import Link from "next/link";
import { Layout, Typography } from "antd";

const Footer = () => {
  const { Title } = Typography;

  return (
    <Layout className="flex flex-col justify-between  py-5 px-6 lg:px-[278px] bg-Dark text-Light">
      <Layout className="flex flex-col lg:flex-row justify-between bg-Dark text-Light">
        <Link
          href="#"
          style={{
            color: colors.Light,
            fontSize: "2.75rem",
            fontWeight: "bolder",
          }}
        >
          YNot Ai
        </Link>
        <Layout
          style={{
            backgroundColor: "transparent",
            color: colors.Light,
          }}
          className="flex flex-col lg:flex-row justify-end gap-3 lg:gap-48"
        >
          <div className="flex flex-col gap-3 text-sm lg:text-lg">
            <p>Home</p>
            <p>Services</p>
            <p>Clients</p>
            <p>Contact</p>
          </div>
          <div className="flex flex-col gap-3 text-sm lg:text-lg">
            <p>Fiverr</p>
            <p>Upwork</p>
            <p>PeoplePerHour</p>
          </div>
          <div className="flex flex-col gap-3 lg:text-lg text-xs">
            <p>Facebook</p>
            <p>LinkedIn</p>
          </div>
        </Layout>
      </Layout>
      <Layout
        style={{
          backgroundColor: colors.Dark,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "3rem",
          gap: "1rem",
        }}
      >
        <p style={{ fontSize: "13px" }}>
          Copyright &copy; 2023, YNotAI, All Rights Reserved | YNotAI,
          Institiute Of Space Technology , 1 Islamabad Expy, Sector H DHA Phase
          II, Islamabad, Islamabad Capital Territory 44000
        </p>
        <Layout
          style={{
            backgroundColor: colors.Dark,
          }}
          className="flex flex-row gap-2 lg:gap-12 "
        >
          <Link href={"/"}>Legal</Link>
          <Link href={"/"}>Terms of Service</Link>
          <Link href={"/"}>Terms & Conditions</Link>
          <Link href={"/"}>Privacy Policy</Link>
          <Link href={"/"}>Contact</Link>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Footer;
