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
        flexDirection: "row",
        justifyContent: "space-between",
        padding: " 20px 278px",
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
  );
};

export default Footer;
