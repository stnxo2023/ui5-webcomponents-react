import{j as o}from"./iframe-dhwXAt1u.js";import{useMDXComponents as i}from"./index-DImPBCtJ.js";import{M as p,C as a}from"./blocks-CTyxDY6f.js";import"./Tag-BG2XjNSs.js";import"./index-B1ZC6OTg.js";import{C as m}from"./ControlsWithNote-BR4gWz9J.js";import{D as c}from"./DocsHeader-B9ZTWf_s.js";import{F as h}from"./CommandsAndQueries-BiJh2_dH.js";import{C as s,D as e}from"./Toast.stories-cKyYbzhj.js";import"./preload-helper-PPVm8Dsz.js";import"./information-hzaD6T-d.js";import"./sys-enter-2-B2YAXpf0.js";import"./alert-DeSP_HIc.js";import"./index-BPFGYJtx.js";import"./index-3eryvK5U.js";import"./Link-Cd_dPy_Q.js";import"./copy-pW7ch1Hp.js";import"./copy-WVaPICqB.js";import"./GitHub-Mark-C9l0es6k.js";import"./TableOfContent-BPTWbr_t.js";import"./index-DEgKjCYL.js";import"./index-C7W-OT1T.js";import"./index-CAgLAQbh.js";import"./index-T43jgYfn.js";import"./index-CdiB3Os4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BR_2w1_J.js";import"./addCustomCSSWithScoping-cc9WpAMd.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
