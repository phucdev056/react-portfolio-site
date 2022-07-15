import React, { useState } from "react";
import { videoData } from "../constants";
import CloseIcon from "../assets/images/close.png";

const Hero = () => {
  const [selectedVideo, setSelectedVideo] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  
  const handleVisibleVideoModal = (video) => {
    setModalOpen(true);
    setSelectedVideo(video);
  }


  return (
    <>
      <section className="hero-section">
        <div className="container">
          <h2>my portfolio</h2>
          <p className="description">I edit many types of videos for a range of clients. Here are examples of the different edits I can produce.</p>
          <div className="video-grid">
            {videoData.map((video) => (            
              <div className="video-grid-item" key={video.id} onClick={() => handleVisibleVideoModal(video)}>
                <div className="video-grid-item-inner">
                  <img src={video.image} alt="video" />
                  <div className="video-grid-item-title">
                    <span>{video.title}</span>
                  </div>
                </div>
            </div>
            ))}
          </div>
        </div>
      </section>
      {modalOpen && (
        <section className="modal__bg">
          <div className="modal__align">
            <div className="modal__content">
              <div className="modal__close" onClick={() => setModalOpen(false)}>
                <img src={CloseIcon} alt="" />
              </div>             
              <div className="modal__video-align">
                <iframe
                  className="modal__video-style"                
                  loading="lazy"
                  width="640"
                  height="390"
                  src={selectedVideo.video_url}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

                <p className="video-title">{selectedVideo.title}</p>
                <div className="video-divider" />
                <p className="video-views"><span>{selectedVideo.views} views</span></p>
                <p>{selectedVideo.description}</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Hero;
