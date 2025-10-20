import{j as e}from"./iframe-7SE3nFh2.js";import{useMDXComponents as s}from"./index-C0FWbpZL.js";import{M as m,C as o}from"./blocks-BJKQ4CAZ.js";import"./Tag-CAr8yJM3.js";import"./index-DcFj-mpl.js";import{C as l}from"./ControlsWithNote-CfLd-2FY.js";import{D as p}from"./DocsHeader-aNnt3Lfp.js";import{F as d}from"./CommandsAndQueries-BztwtTDr.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DoyNSaBP.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CEHY-zK8.js";import"./sys-enter-2-Db6aMDI3.js";import"./alert-iGUotenY.js";import"./index-CZm6iJJ6.js";import"./index-BH5SLEfd.js";import"./Link-DJshYrFL.js";import"./copy-Ck-cOtgE.js";import"./copy-CDZIXxHa.js";import"./GitHub-Mark-TqIkv81D.js";import"./TableOfContent-B1lf0qQg.js";import"./index-BdnA4cG1.js";import"./index-DZIYhziJ.js";import"./index-CJza0w__.js";import"./index-CHnd9ZVx.js";import"./index-cZBRAzkp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bx3Mb7HN.js";import"./addCustomCSSWithScoping-CrtLyOIc.js";import"./Gregorian-DviiOG_l.js";import"./query-CzSBusdE.js";import"./Input-kEzXj9c6.js";import"./ResponsivePopoverCommon.css-DqKEq-kc.js";import"./ValueStateMessage.css-wZQPf3zp.js";import"./Suggestions.css-DT0Rp6yR.js";import"./appointment-2-MzpwB45j.js";import"./ListItemStandard-5gZgEeYH.js";import"./slim-arrow-left-DhzgUYJC.js";import"./Calendar-lqyrIxpa.js";import"./InvisibleMessage-BpijQ7HL.js";import"./index-BzfZ0HZ7.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
