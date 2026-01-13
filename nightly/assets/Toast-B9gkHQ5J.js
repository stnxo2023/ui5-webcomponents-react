import{j as o}from"./iframe-BkU8WQpb.js";import{useMDXComponents as i}from"./index-BeG8GrN5.js";import{M as p,C as a}from"./blocks-CLMMfPPt.js";import"./Tag-Cih70sHI.js";import"./index-DnBqZpyB.js";import{C as m}from"./ControlsWithNote-DyRp8-gJ.js";import{D as c}from"./DocsHeader-C30QBAZS.js";import{F as h}from"./CommandsAndQueries-DetvrItO.js";import{C as s,D as e}from"./Toast.stories-INPr5kjq.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CjNccefj.js";import"./sys-enter-2-RLTSxo4s.js";import"./alert-DdBYY2qU.js";import"./index-DATmYB4_.js";import"./index-eFI2U8Up.js";import"./Link-DLFy93gF.js";import"./copy-BbR_ie7A.js";import"./copy-B4HTDbaZ.js";import"./GitHub-Mark-BfbqEMTI.js";import"./TableOfContent-PrM3zgzS.js";import"./index-Dj6CZlQQ.js";import"./index-f6jDEWAh.js";import"./index-D4xCyo8q.js";import"./index-DWR5LsZZ.js";import"./index-BysDONg4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Fp7idO2l.js";import"./addCustomCSSWithScoping-CehjyWVu.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
