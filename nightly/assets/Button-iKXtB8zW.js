import{j as e,A as m}from"./iframe-D-ZP0dY4.js";import{u as a,M as u,C as p,a as c,D as l}from"./blocks-DdKopPSC.js";import{S as x}from"./SubcomponentsSection-BVy4lpQe.js";import{A as d}from"./ArgTypesWithNote-Cxf4ymZ0.js";import{C as f}from"./ControlsWithNote-BIyz1_Xt.js";import{D as M}from"./DocsHeader-MhexG2vZ.js";import{F as I}from"./Footer-BLTkp7nE.js";import"./CommandsAndQueries-BDnj74c9.js";import"./PageNotFound-DiPPX7Ze.js";import{C as o,D as r,B as i}from"./Button.stories-BhWYF9Y7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C04kZKw9.js";import"./information-BKIP_Ra_.js";import"./sys-enter-2-vX0Cm-qe.js";import"./alert-Bu79oBCI.js";import"./Tag-CNlwwDmZ.js";import"./index-Dx3fp6V7.js";import"./index-BAH7VHrp.js";import"./Link-06g1SNw0.js";import"./copy-DEZgQs9x.js";import"./copy-HW_Kxlr2.js";import"./GitHub-Mark-Cxk1q0bN.js";import"./TableOfContent--BhlVRbW.js";import"./index-Tnz3nQrD.js";import"./index-U3Dsw_H6.js";import"./index-CF2Hkn6J.js";import"./index-BAothMF0.js";import"./index-eZWdMAeg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DxeCNWRQ.js";import"./addCustomCSSWithScoping-DSa3TmU8.js";import"./Illustrations-DQsCRA8v.js";import"./i18n-defaults-CFWtSmu6.js";import"./ai-DQeT5V5K.js";import"./ai-t2Bwd5gb.js";import"./navigation-down-arrow-CrAOUUYj.js";import"./stop-CtOG04BC.js";import"./stop-D6G6-eVF.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-BprtGMjT.js";import"./index-B6Vp6cRl.js";import"./index-qawj8hZu.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:o}),`
`,e.jsx(M,{of:o,experimental:!0}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(p,{of:r}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Show static code"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`function AIButton(props) {
  const generationIdRef = useRef<NodeJS.Timeout | null>(null);
  const buttonRef = useRef<ButtonDomRef>(null);
  const [buttonState, setButtonState] = useState("generate");
  const [menuOpen, setMenuOpen] = useState(false);

  const startGeneration = () => {
    generationIdRef.current = setTimeout(() => {
      setButtonState("revise");
    }, 3000);
  };

  const handleClick: ButtonPropTypes["onClick"] = (e) => {
    const btn = e.target;

    setMenuOpen(false);
    switch (btn.state) {
      case "generate":
        setButtonState("generating");
        startGeneration();
        break;
      case "generating":
        if (generationIdRef.current) {
          clearTimeout(generationIdRef.current);
          generationIdRef.current = null;
        }
        setButtonState("generate");
        break;
      case "revise":
        setMenuOpen(true);
        break;
    }
  };

  const handleMenuItemClick: MenuPropTypes["onItemClick"] = (e) => {
    if (e.detail.text === "Regenerate") {
      setButtonState("generating");
      startGeneration();
    }
  };

  return (
    <>
      <Button
        {...props}
        onClick={handleClick}
        state={buttonState}
        ref={buttonRef}
      >
        <ButtonState name="generate" text="Generate" icon={aiIcon} />
        <ButtonState name="generating" text="Stop Generating" icon={stopIcon} />
        <ButtonState
          name="revise"
          text="Revise"
          icon={aiIcon}
          endIcon={navDownIcon}
        />
      </Button>
      {menuOpen && (
        <Menu
          opener={buttonRef.current}
          open
          onItemClick={handleMenuItemClick}
          onClose={() => {
            setMenuOpen(false);
          }}
        >
          <MenuItem text="Regenerate" />
          <MenuSeparator />
          <MenuItem text="Fix Spelling & Grammar" />
          <MenuItem text="Change Tone">
            <MenuItem text="Option 1" />
            <MenuItem text="Option 2" />
            <MenuItem text="Option 3" />
          </MenuItem>
          <MenuItem text="Adjust Length">
            <MenuItem text="Shorten text" />
            <MenuItem text="Lengthen text" />
          </MenuItem>
          <MenuItem text="Bulleted List" />
          <MenuItem text="Translate">
            <MenuItem text="English" />
            <MenuItem text="German" />
            <MenuItem text="Spanish" />
          </MenuItem>
        </Menu>
      )}
    </>
  );
}
`})})]}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(f,{of:r}),`
`,e.jsx(c,{children:x}),`
`,e.jsx(t.h2,{id:"buttonstate",children:"ButtonState"}),`
`,e.jsx(l,{of:i}),`
`,e.jsx(d,{metaOf:o,of:i,hideHTMLPropsNote:!0,exclude:m}),`
`,e.jsx(I,{}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{})})]})}function se(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{se as default};
