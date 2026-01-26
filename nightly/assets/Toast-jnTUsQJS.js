import{j as o}from"./iframe-vvFzJQsm.js";import{useMDXComponents as i}from"./index-mWjr9AFM.js";import{M as p,C as a}from"./blocks-COsbTFiZ.js";import"./Tag-CSxd9Vy9.js";import"./index-CdSwAr1T.js";import{C as m}from"./ControlsWithNote-B3kpKevA.js";import{D as c}from"./DocsHeader-BOolGGs1.js";import{F as h}from"./CommandsAndQueries-8pSfE60h.js";import{C as s,D as e}from"./Toast.stories-B5TU38It.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CWYm1ZbR.js";import"./sys-enter-2-kpgYGCQC.js";import"./alert-Ba0jfTcX.js";import"./index-Ck5nT1M9.js";import"./index-keBzjxCB.js";import"./Link-hAW6WURd.js";import"./copy-Bydgl4d_.js";import"./copy-qs9aVbQg.js";import"./GitHub-Mark-BtjnqSxc.js";import"./TableOfContent-B5MILnxa.js";import"./index-FWmQFiva.js";import"./index-DSMhm57i.js";import"./index-CYjg-3sd.js";import"./index-bfJ02BDw.js";import"./index-BBX1dqjw.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BmD8Hqdt.js";import"./addCustomCSSWithScoping-Px-H63QY.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
