'use client'
import { useRouter } from 'next/navigation';
import { useGoogleLogin } from '@react-oauth/google';
import googleLogin from '../../core/api/fetchApi';

const GoogleBtn = () => {
  const router = useRouter();

  const handleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        // Fetch user information from Google's userinfo endpoint
        const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        });

        // Check if the response is ok and is of type 'application/json'
        if (userInfoResponse.ok && userInfoResponse.headers.get('content-type')?.includes('application/json')) {
          const userInfo = await userInfoResponse.json();
          const userEmail = userInfo.email;

          // Perform the login operation with the obtained email
          googleLogin(userEmail).then(data => {
            console.log('Received data:', data);
            if (data.exists) {
              console.log('Redirecting to dashboard.');
              router.push('/dashboard')
                .then(() => console.log('Redirect successful'))
                .catch((error) => console.error('Redirect failed:', error));
            } else {
              console.log('User does not exist.');
            }
          }).catch(error => {
            console.error('Error during login:', error);
          });

        } else {
          // If response is not ok or not JSON, log the error response
          const errorText = await userInfoResponse.text();
          console.error('Error fetching user info. Response not OK or not JSON:', errorText);
        }
      } catch (error) {
        // Catch any errors that occur during the fetch operation
        console.error('Error during fetching user info:', error);
      }
    },
    onError: error => {
      // Handle errors that occur during the Google login process
      console.error('Login Failed:', error);
    }
  });

  return (
    <button
      onClick={handleLogin}
      className="flex w-full items-center justify-center gap-3 rounded-md bg-[#FBBC05] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FBBC05]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 488 512"
      >
        <path className="fill-white" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
      </svg>
      <span className="text-sm font-semibold leading-6">Google</span>
    </button>
  );
};

export default GoogleBtn;
