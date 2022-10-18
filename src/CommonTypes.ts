/**
 * Type for generic handler functions.
 *
 * @param <T> - Generic type for defining expected parameter types (optional)
 * @param t - Rest parameter with the entire function payload
 * @returns Nothing (handler functions shall have no return value)
 */
export type Handler = <T>(...t: T[]) => void;

/**
 * Generic Class interface to be used as type.
 *
 * @param <T> - Generic type for defining the abstract class to be bridged
 */
export interface IClass<T> {
  /**
   * Generic constructor definition for the bridged class
   *
   * @param r - Rest parameter with the entire constructor payload
   * @returns A bridged class' instance
   */
  new <R>(...r: R[]): T;
}
