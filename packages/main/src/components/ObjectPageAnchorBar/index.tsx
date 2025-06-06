'use client';

import iconPushPinOff from '@ui5/webcomponents-icons/dist/pushpin-off.js';
import iconPushPinOn from '@ui5/webcomponents-icons/dist/pushpin-on.js';
import iconArrowDown from '@ui5/webcomponents-icons/dist/slim-arrow-down.js';
import iconArrowUp from '@ui5/webcomponents-icons/dist/slim-arrow-up.js';
import { debounce, enrichEventWithDetails, useI18nBundle, useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { CSSProperties, Dispatch, MouseEvent, SetStateAction } from 'react';
import { forwardRef, useEffect, useRef } from 'react';
import { COLLAPSE_HEADER, EXPAND_HEADER, PIN_HEADER, UNPIN_HEADER } from '../../i18n/i18n-defaults.js';
import { cssVarVersionInfoPrefix, getUi5TagWithSuffix } from '../../internal/utils.js';
import type { CommonProps } from '../../types/index.js';
import type { ButtonDomRef } from '../../webComponents/Button/index.js';
import { Button } from '../../webComponents/Button/index.js';
import type { ToggleButtonDomRef, ToggleButtonPropTypes } from '../../webComponents/ToggleButton/index.js';
import { ToggleButton } from '../../webComponents/ToggleButton/index.js';
import type { ObjectPagePropTypes } from '../ObjectPage/types/index.js';
import { classNames, styleData } from './ObjectPageAnchorBar.module.css.js';

const _buttonBaseMinWidth = `${cssVarVersionInfoPrefix}button_base_min_width`;
const _buttonBaseHeight = `${cssVarVersionInfoPrefix}button_base_height`;

const anchorButtonVariables = {
  [_buttonBaseMinWidth]: '1.5rem',
  [_buttonBaseHeight]: '1.5rem',
} as CSSProperties;

interface ObjectPageAnchorBarPropTypes extends CommonProps {
  /**
   * Determines if the header content is visible.
   */
  headerContentVisible: boolean;
  /**
   * Defines if the pin button is hidden.
   */
  hidePinButton: boolean;
  /**
   * Determines if the header is initially pinned .
   */
  headerPinned?: boolean;
  /**
   * Set the header to the state pinned.
   */
  setHeaderPinned?: Dispatch<SetStateAction<boolean>>;
  /**
   * Toggles the header content to be hidden or visible .
   */
  onToggleHeaderContentVisibility: (e: any) => void;
  /**
   * Highlight title when hovered.
   */
  onHoverToggleButton?: (e: MouseEvent<ToggleButtonDomRef>) => void;
  /**
   * Defines internally used accessibility properties/attributes.
   */
  accessibilityAttributes?: ObjectPagePropTypes['accessibilityAttributes']['objectPageAnchorBar'];
  /**
   * Fired when the `headerContent` changes its pinned state.
   */
  onPinButtonToggle?: (pinned: boolean) => void;
}

/**
 * The `ObjectPageAnchorBar` bar contains the expand/collapse (expands or collapses the header content) and pin button (pins the content header).
 */
const ObjectPageAnchorBar = forwardRef<HTMLElement, ObjectPageAnchorBarPropTypes>((props, ref) => {
  const {
    headerContentVisible,
    hidePinButton,
    headerPinned,
    style,
    accessibilityAttributes,
    setHeaderPinned,
    onPinButtonToggle,
    onToggleHeaderContentVisibility,
    onHoverToggleButton,
  } = props;

  useStylesheet(styleData, ObjectPageAnchorBar.displayName);
  const showHideHeaderBtnRef = useRef<ButtonDomRef>(null);
  const shouldRenderHeaderPinnableButton = !hidePinButton && headerContentVisible;
  const showBothActions = shouldRenderHeaderPinnableButton;

  const onPinHeader: ToggleButtonPropTypes['onClick'] = (e) => {
    const target = e.target;
    setHeaderPinned(target.pressed);
  };

  // debounced because of StrictMode
  const debouncedOnPinButtonToggle = debounce((pinned: boolean) => {
    onPinButtonToggle(pinned);
  }, 300);

  const isInitial = useRef(true);
  useEffect(() => {
    if (!isInitial.current && typeof onPinButtonToggle === 'function' && headerPinned != null) {
      debouncedOnPinButtonToggle(headerPinned);
    }
    if (isInitial.current) {
      isInitial.current = false;
    }

    return () => {
      debouncedOnPinButtonToggle.cancel();
    };
  }, [headerPinned]);

  useEffect(() => {
    const tagName = getUi5TagWithSuffix('ui5-button');
    const showHideHeaderBtn = showHideHeaderBtnRef.current;
    void customElements.whenDefined(tagName).then(() => {
      if (showHideHeaderBtn) {
        const expanded =
          accessibilityAttributes?.expandButton && Object.hasOwn(accessibilityAttributes.expandButton, 'expanded')
            ? accessibilityAttributes.expandButton.expanded
            : !!headerContentVisible;
        showHideHeaderBtn.accessibilityAttributes = {
          expanded,
          hasPopup: undefined,
          controls: undefined,
        };
      }
    });
  }, [accessibilityAttributes?.expandButton?.expanded, !!headerContentVisible]);

  const onToggleHeaderButtonClick = (e) => {
    onToggleHeaderContentVisibility(enrichEventWithDetails(e, { visible: !headerContentVisible }));
  };
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  return (
    <section
      data-component-name="ObjectPageAnchorBar"
      style={style}
      role={accessibilityAttributes?.role}
      className={!hidePinButton ? classNames.container : null}
      ref={ref}
    >
      <Button
        ref={showHideHeaderBtnRef}
        icon={!headerContentVisible ? iconArrowDown : iconArrowUp}
        data-ui5wcr-dynamic-page-header-action=""
        className={clsx(
          classNames.anchorBarActionButton,
          classNames.anchorBarActionButtonExpandable,
          showBothActions && classNames.anchorBarActionPinnableAndExpandable,
        )}
        style={anchorButtonVariables}
        onClick={onToggleHeaderButtonClick}
        onMouseOver={onHoverToggleButton}
        onMouseLeave={onHoverToggleButton}
        tooltip={i18nBundle.getText(!headerContentVisible ? EXPAND_HEADER : COLLAPSE_HEADER)}
        accessibleName={
          accessibilityAttributes?.expandButton?.accessibleName ??
          i18nBundle.getText(!headerContentVisible ? EXPAND_HEADER : COLLAPSE_HEADER)
        }
        data-component-name="ObjectPageAnchorBarExpandBtn"
      />
      {shouldRenderHeaderPinnableButton && (
        <ToggleButton
          icon={headerPinned ? iconPushPinOn : iconPushPinOff}
          data-ui5wcr-dynamic-page-header-action=""
          className={clsx(classNames.anchorBarActionButton, classNames.anchorBarActionButtonPinnable)}
          style={anchorButtonVariables}
          pressed={headerPinned}
          onClick={onPinHeader}
          tooltip={i18nBundle.getText(headerPinned ? UNPIN_HEADER : PIN_HEADER)}
          accessibleName={i18nBundle.getText(headerPinned ? UNPIN_HEADER : PIN_HEADER)}
          data-component-name="ObjectPageAnchorBarPinBtn"
        />
      )}
    </section>
  );
});

ObjectPageAnchorBar.displayName = 'ObjectPageAnchorBar';

export { ObjectPageAnchorBar };
