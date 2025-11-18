import{j as e}from"./iframe-DMHzJZ-j.js";import{useMDXComponents as p}from"./index-C6fVjeP1.js";import{A as o}from"./ArgTypesWithNote-D2pr8L56.js";import{C as c}from"./ControlsWithNote-BUBYP7Bu.js";import{D as h}from"./DocsHeader-7Pk9KcQL.js";import{F as x}from"./CommandsAndQueries-DGQGLEXC.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-BBNtOPy5.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-DGNxMtnf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C0eFSkjd.js";import"./information-41_Ak17O.js";import"./sys-enter-2-YeOg860G.js";import"./alert-Dt7k-zHX.js";import"./Tag-CQITClqv.js";import"./index-BlloQ94B.js";import"./index-Cr6zAa1Q.js";import"./Link-DH5vJWVF.js";import"./copy-16ICJGmW.js";import"./copy-x3ZdDA2U.js";import"./GitHub-Mark-BgT8t9P2.js";import"./TableOfContent-DmuZLTjo.js";import"./index-DhIsFRFq.js";import"./index-B1RFmErt.js";import"./index-DgEALGZi.js";import"./index-CqxeRCB-.js";import"./index-CEzdIVxS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-bWNLwVQr.js";import"./addCustomCSSWithScoping-Br9NkwKR.js";import"./general-leave-request-DSia1McM.js";import"./index-uksb_LL1.js";import"./navigation-right-arrow-B-wRit2V.js";import"./navigation-down-arrow-3r7pwMvO.js";import"./navigation-right-arrow-CqCWNsea.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
