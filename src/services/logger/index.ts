/* eslint-disable no-console */
class LoggerService {
  logInfo(message: string) {
    console.log(`[INFO] ${message}`);
  }

  logError(message: string, error: Error) {
    console.error(`[ERROR] ${message}`, error);
  }

  logWarning(message: string) {
    console.warn(`[WARNING] ${message}`);
  }

  logDebug(message: string) {
    console.debug(`[DEBUG] ${message}`);
  }
}

export const useLoggerService = () => {
  const logger = new LoggerService();

  return logger;
};
