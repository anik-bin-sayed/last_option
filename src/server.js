const app = require("./app");
const connectToDB = require("./config/db");

const { serverPort } = require("./secret");

app.listen(serverPort, async () => {
  console.log(`app is running at http://localhost:${serverPort}`);
  await connectToDB();
});
