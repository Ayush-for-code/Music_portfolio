import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve("./backend/.env"),});

console.log(process.cwd());
console.log("CLIENT:", process.env.CLIENT);
console.log("SECRET:", process.env.SECRET);
console.log("ytkey:", process.env.YTKEY);
console.log("channelID:", process.env.CHANNEL_ID);

const app = express();
const port = 3000;

// Enable CORS for all requests
app.use(cors());

// Allow Express to parse JSON bodies
app.use(express.json());

//getting accesstoken

let accessToken = "";

const getToken = async ()=>{
     const response = await fetch(
    "https://accounts.spotify.com/api/token",
    {
      method: "POST",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(
            process.env.CLIENT +
              ":" +
              process.env.SECRET
          ).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    }
);
const data = await response.json();
console.log(data);
accessToken = data.access_token;
}

// Basic test route
app.get("/music", async (req, res) => {
  try {
    const url =  `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.CHANNEL_ID}&maxResults=6&order=date&type=video&key=${process.env.YTKEY}`;
    console.log(url)
    const response = await fetch(url);

    const data = await response.json();

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

app.listen(port, () => console.log(`Server running on http://localhost:${port} ✅`));