class Constants {
  private readonly API_URL: string =
    "https://baptiste-marcon-api.adaptable.app";

  get apiURL(): string {
    return this.API_URL;
  }
}

export const CONSTANTS = new Constants();
