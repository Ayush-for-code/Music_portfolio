import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
console.log("CLIENT:", process.env.CLIENT);
console.log("SECRET:", process.env.SECRET);

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

   if (!accessToken) {
    await getToken();
  }

  const response = await fetch(
    "https://api.spotify.com/v1/search?q=arijit&type=track&limit=6",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

 console.log("Status:", response.status);
console.log("Content-Type:", response.headers.get("content-type"));

const text = await response.text();
console.log(text);

res.send(text);
});

app.listen(port, () => console.log(`Server running on http://localhost:${port} ✅`));