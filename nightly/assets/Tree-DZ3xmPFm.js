import{j as e}from"./iframe-BFfiCRAQ.js";import{useMDXComponents as p}from"./index-CnIchwG9.js";import{A as o}from"./ArgTypesWithNote-DZwNit9-.js";import{C as c}from"./ControlsWithNote-COkN8HtC.js";import{D as h}from"./DocsHeader-BqSqZAws.js";import{F as x}from"./Footer-3U2rULEI.js";import"./CommandsAndQueries-D2e25SQ4.js";import"./PageNotFound-CAIx-1qq.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as m}from"./blocks-D8UGMoOU.js";import{C as r,D as s,L as u,T as a,a as d}from"./Tree.stories-CSvZgEfH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BvMEXi75.js";import"./information-mHfS5cWl.js";import"./sys-enter-2-BfeK50PI.js";import"./alert-DGgnTy1o.js";import"./Tag-D5_wJnae.js";import"./index-BsyXKf0m.js";import"./index-De1oz68R.js";import"./Link-BzXMrnu2.js";import"./copy-BWFRoD18.js";import"./copy-CbWPHS6-.js";import"./GitHub-Mark-1-avKd4a.js";import"./TableOfContent-DfIS3zQ7.js";import"./index-stFY49PR.js";import"./index-C_tePRTa.js";import"./index-Arv69njm.js";import"./index-BEK-Ecqi.js";import"./index-CX51hblh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-RE3-w7CJ.js";import"./addCustomCSSWithScoping-rUi9bOzC.js";import"./Illustrations-DMZSmuvx.js";import"./i18n-defaults-CFWtSmu6.js";import"./general-leave-request-CwHvDYdF.js";import"./index-D4r21y2V.js";import"./navigation-right-arrow-Czbs9gPV.js";import"./navigation-down-arrow-ByE_fRjG.js";import"./navigation-right-arrow-Dn0VM6Bb.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
