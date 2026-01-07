import{j as e}from"./iframe-DAr0L7Ho.js";import{useMDXComponents as x}from"./index-BXrVHVZ0.js";import{A as i}from"./ArgTypesWithNote-Cs9Uk30O.js";import{C as l}from"./ControlsWithNote-OZBbv8zv.js";import{D as f}from"./DocsHeader-D-rOFnpM.js";import{F as v}from"./CommandsAndQueries-BeoYsWXv.js";import{M as b,C as n,a as j,D as s}from"./blocks-n6i-MeAx.js";import{C as r,D as a,R as g,E as w,W as T,a as p,O,b as B,P as y,c as d,d as c,T as h}from"./Toolbar.stories-DBl6ZVbw.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import{T as m}from"./index-BWiofmj1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BGz6B31k.js";import"./information-C8Iia5pL.js";import"./sys-enter-2-DFDqDf9l.js";import"./alert-CWzLh45M.js";import"./Tag-D2SjXRRM.js";import"./index-Cs5MEWFI.js";import"./index-C9NDTaZE.js";import"./Link-QVFDyIvP.js";import"./copy-EZeRzjK_.js";import"./copy-C6zsdfpy.js";import"./GitHub-Mark-iCjGNaC4.js";import"./TableOfContent-Cwtw00oq.js";import"./index-M443-WMN.js";import"./index-BtwPOFH6.js";import"./index-Dnii_wG6.js";import"./index-DrSpdpj3.js";import"./index-BaCg4RzE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CqKvYjZH.js";import"./addCustomCSSWithScoping-C9FZ5V1h.js";import"./favorite-BRPeIwZw.js";import"./settings-CC1HBRmg.js";import"./settings-CLh5qR-P.js";import"./index-zlGE6Bnu.js";import"./DatePicker-DI5KCEZN.js";import"./query-CzSBusdE.js";import"./Calendar-V3kZBVen.js";import"./Gregorian-CLLxTgGO.js";import"./slim-arrow-left-hYiFaVp3.js";import"./InvisibleMessage-B7Fzvrpv.js";import"./appointment-2-C4GLPypF.js";import"./Input-FYQ1lVZC.js";import"./ResponsivePopoverCommon.css-B_B3XVCO.js";import"./ValueStateMessage.css-BKph1edC.js";import"./Suggestions.css-B5wtwLdE.js";import"./DateTimeInput-wOADg2VN.js";import"./index-CaWLfx7-.js";import"./index-DJfSe-S3.js";import"./index-qAMqYJh8.js";import"./Select-BBSIqCO7.js";import"./slim-arrow-down-CmpYS2rT.js";import"./slim-arrow-down-nCdA9ato.js";import"./index-DLTs7vTJ.js";import"./Slider-CiLuROwy.js";import"./SliderTooltip-C-Adealt.js";import"./index-CDbXcF1o.js";import"./less-CxH7033X.js";import"./index-DGrjxxz-.js";import"./ToggleButton-D5V4_j9v.js";import"./utils-CBU--jiJ.js";import"./overflow-Ds_396lu.js";import"./stopPropagation-CsBxLuUS.js";import"./debounce-D7W5PopO.js";function u(t){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...x(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(b,{of:r}),`
`,e.jsx(f,{of:r,subComponents:["OverflowToolbarButton","OverflowToolbarToggleButton","ToolbarSpacer","ToolbarSeparator"]}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(n,{of:a}),`
`,e.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(l,{of:a}),`
`,e.jsx(o.h2,{id:"announce-number-of-items-in-overflow-popover",children:"Announce number of items in overflow popover"}),`
`,e.jsxs(o.p,{children:["To set the ",e.jsx(o.code,{children:"aria-label"})," correctly it's necessary to add the ",e.jsx(o.code,{children:"data-accessible-name"})," data-attribute for each web component that relies on ",e.jsx(o.code,{children:"accessibleName"})," instead of ",e.jsx(o.code,{children:"aria-label"}),"."]}),`
`,e.jsx(o.p,{children:"E.g.:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`<Toolbar>
  <Text>Toolbar</Text>
  <Button data-accessible-name design={ButtonDesign.Transparent}>
    Button One
  </Button>
  <button>Button Two</button>
  <Input data-accessible-name />
  <input />
</Toolbar>
`})}),`
`,e.jsx(o.h2,{id:"prevent-event-bubbling-of-toolbar-items",children:"Prevent event bubbling of Toolbar items"}),`
`,e.jsxs(o.p,{children:["Per default, if the ",e.jsx(o.code,{children:"active"}),' prop is "true" and an actionable element like a button is clicked, the ',e.jsx(o.code,{children:"onClick"})," event of the ",e.jsx(o.code,{children:"Toolbar"}),` is also fired.
To prevent this you can add `,e.jsx(o.code,{children:"e.stopPropagation()"})," to your event handler."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`<Toolbar>
  <Button
    onClick={(e) => {
      //use e.stopPropagation() to prevent event bubbling
      e.stopPropagation();
    }}
  >
    Toolbar Item
  </Button>
