module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8a083d1ec3e62ed63c6***********'),
  },
});
