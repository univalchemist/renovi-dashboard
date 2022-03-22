module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3b53b73a486be5f1214c18896bb82114'),
  },
});
