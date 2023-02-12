const { REACT_APP_CLIENTID, REACT_APP_CLIENTSECRET, REACT_APP_SHOWID } =
  process.env;

const Credentials = () => {
  return {
    // ClientId: "Add Client ID here",
    // ClientSecret: "Add Client Secret here",
    // showId: "Add show ID here",
    ClientId: REACT_APP_CLIENTID,
    ClientSecret: REACT_APP_CLIENTSECRET,
    showId: REACT_APP_SHOWID,
  };
};

export { Credentials };
