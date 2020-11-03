export const selectFavsFromDev = (devId) => {
  return (state) => {
    const developer = state.developers.find((dev) => dev.id === devId);
    return state.resources.filter((resource) =>
      developer.favorites.includes(resource.id)
    );
  };
};
