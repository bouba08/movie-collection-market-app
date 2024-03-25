import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const Trailer = ({ id, type }) => {
  const [trailer, setTrailer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTrailer = async () => {
    
    if(type ==="movie"){
        type = "movies"
    } else if(type = "series"){
        type = "shows"
    }

    try {
      const response = await fetch(
        `https://api.kinocheck.de/${type}?imdb_id=${id}`
      );
      const data = await response.json();
      setTrailer(data.trailer);
      setLoading(false);
    } catch (error) {
      setError("Error fetching trailer");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrailer();
  }, [id, type]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>{trailer ? `"${trailer.title}"` : "N/A"}</h1>
      {/* {trailer && (
        <a href={`https://www.youtube.com/watch?v=${trailer.youtube_video_id}`}>
          <img src={trailer.youtube_thumbnail} alt="Trailer Thumbnail" />
        </a>
      )} */}
      {trailer && (
        <div className="ratio ratio-4x3">
        <iframe src={`https://www.youtube.com/embed/${trailer.youtube_video_id}?rel=0`} title="YouTube video" allowFullScreen></iframe>
      </div>

      
      )}
    </div>
  );
};

export default Trailer;