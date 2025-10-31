import{j as o}from"./iframe-CZzIPN_f.js";import{useMDXComponents as i}from"./index-BN7772Ln.js";import{M as p,C as a}from"./blocks-CpAefQ0F.js";import"./Tag-B8_XKizL.js";import"./index-CYLMYqU3.js";import{C as m}from"./ControlsWithNote-D0D6e7_T.js";import{D as c}from"./DocsHeader-DscAge5I.js";import{F as h}from"./CommandsAndQueries-C_V-vyfI.js";import{C as s,D as e}from"./Toast.stories-3jo0r7I0.js";import"./preload-helper-PPVm8Dsz.js";import"./information-6G8KrWG0.js";import"./sys-enter-2-Blj9-cAn.js";import"./alert-BtpU_SH9.js";import"./index-TDczsIb0.js";import"./index-CiiSHxVf.js";import"./Link-Fkmlwa07.js";import"./copy-CkuztRfR.js";import"./copy-CFuW58eh.js";import"./GitHub-Mark-D1EJCevk.js";import"./TableOfContent-BiAzmVZ5.js";import"./index-RbSpX7Av.js";import"./index-RQjAfURV.js";import"./index-CCj5LB1a.js";import"./index-DMvyX2go.js";import"./index-c-1N-cez.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CmB6T7HK.js";import"./addCustomCSSWithScoping-DaZxNPdr.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
