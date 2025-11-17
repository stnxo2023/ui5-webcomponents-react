import{j as e,e as s}from"./iframe-DeqKlIRG.js";import{useMDXComponents as f}from"./index-BkEa29Df.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-C1D2jvVQ.js";import"./Tag-EQmX-47F.js";import"./index-CW-zKJIF.js";import{C as u}from"./ControlsWithNote-DNWSkOtb.js";import{D as S}from"./DocsHeader-u_PHA39t.js";import{F as v}from"./CommandsAndQueries-BK0G3Pqq.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,b as p,a as m,c}from"./sys-help-BAOLCHI7.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-Cthg4o99.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BKTQWge_.js";import"./sys-enter-2-qREtxQiM.js";import"./alert-J7MXwQPX.js";import"./index-CNR4ri7j.js";import"./index-vsoaIVfP.js";import"./Link-DmriJHN9.js";import"./copy-B2GlItSC.js";import"./copy-DS8sFIJH.js";import"./GitHub-Mark-GuENG757.js";import"./TableOfContent-5V1zI8jP.js";import"./index-BnqCxbWG.js";import"./index-D3fIG7Vo.js";import"./index-DZSRf0vt.js";import"./index-CUp9ZC_J.js";import"./index-BjGpgXu_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CD5youlR.js";import"./addCustomCSSWithScoping-W7fjoweE.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./Search-DfZjAawY.js";import"./Option-CmUx6ft0.js";import"./ListItemBaseTemplate-D5-84s4y.js";import"./Select-DC3vLiGW.js";import"./InvisibleMessage-BnUatQiz.js";import"./slim-arrow-down-BD3ZShnB.js";import"./slim-arrow-down--R6acl1m.js";import"./ResponsivePopoverCommon.css-Dch4WVjM.js";import"./ValueStateMessage.css-DQDynnzI.js";import"./search-Yz-OcutB.js";import"./Input-CTbiGavu.js";import"./Suggestions.css-CqAFo46i.js";import"./SuggestionItem-DHUQVhWq.js";import"./i18n-defaults-k5o3Svb4.js";import"./Person-Bk5r7PMP.js";import"./index-BGawmT5r.js";import"./less-DyqqT9US.js";import"./index-DwxcPmr1.js";import"./ListItemStandard-B8djI9Ll.js";import"./ButtonBadge-BTU4gqyT.js";import"./overflow-y7AxMlt-.js";const k=`## Design-Compliant Examples

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
