import { opine } from "./dependencies.ts";

const app = opine();
const PORT = 8000;

app.listen(PORT);

console.log(`API server running on port ${PORT}`);
