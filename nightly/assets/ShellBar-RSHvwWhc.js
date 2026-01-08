import{j as e,e as s}from"./iframe-BSil-P7u.js";import{useMDXComponents as f}from"./index-vt-1HXZR.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-DAd1jcGX.js";import"./Tag-C9JFY3U3.js";import"./index-DHsON_5K.js";import{C as u}from"./ControlsWithNote-IzVnpcp3.js";import{D as S}from"./DocsHeader-or8uocV3.js";import{F as v}from"./CommandsAndQueries-D6srY1_t.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,b as p,a as m,c}from"./sys-help-Dbyro2xJ.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-Cd5Ll-jt.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BmoL6a_m.js";import"./sys-enter-2-CRjOI67W.js";import"./alert-B93IgYs6.js";import"./index-CM8rBgl_.js";import"./index-CoIXLnKn.js";import"./Link-qL_T98pU.js";import"./copy-DRBTYiSa.js";import"./copy-CwHd1VH0.js";import"./GitHub-Mark-kSE0aKM7.js";import"./TableOfContent-BThO0rAD.js";import"./index-FBl5xz3h.js";import"./index-TzMEaDq9.js";import"./index-DYtE3L5B.js";import"./index-BEx2FW11.js";import"./index-DzdENY0T.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bp27VxQp.js";import"./addCustomCSSWithScoping-BLX4O9b7.js";import"./parameters-bundle.css-B37gDvcF.js";import"./Search-NfYRJ0PX.js";import"./Option-D_fhd8yQ.js";import"./ListItemBaseTemplate-XePtjjIP.js";import"./Select-DIzgGRIh.js";import"./InvisibleMessage-8W7RFh9p.js";import"./slim-arrow-down-CEMmPYc4.js";import"./slim-arrow-down-CceGcM8g.js";import"./ResponsivePopoverCommon.css-D6ugJ8J6.js";import"./ValueStateMessage.css-Bl9ehnfn.js";import"./search-ChTyWgOS.js";import"./Input-Brq604ts.js";import"./Suggestions.css-DL5LMP4f.js";import"./SuggestionItem-D-NzBmhj.js";import"./i18n-defaults-BTYpTGpY.js";import"./Person-Bk5r7PMP.js";import"./index-CBHCu-XZ.js";import"./less-Cu4-mAFi.js";import"./index-COoFy5LW.js";import"./ListItemStandard-Co9OiWLE.js";import"./ButtonBadge-rA-adnOd.js";import"./overflow-C3066w15.js";const k=`## Design-Compliant Examples

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
