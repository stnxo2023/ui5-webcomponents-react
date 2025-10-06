import{j as o}from"./iframe-HNnxxD_z.js";import{useMDXComponents as i}from"./index-DMbTStZf.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-CCejLYgP.js";import"./Tag-C_XEAXfN.js";import"./index-sOkH0Wf9.js";import{C as x}from"./ControlsWithNote-Dhu9GziC.js";import{D as u}from"./DocsHeader-Cea1CK0F.js";import{F as h}from"./CommandsAndQueries-10i8xq6U.js";import{C as n,D as r}from"./ColorPalettePopover.stories-DnqSOQg4.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-C_hb_FcF.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BWoF60GS.js";import"./sys-enter-2-BmofK6wa.js";import"./alert-qoF8AI7R.js";import"./index-B3Qe_MYG.js";import"./index-B_Z8tqtL.js";import"./Link-CqZZKZ0X.js";import"./copy-CZ_9T5Wd.js";import"./copy-DRw12hkD.js";import"./GitHub-Mark-BpcLW3KD.js";import"./TableOfContent-C3vnVgT_.js";import"./index-BN0PdEk3.js";import"./index-DoZC0kx0.js";import"./index-Bmalf1dG.js";import"./index-CbtLCQbD.js";import"./index-BNjcdWK4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-7TcfhjQy.js";import"./addCustomCSSWithScoping-BgldszW1.js";import"./ResponsivePopoverCommon.css-NA3QCBzV.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
