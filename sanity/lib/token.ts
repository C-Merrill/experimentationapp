export const token = process.env.SANITY_VIEWER_TOKEN;

if (!token) {
    throw new Error("Missing environment variable SANITY_VIEWER_TOKEN")
}