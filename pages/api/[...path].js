import app from "../../server/app";

// Express parses the body itself (express.json in server/app.js)
export const config = { api: { bodyParser: false, externalResolver: true } };

export default app;
