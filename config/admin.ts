export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e2f2d73cd871e13112fca1195dad6c05'),
  },
});
