const defaultDuration = 500;

export const sleep = (duration = defaultDuration) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined);
    }, duration);
  });
};

export const block = (duration = defaultDuration) => {
  const start = performance.now();
  while (performance.now() < start + duration) {
    /* empty */
  }
};

export const makeExpensive =
  () =>
  (fn, duration = defaultDuration) => {
    return (...args) => {
      block(duration);
      return fn(...args);
    };
  };
