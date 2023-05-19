// authAPI.js

const authAPI = {
  login: async credentials => {
    console.log('Making login request with credentials:', credentials);
    const response = await fetch(
      'https://gateway.scan-interfax.ru/api/v1/account/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      },
    );
    console.log('Received login response:', response);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
    return response.json();
  },
};

export default authAPI;
