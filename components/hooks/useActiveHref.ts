import { useState, useEffect } from "react";

export const useActiveHref = (): string => {
  const [activeHref, setActiveHref] = useState<string>("#home");

  useEffect(() => {
    const sectionIds = [
      "home",
      "services",
      "pricing",
      "resources",
      "about",
      "blog",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for sticky navbar
      let currentActive = sectionIds[0];

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          currentActive = sectionIds[i];
          break;
        }
      }

      setActiveHref(`#${currentActive}`);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return activeHref;
};
