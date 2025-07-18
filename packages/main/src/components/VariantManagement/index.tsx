'use client';

import '@ui5/webcomponents-fiori/dist/illustrations/UnableToLoad.js';
import BarDesign from '@ui5/webcomponents/dist/types/BarDesign.js';
import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import ListSelectionMode from '@ui5/webcomponents/dist/types/ListSelectionMode.js';
import PopoverPlacement from '@ui5/webcomponents/dist/types/PopoverPlacement.js';
import TitleLevel from '@ui5/webcomponents/dist/types/TitleLevel.js';
import IllustrationMessageType from '@ui5/webcomponents-fiori/dist/types/IllustrationMessageType.js';
import navDownIcon from '@ui5/webcomponents-icons/dist/navigation-down-arrow.js';
import searchIcon from '@ui5/webcomponents-icons/dist/search.js';
import { enrichEventWithDetails, useI18nBundle, useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { ComponentElement, ReactElement } from 'react';
import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useCallback,
  useEffect,
  useRef,
  useState,
  version as reactVersion,
} from 'react';
import { MANAGE, MY_VIEWS, SAVE, SAVE_AS, SEARCH, SEARCH_VARIANT, SELECT_VIEW } from '../../i18n/i18n-defaults.js';
import { stopPropagation } from '../../internal/stopPropagation.js';
import type { SelectedVariant } from '../../internal/VariantManagementContext.js';
import { VariantManagementContext } from '../../internal/VariantManagementContext.js';
import { Bar } from '../../webComponents/Bar/index.js';
import { Button } from '../../webComponents/Button/index.js';
import { Icon } from '../../webComponents/Icon/index.js';
import { IllustratedMessage } from '../../webComponents/IllustratedMessage/index.js';
import { Input } from '../../webComponents/Input/index.js';
import type { ListPropTypes } from '../../webComponents/List/index.js';
import { List } from '../../webComponents/List/index.js';
import type { ListItemStandardDomRef } from '../../webComponents/ListItemStandard/index.js';
import type { ResponsivePopoverDomRef } from '../../webComponents/ResponsivePopover/index.js';
import { ResponsivePopover } from '../../webComponents/ResponsivePopover/index.js';
import { Title } from '../../webComponents/Title/index.js';
import { FlexBox } from '../FlexBox/index.js';
import type { ManageViewsDialogPropTypes } from './ManageViewsDialog.js';
import { ManageViewsDialog } from './ManageViewsDialog.js';
import { SaveViewDialog } from './SaveViewDialog.js';
import type { SelectedVariantWithStringBool, VariantManagementPropTypes } from './types.js';
import type { VariantItemPropTypes } from './VariantItem.js';
import { classNames, styleData } from './VariantManagement.module.css.js';

const booleanProps = {
  favorite: true,
  global: true,
  isDefault: true,
  labelReadOnly: true,
  applyAutomatically: true,
  readOnly: true,
  hideDelete: true,
};

/**
 * The VariantManagement can be used to manage variants (views). You can use this component to create and maintain personalization changes.
 *
 * __Note:__ On the user interface, variants are generally referred to as "views".
 *
 * __Note:__ Each `VariantManagement` component can only have one default and one selected variant.
 *
 * ### Matching header styles
 *
 * To ensure consistent header styles for different use-cases of the `VariantManagement`, we recommend setting the following styles to the `ui5-title` component:
 *
 * #### DynamicPage & ObjectPage
 *
 * - `font-family: var(--sapObjectHeader_Title_FontFamily);`
 *
 * __Header expanded__
 *
 * - `font-size: var(--sapObjectHeader_Title_FontSize);`
 *
 * __Header collapsed/snapped__
 *
 * - `font-size: var(--sapObjectHeader_Title_SnappedFontSize);`
 *
 * #### Tables
 *
 * - `font-size: var(--sapGroup_Title_FontSize);`
 *
 * #### Example
 *
 * ```css
 * .variantManagement [data-component-name="VariantManagementTitle"] {
 *     font-family: var(--sapObjectHeader_Title_FontFamily);
 *     font-size: var(--sapObjectHeader_Title_FontSize);
 * }
 * ```
 * ```jsx
 *  <VariantManagement className="variantManagement">
 * ```
 *
 */
