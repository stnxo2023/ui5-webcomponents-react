import{j as e}from"./iframe-DT7hQ3AG.js";import{useMDXComponents as s}from"./index-DTdIoXIV.js";import{M as m,C as o}from"./blocks-JRrvULZW.js";import"./Tag-DiLaQDn-.js";import"./index-B-uTHhu7.js";import{C as l}from"./ControlsWithNote-BFgEsEfk.js";import{D as p}from"./DocsHeader-B_ujQDrR.js";import{F as d}from"./CommandsAndQueries-yjo1_LDl.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-QSzhhhSs.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BTX-CwCK.js";import"./sys-enter-2-Ckqh2Zib.js";import"./alert-j2_xvgwV.js";import"./index-BRw-bjcq.js";import"./index-DnmZF6f8.js";import"./Link-G5lQtbW1.js";import"./copy-CtsTghNs.js";import"./copy-BZt3PDtc.js";import"./GitHub-Mark-1fr5VBAx.js";import"./TableOfContent-B-2ElRj_.js";import"./index-CddBOV7O.js";import"./index-C77H1xG_.js";import"./index-DOozC4VO.js";import"./index-RcOcV3SW.js";import"./index-BT5-01iU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CVNusK2J.js";import"./addCustomCSSWithScoping-BEpn4Gqh.js";import"./Gregorian-D9_RRQ7w.js";import"./getCachedLocaleDataInstance-DgBtfkvT.js";import"./query-CzSBusdE.js";import"./Input-CiFaXTlp.js";import"./ResponsivePopoverCommon.css-K8_QNK7m.js";import"./ValueStateMessage.css-C74mOLeC.js";import"./Suggestions.css-Cd_sUhjR.js";import"./appointment-2-BVb3a071.js";import"./ListItemStandard-DUKcPDwc.js";import"./slim-arrow-left-C5vTuiki.js";import"./Calendar-D7x8P4Jl.js";import"./InvisibleMessage-D4QZC_oh.js";import"./index-CUBCEi1k.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
