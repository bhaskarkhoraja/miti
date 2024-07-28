/**
 * A range of dates. The range can be open. Differently from
 * {@link DateInterval}, the range ends here are included.
 *
 * @example
 *
 * # Match the days between the 2nd and the 5th of February 2024
 * ```ts
 *   const matcher: DateRange = {
 *     from: new Date(2024, 1, 2)
 *     to: new Date(2024, 1, 5)
 *   }
 * ```
 */
export type DateRange = { from: Date | undefined; to?: Date | undefined }
