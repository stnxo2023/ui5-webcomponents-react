import{j as e}from"./iframe-CRoIzMtp.js";import{useMDXComponents as s}from"./index-uepxEeS1.js";import{M as m,C as o}from"./blocks-BWnl8hC4.js";import"./Tag-pVHInn9_.js";import"./index-l4qALITX.js";import{C as l}from"./ControlsWithNote-B074C6wz.js";import{D as p}from"./DocsHeader-BtNALTqX.js";import{F as d}from"./CommandsAndQueries-tg7iHgNo.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-CGuZ1uC0.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DT5Qd4to.js";import"./sys-enter-2-DutWnZ3I.js";import"./alert-D-9oczO0.js";import"./index-BY3Vu1_E.js";import"./index-83H_WNAi.js";import"./Link-ByRh7pJY.js";import"./copy-CuZEUVA0.js";import"./copy-D8-Me-o2.js";import"./GitHub-Mark-BMfoN6Yu.js";import"./TableOfContent-CzcYt69w.js";import"./index-C8wLfWwH.js";import"./index-BWA_OWVW.js";import"./index-DCZY0XoF.js";import"./index-BGCNx8iW.js";import"./index-Cq7XEcI3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbjPHeWw.js";import"./addCustomCSSWithScoping-DJ9mEG-L.js";import"./Gregorian-HxHtx645.js";import"./query-CzSBusdE.js";import"./Input-BJBDq8St.js";import"./ResponsivePopoverCommon.css-CCSjtQV1.js";import"./ValueStateMessage.css-OSunxxtw.js";import"./Suggestions.css-Zd5amcux.js";import"./appointment-2-GvU3ajua.js";import"./ListItemStandard-DLhORhWI.js";import"./slim-arrow-left-CiFGMUNN.js";import"./Calendar-CUFfDOo6.js";import"./InvisibleMessage-CVj8QPFw.js";import"./index-DSiKbX2_.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
