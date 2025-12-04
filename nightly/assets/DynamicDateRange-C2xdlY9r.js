import{j as e}from"./iframe-DE39xjY3.js";import{useMDXComponents as s}from"./index-B1qSHwoi.js";import{M as m,C as o}from"./blocks-Cj7tOVqz.js";import"./Tag-BcxJDVC2.js";import"./index-C8AzPoWi.js";import{C as l}from"./ControlsWithNote-B9Ky9-J_.js";import{D as p}from"./DocsHeader-MzP4I_Aj.js";import{F as d}from"./CommandsAndQueries-wC1q0WhV.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DsA7Czj0.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D52A35LG.js";import"./sys-enter-2-7R5MTao8.js";import"./alert-jxZm3lXE.js";import"./index-BUS86rTR.js";import"./index-BytuhZWp.js";import"./Link-hO4SGyLs.js";import"./copy-D-1f3Jwc.js";import"./copy-SEjk-khs.js";import"./GitHub-Mark-BxMfSNYU.js";import"./TableOfContent-DgJFK8la.js";import"./index-Dsw7NAug.js";import"./index-BNYAB6MW.js";import"./index-HOUf-EPf.js";import"./index-Di0pge-x.js";import"./index-Crm_KYfs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B-k5eDoZ.js";import"./addCustomCSSWithScoping-DCdxMV4u.js";import"./Gregorian-BES7JgrE.js";import"./query-CzSBusdE.js";import"./Input-CDMm82xo.js";import"./ResponsivePopoverCommon.css-DaP0rv_w.js";import"./ValueStateMessage.css-Bvo1cNpH.js";import"./Suggestions.css-1EDkOxF1.js";import"./appointment-2-7RXwkGqf.js";import"./ListItemStandard-CEgmb2VH.js";import"./slim-arrow-left-mEN7fQty.js";import"./Calendar-CI8sqc8v.js";import"./InvisibleMessage-Bo13I8mP.js";import"./index-DBKL-rtx.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
