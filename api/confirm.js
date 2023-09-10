import { axios } from '@lib';

const confirm = async (token) => {
  return await axios.post(`/signup/confirm/${token}`);
};

export default confirm;
