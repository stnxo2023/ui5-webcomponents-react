'use client';

import { debounce, useStylesheet, useSyncRef } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { CSSProperties } from 'react';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { SplitterLayoutContext } from '../../internal/SplitterLayoutContext.js';
import { classNames, styleData } from './SplitterLayout.module.css.js';
import type { SplitterLayoutPropTypes } from './types.js';
import { useConcatSplitterElements } from './useConcatSplitterElements.js';

/**
 * A layout that contains several content areas. The content that is added to the `SplitterLayout` should be wrapped
 * into 0-n `SplitterElement`s which define the size and size constraints of the content area.
 * The orientation of the `SplitterLayout` can be set to horizontal (default) or vertical. All content areas of the
 * layout will be arranged in that way. In order to split vertically and horizontally at the same time, splitters need
 * to be nested.
 * By adding or changing `SplitterElement`s to the `SplitterLayout` that make up the content areas, the size can be changed
 * programmatically. Additionally, the content areas can be made non-resizable individually and a minimal size (in px)
 * can be set.
 * The splitter bars are focusable to enable resizing of the content areas via keyboard. The size of the content areas
 * can be manipulated when the splitter bar is focused and Left/Down/Right/Up are pressed.
 */
const SplitterLayout = forwardRef<HTMLDivElement, SplitterLayoutPropTypes>((props, ref) => {
  const { vertical, children, title, style, className, options, ...rest } = props;
  const [componentRef, sLRef] = useSyncRef(ref);
  const [reset, setReset] = useState(undefined);
  const prevSize = useRef({ width: undefined, height: undefined });
  const initialChildren = useRef(true);
  const initialCustomDep = useRef(true);

  const layoutElements = useConcatSplitterElements({
    children: children ?? [],
    width: style?.width,
    height: style?.height,
    vertical,
  });

  useStylesheet(styleData, SplitterLayout.displayName);

  useEffect(() => {
    if (!initialChildren.current && options?.resetOnChildrenChange) {
      setReset(true);
    }
    initialChildren.current = false;
  }, [children, options?.resetOnChildrenChange]);

  useEffect(() => {
    if (!initialCustomDep.current) {
      setReset(true);
    }
    initialCustomDep.current = false;
  }, options?.resetOnCustomDepsChange ?? []);

  useEffect(() => {
    if (options?.resetOnSizeChange) {
      const layoutObserver = new ResizeObserver(
        debounce(([container]) => {
          const containerRect = container.target.getBoundingClientRect();
          if (!vertical && containerRect.width !== prevSize.current.width) {
            prevSize.current.width = containerRect.width;
            setReset(true);
          } else if (vertical && containerRect.height !== prevSize.current.height) {
            prevSize.current.height = containerRect.height;
            setReset(true);
          }
        }, 60),
      );

      layoutObserver.observe(sLRef.current);

      return () => {
        layoutObserver.disconnect();
      };
    }
  }, [vertical, options?.resetOnSizeChange]);

  useEffect(() => {
    if (reset) {
      setReset(false);
    }
  }, [reset]);

  return (
    <SplitterLayoutContext.Provider value={{ vertical, reset }}>
      <div
        style={
          {
            flexDirection: vertical ? 'column' : 'row',
            ...style,
          } as CSSProperties
        }
        title={title}
        {...rest}
        className={clsx(classNames.splitterLayout, className)}
        ref={componentRef}
        data-splitter-vertical={vertical}
      >
        {layoutElements}
      </div>
    </SplitterLayoutContext.Provider>
  );
});

SplitterLayout.displayName = 'SplitterLayout';

export type { SplitterLayoutPropTypes };
export { SplitterLayout };