const VariantManagement = forwardRef<HTMLDivElement, VariantManagementPropTypes>((props, ref) => {
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  const {
    titleText = i18nBundle.getText(MY_VIEWS),
    className,
    style,
    placement = PopoverPlacement.Bottom,
    level = TitleLevel.H4,
    size = TitleLevel.H4,
    onSelect,
    closeOnItemSelect,
    disabled,
    onSaveAs,
    onSaveManageViews,
    showOnlyFavorites,
    inErrorState,
    hideShare,
    children,
    hideManageVariants,
    hideApplyAutomatically,
    hideSetAsDefault,
    hideCreatedBy,
    hideSaveAs,
    dirtyStateText = '*',
    dirtyState,
    onSave,
    onManageViewsCancel,
    onSaveViewCancel,
    ...rest
  } = props;

  useStylesheet(styleData, VariantManagement.displayName);
  const popoverRef = useRef<ResponsivePopoverDomRef>(null);

  const [safeChildren, setSafeChildren] = useState(Children.toArray(children));

  useEffect(() => {
    setSafeChildren(Children.toArray(children));
  }, [children]);

  const [popoverOpen, setPopoverOpen] = useState(false);
  const [manageViewsDialogOpen, setManageViewsDialogOpen] = useState(false);
  const [saveAsDialogOpen, setSaveAsDialogOpen] = useState(false);
  const [selectedVariant, setSelectedVariantState] = useState<SelectedVariant | undefined>(() => {
    const currentSelectedVariant = safeChildren.find(
      (item) => isValidElement(item) && (item as ReactElement<VariantItemPropTypes>).props.selected,
    ) as ComponentElement<any, any>;
    if (currentSelectedVariant) {
      return { ...currentSelectedVariant.props, variantItem: currentSelectedVariant.ref };
    }
  });
  const setSelectedVariant = (variant: SelectedVariantWithStringBool) => {
    if (variant) {
      const stringToBoolVariant = Object.entries(variant).reduce((acc, [key, val]) => {
        if (booleanProps[key]) {
          if (typeof val === 'boolean') {
            acc[key] = val;
            return acc;
          }
          if (val === 'false') {
            acc[key] = false;
            return acc;
          }
          if (val === 'true') {
            acc[key] = true;
            return acc;
          }
          if (reactVersion.startsWith('19') && val === '') {
            acc[key] = true;
            return acc;
          }
        }
        acc[key] = val;
        return acc;
      }, {}) as SelectedVariant;
      setSelectedVariantState(stringToBoolVariant);
    } else {
      setSelectedVariantState(variant as SelectedVariant);
    }
  };

  const [selectedSaveViewInputProps, setSelectedSaveViewInputProps] = useState(
    selectedVariant?.saveViewInputProps ?? {},
  );

  const handleClose = () => {
    setPopoverOpen(false);
  };

  const handleManageClick = () => {
    setManageViewsDialogOpen(true);
    handleClose();
  };
  const handleManageClose = () => {
    setManageViewsDialogOpen(false);
  };
  const handleOpenSaveAsDialog = () => {
    setSaveAsDialogOpen(true);
    handleClose();
  };
  const handleSaveAsClose = () => {
    setSaveAsDialogOpen(false);
  };

  const handleSave = (e) => {
    if (typeof onSave === 'function') {
      onSave(enrichEventWithDetails(e, selectedVariant as Record<string, any>));
    }
  };

  const handleSaveView = (e, selectedVariant) => {
    if (typeof onSaveAs === 'function') {
      //todo: remove nativeDetail in next major
      onSaveAs(enrichEventWithDetails(e, { ...selectedVariant, nativeDetail: e.detail.originalEvent.detail }));
    }
    setSelectedVariant(selectedVariant);
    if (!e.defaultPrevented) {
      handleSaveAsClose();
    }
  };

  const handleSaveManageViews = (e, payload) => {
    const { defaultView, updatedRows, deletedRows } = payload;
    const callbackProperties = {
      deletedVariants: [],
      prevVariants: [],
      updatedVariants: [],
      variants: [],
      nativeDetail: null,
    };
    setSafeChildren((prev) =>
      Children.toArray(
        prev.map((child) => {
          if (!isValidElement(child)) {
            return false;
          }
          const castChild = child as ReactElement<VariantItemPropTypes>;
          let updatedProps: Omit<SelectedVariant, 'children' | 'variantItem'> = {};
          const currentVariant = popoverRef.current.querySelector(
            `ui5-li[data-children="${CSS.escape(castChild.props.children)}"]`,
          );
          callbackProperties.prevVariants.push(castChild.props);
          if (defaultView) {
            if (defaultView === castChild.props.children) {
              updatedProps.isDefault = true;
            } else if (castChild.props.isDefault) {
              updatedProps.isDefault = false;
            }
          }
          if (Object.keys(updatedRows).includes(castChild.props.children)) {
            const { currentVariant: _0, ...rest } = updatedRows[castChild.props.children];
            updatedProps = { ...updatedProps, ...rest };
          }
          if (deletedRows.has(castChild.props.children)) {
            callbackProperties.deletedVariants.push(castChild.props);
            deletedRows.delete(castChild.props.children);
            return false;
          }
          if (Object.keys(updatedProps).length > 0) {
            callbackProperties.updatedVariants.push({
              ...castChild.props,
              ...updatedProps,
              variantItem: currentVariant,
              prevVariant: { ...castChild.props },
            });
          }
          callbackProperties.variants.push({ ...castChild.props, ...updatedProps, variantItem: currentVariant });
          return cloneElement(castChild, updatedProps);
        }),
      ),
    );
    if (typeof onSaveManageViews === 'function') {
      //todo: remove in next major
      callbackProperties.nativeDetail = e.detail.originalEvent.detail;
      onSaveManageViews(enrichEventWithDetails(e, callbackProperties));
    }
    if (!e.defaultPrevented) {
      handleManageClose();
    }
  };

  const handleOpenVariantManagement = useCallback(
    (e) => {
      popoverRef.current.opener = e.target;
      setPopoverOpen(true);
    },
    [popoverRef],
  );

  const handleCloseVariantManagement = (e) => {
    stopPropagation(e);
    setPopoverOpen(false);
  };

  const searchText = i18nBundle.getText(SEARCH);
  const saveAsText = i18nBundle.getText(SAVE_AS);
  const manageText = i18nBundle.getText(MANAGE);
  const saveText = i18nBundle.getText(SAVE);
  const a11ySearchText = i18nBundle.getText(SEARCH_VARIANT);
  const selectViewText = i18nBundle.getText(SELECT_VIEW);

  const variantManagementClasses = clsx(classNames.container, disabled && classNames.disabled, className);

  const dirtyStateClasses = clsx(classNames.dirtyState, dirtyStateText !== '*' && classNames.dirtyStateText);

  const selectVariantEventRef = useRef(undefined);
  useEffect(() => {
    if (selectVariantEventRef.current) {
      if (typeof onSelect === 'function') {
        onSelect(enrichEventWithDetails(selectVariantEventRef.current, { selectedVariant }));
        selectVariantEventRef.current = undefined;
      }
    }
  }, [selectedVariant, onSelect]);

  useEffect(() => {
    const selectedChild = safeChildren.find(
      (item) =>
        isValidElement(item) &&
        (item as ReactElement<VariantItemPropTypes>).props.children === selectedVariant?.children,
    ) as ReactElement<VariantItemPropTypes>;
    setSelectedSaveViewInputProps(selectedChild?.props.saveViewInputProps ?? {});
  }, [selectedVariant, safeChildren]);

  const handleVariantItemSelect: ListPropTypes['onSelectionChange'] = (e) => {
    const targetItem = e.detail.targetItem as unknown as ListItemStandardDomRef;
    const dataset = targetItem.dataset as unknown as SelectedVariantWithStringBool;
    setSelectedVariant({
      ...dataset,
      variantItem: targetItem,
    });
    selectVariantEventRef.current = e;
    if (closeOnItemSelect) {
      handleClose();
    }
  };

  const variantNames = safeChildren.map((item) =>
    isValidElement(item) && typeof (item as ReactElement<VariantItemPropTypes>).props?.children === 'string'
      ? (item as ReactElement<VariantItemPropTypes>).props.children
      : '',
  );

  const [favoriteChildren, setFavoriteChildren] = useState(undefined);

  useEffect(() => {
    if (showOnlyFavorites) {
      setFavoriteChildren(
        safeChildren.filter((child) => {
          return (
            isValidElement(child) &&
            ((child as ReactElement<VariantItemPropTypes>).props.favorite ||
              (child as ReactElement<VariantItemPropTypes>).props.isDefault)
          );
        }),
      );
    }
    if (!showOnlyFavorites && favoriteChildren?.length > 0) {
      setFavoriteChildren(undefined);
    }
  }, [showOnlyFavorites, safeChildren]);

  const safeChildrenWithFavorites = favoriteChildren ?? safeChildren;
  const showInput = safeChildrenWithFavorites.length > 10;

  const [filteredChildren, setFilteredChildren] = useState(undefined);
  const [searchValue, setSearchValue] = useState('');
  const handleSearchInput = (e) => {
    setSearchValue(e.target.value);
    setFilteredChildren(
      safeChildrenWithFavorites.filter(
        (child: ComponentElement<any, any>) =>
          typeof child?.props?.children === 'string' &&
          child.props.children.toLowerCase().includes(e.target.value.toLowerCase()),
      ),
    );
  };
  useEffect(() => {
    if (filteredChildren) {
      setFilteredChildren(
        safeChildrenWithFavorites.filter(
          (child: ComponentElement<any, any>) =>
            typeof child?.props?.children === 'string' && child.props.children.toLowerCase().includes(searchValue),
        ),
      );
    }
  }, [safeChildrenWithFavorites]);

  const showSaveBtn = dirtyState && selectedVariant && !selectedVariant.readOnly;

  return (
    <div className={variantManagementClasses} style={style} {...rest} ref={ref}>
      <VariantManagementContext.Provider
        value={{
          selectVariantItem: setSelectedVariant,
          selectedVariant,
        }}
      >
        <FlexBox onClick={disabled ? undefined : handleOpenVariantManagement}>
          <Title level={level} size={size} className={classNames.title} data-component-name="VariantManagementTitle">
            {selectedVariant?.children}
          </Title>
          {dirtyState && <div className={dirtyStateClasses}>{dirtyStateText}</div>}
        </FlexBox>
        <Button
          className={clsx(classNames.navDownBtn, 'ui5-content-density-compact')}
          tooltip={selectViewText}
          accessibleName={selectViewText}
          onClick={disabled ? undefined : handleOpenVariantManagement}
          design={ButtonDesign.Transparent}
          icon={navDownIcon}
          disabled={disabled}
        />

        <ResponsivePopover
          open={popoverOpen}
          className={classNames.popover}
          ref={popoverRef}
          headerText={titleText}
          placement={placement}
          footer={
            (showSaveBtn || !hideSaveAs || !hideManageVariants) && (
              <Bar
                design={BarDesign.Footer}
                className={classNames.footer}
                endContent={
                  <>
                    {!inErrorState && showSaveBtn && (
                      <Button onClick={handleSave} design={ButtonDesign.Emphasized}>
                        {saveText}
                      </Button>
                    )}
                    {!inErrorState && !hideSaveAs && (
                      <Button
                        onClick={handleOpenSaveAsDialog}
                        design={showSaveBtn ? ButtonDesign.Transparent : ButtonDesign.Emphasized}
                        disabled={!selectedVariant || Object.keys(selectedVariant).length === 0}
                      >
                        {saveAsText}
                      </Button>
                    )}
                    {!inErrorState && !hideManageVariants && (
                      <Button
                        onClick={handleManageClick}
                        design={showSaveBtn || !hideSaveAs ? ButtonDesign.Transparent : ButtonDesign.Emphasized}
                      >
                        {manageText}
                      </Button>
                    )}
                  </>
                }
              />
            )
          }
          onClose={handleCloseVariantManagement}
        >
          {inErrorState ? (
            <IllustratedMessage name={IllustrationMessageType.UnableToLoad} />
          ) : (
            <List
              onSelectionChange={handleVariantItemSelect}
              selectionMode={ListSelectionMode.Single}
              header={
                showInput ? (
                  <div className={classNames.searchInputContainer} tabIndex={-1}>
                    <Input
                      className={classNames.searchInput}
                      accessibleName={a11ySearchText}
                      value={searchValue}
                      placeholder={searchText}
                      onInput={handleSearchInput}
                      showClearIcon
                      icon={<Icon name={searchIcon} className={classNames.inputIcon} />}
                    />
                  </div>
                ) : undefined
              }
            >
              {filteredChildren ?? safeChildrenWithFavorites}
            </List>
          )}
        </ResponsivePopover>
        {manageViewsDialogOpen && (
          <ManageViewsDialog
            onAfterClose={handleManageClose}
            onManageViewsCancel={onManageViewsCancel}
            handleSaveManageViews={handleSaveManageViews}
            showShare={!hideShare}
            showApplyAutomatically={!hideApplyAutomatically}
            showCreatedBy={!hideCreatedBy}
            showSetAsDefault={!hideSetAsDefault}
            variantNames={variantNames}
            showOnlyFavorites={showOnlyFavorites}
          >
            {safeChildren as unknown as ManageViewsDialogPropTypes['children']}
          </ManageViewsDialog>
        )}
        {saveAsDialogOpen && (
          <SaveViewDialog
            onSaveViewCancel={onSaveViewCancel}
            saveViewInputProps={selectedSaveViewInputProps}
            showShare={!hideShare}
            showApplyAutomatically={!hideApplyAutomatically}
            showSetAsDefault={!hideSetAsDefault}
            onAfterClose={handleSaveAsClose}
            handleSave={handleSaveView}
            selectedVariant={selectedVariant}
            variantNames={variantNames}
          />
        )}
      </VariantManagementContext.Provider>
    </div>
  );
});

VariantManagement.displayName = 'VariantManagement';

export { VariantManagement };
export type { VariantManagementPropTypes };
