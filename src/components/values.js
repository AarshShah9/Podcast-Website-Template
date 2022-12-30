const externalLinks = () => {
  return {
    spotify: "https://open.spotify.com/show/1CAareyd5S18brittKkAb1",
    apple:
      "https://podcasts.apple.com/ca/podcast/suffering-in-paradise/id1526019658",
    google:
      "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yZTVhNjczOC9wb2RjYXN0L3Jzcw==",
    instagram: "https://www.instagram.com/sufferinginparadiseig/",
    youtube: "https://www.youtube.com/channel/UCDrrkY1TVKEdAh6jLOMByLQ",
    tiktok: "https://www.tiktok.com/@sufferinginparadiseig",
  };
};
const websiteLinks = () => {
  return [
    { to: "/episodes", title: "EPISODES" },
    { to: "/team", title: "TEAM" },
    { to: "/sponsors", title: "SPONSORS" },
  ];
};

const imageLinks = () => {
  return {
    logo: "",
    headshotAarsh: "",
  };
};

export { externalLinks, websiteLinks, imageLinks };
