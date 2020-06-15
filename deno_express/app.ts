import { opine } from "./dependencies.ts";
import { bookApiRouter } from "./routers.ts";

const app = opine();
const PORT = 8000;

app.use("/api/v1", bookApiRouter);
app.listen(PORT);

console.log(`API server running on port ${PORT}`);
