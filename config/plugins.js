module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'mojodigital13@gmail.com',
          defaultReplyTo: 'hello@mojodigital.io',
        },
      },
    },
    // ...
  });