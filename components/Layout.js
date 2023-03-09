import Footer from "./Footer";
import Header from "./Header";
import Landing from "./Landing";

export default function Layout({ children, main, span, sub }) {
  console.log(children);
  return (
    <>
      <Header />
      <Landing main={main} span={span} sub={sub} />
      {children}
      <Footer />
    </>
  );
}
