module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'info@renovi.io',
          defaultReplyTo: 'info@renovi.io',
        },
      },
    },
    // ...
  });