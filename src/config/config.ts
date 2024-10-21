import dotenvFlow from "dotenv-flow";
import logger from "../util/logger";

const result = dotenvFlow.config();

if (result.error) {
    logger.error("Error loading .env files", result.error);
    throw result.error; 
}
    logger.log("Environment Variables:", {
    ENV: process.env.ENV,
    PORT: process.env.PORT,
    SERVER_URL: process.env.SERVER_URL
});
export default {
    // General
    ENV: process.env.ENV,
    PORT: process.env.PORT,
    SERVER_URL: process.env.SERVER_URL,

    // Database
    // DATABASE_URL: process.env.DATABASE_URL
};


// import dotenvFlow from "dotenv-flow";

// import dotenv from "dotenv";

// dotenv.config();

// // dotenvFlow.config();

// console.log("Environment Variables:", {
//     ENV: process.env.ENV,
//     PORT: process.env.PORT,
//     SERVER_URL: process.env.SERVER_URL,
//     // DATABASE_URL: process.env.DATABASE_URL,
// });

// export default {
//     // General
//     ENV: process.env.ENV,
//     PORT: process.env.PORT,
//     SERVER_URL: process.env.SERVER_URL,

//     // Database
//     // DATABASE_URL: process.env.DATABASE_URL
// };
