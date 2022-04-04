import AuthLogo from './extensions/RENOVI.png';
import Favicon from './extensions/fav.png';

export default {
    config: {
        auth: {
            logo: AuthLogo,
        },
        head: {
            favicon: Favicon,
        },
        menu: {
            logo: Favicon,
        },

        theme: {
            // colors: {
            //   primary100: '#6F57FF',
            //   primary200: '#e0c1f4',
            //   primary500: '#6F57FF',
            //   primary600: '#9736e8',
            //   primary700: '#6F57FF',
            // },
          },

        tutorials: false,

        notifications: { release: false },

        bootstrap(app) {
            console.log(app);
        },
  },
}
