import { Link } from "@tanstack/react-router";
import { Logo } from "./logo";
import { motion } from "framer-motion";

export const Navbar = () => {
  const navItems = [
    {
      linkTo: "/albums",
      name: "Albums",
    },
  ];

  return (
    <nav className="py-4 max-h-28 flex items-center justify-between">
      <Link to="/">
        <Logo size="lg" />
      </Link>
      <ul>
        {navItems.map((navItem, index) => (
          <Link to={navItem.linkTo}>
            <motion.li
              whileHover={{ scale: 1.05 }}
              key={index}
              className="text-foreground/90 underline cursor-pointer text-md hover:text-foreground"
            >
              {navItem.name.toUpperCase()}
            </motion.li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};
