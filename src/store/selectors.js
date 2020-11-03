export const selectFavsFromDev = (myDeveloper) => {
  console.log("devId:", myDeveloper);
  return (state) => {
    const developer = state.developers.find((dev) => dev.id === myDeveloper);
    return state.resources.filter((resource) =>
      developer.favorites.includes(resource.id)
    );
  };
};

export const selectLoggedinUser = (state) => {
  const developer = state.developers.find(
    (dev) => dev.name === state.user.name
  );
  return { name: state.user.name, developer };
};
