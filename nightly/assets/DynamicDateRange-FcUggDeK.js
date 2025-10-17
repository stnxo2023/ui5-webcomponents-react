import{j as e}from"./iframe-28qsVqoa.js";import{useMDXComponents as s}from"./index-BFNvmwXu.js";import{M as m,C as o}from"./blocks-BNVDqSKu.js";import"./Tag-CLPhNAjj.js";import"./index-SsxmriuV.js";import{C as l}from"./ControlsWithNote-Bp2hBOMg.js";import{D as p}from"./DocsHeader-C_paeAL7.js";import{F as d}from"./CommandsAndQueries-BfKaGYgk.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-CaU1eJCP.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DHvzqwV5.js";import"./sys-enter-2-BKUUSCT4.js";import"./alert-D4ecQurj.js";import"./index-CLPTUIfm.js";import"./index-CWduGffo.js";import"./Link-DXcAF61b.js";import"./copy-CsVxvxmU.js";import"./copy-D8k23l_a.js";import"./GitHub-Mark-CDCyIaGl.js";import"./TableOfContent-aWzQSllK.js";import"./index-BaQxmIN-.js";import"./index-QZ0q645F.js";import"./index-BSTD78ro.js";import"./index-Ca0DqgDv.js";import"./index-DL1oyV4a.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BDZLmGFA.js";import"./addCustomCSSWithScoping-BQde53eT.js";import"./Gregorian-DIjXG2-T.js";import"./query-CzSBusdE.js";import"./Input-CrBqW3Ot.js";import"./ResponsivePopoverCommon.css-DsOR_HfQ.js";import"./ValueStateMessage.css-Dvyiq9XB.js";import"./Suggestions.css-CdBr9Iyq.js";import"./appointment-2-tLVsO0eC.js";import"./ListItemStandard-BH9JzmU2.js";import"./slim-arrow-left-BtKmcsIU.js";import"./Calendar-DniUq36e.js";import"./InvisibleMessage-c9pOv6Ax.js";import"./index-CD3TL1kj.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
