import React from "react";

const Video = () => {
  return (
    <section id="video" className="w-full grayscale z-0 mt-20 md:mt-0">
      <video src="./images/gucci.mp4" width="100%" loop muted autoPlay />
    </section>
  );
};

export default Video;
