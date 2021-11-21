const express = require('express');

const cors = require('cors');

const app = express();
//routers
const {userRouter} = require("./Routers/routes/userRouter")
//built-in middlewares
app.use(express.json());
//third-party middleware
app.use(cors());
//app routers
app.use('/users', userRouter);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server On ${PORT}`);
});