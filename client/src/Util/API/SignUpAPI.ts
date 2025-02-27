import { postAPIModel } from './ReqAPIModel';

const SIGN_UP_API_BASE_URI = '/api/signup';

const postCreateAcc = async (uid: string, email: string, username: string) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const res = await postAPIModel(
        SIGN_UP_API_BASE_URI + '/create-user-acc',
        {
          uid,
          email,
          username,
        }
      );

      resolve('Success create account');
    } catch (err) {
      console.error(err);
      reject('Failed create account');
    }
  });
};

const postCreateXpxAcc = async () => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const res = await postAPIModel(SIGN_UP_API_BASE_URI + '/create-xpx-acc');

      resolve(res.data);
    } catch (err) {
      console.error(err);
      reject('Failed create xpx account');
    }
  });
};

const postUpdateUserXpxAddress = async (uid, xpxAddress) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const res = await postAPIModel(
        SIGN_UP_API_BASE_URI + '/update-user-xpx-address',
        { uid, xpxAddress }
      );

      resolve('Success');
    } catch (err) {
      console.error(err);
      reject('Failed create xpx account');
    }
  });
};

export { postCreateAcc, postCreateXpxAcc, postUpdateUserXpxAddress };
