import { config } from "dotenv";

config();

export default {
    host: process.env.HOST || "",
    host: process.env.PORT || "4100",
    database: process.env.DATABASE || "",
    user: process.env.USER || "",
    password: process.env.PASSWORD || "",

    SECRET:"products-api"
};