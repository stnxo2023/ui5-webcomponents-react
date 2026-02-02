import{j as e}from"./iframe-CeMquKfU.js";import{useMDXComponents as s}from"./index-BbFo7jBM.js";import{M as m,C as o}from"./blocks-Db1iDIvu.js";import"./Tag-DBOPR6ka.js";import"./index-BWGqmYD4.js";import{C as l}from"./ControlsWithNote-BmMLVWWf.js";import{D as p}from"./DocsHeader-CDkUnTUT.js";import{F as d}from"./CommandsAndQueries-DG6G8TEI.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-Rl_AdE2z.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BF8hjIJ6.js";import"./sys-enter-2-CBCKgEbS.js";import"./alert-DPPxzZqA.js";import"./index-CQMy8EdC.js";import"./index-WnbBQODb.js";import"./Link-B4KwrrH9.js";import"./copy-DoTCoMit.js";import"./copy-DuOXgjDa.js";import"./GitHub-Mark-D5azJnro.js";import"./TableOfContent-DfQZ96tK.js";import"./index-DYb2g8Yq.js";import"./index-srI8srsL.js";import"./index-Brk-KPPC.js";import"./index-jfPm289V.js";import"./index-DMujUK6u.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-RK7-B4yx.js";import"./addCustomCSSWithScoping-06k5HVP6.js";import"./Gregorian-CgCeviRe.js";import"./query-CzSBusdE.js";import"./Input-DQRA-VuS.js";import"./ResponsivePopoverCommon.css-BClm2dDh.js";import"./ValueStateMessage.css-CKCH07QR.js";import"./Suggestions.css-BWIb4a3h.js";import"./appointment-2-Bo9D5zea.js";import"./ListItemStandard-D7spGUwG.js";import"./slim-arrow-left-DZIDoKA-.js";import"./Calendar-wtSGwbaI.js";import"./InvisibleMessage-DPIiF7tN.js";import"./index-CHxxDtPV.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
