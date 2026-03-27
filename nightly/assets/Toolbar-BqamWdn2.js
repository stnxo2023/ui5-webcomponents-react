import{j as o}from"./iframe-J46VriOb.js";import{useMDXComponents as x}from"./index-CBla0wLi.js";import{A as n}from"./ArgTypesWithNote-DmIqFaWi.js";import{C as j}from"./ControlsWithNote-Dp20gIeT.js";import{D as b}from"./DocsHeader-JnzTcXhY.js";import{F as u}from"./Footer-CEGsJe_E.js";import"./CommandsAndQueries-BzSXHbZJ.js";import"./PageNotFound-D29obeve.js";import{S as v}from"./SubcomponentsSection-BVy4lpQe.js";import{M as T,C as p,a as g,D as i}from"./blocks-beoBu_qL.js";import{C as r,D as s,W as w,O,T as a,a as l,b as m,c,d}from"./Toolbar.stories-B9rp5ebP.js";import{T as h}from"./index-D0FLHrrE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-_u-v5yqi.js";import"./information-CATkPoRV.js";import"./sys-enter-2-Cc8Mj3l6.js";import"./alert-BWP7y2xA.js";import"./Tag-DrBKyONn.js";import"./index-CT7sD2iL.js";import"./index-BrGkrW3e.js";import"./Link-B4FJ2xg8.js";import"./copy-OxJaHIT2.js";import"./copy-_0TxAB6h.js";import"./GitHub-Mark-DIlvSSXN.js";import"./TableOfContent-Udn_Do39.js";import"./index-BkIHYavW.js";import"./index-Dt6WNWTR.js";import"./index-Dw3YBt24.js";import"./index-D6itq-2d.js";import"./index-aps2uNQB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DxsI6DA6.js";import"./addCustomCSSWithScoping-Dl6_6-AL.js";import"./Illustrations-D_iUtabn.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-Bb5UG2kc.js";import"./index-CWzaJeVF.js";import"./InvisibleMessage-BkeQHp1j.js";import"./Input-Ba21Wr_4.js";import"./ResponsivePopoverCommon.css-jKJxzQ6F.js";import"./ValueStateMessage.css-DSOKYmKE.js";import"./Suggestions.css-Dd_ULqQN.js";import"./SuggestionItem-0qJhTGlF.js";import"./ListItemBaseTemplate-Y3fZL33H.js";import"./ComboBoxItemGroup-DHNlD9r0.js";import"./ListBoxItemGroupTemplate-CJFWume4.js";import"./index-CJPrvEwT.js";import"./DatePicker-BbguZnUp.js";import"./query-CzSBusdE.js";import"./Calendar-Nh29_xMK.js";import"./Gregorian-C_svxQ-L.js";import"./FormatUtils-V9wv5R_n.js";import"./slim-arrow-left-yRl7wI8T.js";import"./appointment-2-COKj_HwX.js";import"./DateTimeInput-Cx8p8KJT.js";import"./index-nxr8rbf1.js";import"./index-BFOs-Db_.js";import"./Token-By8nCId5.js";import"./ScrollEnablement-DNtDiy2E.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DkLkb57T.js";import"./ToggleButton-BxPz-GTU.js";import"./multiselect-all-DC8IMVm_.js";import"./index-CQaAtc2Z.js";import"./index-BTeoJAdU.js";import"./less-61CakwDD.js";import"./ToolbarSpacer-CYhUOLV8.js";import"./ToolbarButton-2iw6uVlO.js";import"./overflow-FC6_sKHD.js";import"./Select-lRdI9G8v.js";import"./Option-85_JDqIM.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...x(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(T,{of:r}),`
`,o.jsx(b,{of:r,since:"1.19.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(p,{of:s}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(j,{of:s}),`
`,o.jsx(e.h2,{id:"toolbaritem",children:"ToolbarItem"}),`
`,o.jsx(e.p,{children:"ToolbarItem wrapper used to add any component to Toolbar."}),`
`,o.jsxs(e.p,{children:[o.jsx(e.strong,{children:"Note:"})," To display the radio buttons and checkboxes in a column in the overflow popover, the ",o.jsx(e.code,{children:"toolbar-item-group"})," CSS class is used:"]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-css",children:`/* Use :state(overflowed) to style items differently when in overflow popover */
[ui5-toolbar-item]:state(overflowed) .toolbar-item-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
`})}),`
`,o.jsx(p,{of:w}),`
`,o.jsx(e.h2,{id:"opening-popovers-via-toolbarbutton",children:"Opening Popovers via ToolbarButton"}),`
`,o.jsxs(e.p,{children:["Since the ",o.jsx(e.code,{children:"ToolbarButton"})," is an ",o.jsx(e.a,{href:"?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components",children:"abstract UI5 web component"}),", the opener of the ",o.jsx(e.code,{children:"Popover"}),` needs the DOM reference of the actual element to position the popover correctly.
Starting with v2.5.0 of `,o.jsx(e.code,{children:"@ui5/webcomponents(-react)"}),", the ",o.jsx(e.code,{children:"detail"})," property of the ",o.jsx(e.code,{children:"ToolbarButton"}),"'s click handler now includes a ",o.jsx(e.code,{children:"targetRef"})," property, which can be used as the opener."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.strong,{children:"Note:"})," To prevent the overflow popover from closing when the opener ",o.jsx(e.code,{children:"ToolbarButton"})," of the Popover is clicked, you can call ",o.jsx(e.code,{children:"event.preventDefault()"})," in the ",o.jsx(e.code,{children:"onClick"})," event handler."]}),`
`,o.jsx(p,{of:O}),`
`,o.jsx(e.h3,{id:"example-code",children:"Example Code"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-tsx",children:`function ToolbarWithPopover() {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const popoverRef = useRef<PopoverDomRef>(null);
  return (
    <>
      <Toolbar>
        <ToolbarButton
          onClick={(e) => {
            const { targetRef } = e.detail;
            e.preventDefault();
            if (popoverRef.current) {
              popoverRef.current.opener = targetRef;
              setPopoverOpen(true);
            }
          }}
          text="Open Popover"
        />
      </Toolbar>
      <Popover
        open={popoverOpen}
        ref={popoverRef}
        onClose={() => {
          setPopoverOpen(false);
        }}
      >
        Content
      </Popover>
    </>
  );
}
`})}),`
`,o.jsx(g,{children:v}),`
`,o.jsx(e.h2,{id:"toolbaritem-1",children:"ToolbarItem"}),`
`,o.jsxs(e.p,{children:[o.jsx(i,{of:a}),'"']}),`
`,o.jsx(n,{metaOf:r,of:a}),`
`,o.jsx(e.h2,{id:"toolbarbutton",children:"ToolbarButton"}),`
`,o.jsx(i,{of:h}),`
`,o.jsx(n,{metaOf:r,of:h}),`
`,o.jsx(e.h2,{id:"toolbarselect",children:"ToolbarSelect"}),`
`,o.jsx(i,{of:l}),`
`,o.jsx(n,{metaOf:r,of:l}),`
`,o.jsx(e.h2,{id:"toolbarselectoption",children:"ToolbarSelectOption"}),`
`,o.jsx(i,{of:m}),`
`,o.jsx(n,{metaOf:r,of:m}),`
`,o.jsx(e.h2,{id:"toolbarseparator",children:"ToolbarSeparator"}),`
`,o.jsx(i,{of:c}),`
`,o.jsx(n,{metaOf:r,of:c}),`
`,o.jsx(e.h2,{id:"toolbarspacer",children:"ToolbarSpacer"}),`
`,o.jsx(i,{of:d}),`
`,o.jsx(n,{metaOf:r,of:d}),`
`,o.jsx(u,{})]})}function qo(t={}){const{wrapper:e}={...x(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(f,{...t})}):f(t)}export{qo as default};
