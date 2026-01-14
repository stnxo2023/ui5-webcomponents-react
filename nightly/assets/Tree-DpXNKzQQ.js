import{j as e}from"./iframe-C8VIz1cN.js";import{useMDXComponents as p}from"./index-DF3oZ9DD.js";import{A as o}from"./ArgTypesWithNote-BKIZuTQC.js";import{C as c}from"./ControlsWithNote-Cx_-zFP3.js";import{D as h}from"./DocsHeader-B2gToiar.js";import{F as x}from"./CommandsAndQueries-D_HB_HX-.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-D-v6PHKz.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-BjCkDru8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-W-CFrWn1.js";import"./information-Hi7RSuvY.js";import"./sys-enter-2-CeqtRGpA.js";import"./alert-DDLVUdt7.js";import"./Tag-Ce9kI3uB.js";import"./index-C3PbHa_S.js";import"./index-zu9Y-W0w.js";import"./Link-8iQqMH3R.js";import"./copy-DmsxEFne.js";import"./copy-ChBzOjSf.js";import"./GitHub-Mark-EKLu-fRk.js";import"./TableOfContent-rBzrQ-hO.js";import"./index-CK3WOJt5.js";import"./index-IuSSn5Ye.js";import"./index-DVHGI5Hf.js";import"./index-CQjs21SR.js";import"./index-D5h2jV28.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-VSpt3ox9.js";import"./addCustomCSSWithScoping-BS3ufxCI.js";import"./general-leave-request-CfLC77Oc.js";import"./index-DmUuUpYf.js";import"./navigation-right-arrow-CKh4AD9z.js";import"./navigation-down-arrow-BzgaFSOU.js";import"./navigation-right-arrow-BnQ-O_WA.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
