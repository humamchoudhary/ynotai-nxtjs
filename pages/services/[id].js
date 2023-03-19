import { useRouter } from "next/router";
import { Typography, Card } from "antd";
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

  return (
    <>
      {data && (
        <Layout main={`${data.post} For Hire`} sub={data.subline}>
          <div className="flex flex-col justify-center bg-Light mb-16 py-12 px-6 lg:px-[278px]">
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
            <div
              style={{ justifyContent: "center" }}
              className="flex flex-col gap-8 lg:flex-row"
            >
              {data.reasons.map((reason, index) => {
                return (
                  <div className="" span={6}>
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
                  </div>
                );
              })}
            </div>
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
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-4"
              style={{ justifyContent: "center", marginBottom: "2rem" }}
            >
              {data.experties.map((exp) => {
                return (
                  <div className="">
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
                  </div>
                );
              })}
            </div>

            <div className="mt-28 flex flex-row gap-7" id="test">
              <Image
                src="/images/test.webp"
                alt="people working"
                width={600}
                height={400}
                className="rounded-lg"
              />
              <div className="flex flex-col gap-4 ">
                <Title
                  style={{
                    fontSize: "3rem",
                    fontWeight: "900",
                  }}
                >
                  Why Hire YNotAi's {data.post}?
                </Title>
                <p>{data.why_details}</p>
                <div>
                  <Link
                    href={data.why_link}
                    className="cta"
                    style={{ fontSize: "1.4rem" }}
                  >
                    Hire Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
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
