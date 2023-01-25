const FOOTER_ITEMS = [
  { item: "About", href: "" },
  { item: "Blog", href: "" },
  { item: "Jobs", href: "" },
  { item: "Help", href: "" },
  { item: "API", href: "" },
  { item: "Privacy", href: "" },
  { item: "Top Accounts", href: "" },
  { item: "Hashtags", href: "" },
  { item: "Locations", href: "" },
  { item: "Top Ramens", href: "" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 h-32 bottom-0">
      <div className="w-4/5 mx-auto">
        <div className="flex justify-around mx-auto pt-8 text-xs text-gray-500 font-light">
          {FOOTER_ITEMS.map((item) => (
            <a className="hover:underline" href={item.href}>
              {item.item}
            </a>
          ))}
        </div>
        <div className="flex justify-center text-xs mt-4 text-gray-500 font-light">
          <p>©2022 Ramen Patrol from Takenaka Yuto</p>
        </div>
      </div>
    </footer>
  );
}
