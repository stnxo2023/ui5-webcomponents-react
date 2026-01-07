import{j as e}from"./iframe-Bx5nPEOl.js";import{useMDXComponents as s}from"./index-xw1HgrxR.js";import{M as m,C as o}from"./blocks-BnfvreJd.js";import"./Tag-Czmfabca.js";import"./index-DySSVXhZ.js";import{C as l}from"./ControlsWithNote-CahJmR9N.js";import{D as p}from"./DocsHeader-BI3J9sAt.js";import{F as d}from"./CommandsAndQueries-DQbk5l2-.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-hS3CMTRp.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C_BRWXUj.js";import"./sys-enter-2-lnnKHtcu.js";import"./alert-CZSvHkOp.js";import"./index-D030oFb6.js";import"./index-DkrrTKjv.js";import"./Link-kOQVQryb.js";import"./copy-DXcXCTsO.js";import"./copy-CNcXjyuB.js";import"./GitHub-Mark-CS2VW7Dg.js";import"./TableOfContent-DsWzsd02.js";import"./index-BJ7q1nh3.js";import"./index-CHjTsZ6I.js";import"./index-DAgUYXjE.js";import"./index-EX-yWEKJ.js";import"./index-Bwj8Rahv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4hIxCZ-4.js";import"./addCustomCSSWithScoping-BnQjkpis.js";import"./Gregorian-BOyLgNn8.js";import"./query-CzSBusdE.js";import"./Input-CxXLCf6q.js";import"./ResponsivePopoverCommon.css-CalmLiVM.js";import"./ValueStateMessage.css-BZ1EUbwN.js";import"./Suggestions.css-DQV6aIGz.js";import"./appointment-2-CakACdRh.js";import"./ListItemStandard-zfIyxVpK.js";import"./slim-arrow-left-B148NR-s.js";import"./Calendar-B5VjBbQN.js";import"./InvisibleMessage-CQ0u2q5u.js";import"./index-C6ekE9Pr.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
