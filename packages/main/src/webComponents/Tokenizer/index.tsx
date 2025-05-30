'use client';

import '@ui5/webcomponents/dist/Tokenizer.js';
import type {
  TokenizerSelectionChangeEventDetail,
  TokenizerTokenDeleteEventDetail,
} from '@ui5/webcomponents/dist/Tokenizer.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface TokenizerAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Receives id(or many ids) of the elements that label the component.
   * @default undefined
   */
  accessibleNameRef?: string | undefined;

  /**
   * Defines whether the component is disabled.
   *
   * **Note:** A disabled component is completely noninteractive.
   * @default false
   */
  disabled?: boolean;

  /**
   * Defines whether tokens are displayed on multiple lines.
   *
   * **Note:** The `multiLine` property is in an experimental state and is a subject to change.
   *
   * **Note:** Available since [v2.5.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.5.0) of **@ui5/webcomponents**.
   * @default false
   */
  multiLine?: boolean;

  /**
   * Defines whether the component is read-only.
   *
   * **Note:** A read-only component is not editable,
   * but still provides visual feedback upon user interaction.
   * @default false
   */
  readonly?: boolean;

  /**
   * Defines whether "Clear All" button is present. Ensure `multiLine` is enabled, otherwise `showClearAll` will have no effect.
   *
   * **Note:** The `showClearAll` property is in an experimental state and is a subject to change.
   *
   * **Note:** Available since [v2.5.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.5.0) of **@ui5/webcomponents**.
   * @default false
   */
  showClearAll?: boolean;
}

interface TokenizerDomRef extends Required<TokenizerAttributes>, Ui5DomRef {}

interface TokenizerPropTypes
  extends TokenizerAttributes,
    Omit<CommonProps, keyof TokenizerAttributes | 'children' | 'onSelectionChange' | 'onTokenDelete'> {
  /**
   * Defines the tokens to be displayed.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when token selection is changed by user interaction
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onSelectionChange?: (event: Ui5CustomEvent<TokenizerDomRef, TokenizerSelectionChangeEventDetail>) => void;

  /**
   * Fired when tokens are being deleted (delete icon, delete or backspace is pressed)
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onTokenDelete?: (event: Ui5CustomEvent<TokenizerDomRef, TokenizerTokenDeleteEventDetail>) => void;
}

/**
 * A `Tokenizer` is an invisible container for `Token`s that supports keyboard navigation and token selection.
 *
 * The `Tokenizer` consists of two parts:
 * - Tokens - displays the available tokens.
 * - N-more indicator - contains the number of the remaining tokens that cannot be displayed due to the limited space.
 *
 * ### Keyboard Handling
 *
 * #### Basic Navigation
 * The `Tokenizer` provides advanced keyboard handling.
 * When a token is focused the user can use the following keyboard
 * shortcuts in order to perform a navigation:
 *
 * - [Left] or [Right] / [Up] or [Down] - Navigates left and right through the tokens.
 * - [Home] - Navigates to the first token.
 * - [End] - Navigates to the last token.
 *
 * The user can use the following keyboard shortcuts to perform actions (such as select, delete):
 *
 * - [Space] - Selects a token.
 * - [Backspace] / [Delete] - Deletes a token.
 * **Note:** The deletion of a token is handled by the application with the use of the `token-delete` event.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents__.
 * @experimental This component is availabe since 2.0 under an experimental flag and its API and behaviour are subject to change.
 */
const Tokenizer = withWebComponent<TokenizerPropTypes, TokenizerDomRef>(
  'ui5-tokenizer',
  ['accessibleName', 'accessibleNameRef'],
  ['disabled', 'multiLine', 'readonly', 'showClearAll'],
  [],
  ['selection-change', 'token-delete'],
);

Tokenizer.displayName = 'Tokenizer';

export { Tokenizer };
export type { TokenizerDomRef, TokenizerPropTypes };
