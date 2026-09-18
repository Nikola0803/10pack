import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
});

export default [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // The page copy is carried over verbatim from the original build and uses
      // ordinary typographic quotes and apostrophes in prose. Entity-escaping
      // them changes nothing at runtime and only hurts readability.
      "react/no-unescaped-entities": "off",
    },
  },
  { ignores: [".next/**", "node_modules/**"] },
];
