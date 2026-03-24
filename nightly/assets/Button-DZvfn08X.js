import{j as t,E as m}from"./iframe-DBRigOoU.js";import{useMDXComponents as a}from"./index-apRVXKap.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-BfIRBmeA.js";import{A as d}from"./ArgTypesWithNote-DoB0Bkqd.js";import{C as f}from"./ControlsWithNote-Cx-tNe7A.js";import{D as M}from"./DocsHeader-Cr7QkAfd.js";import{F as I}from"./Footer-C0l-yj0s.js";import"./CommandsAndQueries-CSuPwIuY.js";import"./PageNotFound-CQZvX7Tj.js";import{C as o,D as r,B as i}from"./Button.stories-Vu3uI4HK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CtZlHOCH.js";import"./information-Di_zbJNn.js";import"./sys-enter-2-CpC_ZrXX.js";import"./alert-CuS5B2OC.js";import"./Tag-DEWl5_iK.js";import"./index-DWKSf_OJ.js";import"./index-DxEJ2UxM.js";import"./Link-WDyL8T_Q.js";import"./copy--UdGxiKh.js";import"./copy-D7myjbZ2.js";import"./GitHub-Mark-BBZ9Y9kL.js";import"./TableOfContent-CWrNTkbt.js";import"./index-C-7GLaxU.js";import"./index-DybExlT-.js";import"./index-NhTjO4vR.js";import"./index-BAsbE3_A.js";import"./index-u05fNeKh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bc6gryl9.js";import"./addCustomCSSWithScoping-Oz7AbKTz.js";import"./Illustrations-aiaUW8Wr.js";import"./i18n-defaults-CFWtSmu6.js";import"./ai-Bu2Ik9-7.js";import"./ai-SIJ62iVe.js";import"./navigation-down-arrow-BFJ7Hu2K.js";import"./stop--bjYVKOT.js";import"./stop-BLe8ryID.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-BprtGMjT.js";import"./index-CO190n1K.js";import"./index-N9inh6fu.js";function s(n){const e={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:o}),`
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
