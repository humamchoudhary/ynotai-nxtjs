import { Typography } from "antd";
import { colors } from "../public/utilities";
const Ynot = () => {
  const { Title } = Typography;
  return (
    <div className="flex flex-col justify-center items-center px-6 mt-8 py-24 bg-Dark min-h-screen lg:px-[278px]">
    <Title
      style={{
        color: colors.Light,
        fontSize: "4rem",
        fontWeight: "900",
        textAlign: "center",
        marginBottom: "5rem",
      }}
    >
      Why YNotAI
    </Title>

    <div className="flex flex-col gap-5 lg:flex-row">
      <div className="Card">
        <Title
          style={{
            color: colors.Light,
            fontSize: "2.2rem",
            textAlign: "center",
            fontWeight: "800",
          }}
        >
          Title 1
        </Title>
        <ul>
          <li>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua.
            </p>
          </li>
          <li>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua.
            </p>
          </li>
          <li>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua.
            </p>
          </li>
        </ul>
      </div>
      <div className="Card">
        <Title
          style={{
            color: colors.Light,
            fontSize: "2.2rem",
            textAlign: "center",
            fontWeight: "800",
          }}
        >
          Title 1
        </Title>
        <ul>
          <li>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua.
            </p>
          </li>
          <li>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua.
            </p>
          </li>
          <li>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua.
            </p>
          </li>
        </ul>
      </div>
      <div className="Card">
        <Title
          style={{
            color: colors.Light,
            fontSize: "2.2rem",
            textAlign: "center",
            fontWeight: "800",
          }}
        >
          Title 1
        </Title>
        <ul>
          <li>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua.
            </p>
          </li>
          <li>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua.
            </p>
          </li>
          <li>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Ynot