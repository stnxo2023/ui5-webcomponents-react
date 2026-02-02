import{j as o}from"./iframe-CeMquKfU.js";import{useMDXComponents as i}from"./index-BbFo7jBM.js";import{M as p,C as a}from"./blocks-Db1iDIvu.js";import"./Tag-DBOPR6ka.js";import"./index-BWGqmYD4.js";import{C as m}from"./ControlsWithNote-BmMLVWWf.js";import{D as c}from"./DocsHeader-CDkUnTUT.js";import{F as h}from"./CommandsAndQueries-DG6G8TEI.js";import{C as s,D as e}from"./Toast.stories-DCD0rf8S.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BF8hjIJ6.js";import"./sys-enter-2-CBCKgEbS.js";import"./alert-DPPxzZqA.js";import"./index-CQMy8EdC.js";import"./index-WnbBQODb.js";import"./Link-B4KwrrH9.js";import"./copy-DoTCoMit.js";import"./copy-DuOXgjDa.js";import"./GitHub-Mark-D5azJnro.js";import"./TableOfContent-DfQZ96tK.js";import"./index-DYb2g8Yq.js";import"./index-srI8srsL.js";import"./index-Brk-KPPC.js";import"./index-jfPm289V.js";import"./index-DMujUK6u.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-RK7-B4yx.js";import"./addCustomCSSWithScoping-06k5HVP6.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
