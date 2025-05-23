'use client';

import '@ui5/webcomponents-fiori/dist/UserMenuAccount.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface UserMenuAccountAttributes {
  /**
   * Defines the avatar initials of the user.
   * @default undefined
   */
  avatarInitials?: string | undefined;

  /**
   * Defines the avatar image url of the user.
   */
  avatarSrc?: string | undefined;

  /**
   * Defines description of the user.
   */
  description?: string;

  /**
   * Indicates whether a loading indicator should be shown.
   *
   * **Note:** Available since [v2.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents-fiori**.
   * @default false
   */
  loading?: boolean;

  /**
   * Defines if the user is selected.
   * @default false
   */
  selected?: boolean;

  /**
   * Defines additional text of the user.
   */
  subtitleText?: string;

  /**
   * Defines the title text of the user.
   */
  titleText?: string;
}

interface UserMenuAccountDomRef extends Required<UserMenuAccountAttributes>, Ui5DomRef {}

interface UserMenuAccountPropTypes
  extends UserMenuAccountAttributes,
    Omit<CommonProps, keyof UserMenuAccountAttributes> {}

/**
 * The `UserMenuAccount` represents an account in the `UserMenu`.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.5.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.5.0) of __@ui5/webcomponents-fiori__.
 * @experimental
 */
const UserMenuAccount = withWebComponent<UserMenuAccountPropTypes, UserMenuAccountDomRef>(
  'ui5-user-menu-account',
  ['avatarInitials', 'avatarSrc', 'description', 'subtitleText', 'titleText'],
  ['loading', 'selected'],
  [],
  [],
);

UserMenuAccount.displayName = 'UserMenuAccount';

export { UserMenuAccount };
export type { UserMenuAccountDomRef, UserMenuAccountPropTypes };
