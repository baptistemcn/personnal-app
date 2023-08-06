const errorMap: { [key: string]: string } = {
  "TypeError: Network request failed": "error.api.notfound",
  "ThrottlerException: Too Many Requests": "error.api.request",
};

export function mapErrorFunction(errorMessage: string): string {
  return errorMap[errorMessage] || "error.unknown";
}
