import{j as o}from"./iframe-BFfiCRAQ.js";import{useMDXComponents as i}from"./index-CnIchwG9.js";import{M as p,C as m}from"./blocks-D8UGMoOU.js";import"./Tag-D5_wJnae.js";import"./index-BvMEXi75.js";import{C as a}from"./ControlsWithNote-COkN8HtC.js";import{D as c}from"./DocsHeader-BqSqZAws.js";import{F as h}from"./Footer-3U2rULEI.js";import"./CommandsAndQueries-D2e25SQ4.js";import"./PageNotFound-CAIx-1qq.js";import{C as r,D as s}from"./Toast.stories-CIerwiTU.js";import"./preload-helper-PPVm8Dsz.js";import"./information-mHfS5cWl.js";import"./sys-enter-2-BfeK50PI.js";import"./alert-DGgnTy1o.js";import"./index-BsyXKf0m.js";import"./index-De1oz68R.js";import"./Link-BzXMrnu2.js";import"./copy-BWFRoD18.js";import"./copy-CbWPHS6-.js";import"./GitHub-Mark-1-avKd4a.js";import"./TableOfContent-DfIS3zQ7.js";import"./index-stFY49PR.js";import"./index-C_tePRTa.js";import"./index-Arv69njm.js";import"./index-BEK-Ecqi.js";import"./index-CX51hblh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-RE3-w7CJ.js";import"./addCustomCSSWithScoping-rUi9bOzC.js";import"./Illustrations-DMZSmuvx.js";import"./i18n-defaults-CFWtSmu6.js";function e(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:r}),`
`,o.jsx(c,{of:r,since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{of:s}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(a,{of:s}),`
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
`,o.jsx(h,{})]})}function G(n={}){const{wrapper:t}={...i(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(e,{...n})}):e(n)}export{G as default};
