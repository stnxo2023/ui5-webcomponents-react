import{j as e}from"./iframe-DJ3L9Q7k.js";import{useMDXComponents as s}from"./index-CgKASuks.js";import{M as m,C as o}from"./blocks-CtbNLxKJ.js";import"./Tag-dHoy1aOg.js";import"./index-Drb2TrHE.js";import{C as l}from"./ControlsWithNote-jLX323Le.js";import{D as p}from"./DocsHeader-3Rqs1V_9.js";import{F as d}from"./CommandsAndQueries-J0DynbNC.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-CgJAXn3n.js";import"./preload-helper-PPVm8Dsz.js";import"./information-1qu8opp4.js";import"./sys-enter-2-Cu2hBGrK.js";import"./alert-Bssjvu3J.js";import"./index-DJdHB7_b.js";import"./index-DQGcZUo3.js";import"./Link-CI3a-uZg.js";import"./copy-CPi9WMbB.js";import"./copy-dl-GArcT.js";import"./GitHub-Mark-DP3QX4RB.js";import"./TableOfContent-B0H268Zi.js";import"./index-BiXweYzS.js";import"./index-4H2gG8m_.js";import"./index-DDFmE4EA.js";import"./index-BTen11gj.js";import"./index-C_wfJoh6.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BifEEb3N.js";import"./addCustomCSSWithScoping-BamJJJtZ.js";import"./Gregorian-CTw-UqvW.js";import"./query-CzSBusdE.js";import"./Input-BTxUiPoF.js";import"./ResponsivePopoverCommon.css-DAHQOPQC.js";import"./ValueStateMessage.css-C1vUk4m-.js";import"./Suggestions.css-AC0gY3Q2.js";import"./appointment-2-ZGjOMVgs.js";import"./ListItemStandard-DMcqHDTj.js";import"./slim-arrow-left-BrKsQvnV.js";import"./Calendar-D8ImL2kc.js";import"./InvisibleMessage-DIaqYHhI.js";import"./index-Dx8gVwDW.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
`,e.jsx(p,{of:r}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(l,{of:a}),`
`,e.jsx(n.h2,{id:"more-examples",children:"More examples"}),`
`,e.jsx(n.h3,{id:"value-change",children:"Value Change"}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(n.h4,{id:"code",children:"Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function DynamicDateRangeComponent() {
  const [selValue, setSelValue] = useState("");
  const [convertedDates, setConvertedDates] = useState("");
  return (
    <>
      <DynamicDateRange
        onChange={(e) => {
          const selectedValue = e.detail.value;
          setSelValue(JSON.stringify(selectedValue));

          const dates = e.currentTarget.toDates(selectedValue);
          setConvertedDates(
            dates.map((date) => date.toLocaleString()).join(" - "),
          );
        }}
      />
      <hr />
      <FlexBox alignItems="Center" gap="0.5rem">
        <Label for="sel-val" showColon>
          Selected Value
        </Label>
        <Input
          id="sel-val"
          readonly
          value={selValue}
          style={{ width: "100%", maxWidth: "400px" }}
        />
      </FlexBox>
      <FlexBox alignItems="Center" gap="0.5rem">
        <Label for="conv-val" showColon>
          Converted Dates
        </Label>
        <Input
          id="conv-val"
          readonly
          value={convertedDates}
          style={{ width: "100%", maxWidth: "400px" }}
        />
      </FlexBox>
    </>
  );
}
`})}),`
`,e.jsx(d,{})]})}function $(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{$ as default};
