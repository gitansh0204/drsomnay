import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
  <div className="grid justify-center md:m-8">
    <h6 className="text-aboutText text-left font-montserrat font-medium tracking-[0.18rem] mb-5"></h6>
    <iframe
    
      className="md:w-[46rem] h-[18rem] sm:w-[25rem]  md:h-[30rem]"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="About Us"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;