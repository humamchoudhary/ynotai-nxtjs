const AliceCarousel = dynamic(() => import("react-alice-carousel"), {
  ssr: false,
});
import dynamic from "next/dynamic";
import "react-alice-carousel/lib/alice-carousel.css";
import Layout from "../components/Layout";
import { Typography, Card } from "antd";
import { colors } from "../public/utilities";
import Image from "next/image";

export default function Blog() {
  const blogs = [
    {
      name: "Blog 1",
      author: "Muhammad Humam",
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      name: "Blog 2",
      author: "Muhammad Humam",
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      name: "Blog 3",
      author: "Muhammad Humam",
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      name: "Blog 4",
      author: "Muhammad Humam",
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      name: "Blog 5",
      author: "Muhammad Humam",
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      name: "Blog 6",
      author: "Muhammad Humam",
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
  ];

  // Slider settings
  const responsive = {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1024: {
      items: 4,
    },
  };

  // blog card
  const blogCards = blogs.map((blog) => {
    return (
      <div
        key={blog.name}
        className="flex flex-col gap-3 hover:opacity-70 transition-all duration-300"
      >
        <Image
          className="rounded-xl bg-CTA"
          width={240}
          height={336}
          alt="example"
          src={blog.img}
        />
        <div>
          <p className="font-bold text-2xl m-0">{blog.name}</p>
          <p className="font-light text-lg m-0">{blog.author}</p>
        </div>
      </div>
    );
  });

  const { Title } = Typography;
  return (
    <Layout main="The Ultimate Blogs for" span="Artificial Intelligence">
      <div className="px-[278px] mt-32">
        <Title
          style={{
            color: colors.Dark,
            fontSize: "4rem",
            fontWeight: "900",
            textAlign: "center",
            marginBottom: "5rem",
          }}
        >
          Trending Blogs
        </Title>
        <AliceCarousel
          autoPlay
          autoPlayInterval={3000}
          animationDuration={1000}
          disableButtonsControls
          infinite
          touchTracking={true}
          responsive={responsive}
        >
          {blogCards}
        </AliceCarousel>
      </div>
      <div className="mt-20">
        <Title
          style={{
            color: colors.Dark,
            fontSize: "4rem",
            fontWeight: "900",
            textAlign: "center",
            marginBottom: "5rem",
          }}
        >
          Blog Categories
        </Title>
      </div>
    </Layout>
  );
}
