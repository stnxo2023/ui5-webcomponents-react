import{j as o}from"./iframe-CRoIzMtp.js";import{useMDXComponents as i}from"./index-uepxEeS1.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-BWnl8hC4.js";import"./Tag-pVHInn9_.js";import"./index-l4qALITX.js";import{C as x}from"./ControlsWithNote-B074C6wz.js";import{D as u}from"./DocsHeader-BtNALTqX.js";import{F as h}from"./CommandsAndQueries-tg7iHgNo.js";import{C as n,D as r}from"./ColorPalettePopover.stories-DeegVtsU.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-DqQzpH3Q.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DT5Qd4to.js";import"./sys-enter-2-DutWnZ3I.js";import"./alert-D-9oczO0.js";import"./index-BY3Vu1_E.js";import"./index-83H_WNAi.js";import"./Link-ByRh7pJY.js";import"./copy-CuZEUVA0.js";import"./copy-D8-Me-o2.js";import"./GitHub-Mark-BMfoN6Yu.js";import"./TableOfContent-CzcYt69w.js";import"./index-C8wLfWwH.js";import"./index-BWA_OWVW.js";import"./index-DCZY0XoF.js";import"./index-BGCNx8iW.js";import"./index-Cq7XEcI3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbjPHeWw.js";import"./addCustomCSSWithScoping-DJ9mEG-L.js";import"./ResponsivePopoverCommon.css-CCSjtQV1.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
