import{j as e}from"./iframe-DE5WqRSI.js";import{useMDXComponents as p}from"./index-DVGykmsi.js";import{A as o}from"./ArgTypesWithNote-C1eWOYMQ.js";import{C as c}from"./ControlsWithNote-CAP3lJcn.js";import{D as h}from"./DocsHeader-B-orjW0t.js";import{F as x}from"./CommandsAndQueries-CT_qy-L6.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-CybNjylu.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-DWhtzKAe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BqsIcBTd.js";import"./information-CfYTqUOR.js";import"./sys-enter-2-Dqu1QcV8.js";import"./alert-Dotce8LG.js";import"./Tag-DXduP7K6.js";import"./index-C1194UdL.js";import"./index-CxE79HQo.js";import"./Link-BcyJtysS.js";import"./copy-DMf344AF.js";import"./copy-CmTK1gpG.js";import"./GitHub-Mark-CPwTb6Pz.js";import"./TableOfContent-CFRSt6hc.js";import"./index-C3HZg113.js";import"./index-Bo0MdSU9.js";import"./index-EXtiqGa7.js";import"./index-DF_fIzZz.js";import"./index-BoscFH1P.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CURCJNNc.js";import"./addCustomCSSWithScoping-CHzs5Kt8.js";import"./general-leave-request-CuMWjvaI.js";import"./index-BcVPuJ_0.js";import"./navigation-right-arrow-Ba2Y3uGG.js";import"./navigation-down-arrow-D2MASbC_.js";import"./navigation-right-arrow-DYEDqb8B.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
