import{j as o}from"./iframe-DoO3B8k6.js";import{useMDXComponents as i}from"./index-c3qBf9j-.js";import{M as p,C as a}from"./blocks-SZ1zCtFT.js";import"./Tag-BQH01MnI.js";import"./index-0e8xkLwE.js";import{C as m}from"./ControlsWithNote-8xXb6PAb.js";import{D as c}from"./DocsHeader-pRz4TQH5.js";import{F as h}from"./CommandsAndQueries-BgTP9rvd.js";import{C as s,D as e}from"./Toast.stories-BibNgGwp.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CQ3_UNon.js";import"./sys-enter-2-04wFErlJ.js";import"./alert-TTaxVgBW.js";import"./index-DcEck9MJ.js";import"./index-DHXtHkXk.js";import"./Link-BjpII7wh.js";import"./copy-KqjGIa02.js";import"./copy-_xuz2Nel.js";import"./GitHub-Mark-CAxvVkKU.js";import"./TableOfContent-B2fiLQKN.js";import"./index-BSLJX4WE.js";import"./index-CQlaTUTv.js";import"./index-DkL8yUNi.js";import"./index-DNsrF3vl.js";import"./index-DeXyQXgZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CRtsvWdt.js";import"./addCustomCSSWithScoping-BMQmLAx8.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
