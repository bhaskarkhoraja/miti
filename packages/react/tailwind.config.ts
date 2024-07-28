import sharedConfig from "@config/tailwind-config"
import type { Config } from "tailwindcss"

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["./src/**/*.tsx"],
  prefix: "miti-",
  presets: [sharedConfig],
}

export default config
