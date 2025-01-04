const BEARER_TOKEN = "bearerToken";

export function setBearerToken(token: string) {
  localStorage.setItem(BEARER_TOKEN, token);
}

export function getBearerToken(): string | null {
  return localStorage.getItem(BEARER_TOKEN);
}

export function cleanBeareToken() {
  localStorage.removeItem(BEARER_TOKEN);
}
