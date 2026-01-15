import{j as o}from"./iframe-DCh7S_7o.js";import{useMDXComponents as i}from"./index-CQ2Rgf0f.js";import{M as p,C as a}from"./blocks-DmZmqlp_.js";import"./Tag-CZuGcFNN.js";import"./index-C5sgOYh1.js";import{C as m}from"./ControlsWithNote-CnU_Z6uv.js";import{D as c}from"./DocsHeader-DrTYK_rH.js";import{F as h}from"./CommandsAndQueries-BHuSnwTn.js";import{C as s,D as e}from"./Toast.stories-_DZjdMwN.js";import"./preload-helper-PPVm8Dsz.js";import"./information-FYwlptxJ.js";import"./sys-enter-2-CNa4r-Sw.js";import"./alert-Bj_hkuex.js";import"./index-gCdJvzAZ.js";import"./index-BzGBt6gL.js";import"./Link-DOaKYpM4.js";import"./copy-CtWnGcSg.js";import"./copy-BrUTFvSK.js";import"./GitHub-Mark-DXFulQjb.js";import"./TableOfContent-BF-a6WsZ.js";import"./index-DvoAW6NG.js";import"./index-BwuMWpwU.js";import"./index-CqXebPST.js";import"./index-CKcNqeBZ.js";import"./index-Gt-7HKkD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CDzt8G5a.js";import"./addCustomCSSWithScoping-DaHSAyiF.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
