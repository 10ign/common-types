/**
 * Type for generic handler functions.
 *
 * @param <T> - Generic type for defining expected parameter types (optional)
 * @param t - Rest parameter with the entire function payload
 * @returns Nothing (handler functions shall have no return value)
 */
export type Handler = <T>(...t: T[]) => void;
