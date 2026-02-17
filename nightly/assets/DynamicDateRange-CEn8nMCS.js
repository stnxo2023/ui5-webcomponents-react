import{j as e}from"./iframe-DFi9UtKE.js";import{useMDXComponents as s}from"./index-PehDt-ON.js";import{M as m,C as o}from"./blocks-BZiPfi5R.js";import"./Tag-DyC770Wv.js";import"./index-DRo_4cI_.js";import{C as l}from"./ControlsWithNote-BDtgiAUA.js";import{D as p}from"./DocsHeader-DL6MJPVs.js";import{F as d}from"./CommandsAndQueries-BgA_2y6P.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-P69dx3uC.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C2fQMAhn.js";import"./sys-enter-2-C-DHMglr.js";import"./alert-Do2a0hn1.js";import"./index-BVIBsTLM.js";import"./index-Bj7syw50.js";import"./Link-CKaRASof.js";import"./copy-BfQ0nxef.js";import"./copy-BtJq9lRd.js";import"./GitHub-Mark-BIVb8YrT.js";import"./TableOfContent-Dj-Rxe0E.js";import"./index-BlgbWjqC.js";import"./index-mz_qMVbD.js";import"./index-hjE9MH8j.js";import"./index-CgUZ8Jrz.js";import"./index-C91-M52B.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-QdlayBuh.js";import"./addCustomCSSWithScoping-C-Twfd1m.js";import"./Gregorian-B7HRnm1l.js";import"./getCachedLocaleDataInstance-Csn7Gc1-.js";import"./query-CzSBusdE.js";import"./Input-CnIKzm01.js";import"./ResponsivePopoverCommon.css-CTa7xzuq.js";import"./ValueStateMessage.css-CK9Tsjr5.js";import"./Suggestions.css-CKUgORQE.js";import"./appointment-2-BluIVsbo.js";import"./ListItemStandard-Cocq2_my.js";import"./slim-arrow-left-BHQ1CDb6.js";import"./Calendar-BQ6KgEo7.js";import"./InvisibleMessage-Bx6P5Mxd.js";import"./index-BKsuI6BF.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
