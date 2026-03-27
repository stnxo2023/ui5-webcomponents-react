import{j as o}from"./iframe-J46VriOb.js";import{useMDXComponents as i}from"./index-CBla0wLi.js";import{M as p,C as m}from"./blocks-beoBu_qL.js";import"./Tag-DrBKyONn.js";import"./index-_u-v5yqi.js";import{C as a}from"./ControlsWithNote-Dp20gIeT.js";import{D as c}from"./DocsHeader-JnzTcXhY.js";import{F as h}from"./Footer-CEGsJe_E.js";import"./CommandsAndQueries-BzSXHbZJ.js";import"./PageNotFound-D29obeve.js";import{C as r,D as s}from"./Toast.stories-ICJwAcjN.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CATkPoRV.js";import"./sys-enter-2-Cc8Mj3l6.js";import"./alert-BWP7y2xA.js";import"./index-CT7sD2iL.js";import"./index-BrGkrW3e.js";import"./Link-B4FJ2xg8.js";import"./copy-OxJaHIT2.js";import"./copy-_0TxAB6h.js";import"./GitHub-Mark-DIlvSSXN.js";import"./TableOfContent-Udn_Do39.js";import"./index-BkIHYavW.js";import"./index-Dt6WNWTR.js";import"./index-Dw3YBt24.js";import"./index-D6itq-2d.js";import"./index-aps2uNQB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DxsI6DA6.js";import"./addCustomCSSWithScoping-Dl6_6-AL.js";import"./Illustrations-D_iUtabn.js";import"./i18n-defaults-CFWtSmu6.js";function e(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:r}),`
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
