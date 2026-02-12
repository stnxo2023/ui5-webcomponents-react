import{j as o}from"./iframe-DQ6p6C4w.js";import{useMDXComponents as i}from"./index-PJ7eIANP.js";import{M as p,C as a}from"./blocks-DzLxfDF_.js";import"./Tag-maX3wI_O.js";import"./index-DMdtpgB4.js";import{C as m}from"./ControlsWithNote-Ur_jkq9G.js";import{D as c}from"./DocsHeader-Fv8T_lZo.js";import{F as h}from"./CommandsAndQueries-D4Earqxe.js";import{C as s,D as e}from"./Toast.stories-Dokzgksz.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DP-BBVKe.js";import"./sys-enter-2-CHLEBxpk.js";import"./alert-DwSet8Gr.js";import"./index-BBaHTUom.js";import"./index-Crvp2P38.js";import"./Link-C5vNyymE.js";import"./copy-D-zwDUZI.js";import"./copy-DK9nMyWi.js";import"./GitHub-Mark-aXQ0sgqE.js";import"./TableOfContent-DmXt6Qjn.js";import"./index-DyLo2c5y.js";import"./index-BX38vZ_H.js";import"./index-BTeE4XW8.js";import"./index-GGF-6yBD.js";import"./index-BiYiYWPU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DEFxvwKp.js";import"./addCustomCSSWithScoping-D-NBvgXV.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
