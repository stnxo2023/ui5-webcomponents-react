import{j as e,r as n}from"./iframe-sceg0YFv.js";import{A as u}from"./index-DAUv-Nz3.js";import{S as m}from"./index-Ds8Sghxz.js";import{U as c,a as t,b as i}from"./index-CAujLAfK.js";const g={title:"Modals & Popovers / UserMenu",component:c,argTypes:{children:{control:{disable:!0}},opener:{control:{disable:!0}},accounts:{control:{disable:!0}}},args:{accounts:e.jsxs(e.Fragment,{children:[e.jsx(i,{avatarSrc:"https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png",titleText:"Alaina Chevalier",subtitleText:"aliana.chevalier@sap.com",description:"Delivery Manager, SAP SE",selected:!0}),e.jsx(i,{avatarSrc:"https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png",titleText:"Alaina Chevalier I",subtitleText:"aliana.chevalier1@sap.com",description:"Delivery Manager, SAP SE"}),e.jsx(i,{avatarSrc:"https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png",titleText:"Alaina Chevalier II",subtitleText:"aliana.chevalier2@sap.com",description:"Delivery Manager, SAP SE"})]}),children:e.jsxs(e.Fragment,{children:[e.jsx(t,{icon:"action-settings",text:"Setting","data-id":"setting"}),e.jsx(t,{icon:"globe",text:"Product-specific account action","data-id":"account-action1"}),e.jsxs(t,{icon:"official-service",text:"Legal Information",children:[e.jsx(t,{icon:"private",text:"Private Policy","data-id":"privacy-policy"}),e.jsx(t,{icon:"accelerated",text:"Terms of Use","data-id":"terms-of-use"})]})]})},tags:["package:@ui5/webcomponents","experimental"]},a={render(r){const o=n.useRef(null),[l,s]=n.useState(r.open);return n.useEffect(()=>{s(r.open)},[r.open]),e.jsxs(e.Fragment,{children:[e.jsx(m,{primaryTitle:"Corporate Portal",logo:e.jsx("img",{src:"https://ui5.github.io/webcomponents/images/sap-logo-svg.svg",alt:"SAP Logo"}),profile:e.jsx(u,{children:e.jsx("img",{src:"https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png",alt:"Avatar of the current user"})}),onProfileClick:p=>{o.current.opener=p.detail.targetRef,o.current.open=!0,s(!0)}}),e.jsx(c,{ref:o,...r,open:l,onClose:()=>{s(!1)}})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render(args) {
    const userMenuRef = useRef<UserMenuDomRef>(null);
    const [open, setOpen] = useState(args.open);
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <ShellBar primaryTitle={'Corporate Portal'} logo={<img src="https://ui5.github.io/webcomponents/images/sap-logo-svg.svg" alt="SAP Logo" />} profile={<Avatar>
              <img src="https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png" alt={'Avatar of the current user'} />
            </Avatar>} onProfileClick={event => {
        userMenuRef.current.opener = event.detail.targetRef;
        userMenuRef.current.open = true;
        setOpen(true);
      }} />
        <UserMenu ref={userMenuRef} {...args} open={open} onClose={() => {
        setOpen(false);
      }} />
      </>;
  }
}`,...a.parameters?.docs?.source}}};const f=["Default"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:f,default:g},Symbol.toStringTag,{value:"Module"}));export{b as C,a as D};
