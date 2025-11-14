import{j as e}from"./iframe-D4Wcvdi9.js";import{useMDXComponents as s}from"./index-CyoSS2tn.js";import{M as m,C as o}from"./blocks-BZVDlLxv.js";import"./Tag-C8CPshPM.js";import"./index-C0Cp4coA.js";import{C as l}from"./ControlsWithNote-BsM9lLzJ.js";import{D as p}from"./DocsHeader-Cf7qEjPm.js";import{F as d}from"./CommandsAndQueries-CHCF8nk5.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-BUsHRSme.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BV6B4i17.js";import"./sys-enter-2-Be3rvkTR.js";import"./alert-Bj2TJcB4.js";import"./index-iYqBFHCz.js";import"./index-BoPvUO7L.js";import"./Link-DRjrHvv7.js";import"./copy-tldSW-VD.js";import"./copy-ByuSrISy.js";import"./GitHub-Mark-DNQHgkin.js";import"./TableOfContent-BGa8nv5M.js";import"./index-BfU-6WHW.js";import"./index-DRGYhnMd.js";import"./index-C0aU4sgS.js";import"./index-DyEesLqq.js";import"./index-B5YCmd_L.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C_EKP5sQ.js";import"./addCustomCSSWithScoping-B3blWPk3.js";import"./Gregorian-l592XGGO.js";import"./query-CzSBusdE.js";import"./Input-Dw523AWA.js";import"./ResponsivePopoverCommon.css-DXXW23Pq.js";import"./ValueStateMessage.css-CGX3TujJ.js";import"./Suggestions.css-yWvjMCYt.js";import"./appointment-2-DMxLBG2l.js";import"./ListItemStandard-B7i9H2_f.js";import"./slim-arrow-left-Dr6are6w.js";import"./Calendar-1v_ALTnc.js";import"./InvisibleMessage-z6pIlI85.js";import"./index-C_DH5grj.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
