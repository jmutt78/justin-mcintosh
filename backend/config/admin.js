module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b0e4e26f32b4f7134d39de7e28d8fa16'),
  },
});
