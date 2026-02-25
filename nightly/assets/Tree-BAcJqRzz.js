import{j as e}from"./iframe-BHlEgbZD.js";import{useMDXComponents as p}from"./index-DuWPJPdo.js";import{A as o}from"./ArgTypesWithNote-CDHNRrLz.js";import{C as c}from"./ControlsWithNote-xCObjZ9G.js";import{D as h}from"./DocsHeader-BlNOHiKZ.js";import{F as x}from"./CommandsAndQueries-CRy7DgFq.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-BZ1_Gb0n.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-B5DN3j8r.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DMcN3ohr.js";import"./information-Cbg1Tz52.js";import"./sys-enter-2-Z2Vy22vQ.js";import"./alert-BcFaqecl.js";import"./Tag-CUIBDfjO.js";import"./index-2QbIapUz.js";import"./index-CPQEcn_1.js";import"./Link-DdeM_yx0.js";import"./copy-BcW5bk1W.js";import"./copy-Ds19teD5.js";import"./GitHub-Mark-jR36mBpC.js";import"./TableOfContent-BKrNqtFR.js";import"./index-57xnhTbk.js";import"./index-D8Q0xw5Q.js";import"./index-DXZq7O0l.js";import"./index-COEmfUFW.js";import"./index-x01lEzby.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbwzLluT.js";import"./addCustomCSSWithScoping-BezKsk6D.js";import"./general-leave-request-BvGFHP__.js";import"./index-C57Z4SS3.js";import"./navigation-right-arrow-DEzFZZdH.js";import"./navigation-down-arrow-CUMLWhBn.js";import"./navigation-right-arrow-D2ty4le0.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
