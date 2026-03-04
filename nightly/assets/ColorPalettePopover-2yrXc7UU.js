import{j as o}from"./iframe-BCeV4J61.js";import{useMDXComponents as i}from"./index-DQSXUrY-.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-BaqdfAa9.js";import"./Tag-Bzl_4yyv.js";import"./index-DSCCKcvn.js";import{C as x}from"./ControlsWithNote-Bbo9Mum3.js";import{D as u}from"./DocsHeader-BEqeoGp7.js";import{F as h}from"./CommandsAndQueries-BMt6Du51.js";import{C as n,D as r}from"./ColorPalettePopover.stories-B63p1S4J.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-KKHuPXjp.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DsxmrLjJ.js";import"./sys-enter-2-DTJ11PLs.js";import"./alert-BPfUUxXP.js";import"./index-MH0uXub1.js";import"./index-CTun36xm.js";import"./Link-C83i_H7y.js";import"./copy-BUUqBpbk.js";import"./copy-BLLS_Koh.js";import"./GitHub-Mark-DAbMFpB8.js";import"./TableOfContent-BjaZyA9z.js";import"./index-D6AOhQcP.js";import"./index-BqI0DRaf.js";import"./index-BaMmnI_0.js";import"./index-Dd7n1xMP.js";import"./index-C_9CrSf5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-xuzVGY3l.js";import"./addCustomCSSWithScoping-Bz6BhAjV.js";import"./ResponsivePopoverCommon.css-C2w1fqZM.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
`,o.jsx(u,{of:n,since:"0.20.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(a,{of:r}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(x,{of:r}),`
`,o.jsx(e.h2,{id:"opening-colorpalettepopovers",children:"Opening ColorPalettePopovers"}),`
`,o.jsxs(e.p,{children:["You can open and close the ",o.jsx(e.code,{children:"ColorPalettePopover"})," component in a declarative way using the ",o.jsx(e.code,{children:"open"})," and ",o.jsx(e.code,{children:"opener"})," prop."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`const ColorPalettePopoverComponent = () => {
  const [showPopover, setShowPopover] = useState(false);
  const buttonRef = useRef(null);
  const onButtonClick = (e) => {
    setShowPopover((prev) => !prev);
  };
  return (
    <>
      <Button ref={buttonRef} onClick={onButtonClick}>
        Open ColorPalettePopover
      </Button>
      <ColorPalettePopover open={showPopover} opener={buttonRef.current}>
        <ColorPaletteItem value="pink" />
        <ColorPaletteItem value="darkblue" />
      </ColorPalettePopover>
    </>
  );
};
`})}),`
`,o.jsx(l,{children:f}),`
`,o.jsx(e.h2,{id:"colorpaletteitem",children:"ColorPaletteItem"}),`
`,o.jsx(c,{of:p}),`
`,o.jsx(d,{of:p}),`
`,o.jsx(h,{})]})}function Q(t={}){const{wrapper:e}={...i(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(s,{...t})}):s(t)}export{Q as default};
