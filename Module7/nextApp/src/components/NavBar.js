"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar() {
  const path = usePathname();
  console.log(path);

  return (
    <nav
      className="NavBar"
      style={{ backgroundColor: "#FF93D5", color: "#FFFFFF" }}
    >
      <ul className="menu">
        {/* Next.js Link components use href instead of to prop */}{" "}
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link
            href="/about"
            className={path.startsWith("/about") ? "active" : null}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/bitcoin"
            className={path.startsWith("/bitcoin") ? "active" : null}
          >
            Bitcoin
          </Link>
        </li>
        <li>
          <Link
            href="/posts"
            className={path.startsWith("/posts") ? "active" : null}
          >
            Posts
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
