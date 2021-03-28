import { Logger } from "optic";

export default async (msg) => {
  const logger = new Logger();
  logger.info(msg);  // outputs log record to the console
}  