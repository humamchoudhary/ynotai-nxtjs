import { colors } from "../public/utilities";
import { services } from "../public/temp_data";
import { Space, Dropdown, Menu } from "antd";

import Link from "next/link";
export default function Header() {
  return (
    <Space
      style={{
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        padding: "0 278px",
        position: "fixed",
        width: "100%",
        zIndex: "1",
        background: colors.DarkBlue,
      }}
    >
      <h1>LOGO</h1>
      <Space style={{ fontSize: "1.5rem" }} size="large">
        <Link href="/" style={{ color: "white", fontWeight: "700" }}>
          Home
        </Link>
        <Dropdown
          overlay={
            <Menu
              // expandIcon=""
              items={[
                {
                  label: <MegaMenuItems />,
                  key: "MegaMenuitems",
                  style: {
                    backgroundColor: colors.Light,
                    color: colors.Light,
                    fontSize: "1.5rem",
                  },
                },
              ]}
            />
          }
          placement="bottom"
        >
          <div style={{ color: "white", fontWeight: "700" }}>Services</div>
        </Dropdown>
        {/* <Link href="/services" style={{ color: "white", fontWeight: "700" }}>
          
        </Link> */}
        <Link href="/blog" style={{ color: "white", fontWeight: "700" }}>
          Blog
        </Link>
        <Link
          href="/portfolio"
          style={{ color: "white", fontWeight: "700", margin: "0 20" }}
        >
          Portfolio
        </Link>
        <Link href="/" className="cta">
          Contact
        </Link>
      </Space>
    </Space>
  );
}
function MegaMenuItems() {
  return (
    <div>
      <Space
        direction="horizontal"
        align="start"
        style={{ backgroundColor: "transparent", padding: "2rem" }}
      >
        {services.map((service) => {
          return (
            <Menu
              style={{
                width: "250px",
                color: colors.Dark,
                fontSize: "1.2rem",
                backgroundColor: "transparent",
              }}
              items={service}
            />
          );
        })}
      </Space>
    </div>
  );
}
