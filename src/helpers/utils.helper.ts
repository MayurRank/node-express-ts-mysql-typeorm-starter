export const toPromise = async (promise: Promise<any>) => {
  try {
    const data = await promise;
    return [null, data];
  } catch (err) {
    return [err];
  }
};
