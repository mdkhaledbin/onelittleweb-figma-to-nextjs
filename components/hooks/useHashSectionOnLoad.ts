import { useEffect } from "react";

const LAST_ACTIVE_HREF_KEY = "last-active-href";

const decodeHashValue = (value: string): string => {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
};

const normalizeCurrentHash = () => {
  const { hash, pathname: currentPathname, search } = window.location;

  if (!hash) {
    return;
  }

  const decodedHash = decodeHashValue(hash.slice(1));
  const hashParts = decodedHash
    .split("#")
    .map((part) => part.trim())
    .filter(Boolean);

  if (hashParts.length === 0) {
    window.history.replaceState(null, "", `${currentPathname}${search}`);
    return;
  }

  const lastHash = hashParts[hashParts.length - 1];
  const normalizedHash = `#${encodeURIComponent(lastHash)}`;

  if (hash !== normalizedHash) {
    window.history.replaceState(
      null,
      "",
      `${currentPathname}${search}${normalizedHash}`,
    );
  }
};

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
    normalizeCurrentHash();

    window.addEventListener("hashchange", normalizeCurrentHash);

    return () => {
      window.removeEventListener("hashchange", normalizeCurrentHash);
    };
  }, []);

  useEffect(() => {
    normalizeCurrentHash();
  }, [activeHref, pathname]);

  useEffect(() => {
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
