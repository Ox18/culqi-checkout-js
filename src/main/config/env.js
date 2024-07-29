const env = {
  port: process.env.PORT || 3000,
  private_key: process.env.PRIVATE_KEY || 'sk_xxxxxxxxxxxxxxx',
  public_key: process.env.PUBLIC_KEY || 'pk_xxxxxxxxxxxxxxx',
};

module.exports = env;
