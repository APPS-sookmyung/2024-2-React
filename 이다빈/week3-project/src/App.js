import Gallery from "./components/Gallery";
import Video from "./components/Video";
import Header from "./components/Header";
import { dummy } from "./cardDummy";
import { useState } from "react";

function App() {
  const [play, setPlay] = useState(false);
  const videoTag = document.querySelector("video");
  const handlePlay = () => {
    if (!play) {
      videoTag.play();
    } else {
      videoTag.pause();
    }
    setPlay(!play);
  };

  return (
    <div>
      <Video play={play} handlePlay={handlePlay} />
      <div className="section">
        <Header layout="section" text="알면 알수록, Mac." />
        <Gallery dummy={dummy} />
      </div>
    </div>
  );
}

export default App;

