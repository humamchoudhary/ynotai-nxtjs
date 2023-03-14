import { Space } from "antd";
import { useRouter } from "next/router";
import { Typography, Col, Row, Card } from "antd";
import { colors } from "../../public/utilities";
import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";
import { services } from "../../public/temp_data";
import { useEffect, useState } from "react";
const services_Id = () => {
  const { Title } = Typography;

  const [data, setData] = useState({
    post: "",
    subline: "",
    reasons: ["", "", ""],
    experties_header: "",
    tag_line: "",
    experties: [
      { r: "", details: "" },
      { r: "", details: "" },
      { r: "", details: "" },
      { r: "", details: "" },
    ],
    why_details: "",
    why_link: "",
  });
  // setData();
  const router = useRouter();
  const pid = router.query["id"];

  useEffect(() => {
    async function fetchData() {
      const result = findDetailsByKey(pid);
      setData(result);
    }
    fetchData();
  }, [pid]);

  console.log(data);
  return (
    <>
      {data && (
        <Layout main={`${data.post} For Hire`} sub={data.subline}>
          <Space
            style={{
              padding: "3rem 278px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              backgroundColor: colors.Light,
              marginBottom: "4rem",
            }}
            size="large"
          >
            <Title
              style={{
                fontSize: "3rem",
                fontWeight: "900",
                textAlign: "center",
                padding: "2rem 0",
              }}
            >
              Why hire a {data.post}
            </Title>
            <Row
              gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
              style={{ justifyContent: "center" }}
            >
              {data.reasons.map((reason, index) => {
                return (
                  <Col className="gutter-row" span={6}>
                    <Card
                      style={{
                        backgroundColor: colors.CTA,
                        padding: "2rem",
                        color: colors.Light,
                        justifyContent: "center",
                      }}
                    >
                      <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
                        Reason {index + 1}
                      </div>
                      <div>{reason}</div>
                    </Card>
                  </Col>
                );
              })}
            </Row>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                padding: "3rem 0",
              }}
            >
              <Title
                style={{
                  fontSize: "3rem",
                  fontWeight: "900",
                  textAlign: "center",
                  // padding: "0",
                }}
              >
                Our {data.experties_header} Expertise
              </Title>
              <p
                style={{
                  textAlign: "center",
                }}
              >
                {data.tag_line}
              </p>
            </div>
            <Row
              gutter={[64, 64]}
              style={{ justifyContent: "center", marginBottom: "2rem" }}
            >
              {data.experties.map((exp) => {
                return (
                  <Col className="gutter-row" span={12}>
                    <Card
                      style={{
                        backgroundColor: colors.CTA,
                        padding: "2rem",
                        color: colors.Light,
                        justifyContent: "center",
                      }}
                    >
                      <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
                        {exp.r}
                      </div>
                      <div style={{ fontSize: "1.5rem" }}>{exp.details}</div>
                    </Card>
                  </Col>
                );
              })}
            </Row>

            <Space
              direction="horizontal"
              size="large"
              style={{ marginTop: "7rem" }}
            >
              <Image
                src="/../public/images/test.webp"
                alt="people working"
                width={600}
                height={400}
              />
              <Space direction="vertical" style={{ marginLeft: "2rem" }}>
                <Title
                  style={{
                    fontSize: "3rem",
                    fontWeight: "900",
                  }}
                >
                  Why Hire YNotAi's {data.post}?
                </Title>
                <p>{data.why_details}</p>
                <Link
                  href={data.why_link}
                  className="cta"
                  style={{ fontSize: "1.4rem" }}
                >
                  Hire Us
                </Link>
              </Space>
            </Space>
          </Space>
        </Layout>
      )}
    </>
  );
};

export default services_Id;

function findDetailsByKey(key) {
  let details = null;

  services.some((group) =>
    group.some(
      (service) =>
        service.children &&
        service.children.some((child) => {
          if (child.key === key) {
            details = child.details;
            return true; // stop iterating
          }
          return false;
        })
    )
  );

  return details;
}
