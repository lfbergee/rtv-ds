export const generateId = (id: string | undefined): string => {
  if (id) {
    return id;
  }

  return `${new Date().valueOf()}`;
};
