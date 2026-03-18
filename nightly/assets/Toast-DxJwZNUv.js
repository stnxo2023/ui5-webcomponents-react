import{j as o}from"./iframe-ClKZoppV.js";import{useMDXComponents as i}from"./index-BBP-HRkM.js";import{M as p,C as m}from"./blocks-C6PUfAN7.js";import"./Tag-CnAKe81V.js";import"./index-Brz6Jamn.js";import{C as a}from"./ControlsWithNote-BJv1bkXz.js";import{D as c}from"./DocsHeader-aD31_w4z.js";import{F as h}from"./Footer-BJ8-oElo.js";import"./CommandsAndQueries-BSg7r23V.js";import"./PageNotFound-DkMfdMip.js";import{C as r,D as s}from"./Toast.stories-EPjuF3IK.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C2rgVrmf.js";import"./sys-enter-2-zNCrvlrA.js";import"./alert-DLSg1FPP.js";import"./index-CEU-nQxX.js";import"./index-Tx9EfJkS.js";import"./Link-DLU4uHoZ.js";import"./copy-zGSFbqtO.js";import"./copy-rX2zRtcl.js";import"./GitHub-Mark-DlD1eMnp.js";import"./TableOfContent-sHwgKy8t.js";import"./index-kUQXQip-.js";import"./index-Dnwis2Yb.js";import"./index-BFw8ePED.js";import"./index-W9ERffOR.js";import"./index-DG_kdwr6.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CJ7j91qP.js";import"./addCustomCSSWithScoping-5Po78CSL.js";import"./Illustrations-CjXAC4Lw.js";import"./i18n-defaults-CFWtSmu6.js";function e(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:r}),`
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
