import axios from "axios";

//TODO process.env.API_BASE_URL!
//TODO process.env.API_KEY!

export default axios.create({
  baseURL: "https://tvztjkwemzrcuvxxcbpb.supabase.co/rest/v1",
  headers: {
    "Content-type": "application/json",
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2enRqa3dlbXpyY3V2eHhjYnBiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQzNTk3MzMsImV4cCI6MTk3OTkzNTczM30.8G2iWwdOMiRtuHRIpFENKBtzxxK5mx7l1T8mZlmIQnw",
    Prefer: "return=representation",
  },
});
