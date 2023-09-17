/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLoggerService } from "./index";

global.console = {
  ...console,
  log: jest.fn(),
  debug: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};

describe("LoggerService", () => {
  let logger: any;

  beforeEach(() => {
    logger = useLoggerService();
    jest.spyOn(global.console, "log").mockImplementation(jest.fn());
    jest.spyOn(global.console, "debug").mockImplementation(jest.fn());
    jest.spyOn(global.console, "warn").mockImplementation(jest.fn());
    jest.spyOn(global.console, "error").mockImplementation(jest.fn());
  });

  it("should log info message", () => {
    const spy = jest.spyOn(console, "log");
    const message = "This is an info message";

    logger.logInfo(message);

    expect(spy).toHaveBeenCalledWith(`[INFO] ${message}`);
    spy.mockRestore();
  });

  it("should log error message with an error object", () => {
    const spy = jest.spyOn(console, "error");
    const message = "This is an error message";
    const error = new Error("Sample error");

    logger.logError(message, error);

    expect(spy).toHaveBeenCalledWith(`[ERROR] ${message}`, error);
    spy.mockRestore();
  });

  it("should log warning message", () => {
    const spy = jest.spyOn(console, "warn");
    const message = "This is a warning message";

    logger.logWarning(message);

    expect(spy).toHaveBeenCalledWith(`[WARNING] ${message}`);
    spy.mockRestore();
  });

  it("should log debug message", () => {
    const spy = jest.spyOn(console, "debug");
    const message = "This is a debug message";

    logger.logDebug(message);

    expect(spy).toHaveBeenCalledWith(`[DEBUG] ${message}`);
    spy.mockRestore();
  });
});
