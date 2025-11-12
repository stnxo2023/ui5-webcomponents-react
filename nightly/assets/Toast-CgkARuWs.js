import{j as o}from"./iframe-m3wgL8DO.js";import{useMDXComponents as i}from"./index-BDA4Q--W.js";import{M as p,C as a}from"./blocks-CkTarMgO.js";import"./Tag-tSZf1-5X.js";import"./index-XwYlDB9P.js";import{C as m}from"./ControlsWithNote-Bfr8xnVJ.js";import{D as c}from"./DocsHeader-B9aLmGE3.js";import{F as h}from"./CommandsAndQueries-DJJG77Q0.js";import{C as s,D as e}from"./Toast.stories-BbtykOuC.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DsCCxR_j.js";import"./sys-enter-2-3GVzqOhh.js";import"./alert-CYqVZ7NL.js";import"./index-BSNngnc7.js";import"./index-CVyBcJoi.js";import"./Link-BBA1fpnp.js";import"./copy-CD1CC4_Q.js";import"./copy-CODhXho7.js";import"./GitHub-Mark-CdXXKoW5.js";import"./TableOfContent-CYqz57vy.js";import"./index-BhmtIGIH.js";import"./index-D9MBfHQe.js";import"./index-CLINieEb.js";import"./index-00DfGzTS.js";import"./index-B7uA3u-p.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C6f_OpFu.js";import"./addCustomCSSWithScoping-D1ffFiBE.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
