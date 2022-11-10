import { useState } from "react";
import { ChildrenStringProps } from "lib/types";
import { COLOR_SPOTIFY_GREEN } from "lib/colorPalette";

import { DividerBorder, StepLi, MoreButton } from "components/Timeline/styles";

const Divider = () => <DividerBorder />;

const Year = ({ children }: ChildrenStringProps) => <h4>{children}</h4>;

export const Timeline = () => {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  const Step = ({ title, children }: ChildrenStringProps) => (
    <StepLi>
      <div>
        <svg viewBox="0 0 24 24">
          <g
            fill="none"
            stroke={COLOR_SPOTIFY_GREEN}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <h5>{title}</h5>
      </div>
      <p>{children}</p>
    </StepLi>
  );

  const FullTimeline = () => (
    <>
      <Divider />
      <Year>2013</Year>
      <ul>
        <Step title="Started at College">
          I started studying Information Technology at Rustamji Institute of Technology.
        </Step>
      </ul>
      <Divider />
    </>
  );

  return (
    <>
      <h3>Timeline</h3>
      <Year>2020</Year>
      <ul>
        <Step title="Joined Samarth E-Gov">
          Joined Samarth E-Gov Project Under the Ministry of Education, Govt. of India as a Full Stack Software Developer.
          <br/>
          Worked with WowChess on there mobile app
        </Step>
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title="Joined Krenai Services Private Limited">
          Joined Krenai Services Private Limited as a Mobile Application Developer.Learnt Java, Android Studio.
          Worked under founders of the company. Maintained and Developed client's Android Application (ProteinOClock and Dailymeals).
          <br/>
          Pitched React-Native as a solution to cut down development time of Android and iOS Apps the company and
          got the approval to start learning React-Native. Built a prototype in React-Native and built a team to work on 
          the React-Native. Published More than 8 apps on Play Store & App Store.
        </Step>
      </ul>
      <Divider />
      <Year>2018</Year>
      <ul>
        <Step title="Working & Learning">
          Got hooked on Data Analysis. Learnt ETL (using Python), SQL and Big Data. Worked on many fun projects like Bounding Box, Verifying Video
          Segment Labels and VCA-Calibration Rating, learnt a lot and had a lot of fun.
          <br/>
          Completed Data Analyst with Python, SQL Fundamentals and Data Visualization with Python Career Track on DataCamp.
        </Step>
      </ul>
      <Divider />
      <Year>2017</Year>
      <ul>
        <Step title="Joined GlobalLogic">
          I was offered and accepted a full-time offer as a Associate Data Analyst with GlobalLogic - An American digital services company
          providing software product design and development services.
        </Step>
        </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <MoreButton type="button" onClick={() => showFullTimeline(true)}>
          See More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </MoreButton>
      )}
    </>
  );
};
