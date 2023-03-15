import React from "react";
import { colors } from "../public/utilities";
import Link from "next/link";
import { Layout, Typography } from "antd";

const Footer = () => {
  const { Title } = Typography;

  return (
    <Layout
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: " 20px 278px",
        backgroundColor: colors.Dark,
        color: colors.Light,
      }}
    >
      <Layout
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: colors.Dark,
          color: colors.Light,
        }}
      >
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
            display: "flex",
            flexDirection: "row",
            width: "min-content",
            justifyContent: "flex-end",
            gap: "12rem",
            backgroundColor: "transparent",
            color: colors.Light,
            fontSize: "1rem",
          }}
        >
          <div>
            <p>Home</p>
            <p>Services</p>
            <p>Clients</p>
            <p>Contact</p>
          </div>
          <div>
            <p>Fiverr</p>
            <p>Upwork</p>
            <p>PeoplePerHour</p>
          </div>
          <div>
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
        }}
      >
        <p style={{ fontSize: "13px" }}>
          Copyright &copy; 2023, YNotAI, All Rights Reserved | YNotAI,
          Institiute Of Space Technology , 1 Islamabad Expy, Sector H DHA Phase
          II, Islamabad, Islamabad Capital Territory 44000
        </p>
        <Layout
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "3rem",
            backgroundColor: colors.Dark,
          }}
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
