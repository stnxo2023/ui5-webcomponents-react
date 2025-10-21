import{j as o}from"./iframe-Bb0HmHnB.js";import{useMDXComponents as i}from"./index-Meo06HOS.js";import{M as p,C as a}from"./blocks-CgyFha0p.js";import"./Tag-CkJgtMYU.js";import"./index-e-oHYPrA.js";import{C as m}from"./ControlsWithNote-C0RGHc9T.js";import{D as c}from"./DocsHeader--oUZkZKK.js";import{F as h}from"./CommandsAndQueries-tR4iht-v.js";import{C as s,D as e}from"./Toast.stories-B4G13Pul.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CuEP2--w.js";import"./sys-enter-2-BxgOL3Cz.js";import"./alert-CRFvm_h4.js";import"./index-CCkcOLyJ.js";import"./index-DRj5BOAv.js";import"./Link-Ctr6McPA.js";import"./copy-D1tyYoI7.js";import"./copy-ClXY_Ebg.js";import"./GitHub-Mark-DQRgODc2.js";import"./TableOfContent-GqtJPfFU.js";import"./index-BUHcje1a.js";import"./index-ujA-0uQD.js";import"./index-DamhzNr0.js";import"./index-kXJ0csex.js";import"./index-DkF-cfFa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DmK6tfuz.js";import"./addCustomCSSWithScoping-DZsYEWJZ.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
