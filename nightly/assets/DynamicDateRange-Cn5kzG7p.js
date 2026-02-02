import{j as e}from"./iframe-DtD6gRbB.js";import{useMDXComponents as s}from"./index-BiO40HBX.js";import{M as m,C as o}from"./blocks-Ck7wLHdk.js";import"./Tag-CPFNFbnr.js";import"./index-BiosTbTI.js";import{C as l}from"./ControlsWithNote-BOStzrH-.js";import{D as p}from"./DocsHeader-BXYU5Ig6.js";import{F as d}from"./CommandsAndQueries-B26crKtq.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-BffdcWc0.js";import"./preload-helper-PPVm8Dsz.js";import"./information-uX8_TnNn.js";import"./sys-enter-2-CJJhzBhO.js";import"./alert-BmD5O1ac.js";import"./index-CDW4JUA8.js";import"./index-pV_yzmY_.js";import"./Link-cYpkkuqp.js";import"./copy-CgVw-Q6h.js";import"./copy-DKyeVOxg.js";import"./GitHub-Mark-BAF9ju05.js";import"./TableOfContent-fgADZnKc.js";import"./index-BSRohzC4.js";import"./index-CRlMy3bg.js";import"./index-391GJ7ps.js";import"./index-DCELbeIn.js";import"./index-KaeBEDf1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DGQO4fMp.js";import"./addCustomCSSWithScoping-Bt7xCKzu.js";import"./Gregorian-CidF6Cge.js";import"./query-CzSBusdE.js";import"./Input-D-O_E4Pc.js";import"./ResponsivePopoverCommon.css-B045Nnj_.js";import"./ValueStateMessage.css-DpV5S_wa.js";import"./Suggestions.css-BvMw9k5F.js";import"./appointment-2-mgGBwmne.js";import"./ListItemStandard-CdwuH3bB.js";import"./slim-arrow-left-CTr7jsw4.js";import"./Calendar-5FW5j5Da.js";import"./InvisibleMessage-DU_sw7pv.js";import"./index--eFanla0.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
