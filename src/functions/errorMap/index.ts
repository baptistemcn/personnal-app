const error: { [key: string]: string } = {
  "TypeError: Network request failed": "error.api.notfound",
  "ThrottlerException: Too Many Requests": "error.api.request",
};

export function mapError(errorMessage: string): string {
  return error[errorMessage] || "error.unknown";
}
