const levels = ["error", "warn", "info", "debug"];

const resolveLevel = () => {
  const level = (process.env.LOG_LEVEL || "info").toLowerCase();
  const idx = levels.indexOf(level);
  return idx === -1 ? levels.indexOf("info") : idx;
};

const threshold = resolveLevel();

const shouldLog = (level) => levels.indexOf(level) <= threshold;

const serializeMessage = (message) => {
  if (typeof message === "string") return message;
  if (message instanceof Error) return message.message;
  try {
    return JSON.stringify(message);
  } catch (error) {
    return String(message);
  }
};

const log = (level, message, meta = {}) => {
  if (!shouldLog(level)) return;

  const payload = {
    level,
    timestamp: new Date().toISOString(),
    message: serializeMessage(message),
    ...meta,
  };

  if (level === "error") {
    console.error(JSON.stringify(payload));
    return;
  }

  console.log(JSON.stringify(payload));
};

module.exports = {
  error: (message, meta) => log("error", message, meta),
  warn: (message, meta) => log("warn", message, meta),
  info: (message, meta) => log("info", message, meta),
  debug: (message, meta) => log("debug", message, meta),
};
