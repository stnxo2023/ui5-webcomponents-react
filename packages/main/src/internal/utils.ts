import {
  getCustomElementsScopingSuffix,
  getEffectiveScopingSuffixForTag,
  getScopedVarName,
} from '@ui5/webcomponents-base/dist/CustomElementsScope.js';
import type { ReactNode } from 'react';
import { Children, cloneElement, Fragment } from 'react';

export function flattenFragments<T = ReactNode>(children: T | T[], depth = 1): T[] {
  const flatChildren = [];
  const removeFragments = (element, level = 0, key = []) => {
    if (!element) {
      return;
    }
    if (Array.isArray(element)) {
      Children.toArray(element).forEach((child, index) => {
        removeFragments(child, level + 1, [...key, index]);
      });
      return;
    }
    if (element.type === Fragment && level <= depth) {
      Children.toArray(element.props?.children).forEach((item, index) => {
        removeFragments(item, level + 1, [...key, index]);
      });
    } else if (typeof element === 'string' || typeof element === 'number') {
      flatChildren.push(element);
    } else {
      flatChildren.push(cloneElement(element, { key: key.join('.') }));
    }
  };
  removeFragments(children);

  return flatChildren;
}

export function getUi5TagWithSuffix(baseTagName) {
  const tagNameSuffix: string = getEffectiveScopingSuffixForTag(baseTagName);
  return tagNameSuffix ? `${baseTagName}-${tagNameSuffix}` : baseTagName;
}

export const isSSR = () => typeof window === 'undefined';

export function trimAndRemoveSpaces(value) {
  return value.trim().replace(/\s\s+/g, ' ');
}

export const cssVarVersionInfoPrefix = getScopedVarName('--_ui5_').replace('--_ui5_', '');

export function getTagNameWithoutScopingSuffix(tagName) {
  const tagNameSuffix = getCustomElementsScopingSuffix();
  return tagNameSuffix ? tagName.replace(`-${tagNameSuffix.toUpperCase()}`, '') : tagName;
}
