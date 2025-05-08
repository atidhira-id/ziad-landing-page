import { SectionContainer } from "@/components/Containers";
import React from "react";

function VideoProfile() {
  return (
    <SectionContainer className="flex justify-center mt-20">
      <iframe
        src="https://www.youtube-nocookie.com/embed/PWZgd502rfA?si=9PrRM7OJpcuBpihb&amp;start=3&amp;rel=0&amp;controls=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full max-w-screen-lg aspect-video rounded-xl"
      ></iframe>
    </SectionContainer>
  );
}

export default VideoProfile;
