import { createButton } from 'react-social-login-buttons';

const config = {
  text: 'Google',
  icon: 'facebook',
  iconFormat: (name) => `fa fa-${name}`,
  style: { background: '#3a8cf7' }
};
const GoogleLogin = createButton(config);

export default GoogleLogin;
