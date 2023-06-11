export const APP_ACTIONS = {
  SHOW_LOADER: "SHOW_LOADER",
};

export const updateLoaderState = (payload) => {
  return {
    type: APP_ACTIONS.SHOW_LOADER,
    payload,
  };
};
