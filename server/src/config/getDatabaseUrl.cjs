const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development: "postgres://postgres:postgres@localhost:5432/jacob-personal-site_development",
      test: "postgres://postgres:postgres@localhost:5432/jacob-personal-site_test",
      e2e: "postgres://postgres:postgres@localhost:5432/jacob-personal-site_e2e",
    }[nodeEnv] || process.env.DATABASE_URL
  );
};

module.exports = getDatabaseUrl;
