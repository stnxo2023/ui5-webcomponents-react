import{j as e}from"./iframe-GIjPgZz_.js";import{useMDXComponents as s}from"./index-Q5qZCDzK.js";import{M as m,C as o}from"./blocks-Brju_yKM.js";import"./Tag-CRHSyhrL.js";import"./index-BF6G6ZOp.js";import{C as l}from"./ControlsWithNote-BkIhWDzf.js";import{D as p}from"./DocsHeader-BUqQhIdj.js";import{F as d}from"./CommandsAndQueries-DAsamt73.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-1H_fJXpk.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C_h8A4lQ.js";import"./sys-enter-2-CoTdl5fW.js";import"./alert-DH_fdUZB.js";import"./index-DYv3qsbi.js";import"./index-ChNOA-bd.js";import"./Link-CUZ6JL-B.js";import"./copy-B1nWiXlK.js";import"./copy-DMIRXvtR.js";import"./GitHub-Mark-CsDlvVwX.js";import"./TableOfContent-BQGjLsdI.js";import"./index-BnsMKJYG.js";import"./index-ByWeYssR.js";import"./index-V5lDTiuM.js";import"./index-BiD4GApv.js";import"./index-Xvv35NLG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dpx1zyp1.js";import"./addCustomCSSWithScoping-zdxF42yG.js";import"./Gregorian-CWRWqCcM.js";import"./query-CzSBusdE.js";import"./Input-CO8cUSWP.js";import"./ResponsivePopoverCommon.css-Dg5kCeR8.js";import"./ValueStateMessage.css-ByTQt8zp.js";import"./Suggestions.css-KU_u1XlD.js";import"./appointment-2-CstpHaAd.js";import"./ListItemStandard-CUnytT-Q.js";import"./slim-arrow-left-DNFvHaQc.js";import"./Calendar-C0hREDgz.js";import"./InvisibleMessage-DE2IJQx3.js";import"./index-XIfZZvDx.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
