import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/listings", label: "Listings" },
  { href: "/reviews", label: "Reviews" },
  { href: "/sublets", label: "Sublets" },
  { href: "/login", label: "Login" },
];

export default function Nav() {
  return (
    <nav className="border-b border-black/10 dark:border-white/15">
      <div className="mx-auto flex max-w-4xl items-center gap-4 px-6 py-4">
        <span className="font-semibold">Tulane Housing Hub</span>
        <ul className="flex gap-4 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
