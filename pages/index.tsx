import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { Timeline } from "components/Timeline";
import { Projects } from "components/Projects";
import { Posts } from "components/Posts";
import Container from "components/Layout/Container";
import { StringProps } from "lib/types";
import { devices } from "lib/displayDevice";

import { Flex } from "components/Layout/Container/styles";

import ProfilePicture from "public/assets/png/Suman.png";

export default function Home() {
  return (
    <Container>
      <HeroFlex align="flex-start">
        <ContentWrapper>
          <h1>Sourabh Suman</h1>
          <h2>Full Stack Developer</h2>
          <p>
            Passionate React Developer with 3+ years of experience blending the
            design with programming skills to deliver an immersive and engaging
            user experience through efficient website development, proactive
            feature optimization, and relentless debugging –&nbsp;
            {" while you're here "}
            <Link href="/about">
              <a>learn more about me.</a>
            </Link>
          </p>
        </ContentWrapper>
        <RoundImage
          src={ProfilePicture}
          alt="Picture of Sourabh"
          width="150px"
          height="150px"
        />
      </HeroFlex>
      <Projects />
      <Posts title="Featured Stories" />
      <Timeline />
    </Container>
  );
}

export const ContentWrapper = styled.div<StringProps>`
  padding-right: 2rem;

  h1,
  h2 {
    margin: 0;
  }

  h2 {
    margin: 1rem 0;
    font-size: 1.25rem;
  }

  p {
    max-width: 65ch;
  }

  @media ${devices.mobileL} {
    margin-top: 2rem;
  }
`;

export const RoundImage = styled(Image)`
  border-radius: 50%;
`;

const HeroFlex = styled(Flex)`
  @media ${devices.mobileL} {
    flex-direction: column-reverse;
  }
`;
