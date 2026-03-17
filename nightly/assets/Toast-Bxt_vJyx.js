import{j as o}from"./iframe-30LZfzOw.js";import{useMDXComponents as i}from"./index-9hK3vCGp.js";import{M as p,C as m}from"./blocks-C0vZ6D8t.js";import"./Tag-Dtxkyswp.js";import"./index-CjMm9yFV.js";import{C as a}from"./ControlsWithNote-CXKPC-Oz.js";import{D as c}from"./DocsHeader-WWsNQMtH.js";import{F as h}from"./Footer-BNR5gUPY.js";import"./CommandsAndQueries-B3tX98p8.js";import"./PageNotFound-yG6M5MId.js";import{C as r,D as s}from"./Toast.stories-C-qR93ng.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BQPccwsM.js";import"./sys-enter-2-CbSQlHDF.js";import"./alert-BwFRRuyW.js";import"./index-CZwEe_4d.js";import"./index-CqMGZXJd.js";import"./Link-CPAvZ0M5.js";import"./copy-B0nYe01_.js";import"./copy-BDfV85Pd.js";import"./GitHub-Mark-zOAT4iF3.js";import"./TableOfContent-BvUVIFBa.js";import"./index-CFfbQ4H0.js";import"./index-DBMP_Ccw.js";import"./index-BqAk99uF.js";import"./index-orHhnsuM.js";import"./index-DNQEiveD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dl3uWGQL.js";import"./addCustomCSSWithScoping-DtBGS5Q4.js";import"./Illustrations-BGO-1oHt.js";import"./i18n-defaults-CFWtSmu6.js";function e(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:r}),`
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
