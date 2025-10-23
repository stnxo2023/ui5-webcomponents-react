import{j as e,e as s}from"./iframe-DJ3L9Q7k.js";import{useMDXComponents as f}from"./index-CgKASuks.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-CtbNLxKJ.js";import"./Tag-dHoy1aOg.js";import"./index-Drb2TrHE.js";import{C as u}from"./ControlsWithNote-jLX323Le.js";import{D as S}from"./DocsHeader-3Rqs1V_9.js";import{F as v}from"./CommandsAndQueries-J0DynbNC.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,b as p,a as m,c}from"./sys-help-pckW2FlX.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-QCCliaqg.js";import"./preload-helper-PPVm8Dsz.js";import"./information-1qu8opp4.js";import"./sys-enter-2-Cu2hBGrK.js";import"./alert-Bssjvu3J.js";import"./index-DJdHB7_b.js";import"./index-DQGcZUo3.js";import"./Link-CI3a-uZg.js";import"./copy-CPi9WMbB.js";import"./copy-dl-GArcT.js";import"./GitHub-Mark-DP3QX4RB.js";import"./TableOfContent-B0H268Zi.js";import"./index-BiXweYzS.js";import"./index-4H2gG8m_.js";import"./index-DDFmE4EA.js";import"./index-BTen11gj.js";import"./index-C_wfJoh6.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BifEEb3N.js";import"./addCustomCSSWithScoping-BamJJJtZ.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./Search-BoEnKKWA.js";import"./Option-asFhuENp.js";import"./ListItemBaseTemplate-C7qYhT1t.js";import"./Select-Cpy_GAyA.js";import"./InvisibleMessage-DIaqYHhI.js";import"./slim-arrow-down-BphH8SC0.js";import"./slim-arrow-down-CD5MJjlC.js";import"./ResponsivePopoverCommon.css-DAHQOPQC.js";import"./ValueStateMessage.css-C1vUk4m-.js";import"./search-DnTwVb5Y.js";import"./Input-BTxUiPoF.js";import"./Suggestions.css-AC0gY3Q2.js";import"./SuggestionItem-CmXkyaku.js";import"./i18n-defaults-DGnw9SAb.js";import"./Person-Bk5r7PMP.js";import"./index-BTrtIEWf.js";import"./less-DMzNG9tV.js";import"./index-DgzB2b-M.js";import"./ListItemStandard-DMcqHDTj.js";import"./ButtonBadge-D_o_zPDC.js";import"./overflow-DLT2CuIa.js";const k=`## Design-Compliant Examples

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
