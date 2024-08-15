import { useEffect } from 'react';
import {
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';

const LoginPage = () => {
  const navigate = useNavigate();

  // 구글 로그인 시도
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithRedirect(auth, provider);
  };

  return (
    <div>
      <button onClick={handleGoogleLogin}>Google로 로그인</button>
    </div>
  );
};

export default LoginPage;
