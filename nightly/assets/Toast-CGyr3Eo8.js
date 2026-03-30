import{j as o}from"./iframe-CJJIsx6F.js";import{u as i,M as p,C as a}from"./blocks-ChaXMZP5.js";import"./Tag-n7rERTqv.js";import"./index-C3WbBMZ1.js";import{C as m}from"./ControlsWithNote-C517f0VS.js";import{D as c}from"./DocsHeader-UlcWAO4j.js";import{F as h}from"./Footer-Ce6by-oH.js";import"./CommandsAndQueries-B6BpCs-M.js";import"./PageNotFound-BtSzGq-G.js";import{C as s,D as r}from"./Toast.stories-e1BxB5RQ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DHzv4rEq.js";import"./sys-enter-2-DxE2QBT2.js";import"./alert-BgdGP7JP.js";import"./index-Comgbi1p.js";import"./index-8nS7lmoC.js";import"./Link-GrYjVq0T.js";import"./copy-C35nr0mJ.js";import"./copy-CS6obn2m.js";import"./GitHub-Mark-C9rLi2lG.js";import"./TableOfContent-CASxHgew.js";import"./index-DqWhINqr.js";import"./index-qLq9B_00.js";import"./index-BAPIP2EX.js";import"./index-CiQC7Mcr.js";import"./index-DWaBFkkI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CLM_ccAB.js";import"./addCustomCSSWithScoping-DH49qo7-.js";import"./Illustrations-BhBoWAi4.js";import"./i18n-defaults-CFWtSmu6.js";function e(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
`,o.jsx(c,{of:s,since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(a,{of:r}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(m,{of:r}),`
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
`,o.jsx(h,{})]})}function z(n={}){const{wrapper:t}={...i(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(e,{...n})}):e(n)}export{z as default};
