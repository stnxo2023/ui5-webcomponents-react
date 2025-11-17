import{j as e}from"./iframe-DeqKlIRG.js";import{useMDXComponents as p}from"./index-BkEa29Df.js";import{A as o}from"./ArgTypesWithNote-D1G-Iv45.js";import{C as c}from"./ControlsWithNote-DNWSkOtb.js";import{D as h}from"./DocsHeader-u_PHA39t.js";import{F as x}from"./CommandsAndQueries-BK0G3Pqq.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-C1D2jvVQ.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-op6BgV_7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CW-zKJIF.js";import"./information-BKTQWge_.js";import"./sys-enter-2-qREtxQiM.js";import"./alert-J7MXwQPX.js";import"./Tag-EQmX-47F.js";import"./index-CNR4ri7j.js";import"./index-vsoaIVfP.js";import"./Link-DmriJHN9.js";import"./copy-B2GlItSC.js";import"./copy-DS8sFIJH.js";import"./GitHub-Mark-GuENG757.js";import"./TableOfContent-5V1zI8jP.js";import"./index-BnqCxbWG.js";import"./index-D3fIG7Vo.js";import"./index-DZSRf0vt.js";import"./index-CUp9ZC_J.js";import"./index-BjGpgXu_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CD5youlR.js";import"./addCustomCSSWithScoping-W7fjoweE.js";import"./general-leave-request-BBkBfcO8.js";import"./index-CSAT2Cv9.js";import"./navigation-right-arrow-Cc3Z_knn.js";import"./navigation-down-arrow-C1Mzx0eB.js";import"./navigation-right-arrow-Dfh_jGI5.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
