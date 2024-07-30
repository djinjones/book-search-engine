import { gql } from '@apollo/client';

// Define the LOGIN_USER mutation
export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        username
        email
      }
    }
  }
`;

// Define the SIGNUP_USER mutation
export const SIGNUP_USER = gql`
  mutation signup($username: String!, $email: String!, $password: String!) {
    signup(username: $username, email: $email, password: $password) {
      token
      user {
        username
        email
      }
    }
  }
`;

// Export the mutations so they can be used elsewhere



// import { gql, useMutation } from '@apollo/client';

// const LOGIN_USER = gql`
//   mutation login($username: String!, $password: String!) {
//     login(username: $username, password: $password) {
//       token
//       user {
//         username
//         email
//       }
//     }
//   }
// `;

// const [loginUser] = useMutation(LOGIN_USER);

// const handleLogin = async () => {
//   try {
//     const { data } = await loginUser({ variables: { username: 'testuser', password: 'testpassword' } });
//     // Handle successful login
//   } catch (err) {
//     console.error(err);
//   }
// };
