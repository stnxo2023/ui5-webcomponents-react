import{j as e}from"./iframe-1PJgHZTG.js";import{useMDXComponents as p}from"./index-DQ8p-OUL.js";import{A as o}from"./ArgTypesWithNote-MeBDwLjq.js";import{C as c}from"./ControlsWithNote-CsLsgmT1.js";import{D as h}from"./DocsHeader-DnpvZl4X.js";import{F as x}from"./Footer-Dn-umaI8.js";import"./CommandsAndQueries-CQXQgoMe.js";import"./PageNotFound-BDu5VFGA.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as m}from"./blocks-BWdY__MG.js";import{C as r,D as s,L as u,T as a,a as d}from"./Tree.stories-Bv5_ph4G.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C8yXoAsR.js";import"./information-DJc7dR8E.js";import"./sys-enter-2-C9tJiXDL.js";import"./alert-DYBuSdd9.js";import"./Tag-B40KCJnD.js";import"./index-ppU6pF9w.js";import"./index-BhuvwaVu.js";import"./Link-7AxyQCs2.js";import"./copy-BGWb1lfv.js";import"./copy-DV2HGm9x.js";import"./GitHub-Mark-DnHXiXr5.js";import"./TableOfContent-BXrMFYBh.js";import"./index-BIAg1r_N.js";import"./index-BpyshfBP.js";import"./index-BQUqcZEd.js";import"./index-i1xIbWKA.js";import"./index-D-m_lTJG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DnF5TvKk.js";import"./addCustomCSSWithScoping-NZMltsez.js";import"./Illustrations-BZEV-hfk.js";import"./i18n-defaults-CFWtSmu6.js";import"./general-leave-request-vT3zipIG.js";import"./index-DcZPtEFB.js";import"./navigation-right-arrow-BVMvMFjo.js";import"./navigation-down-arrow-CHCqyWX1.js";import"./navigation-right-arrow-DUxRui6p.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
