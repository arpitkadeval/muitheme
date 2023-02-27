const LoggerMiddleWare = () => (next) => (action) => {
  const result = next(action);
  return result;
};

export default LoggerMiddleWare;
