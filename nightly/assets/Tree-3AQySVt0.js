import{j as e}from"./iframe-D4Wcvdi9.js";import{useMDXComponents as p}from"./index-CyoSS2tn.js";import{A as o}from"./ArgTypesWithNote-y-ZIZCiF.js";import{C as c}from"./ControlsWithNote-BsM9lLzJ.js";import{D as h}from"./DocsHeader-Cf7qEjPm.js";import{F as x}from"./CommandsAndQueries-CHCF8nk5.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-BZVDlLxv.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-xnYhlHGn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C0Cp4coA.js";import"./information-BV6B4i17.js";import"./sys-enter-2-Be3rvkTR.js";import"./alert-Bj2TJcB4.js";import"./Tag-C8CPshPM.js";import"./index-iYqBFHCz.js";import"./index-BoPvUO7L.js";import"./Link-DRjrHvv7.js";import"./copy-tldSW-VD.js";import"./copy-ByuSrISy.js";import"./GitHub-Mark-DNQHgkin.js";import"./TableOfContent-BGa8nv5M.js";import"./index-BfU-6WHW.js";import"./index-DRGYhnMd.js";import"./index-C0aU4sgS.js";import"./index-DyEesLqq.js";import"./index-B5YCmd_L.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C_EKP5sQ.js";import"./addCustomCSSWithScoping-B3blWPk3.js";import"./general-leave-request-CEE5-rce.js";import"./index-BNR4hbu3.js";import"./navigation-right-arrow-B9tYbly4.js";import"./navigation-down-arrow-CiJ3nX35.js";import"./navigation-right-arrow-CZ9bddNc.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
`,e.jsx(h,{of:r,since:"0.10.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(c,{of:m}),`
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
`,e.jsx(s,{of:a}),`
`,e.jsx(o,{metaOf:r,of:a}),`
`,e.jsx(t.h2,{id:"treeitemcustom",children:"TreeItemCustom"}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(o,{metaOf:r,of:d}),`
`,e.jsx(x,{})]})}function ee(n={}){const{wrapper:t}={...p(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}export{ee as default};
