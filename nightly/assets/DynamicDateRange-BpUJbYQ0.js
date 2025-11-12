import{j as e}from"./iframe-m3wgL8DO.js";import{useMDXComponents as s}from"./index-BDA4Q--W.js";import{M as m,C as o}from"./blocks-CkTarMgO.js";import"./Tag-tSZf1-5X.js";import"./index-XwYlDB9P.js";import{C as l}from"./ControlsWithNote-Bfr8xnVJ.js";import{D as p}from"./DocsHeader-B9aLmGE3.js";import{F as d}from"./CommandsAndQueries-DJJG77Q0.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-BvPZx_6h.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DsCCxR_j.js";import"./sys-enter-2-3GVzqOhh.js";import"./alert-CYqVZ7NL.js";import"./index-BSNngnc7.js";import"./index-CVyBcJoi.js";import"./Link-BBA1fpnp.js";import"./copy-CD1CC4_Q.js";import"./copy-CODhXho7.js";import"./GitHub-Mark-CdXXKoW5.js";import"./TableOfContent-CYqz57vy.js";import"./index-BhmtIGIH.js";import"./index-D9MBfHQe.js";import"./index-CLINieEb.js";import"./index-00DfGzTS.js";import"./index-B7uA3u-p.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C6f_OpFu.js";import"./addCustomCSSWithScoping-D1ffFiBE.js";import"./Gregorian-BiDhRSj8.js";import"./query-CzSBusdE.js";import"./Input-Cs15w5r3.js";import"./ResponsivePopoverCommon.css-C9hxCvuP.js";import"./ValueStateMessage.css-z6jg6mGY.js";import"./Suggestions.css-DbjXinA2.js";import"./appointment-2-IN830Qkg.js";import"./ListItemStandard-DGziFzMo.js";import"./slim-arrow-left-NfrIEcNL.js";import"./Calendar-BTTe2J5w.js";import"./InvisibleMessage-BUt-p4eg.js";import"./index-Cl9chJaT.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
