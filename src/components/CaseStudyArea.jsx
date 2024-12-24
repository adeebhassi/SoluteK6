import React, { useState } from 'react';

const CaseStudyVideo = ({ videoId, videoSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const togglePlay = () => {
    const video = document.getElementById(videoId);
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleFullscreen = () => {
    const video = document.getElementById(videoId);
    if (isFullscreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    } else {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="col-lg-6 mt-3 col-md-6">
      <div className="case-studies-single-box">
        <div className="case-studies-thumb">
          <video
            id={videoId}
            className="videi1"
            src={videoSrc}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          ></video>
          <div className="play-overlay" onClick={togglePlay}>
            <div className="play-button"></div>
          </div>
          <div className="fullscreen-button" onClick={toggleFullscreen}>
            <i className="bi bi-fullscreen"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

const CaseStudiesArea = () => {
  return (
    <div className="case-studies-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h6 className="section-sub-title">
                De Koshur Crafts: Redefining Excellence in Handicraft Partnerships
              </h6>
              <div className="col-lg-8 m-auto">
                <h1 className="section-main-title2">
                  Empowering Artisans, Driving Innovation, Leading Globally with Purpose and Inclusivity
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="case-studies-box">
            <div className="row">
              <CaseStudyVideo videoId="video1" videoSrc="/videos/video-1.mp4" />
              <CaseStudyVideo videoId="video2" videoSrc="/videos/video-2.mp4" />
              <CaseStudyVideo videoId="video3" videoSrc="/videos/video-3.mp4" />
              <CaseStudyVideo videoId="video4" videoSrc="/videos/video-4.mp4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesArea;
