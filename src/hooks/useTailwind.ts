import { useMemo } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/../tailwind.config.js";

export default function useTailwind() {
  const tailwind = useMemo(
    () => resolveConfig(tailwindConfig),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [tailwindConfig]
  );

  return tailwind;
}
