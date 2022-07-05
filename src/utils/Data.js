import { AiOutlineArrowDown } from "react-icons/ai";

// Analytics Cards Data
export const cardsData = [
  {
    title: "Codechef",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "1774",
    png: AiOutlineArrowDown,
    series: [
      {
        name: "Codechef",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Codeforces",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "1150",
    png: AiOutlineArrowDown,
    series: [
      {
        name: "Codeforces",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Leetcode",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 90,
    value: "1359",
    png: AiOutlineArrowDown,
    series: [
      {
        name: "Leetcode",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

