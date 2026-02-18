import{j as e,B as s}from"./iframe-Dk0n26L0.js";import{useMDXComponents as f}from"./index-GonNK-F8.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-Do665btL.js";import"./Tag-DHDcW-fI.js";import"./index-zII-B7tZ.js";import{C as u}from"./ControlsWithNote-DUok2UAj.js";import{D as S}from"./DocsHeader-CgSCNCH-.js";import{F as v}from"./CommandsAndQueries-C5xq4Qip.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{b as l,S as p,c as m,a as c}from"./sys-help-CKF7vOvJ.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-CCsHm76P.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CyaCviRw.js";import"./sys-enter-2-BeHXFnMA.js";import"./alert-CjBv8gy0.js";import"./index-DVvxIcdz.js";import"./index-Dww5FXQ1.js";import"./Link-CiqsvlwF.js";import"./copy-DjrSG4W0.js";import"./copy-DI2yzFNj.js";import"./GitHub-Mark-DZxCCe7V.js";import"./TableOfContent-DmHVZj_P.js";import"./index-BOuRbWlk.js";import"./index-DZcV0iyk.js";import"./index-BYI0Uf8A.js";import"./index-A7L-MktQ.js";import"./index-DuchmHxs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-WCv2CDBA.js";import"./addCustomCSSWithScoping-C7tuYiM4.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./Search-BICEBzKN.js";import"./Option-Bs3lQB5f.js";import"./ListItemBaseTemplate-BW6zm8tA.js";import"./Select-CgcyfRGV.js";import"./InvisibleMessage-DxH_2GsR.js";import"./slim-arrow-down-Buf41Nuz.js";import"./slim-arrow-down-oRzOUke0.js";import"./ResponsivePopoverCommon.css-B_3MTk0W.js";import"./ValueStateMessage.css-DW6dpdMx.js";import"./search-C8oha9K4.js";import"./Input-BrteEEfL.js";import"./Suggestions.css-BKD2VSge.js";import"./SuggestionItem-BgHqUSrH.js";import"./i18n-defaults-Ca0KLLzw.js";import"./Person-Bk5r7PMP.js";import"./index-ufKMWArj.js";import"./less-znGJqNXZ.js";import"./index-DkiI1ckW.js";import"./ListItemStandard-8LD2v8AG.js";import"./ButtonBadge-BiM6T0-L.js";import"./overflow-CYfNagC5.js";const k=`## Design-Compliant Examples

These examples demonstrate the implementation of design specifications. They primarily illustrate design concepts and mostly do not provide additional functionality. You can reference them to select the appropriate design patterns.
`;function x(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...f(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:d}),`
`,e.jsx(S,{of:d,since:"0.4.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(u,{of:h}),`
`,e.jsx(a,{children:k}),`
`,e.jsx(n.h3,{id:"all-features",children:"All Features"}),`
`,e.jsx(n.p,{children:"A comprehensive ShellBar demonstrating all available features including notifications, search, content items, and profile."}),`
`,e.jsx(r,{of:g}),`
`,e.jsx(n.h3,{id:"embedded-back-navigation",children:"Embedded Back Navigation"}),`
`,e.jsx(n.p,{children:"ShellBar with embedded back navigation button in the start area."}),`
`,e.jsx(r,{of:b}),`
`,e.jsx(n.h3,{id:"trial-example",children:"Trial Example"}),`
`,e.jsx(n.p,{children:"ShellBar configured for trial environments with trial tags and remaining days indicator."}),`
`,e.jsx(r,{of:P}),`
`,e.jsx(n.h3,{id:"multiple-productive-instances",children:"Multiple Productive Instances"}),`
`,e.jsx(n.p,{children:"ShellBar setup for multiple productive system instances with region indicators."}),`
`,e.jsx(r,{of:C}),`
`,e.jsx(n.h3,{id:"multiple-non-productive-instances",children:"Multiple Non-Productive Instances"}),`
`,e.jsx(n.p,{children:"ShellBar setup for multiple non-productive system instances with system and region tags."}),`
`,e.jsx(r,{of:y}),`
`,e.jsx(n.h2,{id:"more-examples",children:"More examples"}),`
`,e.jsx(n.h3,{id:"open-a-popover-on-shellbaritem-click",children:"Open a Popover on ShellBarItem click"}),`
`,e.jsxs(n.p,{children:["To open a popover with the ",e.jsx(n.code,{children:"ShellBarItem"})," you can use the ",e.jsx(n.code,{children:"detail.targetRef"})," property of the ",e.jsx(n.code,{children:"onClick"})," event."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const ShellBarComponent = () => {
  const popoverRef = useRef<PopoverDomRef>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const handleShellBarItemClick: ShellBarItemPropTypes['onClick'] = (e) => {
    popoverRef.current!.opener = e.detail.targetRef;
    setPopoverOpen(true);
  };
  return (
    <>
      <ShellBar>
        <ShellBarItem onClick={handleShellBarItemClick} icon="add" text="add" />
      </ShellBar>
      <Popover
        ref={popoverRef}
        open={popoverOpen}
        onClose={() => {
          setPopoverOpen(false);
        }}
      >
        Hello there!
      </Popover>
    </>
  );
};
`})}),`
`,e.jsx(n.h3,{id:"shellbar-with-shellbarbranding-slot",children:"ShellBar with ShellBarBranding slot"}),`
`,e.jsx(r,{of:M}),`
`,e.jsx(a,{children:B}),`
`,e.jsx(n.h2,{id:"shellbaritem",children:"ShellBarItem"}),`
`,e.jsx(t,{of:l}),`
`,e.jsx(i,{hideHTMLPropsNote:!0,exclude:s,of:l}),`
`,e.jsx(n.h2,{id:"shellbarspacer",children:"ShellBarSpacer"}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(i,{hideHTMLPropsNote:!0,exclude:s,of:p}),`
`,e.jsx(n.h2,{id:"shellbarsearch-experimental",children:"ShellBarSearch (experimental)"}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(i,{hideHTMLPropsNote:!0,of:m}),`
`,e.jsx(n.h2,{id:"shellbarbranding-experimental",children:"ShellBarBranding (experimental)"}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(i,{hideHTMLPropsNote:!0,of:c}),`
`,e.jsx(v,{})]})}function Me(o={}){const{wrapper:n}={...f(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(x,{...o})}):x(o)}export{Me as default};
