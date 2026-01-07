import{j as o}from"./iframe-Bx5nPEOl.js";import{useMDXComponents as i}from"./index-xw1HgrxR.js";import{M as p,C as a}from"./blocks-BnfvreJd.js";import"./Tag-Czmfabca.js";import"./index-DySSVXhZ.js";import{C as m}from"./ControlsWithNote-CahJmR9N.js";import{D as c}from"./DocsHeader-BI3J9sAt.js";import{F as h}from"./CommandsAndQueries-DQbk5l2-.js";import{C as s,D as e}from"./Toast.stories-D37IgXa0.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C_BRWXUj.js";import"./sys-enter-2-lnnKHtcu.js";import"./alert-CZSvHkOp.js";import"./index-D030oFb6.js";import"./index-DkrrTKjv.js";import"./Link-kOQVQryb.js";import"./copy-DXcXCTsO.js";import"./copy-CNcXjyuB.js";import"./GitHub-Mark-CS2VW7Dg.js";import"./TableOfContent-DsWzsd02.js";import"./index-BJ7q1nh3.js";import"./index-CHjTsZ6I.js";import"./index-DAgUYXjE.js";import"./index-EX-yWEKJ.js";import"./index-Bwj8Rahv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4hIxCZ-4.js";import"./addCustomCSSWithScoping-BnQjkpis.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
