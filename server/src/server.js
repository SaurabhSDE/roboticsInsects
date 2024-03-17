import app from "./index.js";
import cors from "cors";

const Port = process.env.PORT || 4000;
app.use(cors());
app.listen(Port,() => {
    console.log("Listening on port",Port)
})
