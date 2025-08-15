import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import { globalErrorHandler } from "./middlewares/errorHandler.js";
import superadminrouter from "./routes/superadmin.routes.js";
import authRouter from "./routes/auth.routes.js";
import adminRouter from "./routes/admin.routes.js";
import centerRouter from "./routes/center.routes.js";
import engagementRouter from "./routes/engagement.routes.js";
import mediaRouter from "./routes/media.routes.js";
import commentRoutes from "./routes/comments.routes.js";
import likesRouter from "./routes/like.routes.js";
import flagRoutes from "./routes/flag.routes.js";

const app = express();
const PORT = process.env.PORT ?? 8000;

app.use(cors({
    origin: process.env.ORIGIN,
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouter)
app.use('/api/superadmin', superadminrouter)
app.use('/api/admin',adminRouter)
app.use('/api/center',centerRouter)
app.use('/api/post',engagementRouter)
app.use('/api/media',mediaRouter)
app.use('/api/comments', commentRoutes);
app.use('/api/likes', likesRouter);
app.use('/api/flags', flagRoutes);




app.get("/health", (req, res) => {
    res.json({ status: "OK", timestamp: new Date().toISOString() });
});

app.use(globalErrorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
