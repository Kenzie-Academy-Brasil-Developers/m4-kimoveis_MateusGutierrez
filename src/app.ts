import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { categoriesRouter, loginRouter, realEstateRouter, scheduleRouter, userRouter } from "./routers";
import { handleError } from "./middlewares";

const app = express();
app.use(express.json());

app.use("/users", userRouter)
app.use("/login", loginRouter)
app.use("/categories", categoriesRouter)
app.use("/realEstate", realEstateRouter)
app.use("/schedules", scheduleRouter)

app.use(handleError)
export default app;
