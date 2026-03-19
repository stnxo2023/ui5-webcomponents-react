import{j as e}from"./iframe-bPNgMO5h.js";import{useMDXComponents as p}from"./index-C4j4ILCK.js";import{A as o}from"./ArgTypesWithNote-D3BAKoy9.js";import{C as c}from"./ControlsWithNote-7_6zpNDH.js";import{D as h}from"./DocsHeader-DYNJvjTX.js";import{F as x}from"./Footer-Bh2hTs_t.js";import"./CommandsAndQueries-CzGU51jX.js";import"./PageNotFound-Dw8P7BXA.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as m}from"./blocks-DApk4By0.js";import{C as r,D as s,L as u,T as a,a as d}from"./Tree.stories-CTuen7B8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CuRLQ5dh.js";import"./information-C2d19MHy.js";import"./sys-enter-2-D4Z01vRG.js";import"./alert-Ct4GAPph.js";import"./Tag-eZA227UP.js";import"./index-mw4j7xrs.js";import"./index-QMND5HNb.js";import"./Link-ZXYeKMWB.js";import"./copy-K4bBc4WH.js";import"./copy-DSB5O1lX.js";import"./GitHub-Mark-B3DWva2C.js";import"./TableOfContent-BkvufBd3.js";import"./index-D8vCUd0L.js";import"./index-5px67lZR.js";import"./index-4UioHVXW.js";import"./index-CcoeKc2Y.js";import"./index-CjQWdaPL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbYGGim3.js";import"./addCustomCSSWithScoping-BM8ISZdO.js";import"./Illustrations--EfuNW2c.js";import"./i18n-defaults-CFWtSmu6.js";import"./general-leave-request-Cb1g1v8c.js";import"./index-CCfS2xdR.js";import"./navigation-right-arrow-sjpm_efd.js";import"./navigation-down-arrow-B9_zRrcu.js";import"./navigation-right-arrow-Dj2eD2zH.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
`,e.jsx(h,{of:r,since:"0.10.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(c,{of:s}),`
`,e.jsx(t.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"lazy-load-treeitems",children:"Lazy Load TreeItems"}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(t.h3,{id:"code",children:"Code"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const LazyLoadingTree = () => {
  const [lazyChildren, setLazyChildren] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleItemToggle = (e) => {
    if (e.detail.item.dataset.id === 'lazychildren' && !lazyChildren) {
      e.preventDefault();
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setLazyChildren(
          <>
            <TreeItem text="Tree 3.1" />
            <TreeItem text="Tree 3.2" />
          </>
        );
        e.detail.item.toggle();
      }, 3000);
    }
  };
  return (
    <BusyIndicator active={loading} style={{ width: '100%' }}>
      <Tree onItemToggle={handleItemToggle}>
        <TreeItem text="Has pre-loaded children">
          <TreeItem text="Tree 1.1" />
          <TreeItem text="Tree 1.2" />
        </TreeItem>
        <TreeItem text="Has no children" />
        <TreeItem text="Has children but not yet loaded" hasChildren icon={dlCloutIcon} data-id="lazychildren">
          {lazyChildren}
        </TreeItem>
      </Tree>
    </BusyIndicator>
  );
};
`})}),`
`,e.jsx(T,{children:f}),`
`,e.jsx(t.h2,{id:"treeitem",children:"TreeItem"}),`
`,e.jsx(m,{of:a}),`
`,e.jsx(o,{metaOf:r,of:a}),`
`,e.jsx(t.h2,{id:"treeitemcustom",children:"TreeItemCustom"}),`
`,e.jsx(m,{of:d}),`
`,e.jsx(o,{metaOf:r,of:d}),`
`,e.jsx(x,{})]})}function oe(n={}){const{wrapper:t}={...p(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}export{oe as default};
