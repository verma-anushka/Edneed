import axios from 'axios';   

import {  IMAGE_UPLOAD, LOADING } from "./types";

// ACTION CREATOR TO UPLOAD THE IMAGE
export const uploadImg = (formData) => dispatch => {

  dispatch(loading());
  axios({
        method: 'POST',
        url: "http://api.webunide.com/fs", // https://api.edneed.com/fs
        data: formData,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1ZWFiYTc5MmM1NjRmZDMyNGI0MmMwM2IiLCJpYXQiOjE1ODgzMTY4MzAsImV4cCI6MTYxOTg1MjgzMCwiYXVkIjoiaHR0cHM6Ly93d3cuZWRuZWVkLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiYzNmZDFhOGMtY2M0ZC00NzdhLWI3ZjQtNzUxODk2ZDMwMWJjIn0.vf09VNAjfapzlyXz699C_Z_zV8ztpprbH5P7EVGcwLM'
        },
        onUploadProgress: progressEvent => {
          console.log(progressEvent.loaded*100 / progressEvent.total)
        }
      }).then(res => {
        // console.log(res);
        dispatch({
            type: IMAGE_UPLOAD,
            payload: res.data
        });
      }).catch(err => {
        console.log(err);
      });
};

// ACTION CREATOR TO DISPLAY THE LOADER
export const loading = () => {
  return {
    type: LOADING
  };
};

