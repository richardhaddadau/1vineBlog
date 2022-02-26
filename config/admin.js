module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b52b2913040b6210b9c22b9fc253518c'),
  },
});
