import axios from "axios";

const KEY = "AIzaSyAnnhN5jfnN7NwzR6sq03vgNkHVCiAkmds";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
    }
});

