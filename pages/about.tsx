import Container from "components/Layout/Container";
import { TestimonialList } from "components/TestimonialList";
import { Paragraph } from "pages/blog";

export default function Testimonials() {
  return (
    <Container title="Testimonials - Sourabh Suman">
      <h1>About Me</h1>
      <Paragraph>
        I am a Full Stack Developer with 4+ years of experience in building
        scalable and maintainable web applications. I have worked with
        technologies like React, React Native, Node.js, Express.js, MongoDB,
        PostgreSQL, GraphQL, and AWS.
        
      </Paragraph>
      <TestimonialList />
    </Container>
  );
}
