import{j as e}from"./iframe-8VKaAWwE.js";import{useMDXComponents as s}from"./index-BiQxBi02.js";import{M as m,C as o}from"./blocks-D4P1btFV.js";import"./Tag-CAEVBdQF.js";import"./index-BMIVJ8fC.js";import{C as l}from"./ControlsWithNote-JxH1w4ac.js";import{D as p}from"./DocsHeader-BpyJYh9-.js";import{F as d}from"./CommandsAndQueries-Br8gYKlc.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DT0CKrHS.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Dxy_OYjg.js";import"./sys-enter-2-B9S9TtfQ.js";import"./alert-CW57s-T2.js";import"./index-Bd8LmHtw.js";import"./index-DjKsiZpu.js";import"./Link-Br8LM296.js";import"./copy-eOeIXdn0.js";import"./copy-GTYDTz4M.js";import"./GitHub-Mark-Dx2PTGP9.js";import"./TableOfContent-0W3j5ceT.js";import"./index-DeQFsrbp.js";import"./index-CG1tJmDp.js";import"./index-Wr_VU4vx.js";import"./index--0IHLSpo.js";import"./index-G7mYvFlh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DS15uRtL.js";import"./addCustomCSSWithScoping-gm53ZH9E.js";import"./Gregorian-bkCRalWp.js";import"./query-CzSBusdE.js";import"./Input-B5Wpiidi.js";import"./ResponsivePopoverCommon.css-B4U_I0dH.js";import"./ValueStateMessage.css-cYz9FUF7.js";import"./Suggestions.css-Z6CWuri5.js";import"./appointment-2-DYb3nnGo.js";import"./ListItemStandard-CACymtkK.js";import"./slim-arrow-left-D2m2xE6m.js";import"./Calendar-DU-J5snT.js";import"./InvisibleMessage-CPZrrpNT.js";import"./index-C-aC7Trz.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
