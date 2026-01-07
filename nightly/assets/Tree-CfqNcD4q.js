import{j as e}from"./iframe-Bx5nPEOl.js";import{useMDXComponents as p}from"./index-xw1HgrxR.js";import{A as o}from"./ArgTypesWithNote-Dpfm90VY.js";import{C as c}from"./ControlsWithNote-CahJmR9N.js";import{D as h}from"./DocsHeader-BI3J9sAt.js";import{F as x}from"./CommandsAndQueries-DQbk5l2-.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-BnfvreJd.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-BE_rsAyu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DySSVXhZ.js";import"./information-C_BRWXUj.js";import"./sys-enter-2-lnnKHtcu.js";import"./alert-CZSvHkOp.js";import"./Tag-Czmfabca.js";import"./index-D030oFb6.js";import"./index-DkrrTKjv.js";import"./Link-kOQVQryb.js";import"./copy-DXcXCTsO.js";import"./copy-CNcXjyuB.js";import"./GitHub-Mark-CS2VW7Dg.js";import"./TableOfContent-DsWzsd02.js";import"./index-BJ7q1nh3.js";import"./index-CHjTsZ6I.js";import"./index-DAgUYXjE.js";import"./index-EX-yWEKJ.js";import"./index-Bwj8Rahv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4hIxCZ-4.js";import"./addCustomCSSWithScoping-BnQjkpis.js";import"./general-leave-request-rmK0X1NV.js";import"./index-AroNelzF.js";import"./navigation-right-arrow-JKoD_tiK.js";import"./navigation-down-arrow-CRFET8c4.js";import"./navigation-right-arrow-BmtWA2-q.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
