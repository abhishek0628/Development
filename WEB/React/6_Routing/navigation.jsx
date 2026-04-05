import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // suppose login successful
    navigate('/dashboard'); // redirect to dashboard
  };

  return <button onClick={handleLogin}>Login</button>;
}