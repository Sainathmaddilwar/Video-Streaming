import React, { useState, useEffect } from "react";
import axios from "axios";
import Cardlayout from "./components_ui/Card";
import "./styles.css";
import Grid from "@mui/material/Grid";
const Url =
  "https://f44262b6-e457-4d14-b59b-04b147780d20.mock.pstmn.io/v1/videos/https://f44262b6-e457-4d14-b59b-04b147780d20.mock.pstmn.io/v1/videos/";

const VideoSearch = () => {
  const [data, setData] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const fetchVideo = async () => {
    if(searchKey.length > 0){
      const searchUrl = `https://f44262b6-e457-4d14-b59b-04b147780d20.mock.pstmn.io/v1/videos?genres=${searchKey}`;
      const response = await axios.get(searchUrl);
      setData(response.data.videos);
    }
    else{
    const response = await axios.get(Url);
    setData(response.data.videos);
    console.log(response.data);
    }
  };

  useEffect(() => {
    
    fetchVideo();
    
  }, []);
  useEffect(()=>{
  fetchVideo();
  },[searchKey])
  return (
    <div>
      <h2 className="logo">Video Searcher</h2>
      <div>
        <input
          className="search"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <br />
      </div>
      <Grid container spacing={2}>
        {data.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <Cardlayout data={item} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
export default VideoSearch;
