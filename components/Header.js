import { colors } from "../public/utilities";
import { services } from "../public/temp_data";
import { Dropdown, Menu } from "antd";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useState, useEffect } from "react";
import useViewportSizes from "use-viewport-sizes";

export default function Header() {
  const [isopen, setOpen] = useState(false);
  const [w, h, vpRefreshCb] = useViewportSizes();

  useEffect(() => {
    vpRefreshCb();
  }, []);

  return (
    <div className="flex flex-row fixed justify-between items-center text-center px-6 py-3 w-screen lg:px-[278px] bg-DarkBlue text-white z-50">
      <h1 className=" text-4xl font-bold">LOGO</h1>
      <div
        className="lg:hidden"
        onClick={() => {
          setOpen(!isopen);
        }}
      >
        {isopen ? (
          <AiOutlineClose className=" text-bold text-3xl" />
        ) : (
          <FiMenu className=" text-bold text-3xl" />
        )}
      </div>
      <div
        style={{ fontSize: "1.5rem" }}
        className={`flex flex-col gap-16 justify-center items-center fixed top-12
        transition-all
         ${
           isopen ? "left-0" : "left-full"
         } bg-DarkBlue w-screen h-screen lg:relative lg:left-0 lg:w-max lg:h-max lg:flex-row lg:top-0 sm:left-0`}
      >
        <Link href="/" style={{ color: "white", fontWeight: "700" }}>
          Home
        </Link>

        {w > 1024 ? (
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
        ) : (
          <Link href="/services" style={{ color: "white", fontWeight: "700" }}>
            Services
          </Link>
        )}

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
      </div>
    </div>
  );
}
function MegaMenuItems() {
  return (
    <div>
      <div
        align="start"
        className="flex flex-row"
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
      </div>
    </div>
  );
}
