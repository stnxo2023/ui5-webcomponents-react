import{j as e}from"./iframe-BHlEgbZD.js";import{useMDXComponents as s}from"./index-DuWPJPdo.js";import{M as m,C as o}from"./blocks-BZ1_Gb0n.js";import"./Tag-CUIBDfjO.js";import"./index-DMcN3ohr.js";import{C as l}from"./ControlsWithNote-xCObjZ9G.js";import{D as p}from"./DocsHeader-BlNOHiKZ.js";import{F as d}from"./CommandsAndQueries-CRy7DgFq.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-C8-nmfpc.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Cbg1Tz52.js";import"./sys-enter-2-Z2Vy22vQ.js";import"./alert-BcFaqecl.js";import"./index-2QbIapUz.js";import"./index-CPQEcn_1.js";import"./Link-DdeM_yx0.js";import"./copy-BcW5bk1W.js";import"./copy-Ds19teD5.js";import"./GitHub-Mark-jR36mBpC.js";import"./TableOfContent-BKrNqtFR.js";import"./index-57xnhTbk.js";import"./index-D8Q0xw5Q.js";import"./index-DXZq7O0l.js";import"./index-COEmfUFW.js";import"./index-x01lEzby.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbwzLluT.js";import"./addCustomCSSWithScoping-BezKsk6D.js";import"./Gregorian-CcSgjUM1.js";import"./getCachedLocaleDataInstance-CReDuwQm.js";import"./query-CzSBusdE.js";import"./Input-BOFtXl-H.js";import"./ResponsivePopoverCommon.css-DVGkEwPu.js";import"./ValueStateMessage.css-BcukUnSJ.js";import"./Suggestions.css-oxI77au-.js";import"./appointment-2-BdaRjz_Y.js";import"./ListItemStandard-CeF-gQpE.js";import"./slim-arrow-left-CdqcfUPj.js";import"./Calendar-B7gHiY8z.js";import"./InvisibleMessage-OeUWQ5Ye.js";import"./index-B3QDW9YY.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
`,e.jsx(d,{})]})}function ee(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{ee as default};
