import axios from 'axios';

// export const fetchUsers = async () => {
//   try {
//     const { data } = await axios('https://user-profile-back.herokuapp.com/users');
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const login = async (user, password) => {
  try {
    const result = await axios.post('/login', {
      user,
      password,
    });
    return result;
  } catch (error) {
    return error.response;
  }
};
