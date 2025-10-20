//import { Inngest } from "inngest";


//export const inngest = new Inngest({ id: "teachus", name: "TeachUs" });
import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "teachus", // Unique app ID
  name: "Teach Us", // Human-readable app name
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});