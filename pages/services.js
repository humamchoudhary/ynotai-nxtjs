import { Menu } from "antd";
import { colors } from "../public/utilities";
import { services } from "../public/temp_data";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../components/Header"));

export default function Service() {
  return (
    <div>
      <Header />
      <div
        align="start"
        className="flex flex-col absolute top-11 w-screen"
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
