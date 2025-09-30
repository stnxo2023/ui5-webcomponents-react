import{j as e,e as s}from"./iframe-sceg0YFv.js";import{useMDXComponents as f}from"./index-Dd71zBof.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-DYuUqipq.js";import"./Tag-CeuATfsT.js";import"./index-D3F4cwyn.js";import{C as u}from"./ControlsWithNote-LTnpivX1.js";import{D as S}from"./DocsHeader-CSpCxbB9.js";import{F as v}from"./CommandsAndQueries-DKneq4GY.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,b as p,a as m,c}from"./sys-help-DLAuexfz.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-CEGEOMi6.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BKrgGcb8.js";import"./sys-enter-2-t67Ok8iZ.js";import"./alert-DGYqNpWm.js";import"./index-B8FjapMT.js";import"./index-F95KXh_C.js";import"./Link-DWrZ8VdK.js";import"./copy-DfLVtJdG.js";import"./copy-BMdV5CCm.js";import"./GitHub-Mark-BSK1eyWR.js";import"./TableOfContent-CwcK6kQm.js";import"./index-8sMjurJr.js";import"./index-DSENQiVR.js";import"./index-Bk8MfuNW.js";import"./index-CEhCU38B.js";import"./index-DAUv-Nz3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BrlG2Z_i.js";import"./addCustomCSSWithScoping-CcKa_wrj.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./Search-DzNIbQAP.js";import"./Option-g5dMk_Dv.js";import"./ListItemBaseTemplate-DRhEz-gw.js";import"./Select-ByBsloVO.js";import"./InvisibleMessage-BWbsBg6p.js";import"./slim-arrow-down-BMGSx_7g.js";import"./slim-arrow-down-B5pvNBWL.js";import"./ResponsivePopoverCommon.css-nC5XMOBp.js";import"./ValueStateMessage.css-DoUgf-5j.js";import"./search-BCZbvt-3.js";import"./Input-BzfDni2m.js";import"./Suggestions.css-BM83gU06.js";import"./SuggestionItem-pUR3Pu7g.js";import"./i18n-defaults-BS8OTJAB.js";import"./Person-Bk5r7PMP.js";import"./index-Dnv3XQPA.js";import"./less-Byh4l9lP.js";import"./index-Ds8Sghxz.js";import"./ListItemStandard-B6k3txAq.js";import"./ButtonBadge-DwME7J8a.js";import"./overflow-jBOwp1Ps.js";import"./overflow-BmToeorv.js";const k=`## Design-Compliant Examples

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
`,e.jsx(v,{})]})}function ke(o={}){const{wrapper:n}={...f(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(x,{...o})}):x(o)}export{ke as default};
