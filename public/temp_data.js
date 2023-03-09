import { FaPython, FaReact, FaRobot } from "react-icons/fa";
import { TbBrandNextjs, TbSeo, TbSocial } from "react-icons/tb";
import { MdOutlineDesignServices, MdWeb } from "react-icons/md";
export const services = [
  [
    {
      label: "Developer",
      key: "developer",
      type: "group",
      // style: { color: colors.DarkBlue },
      children: [
        {
          label: <a href="/services/ai-developer">AI Developer</a>,
          key: "ai-developer",
          icon: <FaRobot style={{ fontSize: "1.5rem" }} />,
          details: {
            post: "Artificial Intelligence Developer",
            subline: "Hire a professional AI developer for your amazing idea",
            reasons: [
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet",
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet",
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet",
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet",
            ],
            experties_header: "AI Developer's",
            tag_line: "A small Tag line to go with AI developers",
            experties: [
              {
                r: "Language",
                details:
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor",
              },
              {
                r: "Neural Networks",
                details:
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor",
              },
              {
                r: "Language",
                details:
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor",
              },
              {
                r: "Neural Networks",
                details:
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor",
              },
            ],
            why_details:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
            why_link: "https://www.google.com/",
          },
        },
        {
          label: <a href="/services/1">Python Developer</a>,
          key: "python-developer",
          icon: <FaPython style={{ fontSize: "1.5rem" }} />,
          details: {
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
          },
        },
        {
          label: <a href="/services/1">ReactJs Developer</a>,
          key: "reactjs-developer",
          icon: <FaReact style={{ fontSize: "1.5rem" }} />,
          details: {
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
          },
        },
        {
          label: <a href="/services/1">NextJs Developer</a>,
          key: "nextjs-developer",
          icon: <TbBrandNextjs style={{ fontSize: "1.5rem" }} />,
          details: {
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
          },
        },
        {
          label: <a href="/services/1">React Native Developer</a>,
          key: "react-native-developer",
          icon: <FaReact style={{ fontSize: "1.5rem" }} />,
          details: {
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
          },
        },
      ],
    },
    {
      label: "Mobile Developer",
      key: "mobile-developer",
      type: "group",
      children: [
        {
          label: <a href="/services/1">IOS Developer</a>,
          key: "ios-developer",
          icon: <FaPython style={{ fontSize: "1.5rem" }} />,
          details: {
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
          },
        },
        {
          label: <a href="/services/1">Android Developer</a>,
          key: "android-developer",
          icon: <FaReact style={{ fontSize: "1.5rem" }} />,
          details: {
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
          },
        },
        {
          label: <a href="/services/1">Flutter Developer</a>,
          key: "flutter-developer",
          icon: <TbBrandNextjs style={{ fontSize: "1.5rem" }} />,
          details: {
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
          },
        },
        {
          label: <a href="/services/1">Mutliplatform Developer</a>,
          key: "mutliplatform-developer",
          icon: <FaReact style={{ fontSize: "1.5rem" }} />,
          details: {
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
          },
        },
      ],
    },
  ],
  [
    {
      label: "Marketing",
      key: "marketing",
      type: "group",
      children: [
        {
          label: <a href="/services/1">SEO Expert</a>,
          key: "seo-expert",
          icon: <TbSeo style={{ fontSize: "1.5rem" }} />,
          details: {
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
          },
        },
        {
          label: <a href="/services/1">Social Media Markter</a>,
          key: "social-media-marketer",
          icon: <TbSocial style={{ fontSize: "1.5rem" }} />,
          details: {
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
          },
        },
      ],
    },
    {
      label: "Designer",
      key: "designer",
      type: "group",
      children: [
        {
          label: <a href="/services/1">UI/Ux Designer</a>,
          key: "ui-ux-designer",
          icon: <MdWeb style={{ fontSize: "1.5rem" }} />,
          details: {
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
          },
        },
        {
          label: <a href="/services/1">Graphic Designer</a>,
          key: "graphic-designer",
          icon: <MdOutlineDesignServices style={{ fontSize: "1.5rem" }} />,
          details: {
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
          },
        },
      ],
    },
  ],
];
