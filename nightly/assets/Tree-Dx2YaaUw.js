import{j as e}from"./iframe-HNnxxD_z.js";import{useMDXComponents as p}from"./index-DMbTStZf.js";import{A as o}from"./ArgTypesWithNote-CB5EL4Sd.js";import{C as c}from"./ControlsWithNote-Dhu9GziC.js";import{D as h}from"./DocsHeader-Cea1CK0F.js";import{F as x}from"./CommandsAndQueries-10i8xq6U.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-CCejLYgP.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-CYashRDs.js";import"./preload-helper-PPVm8Dsz.js";import"./index-sOkH0Wf9.js";import"./information-BWoF60GS.js";import"./sys-enter-2-BmofK6wa.js";import"./alert-qoF8AI7R.js";import"./Tag-C_XEAXfN.js";import"./index-B3Qe_MYG.js";import"./index-B_Z8tqtL.js";import"./Link-CqZZKZ0X.js";import"./copy-CZ_9T5Wd.js";import"./copy-DRw12hkD.js";import"./GitHub-Mark-BpcLW3KD.js";import"./TableOfContent-C3vnVgT_.js";import"./index-BN0PdEk3.js";import"./index-DoZC0kx0.js";import"./index-Bmalf1dG.js";import"./index-CbtLCQbD.js";import"./index-BNjcdWK4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-7TcfhjQy.js";import"./addCustomCSSWithScoping-BgldszW1.js";import"./general-leave-request-qroMs_4U.js";import"./index-CiE6BBc9.js";import"./navigation-right-arrow-DfJT8U7i.js";import"./navigation-down-arrow-rKWSg6ke.js";import"./navigation-right-arrow-CA3cIlRb.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
