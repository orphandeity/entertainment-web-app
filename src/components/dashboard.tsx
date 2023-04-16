import Image from "next/image";
import logo from "@/assets/logo.svg";
import user from "@/assets/image-avatar.png";
import navHome from "@/assets/icon-nav-home.svg";
import navMovies from "@/assets/icon-nav-movies.svg";
import navTv from "@/assets/icon-nav-tv-series.svg";
import navBookmark from "@/assets/icon-nav-bookmark.svg";

import styles from "@/styles/dashboard.module.css";

export default function Dashboard() {
  return (
    <aside className={`${styles.dashboard}`}>
      <Image src={logo} alt="" className="h-auto w-6 md:w-8" />
      <nav className={`${styles.nav}`}>
        <ul>
          <li>
            <Image src={navHome} alt="" />
          </li>
          <li>
            <Image src={navMovies} alt="" />
          </li>
          <li>
            <Image src={navTv} alt="" />
          </li>
          <li>
            <Image src={navBookmark} alt="" />
          </li>
        </ul>
      </nav>
      <Image src={user} alt="" className="h-auto w-6 md:w-8 lg:w-10" />
    </aside>
  );
}
