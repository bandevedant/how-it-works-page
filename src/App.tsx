import Card from "./components/Card";
import goal from "/goal.jpg";
import join from "/joingroup.jpg"
import pay from "/pay.jpg"
import rewards from "/rewards.jpg"
import Typewriter from 'typewriter-effect';

const cards: [string, string, string, number, number][] = [
  [goal, "Step 1", "Set your Goal", 200, 100],
  [join, "Step 2", "Create or Join Group", 100, 197],
  [pay, "Step 3", "Pay Amount on Time", 197, 100],
  [rewards, "Step 4", "Earn Rewards", 100, 197],
];

export default function App() {
  return <>
  {/* <h1 style={{color:"white"}}>Hello</h1> */}
  <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('LETS SEE , HOW IT WORKS...!')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(1500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
  options={{
    loop:true
  }}
/>
  {cards.map(([url, emoji, desc, hueA, hueB]) => (
    <Card
      url={url}
      step={emoji}
      desc={desc}
      hueA={hueA}
      hueB={hueB}
      key={emoji}
    />
  ))
  }
  </>
}
