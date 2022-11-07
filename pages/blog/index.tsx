import styled from "styled-components";
import Container from "components/Layout/Container";
import { Posts } from "components/Posts";

export default function Blog() {
  return (
    <Container title="Blog - Sourabh Suman">
      <h1>Blog</h1>
      <Paragraph>
        I have always been told that to write down something is a great way to
        reinforce your knowledge, as it helps to clear any doubts.{" "}
        <br />
      
        When i started my career i focused mainly on technical side rather than documentation and drafting, 
        But as i'm gaining more experience i'm starting to realize the importance of writing things.
        So i'm going to darft my learnings/experiences for me and for the internet to read.
      </Paragraph>
      <Posts title="All Stories" />
    </Container>
  );
}

export const Paragraph = styled.p`
  br {
    content: "";
    margin: 1rem;
    display: block;
  }
`;
