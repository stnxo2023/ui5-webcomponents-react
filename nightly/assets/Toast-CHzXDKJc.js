import{j as o}from"./iframe-CojmUvbr.js";import{useMDXComponents as i}from"./index-yNE59oSe.js";import{M as p,C as a}from"./blocks-CCIsbg9K.js";import"./Tag-Dsf3IOJa.js";import"./index-Brr98IUO.js";import{C as m}from"./ControlsWithNote-DQ8Crg8_.js";import{D as c}from"./DocsHeader-SVcQ-nrz.js";import{F as h}from"./CommandsAndQueries-aZHAlwyo.js";import{C as s,D as e}from"./Toast.stories-D-iM_901.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BEykFvbu.js";import"./sys-enter-2-BjWZZR70.js";import"./alert-CeJt7tDB.js";import"./index-CW7nJiyw.js";import"./index-YKIZAZmt.js";import"./Link-DrGCnOch.js";import"./copy-DAVGLFJC.js";import"./copy-BaosELJI.js";import"./GitHub-Mark-CClA253F.js";import"./TableOfContent-CYdFHrwI.js";import"./index-DWXpW2Nz.js";import"./index-CJ7ufDVc.js";import"./index-DSq2zmmv.js";import"./index-n-K8h2zA.js";import"./index-BIRLYBEm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CBX4KpMg.js";import"./addCustomCSSWithScoping-IwiFNes4.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
