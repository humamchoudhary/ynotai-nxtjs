import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Layout from "../components/Layout";
import { Typography, Space, Card } from "antd";

export default function Blog() {
  const blogs = [
    "Blog 1",
    "Blog 2",
    "Blog 3",
    "Blog 4",
    "Blog 5",
    "Blog 6",
    "Blog 7",
    "Blog 8",
  ];

  // Slider settings
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1200, min: 950 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet2: {
      breakpoint: { max: 950, min: 700 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  // blog card
  const { Meta } = Card;
  const blogCards = blogs.map((blog) => {
    return (
      <div key={blog}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title={blog} description="Blog Description goes here" />
        </Card>
      </div>
    );
  });

  const { Title } = Typography;
  return (
    <Layout main="The Ultimate Blogs for" span="Artificial Intelligence">
      <div>
        <Carousel responsive={responsive}>{blogCards}</Carousel>
      </div>
    </Layout>
  );
}
