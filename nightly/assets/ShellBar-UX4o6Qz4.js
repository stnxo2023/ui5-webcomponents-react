import{j as e,E as s}from"./iframe-D9bwNIEw.js";import{useMDXComponents as f}from"./index-C7Zm3EXU.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-CdTlBqmb.js";import"./Tag-nAJAFGwR.js";import"./index-v7UWUzZA.js";import{C as u}from"./ControlsWithNote-Jn1GAeVz.js";import{D as S}from"./DocsHeader-D_ch1a__.js";import{F as v}from"./Footer-rCYhEoIf.js";import"./CommandsAndQueries-C_WJZTxK.js";import"./PageNotFound-C24XQEWZ.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{b as l,S as p,c as m,a as c}from"./sys-help-JZSsmG2g.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-guyZYmgL.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BBRTwn-C.js";import"./sys-enter-2-BgYzXgjA.js";import"./alert-Dvz5ATv0.js";import"./index-DYbVUH4U.js";import"./index-DpP2zBoF.js";import"./Link-DLbf1NX7.js";import"./copy-XBKnZrVA.js";import"./copy-C4qxUcFd.js";import"./GitHub-Mark-B3kCUXSj.js";import"./TableOfContent-DIRu9y5y.js";import"./index-B24aDDF0.js";import"./index-B5Io8E3V.js";import"./index-DiWu_OvK.js";import"./index-BWceQhWo.js";import"./index-DX-an7LC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BYx-bkvu.js";import"./addCustomCSSWithScoping-CTtTC3T9.js";import"./Illustrations-CAUI_mYY.js";import"./i18n-defaults-CFWtSmu6.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Dp0YUVYw.js";import"./query-CzSBusdE.js";import"./ButtonBadge-CmOOuvLh.js";import"./ListItemStandard-CLmJtC2x.js";import"./search-C2v3A2oj.js";import"./overflow-DsB1r5Kj.js";import"./Search-BW2jrJa8.js";import"./Option-BoCXKUm2.js";import"./ListItemBaseTemplate-CuVwXQqy.js";import"./Select-BgIvcjPK.js";import"./InvisibleMessage-BbRDjx9q.js";import"./ResponsivePopoverCommon.css-CkiXBi7B.js";import"./ValueStateMessage.css-oZNuDkL6.js";import"./Input-CYuZcn_p.js";import"./Suggestions.css-CMZyvU-Z.js";import"./SuggestionItem-BeJwmeJ_.js";import"./Person-Bk5r7PMP.js";import"./index-D9PFjJIf.js";import"./less-DhdsysxP.js";const k=`## Design-Compliant Examples

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
`,e.jsx(v,{})]})}function De(o={}){const{wrapper:n}={...f(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(x,{...o})}):x(o)}export{De as default};
