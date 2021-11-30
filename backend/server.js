const express = require("express");

const cors = require("cors");
const app = express();

const { userRouter } = require("./Routers/routes/userRouter");

app.use(express.json());

app.use(cors());

app.use("/users", userRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
