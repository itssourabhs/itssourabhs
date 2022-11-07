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
      <Year>2021</Year>
      <ul>
        <Step title="Joined Vabaco">
          I'm thrilled about this new role as a React Developer, helping create
          enterprise web applications for healthcare services.
        </Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Step title="Top Rated Freelancer on Upwork">
          I'm very exited to represent the top 10% of talent on Upwork. The
          grind has just begun!
        </Step>
        <Step title="Open-Source React Template">
          Created a{" "}
          <a
            href="https://github.com/Adrinlol/landy-react-template"
            target="_blank"
            rel="noopener noreferrer"
          >
            template
          </a>{" "}
          that comes with multi-lingual support, smooth animations, contact form
          built with React Hooks and error validations, set of ready to use
          sections and most importantly, a PERFECT score on Lighthouse.
        </Step>
        <Step title="First Article on Medium">
          Wrote my{" "}
          <a
            href="https://medium.com/swlh/setting-up-and-deploying-a-twitter-app-from-scratch-twitter-bot-article-8b6798d68a16"
            target="_blank"
            rel="noopener noreferrer"
          >
            first article
          </a>{" "}
          on how to set up an deploy a twitter app from scratch. This bot was
          able to search, retweet and like all the tweets containing the
          provided keyword.
        </Step>
        <Step title="Second Project for the Open-Source">
          This was around the time when I was reading a lot about JavaScript, so
          instead of having bunch of different articles and books, I decided to
          create{" "}
          <a
            href="https://github.com/Adrinlol/javascript-guide"
            target="_blank"
            rel="noopener noreferrer"
          >
            one project
          </a>{" "}
          aimed at combining basic to advanced concepts.
        </Step>
        <Step title="Wrote First Open-Source Project">
          Open-sourced{" "}
          <a
            href="https://github.com/Adrinlol/javascript-color-gradient"
            target="_blank"
            rel="noopener noreferrer"
          >
            my first project
          </a>
          , currently holding over 1.7k monthly downloads. <br />
          It handles the login behind generating an array of color gradients by
          providing start and finish colors, as well as the required number of
          midpoints.
        </Step>
        <Step title="Completed My First Project on Upwork">
          Developed a responsive, multi-language landing page for an AI
          consulting company using React.js.
        </Step>
      </ul>
      <Divider />
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
