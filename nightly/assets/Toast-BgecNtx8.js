import{j as o}from"./iframe-D-7Wdns9.js";import{useMDXComponents as i}from"./index-DvD8yUkt.js";import{M as p,C as m}from"./blocks-DbRPcZc3.js";import"./Tag-CnF9nKkB.js";import"./index-Be6zsFxp.js";import{C as a}from"./ControlsWithNote-CKX0mdVN.js";import{D as c}from"./DocsHeader-BL48IkRq.js";import{F as h}from"./Footer-M_QXWpzq.js";import"./CommandsAndQueries-DtEJSw4R.js";import"./PageNotFound-C1UEztRs.js";import{C as r,D as s}from"./Toast.stories-DnzcGwpp.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DJAFTTyQ.js";import"./sys-enter-2-CY8szrdt.js";import"./alert-B0l8ygN-.js";import"./index-jYQjsDyG.js";import"./index-IYXWglY5.js";import"./Link-B-zN_JAi.js";import"./copy-CBdiiutr.js";import"./copy-eIAIBU-7.js";import"./GitHub-Mark-BCbihiBb.js";import"./TableOfContent-CHSYHSBj.js";import"./index-BwYsEJM0.js";import"./index-D18p9Zu8.js";import"./index-DvVefbTP.js";import"./index-Bj1jARrT.js";import"./index-Xz-lwjQC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CyP71rSn.js";import"./addCustomCSSWithScoping-DvzvYvm_.js";import"./Illustrations-BvGUWHq-.js";import"./i18n-defaults-CFWtSmu6.js";function e(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:r}),`
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
