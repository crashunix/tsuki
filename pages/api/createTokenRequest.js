import Ably from "ably/promises";

export default async function handler(req, res) {
    const apiKey = process.env.ABLY_API_KEY;
    const client = new Ably.Realtime(apiKey);
    const tokenRequestData = await client.auth.createTokenRequest({ clientId: 'ably-nextjs-demo' });
    res.status(200).json(tokenRequestData);
};