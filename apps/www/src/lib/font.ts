import { Agbalumo } from "next/font/google"
import { GeistSans } from "geist/font/sans"

export const fontSans = GeistSans

const agbalumo = Agbalumo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-agbalumo-serif",
})
export const fontAgbalumo = agbalumo
