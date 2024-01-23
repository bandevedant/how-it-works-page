import { motion, Variants } from "framer-motion";
import "../styles.css";

import "./Card.css";

interface Props {
  url: string;
  step: string;
  desc: string;
  hueA: number;
  hueB: number;
}

const cardVariants: Variants = {
  offscreen: {
    y: 100,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 60%, 50%)`;

function Card({ url, step, desc, hueA, hueB }: Props) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div className="card" variants={cardVariants}>
        <div className="main-card">
          <div className="main-card-heading">
            <img src={url} alt="logo" />
            <h2>{step}</h2>
          </div>
          <div className="main-card-desc">
            <p>{desc}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Card;
