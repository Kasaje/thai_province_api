import dotenv from "dotenv";

dotenv.config();

function validateClient(clientID: string): boolean {
  const validClientID = process.env.CLIENT_ID;

  if (!validClientID) {
    throw new Error("Valid client ID is not set in environment variables.");
  }

  return clientID === validClientID;
}

export { validateClient };
