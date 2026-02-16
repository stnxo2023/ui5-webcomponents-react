import{j as o}from"./iframe-BQw543fO.js";import{useMDXComponents as i}from"./index-BxhW0hRZ.js";import{M as p,C as a}from"./blocks-DVt0JaPi.js";import"./Tag-sELDi5ig.js";import"./index-DRKxBO9I.js";import{C as m}from"./ControlsWithNote-BMlhetbG.js";import{D as c}from"./DocsHeader-DDhXpWgW.js";import{F as h}from"./CommandsAndQueries-C4NyJWbb.js";import{C as s,D as e}from"./Toast.stories-CZCr5OyW.js";import"./preload-helper-PPVm8Dsz.js";import"./information-giMaU9kv.js";import"./sys-enter-2-8R25DHYh.js";import"./alert-DoRuAU1t.js";import"./index-CButcFfg.js";import"./index-8hxRUREt.js";import"./Link-CGxFiH0u.js";import"./copy-C_ssWSvd.js";import"./copy-9tJvlpXS.js";import"./GitHub-Mark-D1k6uRd4.js";import"./TableOfContent-BV0A-3x_.js";import"./index-B2T-_GlF.js";import"./index-DlwOY2o8.js";import"./index-DqHN2E4G.js";import"./index-B74G-VBW.js";import"./index-B0V2Rdv7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BUFLcfGV.js";import"./addCustomCSSWithScoping-JZmabDZV.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
