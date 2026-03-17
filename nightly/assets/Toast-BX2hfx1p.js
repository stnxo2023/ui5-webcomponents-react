import{j as o}from"./iframe-CGE6jX6t.js";import{useMDXComponents as i}from"./index-CnlF4PpM.js";import{M as p,C as m}from"./blocks-C1wugZAv.js";import"./Tag-BT7c2k9t.js";import"./index-O5K3XRBn.js";import{C as a}from"./ControlsWithNote-Co8nCt7_.js";import{D as c}from"./DocsHeader-BDBaIGAV.js";import{F as h}from"./Footer-BebX2FrJ.js";import"./CommandsAndQueries-D_JGI6Ia.js";import"./PageNotFound-gkdNug7A.js";import{C as r,D as s}from"./Toast.stories-COsEP3Wx.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DjCg2NR8.js";import"./sys-enter-2-WI9s45tq.js";import"./alert-DkCV9tpB.js";import"./index-Bx2-sARl.js";import"./index-CMs90z2F.js";import"./Link-B734PLKt.js";import"./copy-DjOlJehV.js";import"./copy-ByAfyVz0.js";import"./GitHub-Mark-jrKWl5Ep.js";import"./TableOfContent-D00F15mF.js";import"./index-bjWm1Qbv.js";import"./index-D4AJb6hG.js";import"./index-D1hVPzQS.js";import"./index-WD-xjM3p.js";import"./index-DuWDlj0H.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-jWRCnrak.js";import"./addCustomCSSWithScoping-Bg1A5NWS.js";import"./Illustrations-DcoINpXf.js";import"./i18n-defaults-CFWtSmu6.js";function e(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:r}),`
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
