export default function Subreddit({ item }) {
  let icon;
  let reddit;

  for (let key in item) {
    if (key === "iconUrl") {
      if (item[key] === "") {
        icon =
          "https://www.iconpacks.net/icons/2/free-reddit-logo-icon-2436-thumb.png";
      } else {
        icon = item[key];
      }
    }
    if (key === "subreddit") {
      reddit = item[key];
    }
  }

  return (
    <div className="flex mb-6">
      <img src={icon} alt="icon" className="w-6 h-6 mr-3" />
      <div className="font-semibold text-sm">{reddit}</div>
    </div>
  );
}
