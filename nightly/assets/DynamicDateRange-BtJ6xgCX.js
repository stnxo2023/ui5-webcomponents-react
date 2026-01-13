import{j as e}from"./iframe-BkU8WQpb.js";import{useMDXComponents as s}from"./index-BeG8GrN5.js";import{M as m,C as o}from"./blocks-CLMMfPPt.js";import"./Tag-Cih70sHI.js";import"./index-DnBqZpyB.js";import{C as l}from"./ControlsWithNote-DyRp8-gJ.js";import{D as p}from"./DocsHeader-C30QBAZS.js";import{F as d}from"./CommandsAndQueries-DetvrItO.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-BIYXQlGS.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CjNccefj.js";import"./sys-enter-2-RLTSxo4s.js";import"./alert-DdBYY2qU.js";import"./index-DATmYB4_.js";import"./index-eFI2U8Up.js";import"./Link-DLFy93gF.js";import"./copy-BbR_ie7A.js";import"./copy-B4HTDbaZ.js";import"./GitHub-Mark-BfbqEMTI.js";import"./TableOfContent-PrM3zgzS.js";import"./index-Dj6CZlQQ.js";import"./index-f6jDEWAh.js";import"./index-D4xCyo8q.js";import"./index-DWR5LsZZ.js";import"./index-BysDONg4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Fp7idO2l.js";import"./addCustomCSSWithScoping-CehjyWVu.js";import"./Gregorian-C2XF62VZ.js";import"./query-CzSBusdE.js";import"./Input-LLlRvrNn.js";import"./ResponsivePopoverCommon.css-NpFXxOXP.js";import"./ValueStateMessage.css-BdFRF0eK.js";import"./Suggestions.css-Dl4BPrxO.js";import"./appointment-2-D4gXIIgD.js";import"./ListItemStandard-BgczD3q6.js";import"./slim-arrow-left-DoJ1SQ-g.js";import"./Calendar-CCDUZRkt.js";import"./InvisibleMessage-52jPagfA.js";import"./index-BqWvECKK.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
