import{j as o}from"./iframe-aKs2ZWAj.js";import{useMDXComponents as i}from"./index-c4zJYkcR.js";import{M as p,C as a}from"./blocks-fvCr5kp9.js";import"./Tag-DSoVP5MU.js";import"./index-CMRRcr14.js";import{C as m}from"./ControlsWithNote-B8WaBvsi.js";import{D as c}from"./DocsHeader-C9NlxNFr.js";import{F as h}from"./CommandsAndQueries-IBiFSZr-.js";import{C as s,D as e}from"./Toast.stories-vQmh_1m8.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CcxaAVSU.js";import"./sys-enter-2-DseuEdAf.js";import"./alert-DbU8Ao5u.js";import"./index-Dqo0aPAB.js";import"./index-Bj8ei7PO.js";import"./Link--ytwK8Iw.js";import"./copy-uvypmv5n.js";import"./copy-D9idsxI8.js";import"./GitHub-Mark-CtzbVoJK.js";import"./TableOfContent-BssXKtqS.js";import"./index-DNGZMnOS.js";import"./index-9dBzyYap.js";import"./index-ChXUbPo1.js";import"./index-B_N5JODd.js";import"./index-MuWvZ7Ot.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C1lURHaG.js";import"./addCustomCSSWithScoping--I2WhUfl.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
