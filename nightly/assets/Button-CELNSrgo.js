import{j as e,e as m}from"./iframe-BfEtcTHs.js";import{useMDXComponents as a}from"./index-CPCxp1pX.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-BEk0eltt.js";import{A as d}from"./ArgTypesWithNote-B3O0TXrT.js";import{C as f}from"./ControlsWithNote-BTHAdxiA.js";import{D as M}from"./DocsHeader-BBnupIsK.js";import{F as I}from"./CommandsAndQueries-XBwAul-0.js";import{C as o,D as r,B as i}from"./Button.stories-CEWXkj8I.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cdy39dSN.js";import"./information-DXNiXlp4.js";import"./sys-enter-2-Da7fZjtE.js";import"./alert-sulwnQm9.js";import"./Tag-5zjMhKbj.js";import"./index-BwoaU2AB.js";import"./index-BoD67Q0d.js";import"./Link-Dx6E4Ul6.js";import"./copy-Bt8ie9UZ.js";import"./copy-CuNW8uGj.js";import"./GitHub-Mark-DfOHtkyr.js";import"./TableOfContent-BB2woaWO.js";import"./index-CpslN8bF.js";import"./index-C2AzqXEp.js";import"./index-zG-h4Dtj.js";import"./index-DZog4k2R.js";import"./index-SIE8WAww.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DzVstS1R.js";import"./addCustomCSSWithScoping-BOC9QupD.js";import"./ai-BLSKQgcF.js";import"./ai-D_uDA8k4.js";import"./navigation-down-arrow-BfqJo7nx.js";import"./stop-Cz6A1KL0.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-Chce_F9i.js";import"./SplitButton-JuJHOPVd.js";import"./slim-arrow-down-C0u-ePLI.js";import"./slim-arrow-down-PFXKhKTH.js";import"./index-Df-G88FI.js";import"./index--bQ90DkW.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
`,e.jsx(M,{of:o,experimental:!0}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(c,{of:r}),`
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
`,e.jsx(l,{children:u}),`
`,e.jsx(t.h2,{id:"buttonstate",children:"ButtonState"}),`
`,e.jsx(x,{of:i}),`
`,e.jsx(d,{metaOf:o,of:i,hideHTMLPropsNote:!0,exclude:m}),`
`,e.jsx(I,{}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{})})]})}function ie(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{ie as default};
