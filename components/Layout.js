import dynamic from "next/dynamic";
const Header = dynamic(() => import("./Header"));
const Landing = dynamic(() => import("./Landing"));
const Footer = dynamic(() => import("./Footer"));

export default function Layout({ children, main, span, sub }) {
  return (
    <>
      <Header />
      <Landing main={main} span={span} sub={sub} />
      {children}
      <Footer />
    </>
  );
}
