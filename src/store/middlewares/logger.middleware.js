const LoggerMiddleWare = (store) => (next) => (action) => {
  console.log(store);
  const result = next(action);
  return result;
};

export default LoggerMiddleWare;
