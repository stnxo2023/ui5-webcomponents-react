import{j as o}from"./iframe-D1jKIypo.js";import{useMDXComponents as i}from"./index-M1_DZHmj.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-BvvvBGFc.js";import"./Tag-BqsbpO_s.js";import"./index-ClSanEKt.js";import{C as x}from"./ControlsWithNote-Dvk3pXiG.js";import{D as u}from"./DocsHeader-DW4HLfqf.js";import{F as h}from"./CommandsAndQueries-BkaxH0BE.js";import{C as n,D as r}from"./ColorPalettePopover.stories-BeCMf-kM.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-O8Tqz2p8.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B8vikb0m.js";import"./sys-enter-2-DByg53Ih.js";import"./alert-D9Mn7721.js";import"./index-C56hzs5D.js";import"./index-DHEWI2kL.js";import"./Link-BTNp59uu.js";import"./copy-CBApsEQO.js";import"./copy-DgqWK_AB.js";import"./GitHub-Mark-CbjORjsC.js";import"./TableOfContent-DgOocbRO.js";import"./index-BBeTD3z6.js";import"./index-T4x6aH8D.js";import"./index-C7kBl8gS.js";import"./index-BKZiIOM7.js";import"./index-D6PVc_6_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DRCEREPf.js";import"./addCustomCSSWithScoping-BmLQ2iz1.js";import"./ResponsivePopoverCommon.css-DN-Rc-d6.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
