import{j as o}from"./iframe-BtOtRMtR.js";import{useMDXComponents as i}from"./index-CgtvsECt.js";import{M as p,C as a}from"./blocks-D9wmcLvH.js";import"./Tag-C9nMOu5c.js";import"./index-Cb_okFKb.js";import{C as m}from"./ControlsWithNote-ylJnyVwL.js";import{D as c}from"./DocsHeader-BlRAfoKH.js";import{F as h}from"./CommandsAndQueries-CKs7dFOK.js";import{C as s,D as e}from"./Toast.stories-D5uGw6fN.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D5w9Hrcs.js";import"./sys-enter-2-Bq4TRZEz.js";import"./alert-CYL_IdM5.js";import"./index-B8f2IgEG.js";import"./index-CSfaSQyt.js";import"./Link-BYt0ZGVT.js";import"./copy-DhM4rUDn.js";import"./copy-CGNUo2FO.js";import"./GitHub-Mark-ChiDCgEd.js";import"./TableOfContent-BCPzy_yC.js";import"./index-DyCpVDUu.js";import"./index-BG_zbJpP.js";import"./index-BRaE6xYn.js";import"./index-Ch2focQy.js";import"./index-Ddk7eeGJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4u4TRFh7.js";import"./addCustomCSSWithScoping-Ji9yZ6HK.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
