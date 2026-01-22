import "dotenv/config";
function getEnv(key) {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Environment variable ${key} is not defined`);
    }
    return value;
}
export const config = {
    // Server
    PORT: Number(process.env.PORT) || 3000,
    // Database
    MONGO_URI: getEnv("MONGO_URI"),
    // Auth
    JWT_SECRET: getEnv("JWT_SECRET"),
};
//# sourceMappingURL=config.js.map