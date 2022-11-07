import { NextApiHandler } from "next";

const testimonials: NextApiHandler = (req, res) => {
  res.status(200).json([
    // {
    //   title: "Doesn’t feel like an contractor",
    //   text: "Sourabh is an exceptional developer. He is a team player and is great with communicating throughout the whole project. Sourabh really went above and beyond what was required from him. I really enjoyed working with Sourabh and near the end of the project it didn't feel like he was a contractor anymore.",
    //   author: "Duong Nguyen",
    //   position: "Co-founder & CTO of Finerpoint",
    //   picture: "Finerpoint",
    // }
  ]);
};

export default testimonials;
