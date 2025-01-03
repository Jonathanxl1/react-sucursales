export function setBearerToken(token: string) {
  localStorage.setItem("bearerToken", token);
}

export function getBearerToken(): string | null {
  return localStorage.getItem("bearerToken");
}