</Toolbar>
`})}),`
`,e.jsx(o.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx(o.h2,{id:"align-elements-inside-the-toolbar",children:"Align elements inside the Toolbar"}),`
`,e.jsxs(o.p,{children:["To align items inside the ",e.jsx(o.code,{children:"Toolbar"})," you can use the ",e.jsx(o.code,{children:"ToolbarSpacer"})," component.",e.jsx("br",{}),`
This will cover the remaining horizontal space between the `,e.jsx(o.code,{children:"Toolbar"})," items and for example pushes one item to the edge of the ",e.jsx(o.code,{children:"Toolbar"}),"."]}),`
`,e.jsx(o.h3,{id:"right-aligned-items",children:"Right aligned items"}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(o.h3,{id:"evenly-aligned-items",children:"Evenly aligned items"}),`
`,e.jsx(n,{of:w}),`
`,e.jsx(o.h2,{id:"toolbar-separator",children:"Toolbar Separator"}),`
`,e.jsxs(o.p,{children:["You can add a visual separator between the preceding and succeeding ",e.jsx(o.code,{children:"Toolbar"})," item with the use of the ",e.jsx(o.code,{children:"ToolbarSeparator"}),"."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"})," In the overflow popover the ",e.jsx(o.code,{children:"ToolbarSeparator"})," is represented by a horizontal line, in the ",e.jsx(o.code,{children:"Toolbar"}),` by a vertical
line.`]}),`
`,e.jsx(n,{of:T}),`
`,e.jsx(o.h2,{id:"toolbar-with-overflow-button",children:"Toolbar with overflow button"}),`
`,e.jsx(o.p,{children:"If the horizontally available space isn't enough to fit all items in it, an overflow button is displayed."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"})," You can change the width of the toolbar by dragging the ",e.jsx(o.code,{children:"Slider"}),"."]}),`
`,e.jsx(l,{of:p,hideHTMLPropsNote:!0,include:["numberOfAlwaysVisibleItems"]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(o.h3,{id:"overflowtoolbarbutton--overflowtoolbartogglebutton",children:"OverflowToolbarButton & OverflowToolbarToggleButton"}),`
`,e.jsxs(o.p,{children:["With the ",e.jsx(o.code,{children:"OverflowToolbarButton"})," and ",e.jsx(o.code,{children:"OverflowToolbarToggleButton"})," it is possible to display the text of a ",e.jsx(o.code,{children:"Button"})," with an icon only in the overflow popover of the ",e.jsx(o.code,{children:"Toolbar"}),`.
Both components accept the same `,e.jsx(o.code,{children:"props"})," as the standard ",e.jsx(o.code,{children:"Button"})," or ",e.jsx(o.code,{children:"ToggleButton"})," component, with the difference that ",e.jsx(o.code,{children:"icon"})," is now required and ",e.jsx(o.code,{children:"children"})," are only rendered inside the popover."]}),`
`,e.jsx(n,{of:O}),`
`,e.jsx(o.h3,{id:"toolbar-with-custom-overflow-button",children:"Toolbar with custom overflow button"}),`
`,e.jsxs(o.p,{children:["By setting the ",e.jsx(o.code,{children:"overflowButton"})," prop, it's possible to change the overflow button, which is displayed if the ",e.jsx(o.code,{children:"Toolbar"}),` goes into overflow.
Only buttons in icon only mode are supported and it's recommended to use the `,e.jsx(o.code,{children:"ToggleButton"})," in ",e.jsx(o.code,{children:'"Transparent"'}),` design to comply with UX guidelines.
Please also note that when using a custom button, it is your responsibility to set the appropriate a11y attributes.`]}),`
`,e.jsxs(o.p,{children:["It is furthermore possible to prevent the popover from opening by using ",e.jsx(o.code,{children:"event.preventDefault()"})," in the ",e.jsx(o.code,{children:"onClick"})," of the button. This is useful e.g. when implementing a custom overflow popover."]}),`
`,e.jsx(n,{of:B}),`
`,e.jsx(o.h2,{id:"close-overflow-popover-on-interaction",children:"Close overflow popover on interaction"}),`
`,e.jsxs(o.p,{children:["The overflow popover can be closed programmatically by using the ",e.jsx(o.code,{children:"overflowPopoverRef"}),"."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const ToolbarComponent = () => {
  const overflowPopoverRef = useRef(null);
  const handlePopoverClose = () => {
    const overflowPopover = overflowPopoverRef.current;
    if (overflowPopover?.open) {
      overflowPopover.open = false;
    }
  };
  return (
    <Toolbar overflowPopoverRef={overflowPopoverRef}>
      <Text>Toolbar</Text>
      <Button onClick={handlePopoverClose}>Button One</Button>
      <Select onChange={handlePopoverClose}>
        <Option>Option 1</Option>
        <Option>Option 2</Option>
      </Select>
    </Toolbar>
  );
};
`})}),`
`,e.jsx(o.h2,{id:"open-popovers-by-id-inside-the-overflow-popover",children:"Open Popovers by ID inside the overflow popover"}),`
`,e.jsxs(o.p,{children:["To prevent duplicate child ",e.jsx(o.code,{children:"id"}),"s in the DOM, all child ",e.jsx(o.code,{children:"id"}),"s get an ",e.jsx(o.code,{children:"-overflow"})," suffix. If an ID is used to open the popover (e.g. via the ",e.jsx(o.code,{children:"opener"}),` prop), you have to make sure to use the correct id.
You can achieve that either by leveraging the `,e.jsx(o.code,{children:"onOverflowChange"})," event and retrieve the current ID there, or by updating it inside the ",e.jsx(o.code,{children:"click"})," handler of the respective opener component."]}),`
`,e.jsx(n,{of:y,sourceState:"none"}),`
`,e.jsxs("details",{children:[" ",e.jsx("summary",{children:"Set opener ID via click handler"}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const ToolbarComponent = () => {
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);
  const [opener, setOpener] = useState('openMenuBtn');
  const handlePopoverOpenerClick = (e) => {
    setOpener(e.target.id);
    setPopoverIsOpen(true);
  };
  return (
    <>
      <Toolbar style={{ width: '400px' }}>
        <Text>Toolbar</Text>
        <Button>Button One</Button>
        <Button>Button Two</Button>
        <Button id="openMenuBtn" onClick={handlePopoverOpenerClick}>
          Open Popover (Menu)
        </Button>
      </Toolbar>
      <Menu
        opener={opener}
        open={popoverIsOpen}
        onClose={() => {
          setPopoverIsOpen(false);
        }}
      >
        <MenuItem text="New File" />
        <MenuItem text="New Folder" />
      </Menu>
    </>
  );
};
`})})]}),`
`,e.jsxs("details",{children:[" ",e.jsx("summary",{children:"Set opener ID via onOverflowChange handler"}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const ToolbarComponent = () => {
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);
  const initialOpenerId = 'openMenuBtn';
  const [opener, setOpener] = useState(initialOpenerId);
  const handlePopoverOpenerClick = () => {
    setPopoverIsOpen(true);
  };
  const handleOverflowChange = (e) => {
    if (e.overflowElements?.length) {
      const overflowId = [...e.overflowElements].find((item) => item.dataset.opener)?.id;
      if (overflowId) {
        setOpener(overflowId);
      } else {
        setOpener(initialOpenerId);
      }
    } else {
      setOpener(initialOpenerId);
    }
  };
  return (
    <>
      <Toolbar style={{ width: '400px' }} onOverflowChange={handleOverflowChange}>
        <Text>Toolbar</Text>
        <Button>Button One</Button>
        <Button>Button Two</Button>
        <Button id="openMenuBtn" onClick={handlePopoverOpenerClick} data-opener>
          Open Popover (Menu)
        </Button>
      </Toolbar>
      <Menu
        opener={opener}
        open={popoverIsOpen}
        onClose={() => {
          setPopoverIsOpen(false);
        }}
      >
        <MenuItem text="New File" />
        <MenuItem text="New Folder" />
      </Menu>
    </>
  );
};
`})})]}),`
`,e.jsx(j,{children:C}),`
`,e.jsx(o.h2,{id:"overflowtoolbarbutton",children:"OverflowToolbarButton"}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(i,{metaOf:r,of:d}),`
`,e.jsx(o.h2,{id:"overflowtoolbartogglebutton",children:"OverflowToolbarToggleButton"}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(i,{metaOf:r,of:c}),`
`,e.jsx(o.h2,{id:"toolbarspacer",children:"ToolbarSpacer"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(i,{metaOf:r,of:m}),`
`,e.jsx(o.h2,{id:"toolbarseparator",children:"ToolbarSeparator"}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(i,{metaOf:r,of:h}),`
`,e.jsx(v,{})]})}function Fe(t={}){const{wrapper:o}={...x(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(u,{...t})}):u(t)}export{Fe as default};
