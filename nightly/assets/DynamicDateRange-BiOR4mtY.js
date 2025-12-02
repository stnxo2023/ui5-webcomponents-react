import{j as e}from"./iframe-CojmUvbr.js";import{useMDXComponents as s}from"./index-yNE59oSe.js";import{M as m,C as o}from"./blocks-CCIsbg9K.js";import"./Tag-Dsf3IOJa.js";import"./index-Brr98IUO.js";import{C as l}from"./ControlsWithNote-DQ8Crg8_.js";import{D as p}from"./DocsHeader-SVcQ-nrz.js";import{F as d}from"./CommandsAndQueries-aZHAlwyo.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DTfHKU-E.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BEykFvbu.js";import"./sys-enter-2-BjWZZR70.js";import"./alert-CeJt7tDB.js";import"./index-CW7nJiyw.js";import"./index-YKIZAZmt.js";import"./Link-DrGCnOch.js";import"./copy-DAVGLFJC.js";import"./copy-BaosELJI.js";import"./GitHub-Mark-CClA253F.js";import"./TableOfContent-CYdFHrwI.js";import"./index-DWXpW2Nz.js";import"./index-CJ7ufDVc.js";import"./index-DSq2zmmv.js";import"./index-n-K8h2zA.js";import"./index-BIRLYBEm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CBX4KpMg.js";import"./addCustomCSSWithScoping-IwiFNes4.js";import"./Gregorian-BH190NE4.js";import"./query-CzSBusdE.js";import"./Input-CMo9bLuk.js";import"./ResponsivePopoverCommon.css-DnVyVoGn.js";import"./ValueStateMessage.css-awQruozh.js";import"./Suggestions.css-CNoZckwt.js";import"./appointment-2-CasWZCJf.js";import"./ListItemStandard-x9obTEZ-.js";import"./slim-arrow-left-LByT51OQ.js";import"./Calendar-GxmoG8hh.js";import"./InvisibleMessage-C9kaBW3M.js";import"./index-BTW6f1H7.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
