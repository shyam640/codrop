import React, { useState } from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import { AiOutlineArrowDown } from "react-icons/ai";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import Chart from "react-apexcharts";


const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

function CompactCard({ param, setExpanded }) {
  const Png = param.png;
  return (
    <motion.div
      className="flex flex-1 h-[7rem] mb-12 sm:lg-0 rounded-[0.7rem] text-white p-[1rem] relative cursor-pointer hover:shadow-none"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      <div className="flex-1 flex flex-col justify-end gap-[1rem]">
        <CircularProgressbar
        className="overflow-visible"
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span className="text-[13px] font-bold">{param.title}</span>
      </div>
      <div className="flex flex-1 flex-col items-end justify-between">
        <Png />
        <span className="text-[18px] font-bold">{param.value}</span>
        <span className="text-[11px] font-bold">Max Rating</span>
      </div>
    </motion.div>
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded }) {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    },
  };

  return (
    <motion.div
      className="absolute top-28 left-0 sm:left-[10%] lg:left-[20%] justify-center h-auto w-full sm:w-[80%] lg:w-[55%] lg:h-[75vh] my-2 z-10 rounded-lg flex flex-col items-center"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div className="cursor-pointer self-end text-white p-2">
        <AiOutlineArrowDown onClick={setExpanded} />
      </div>
        <span className="text-white text-[26px] font-bold shadow-[0px_0px_15px_15px_#fff">{param.title}</span>
      <div className="w-[100%] sm:w-[90%]">
        <Chart options={data.options} series={param.series} type="area" />
      </div>
      <span className="text-slate-200 text-[15px] pb-2">Months</span>
    </motion.div>
  );
}

export default Card;
