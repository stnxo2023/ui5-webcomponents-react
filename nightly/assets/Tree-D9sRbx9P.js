import{j as e}from"./iframe-DBRigOoU.js";import{useMDXComponents as p}from"./index-apRVXKap.js";import{A as o}from"./ArgTypesWithNote-DoB0Bkqd.js";import{C as c}from"./ControlsWithNote-Cx-tNe7A.js";import{D as h}from"./DocsHeader-Cr7QkAfd.js";import{F as x}from"./Footer-C0l-yj0s.js";import"./CommandsAndQueries-CSuPwIuY.js";import"./PageNotFound-CQZvX7Tj.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as m}from"./blocks-BfIRBmeA.js";import{C as r,D as s,L as u,T as a,a as d}from"./Tree.stories-L2Q6S6wH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CtZlHOCH.js";import"./information-Di_zbJNn.js";import"./sys-enter-2-CpC_ZrXX.js";import"./alert-CuS5B2OC.js";import"./Tag-DEWl5_iK.js";import"./index-DWKSf_OJ.js";import"./index-DxEJ2UxM.js";import"./Link-WDyL8T_Q.js";import"./copy--UdGxiKh.js";import"./copy-D7myjbZ2.js";import"./GitHub-Mark-BBZ9Y9kL.js";import"./TableOfContent-CWrNTkbt.js";import"./index-C-7GLaxU.js";import"./index-DybExlT-.js";import"./index-NhTjO4vR.js";import"./index-BAsbE3_A.js";import"./index-u05fNeKh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bc6gryl9.js";import"./addCustomCSSWithScoping-Oz7AbKTz.js";import"./Illustrations-aiaUW8Wr.js";import"./i18n-defaults-CFWtSmu6.js";import"./general-leave-request-DRGHZ0sj.js";import"./index-BFhPQQPD.js";import"./navigation-right-arrow-DkEC0vdN.js";import"./navigation-down-arrow-BFJ7Hu2K.js";import"./navigation-right-arrow-82Tpqbaq.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
