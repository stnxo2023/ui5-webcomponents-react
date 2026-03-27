import{j as t,A as m}from"./iframe-Ra0xSmd4.js";import{useMDXComponents as a}from"./index-B1uewCO1.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-B8uzJZ3S.js";import{A as d}from"./ArgTypesWithNote-BdFBQfYk.js";import{C as f}from"./ControlsWithNote-B47UM3qO.js";import{D as M}from"./DocsHeader-LE80zS-5.js";import{F as I}from"./Footer-BXZI9V38.js";import"./CommandsAndQueries-BEtDWerI.js";import"./PageNotFound-DAzm2SbT.js";import{C as o,D as r,B as i}from"./Button.stories-DPc4R42o.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DhDYAwwg.js";import"./information-hzJ5lLQH.js";import"./sys-enter-2-weVfOb1a.js";import"./alert-BkoFHfp8.js";import"./Tag-vCzc8lpN.js";import"./index-Dh9i0xFK.js";import"./index-CCqLDoAJ.js";import"./Link-Cw9gqE6M.js";import"./copy-HSMVUc5p.js";import"./copy-Cehqzola.js";import"./GitHub-Mark-nqscAzxB.js";import"./TableOfContent-BgPrQZrb.js";import"./index-BHry3UrI.js";import"./index-CiJZaHkZ.js";import"./index-UbhsERGe.js";import"./index-DxchSxRT.js";import"./index-BhvLG_bo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cr-PyOpa.js";import"./addCustomCSSWithScoping-CcLMh_2y.js";import"./Illustrations-DuEXDQCv.js";import"./i18n-defaults-CFWtSmu6.js";import"./ai-A89aG9x_.js";import"./ai-BPZfugqp.js";import"./navigation-down-arrow-BWhK4CvM.js";import"./stop-BcIqGhQ0.js";import"./stop-LmIY42wE.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-BprtGMjT.js";import"./index-96hOWUc2.js";import"./index-C8hSvwol.js";function s(n){const e={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:o}),`
`,t.jsx(M,{of:o,experimental:!0}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"example",children:"Example"}),`
`,t.jsx(c,{of:r}),`
`,t.jsxs("details",{children:[t.jsx("summary",{children:"Show static code"}),t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`function AIButton(props) {
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
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(f,{of:r}),`
`,t.jsx(l,{children:u}),`
`,t.jsx(e.h2,{id:"buttonstate",children:"ButtonState"}),`
`,t.jsx(x,{of:i}),`
`,t.jsx(d,{metaOf:o,of:i,hideHTMLPropsNote:!0,exclude:m}),`
`,t.jsx(I,{}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{})})]})}function at(n={}){const{wrapper:e}={...a(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(s,{...n})}):s(n)}export{at as default};
