import{j as o}from"./iframe-DBm0KKUf.js";import{useMDXComponents as i}from"./index-Cb8BN12q.js";import{M as p,C as a}from"./blocks-FcKewvzz.js";import"./Tag-DHtv4MjB.js";import"./index-D7OJqnCE.js";import{C as m}from"./ControlsWithNote-DRn_SwoD.js";import{D as c}from"./DocsHeader-kZkyM0jE.js";import{F as h}from"./CommandsAndQueries-CpqOMU0z.js";import{C as s,D as e}from"./Toast.stories-DpPa3740.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BXDVlLxS.js";import"./sys-enter-2-B25DXxek.js";import"./alert-ia9fKkJ9.js";import"./index-BAUdr3me.js";import"./index-4ENMwVth.js";import"./Link-Ct9C2jWR.js";import"./copy-D6_B6x6p.js";import"./copy-CNODe6O-.js";import"./GitHub-Mark-MOTxm-zu.js";import"./TableOfContent-DnOFyy0u.js";import"./index-C_dJ2uG6.js";import"./index-DSRVWdNr.js";import"./index-T96p6BIB.js";import"./index-DM0eg3qI.js";import"./index-Ccfulnyg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BPyGpBqG.js";import"./addCustomCSSWithScoping-DI0oMdV8.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
