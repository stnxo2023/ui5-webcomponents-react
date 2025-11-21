import{j as o}from"./iframe-DVV5VFB7.js";import{useMDXComponents as i}from"./index-qyzUrO0d.js";import{M as p,C as a}from"./blocks-D1E9_7c3.js";import"./Tag-CQyymDzh.js";import"./index-Bn7PyzsE.js";import{C as m}from"./ControlsWithNote-Cyp5Omba.js";import{D as c}from"./DocsHeader-C5HE4F6W.js";import{F as h}from"./CommandsAndQueries-lBZKGmp7.js";import{C as s,D as e}from"./Toast.stories-DGfy41K2.js";import"./preload-helper-PPVm8Dsz.js";import"./information-rc4de9km.js";import"./sys-enter-2-DXmpS6_D.js";import"./alert-DByE3GtL.js";import"./index-DCIIs4BW.js";import"./index-gDTG9hvV.js";import"./Link-DfNmKUcn.js";import"./copy-C0qjFs7Y.js";import"./copy-Cn3WomF2.js";import"./GitHub-Mark-DFg714Wy.js";import"./TableOfContent-BFe6IJBY.js";import"./index-Dqdoz1dV.js";import"./index-BkDm8D7N.js";import"./index-gNtvK5Wx.js";import"./index-ZnLduBLK.js";import"./index-BHIms4DS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B_xwBI5c.js";import"./addCustomCSSWithScoping-DOzeCYXW.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
