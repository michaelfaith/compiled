/* eslint-disable import/export */

import type { CSSProps, CssObject, CssFunction } from '../types';
import { createSetupError } from '../utils/error';

/**
 * ## CSS
 *
 * Define styles that are statically typed and useable with other Compiled APIs.
 * For further details [read the documentation](https://compiledcssinjs.com/docs/api-css).
 *
 * ### Style with objects
 *
 * @example
 * ```
 * const redText = css({
 *   color: 'red',
 * });
 *
 * <div css={redText} />
 * ```
 *
 * ### Style with template literals
 *
 * @example
 * ```
 * const redText = css`
 *   color: red;
 * `;
 *
 * <div css={redText} />
 * ```
 */
export default function css<TProps = void>(
  styles: TemplateStringsArray,
  ...interpolations: CssFunction<TProps>[]
): CSSProps<TProps>;

export default function css<T = void>(styles: CssObject<T> | CssObject<T>[]): CSSProps<T>;

export default function css<T = void>(
  _styles: TemplateStringsArray | CssObject<T> | CssObject<T>[],
  ..._interpolations: CssFunction[]
): CSSProps<T> {
  throw createSetupError();
}
