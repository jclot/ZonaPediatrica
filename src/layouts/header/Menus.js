import Link from "next/link";
import { Fragment } from "react";

export const Home = () => (
  <Fragment>
    <li>
      <Link legacyBehavior href="/">Home 01</Link>
    </li>
    <li>
      <Link legacyBehavior href="/home2">Home 02</Link>
    </li>
  </Fragment>
);
export const Pages = () => (
  <Fragment>
    <li>
      <Link legacyBehavior href="/calendar">Academic Calendar</Link>
    </li>
    <li>
      <Link legacyBehavior href="/testimonials">testimonials</Link>
    </li>
    <li>
      <Link legacyBehavior href="/time-table">Time Table</Link>
    </li>
    <li>
      <Link legacyBehavior href="/gallery">gallery</Link>
    </li>
    <li>
      <Link legacyBehavior href="/pricing">pricing</Link>
    </li>
    <li>
      <Link legacyBehavior href="/faq">Faq</Link>
    </li>
  </Fragment>
);
export const Teacher = () => (
  <Fragment>
    <li>
      <Link legacyBehavior href="/teacher">Teacher</Link>
    </li>
    <li>
      <Link legacyBehavior href="/teacher-details">Teachers Details</Link>
    </li>
  </Fragment>
);
export const Classes = () => (
  <Fragment>
    <li>
      <Link legacyBehavior href="/classes">Classes</Link>
    </li>
    <li>
      <Link legacyBehavior href="/classe-details">Classes Details</Link>
    </li>
  </Fragment>
);
export const Event = () => (
  <Fragment>
    <li>
      <Link legacyBehavior href="/events">Event</Link>
    </li>
    <li>
      <Link legacyBehavior href="/event2">Event 2</Link>
    </li>
    <li>
      <Link legacyBehavior href="/event-details">Events Details</Link>
    </li>
  </Fragment>
);
export const Program = () => (
  <Fragment>
    <li>
      <Link legacyBehavior href="/program">Program</Link>
    </li>
    <li>
      <Link legacyBehavior href="/program-details">program details</Link>
    </li>
  </Fragment>
);
export const Blog = () => (
  <Fragment>
    <li>
      <Link legacyBehavior href="/blog-grid">blog grid</Link>
    </li>
    <li>
      <Link legacyBehavior href="/blog-list">blog list</Link>
    </li>
    <li>
      <Link legacyBehavior href="/blog-single">blog single</Link>
    </li>
  </Fragment>
);
export const Shop = () => (
  <Fragment>
    <li>
      <Link legacyBehavior href="/shop">Shop</Link>
    </li>
    <li>
      <Link legacyBehavior href="/shop-details">Shop Details</Link>
    </li>
  </Fragment>
);
export const About = () => <Link legacyBehavior href="/about">About</Link>;
export const Contact = () => <Link legacyBehavior href="/contact">CONTACTS</Link>;
