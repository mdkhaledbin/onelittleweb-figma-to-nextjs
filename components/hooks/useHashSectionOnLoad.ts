import { useEffect } from "react";

const LAST_ACTIVE_HREF_KEY = "last-active-href";

interface UseHashSectionOnLoadProps {
  pathname: string;
  isHomeRoute: boolean;
  activeHref: string;
}

export const useHashSectionOnLoad = ({
  pathname,
  isHomeRoute,
  activeHref,
}: UseHashSectionOnLoadProps) => {
  useEffect(() => {
    const { hash, pathname: currentPathname, search } = window.location;

    if (!hash) {
      return;
    }

    const hashParts = hash
      .split("#")
      .map((part) => part.trim())
      .filter(Boolean);

    if (hashParts.length === 0) {
      window.history.replaceState(null, "", `${currentPathname}${search}`);
      return;
    }

    if (hashParts.length > 1) {
      const lastHash = hashParts[hashParts.length - 1];
      window.history.replaceState(
        null,
        "",
        `${currentPathname}${search}#${lastHash}`,
      );
    }
    if (!isHomeRoute) {
      return;
    }

    const entries = performance.getEntriesByType(
      "navigation",
    ) as Array<PerformanceNavigationTiming>;
    const isReload = entries[0]?.type === "reload";

    if (!isReload) {
      return;
    }

    const savedHref = window.sessionStorage.getItem(LAST_ACTIVE_HREF_KEY);

    if (!savedHref?.startsWith("#")) {
      return;
    }

    const targetId = decodeURIComponent(savedHref.slice(1)).trim();

    if (!targetId) {
      return;
    }

    const target = document.getElementById(targetId);

    if (!target) {
      window.sessionStorage.removeItem(LAST_ACTIVE_HREF_KEY);
      return;
    }

    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "auto", block: "start" });
    });
  }, [isHomeRoute, pathname]);

  useEffect(() => {
    if (!isHomeRoute || !activeHref.startsWith("#")) {
      return;
    }

    window.sessionStorage.setItem(LAST_ACTIVE_HREF_KEY, activeHref);
  }, [activeHref, isHomeRoute]);
};
