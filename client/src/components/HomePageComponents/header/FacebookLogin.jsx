import { createButton } from 'react-social-login-buttons';

const config = {
  text: 'Facebook',
  icon: 'facebook',
  iconFormat: (name) => `fa fa-${name}`,
  style: { background: '#3b5998' }
};

const FacebookLogin = createButton(config);

export default FacebookLogin;
