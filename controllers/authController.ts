import { validateClient } from "@/services/authService";

function validateClientHandler(clientId: string): boolean {
  return validateClient(clientId);
}

export { validateClientHandler };
