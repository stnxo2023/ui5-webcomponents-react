import{j as o}from"./iframe-BCeV4J61.js";import{useMDXComponents as i}from"./index-DQSXUrY-.js";import{M as p,C as a}from"./blocks-BaqdfAa9.js";import"./Tag-Bzl_4yyv.js";import"./index-DSCCKcvn.js";import{C as m}from"./ControlsWithNote-Bbo9Mum3.js";import{D as c}from"./DocsHeader-BEqeoGp7.js";import{F as h}from"./CommandsAndQueries-BMt6Du51.js";import{C as s,D as e}from"./Toast.stories-QNV4hNNK.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DsxmrLjJ.js";import"./sys-enter-2-DTJ11PLs.js";import"./alert-BPfUUxXP.js";import"./index-MH0uXub1.js";import"./index-CTun36xm.js";import"./Link-C83i_H7y.js";import"./copy-BUUqBpbk.js";import"./copy-BLLS_Koh.js";import"./GitHub-Mark-DAbMFpB8.js";import"./TableOfContent-BjaZyA9z.js";import"./index-D6AOhQcP.js";import"./index-BqI0DRaf.js";import"./index-BaMmnI_0.js";import"./index-Dd7n1xMP.js";import"./index-C_9CrSf5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-xuzVGY3l.js";import"./addCustomCSSWithScoping-Bz6BhAjV.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
