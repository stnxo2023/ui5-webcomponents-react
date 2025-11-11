import{j as o}from"./iframe-BzFFzKD_.js";import{useMDXComponents as i}from"./index-CZpqZls8.js";import{M as p,C as a}from"./blocks-Dfn8aDA2.js";import"./Tag-Du7Hh6Mn.js";import"./index-BnnU1inb.js";import{C as m}from"./ControlsWithNote-BkyUdb-g.js";import{D as c}from"./DocsHeader-iVh68d6y.js";import{F as h}from"./CommandsAndQueries-98tICPmn.js";import{C as s,D as e}from"./Toast.stories-CJ-c2L9v.js";import"./preload-helper-PPVm8Dsz.js";import"./information-ItcJqxXi.js";import"./sys-enter-2-Y1mMTef-.js";import"./alert-BnuKtxZV.js";import"./index-BkRjFulW.js";import"./index-BTogfKzr.js";import"./Link-CMUJ7C_U.js";import"./copy-BLSEYFZK.js";import"./copy-CYosl6Ho.js";import"./GitHub-Mark-Ba76Xl_0.js";import"./TableOfContent-DvvjzS1z.js";import"./index-s8GS1odQ.js";import"./index-CjTZ8O9p.js";import"./index-DDykH0pl.js";import"./index-DXrTedKP.js";import"./index-DWEvXFon.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DUUeXWCw.js";import"./addCustomCSSWithScoping-26WgEUoU.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
`,o.jsx(c,{of:s,since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(a,{of:e}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(m,{of:e}),`
`,o.jsx(t.h2,{id:"show-a-toast",children:"Show a toast"}),`
`,o.jsxs(t.p,{children:["You can open and close the ",o.jsx(t.code,{children:"Toaast"})," component in a declarative way using the ",o.jsx(t.code,{children:"open"})," prop."]}),`
`,o.jsx(t.p,{children:o.jsx(t.strong,{children:"Example"})}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-jsx",children:`export function MyComponentWithAToast() {
  const [showToast, setShowToast] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setShowToast(true);
        }}
      >
        Show Toast
      </Button>
      <Toast
        open={showToast}
        onClose={() => {
          setShowToast(false);
        }}
      >
        This is my Toast!
      </Toast>
    </>
  );
}
`})}),`
`,o.jsx(h,{})]})}function R(n={}){const{wrapper:t}={...i(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(r,{...n})}):r(n)}export{R as default};
