import * as Yup from 'yup';

export const signFomrSchema = Yup.object({
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});
