/* eslint-disable no-console */
export class LoggerService {
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
