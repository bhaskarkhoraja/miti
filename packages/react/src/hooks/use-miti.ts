import { createContext, type ReactNode } from "react"

/** The props of {@link RootProvider}. */
export type RootContext = {
  children?: ReactNode
}

export const MitiContext = createContext<undefined>(undefined)

export type DayPickerContext = {
  /** The months displayed in the calendar. */
  // months: CalendarMonth[]
  /** The next month to display. */
  nextMonth: Date | undefined
  /** The previous month to display. */
  previousMonth: Date | undefined
}
