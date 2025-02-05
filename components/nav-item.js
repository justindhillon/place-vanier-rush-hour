import Link from "next/link";

export default function NavItem ({ text, href, active }) {
  return (
    <Link href={href}
        className={`nav__item ${
          active ? "active" : ""
        }`}
      >
        {text}
    </Link>
  );
}
