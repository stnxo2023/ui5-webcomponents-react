import{j as e}from"./iframe-DwL_U_4M.js";import{useMDXComponents as s}from"./index-DF1KaKr-.js";import{M as m,C as o}from"./blocks-BkbxlrC9.js";import"./Tag-DWzoI0ag.js";import"./index-DgsDGr1U.js";import{C as l}from"./ControlsWithNote-DIfi3Kqe.js";import{D as p}from"./DocsHeader-woZ-gFPF.js";import{F as d}from"./CommandsAndQueries-Dz5IdIhG.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DVq6zF_O.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BVmVMqd7.js";import"./sys-enter-2-B94IC9Xo.js";import"./alert-q5IjkK7H.js";import"./index-ak-yAlnV.js";import"./index-Db6l5aQj.js";import"./Link-BdX-3dcl.js";import"./copy-BoBBSTEQ.js";import"./copy-Ds9kRn1x.js";import"./GitHub-Mark-Qpag0ptV.js";import"./TableOfContent-BzUyEnfe.js";import"./index-BOSg5TA3.js";import"./index-Dqsw9_lb.js";import"./index-Vi2IbP0J.js";import"./index-DOHiCVZ-.js";import"./index-DKq2OUSi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dkqe7TGi.js";import"./addCustomCSSWithScoping-CE7eblPA.js";import"./Gregorian-BuQQcWv4.js";import"./getCachedLocaleDataInstance-iXKf-QL5.js";import"./query-CzSBusdE.js";import"./Input-usKDjDSg.js";import"./ResponsivePopoverCommon.css-CYR3rAjO.js";import"./ValueStateMessage.css-B8AI8KQ2.js";import"./Suggestions.css-CUQOIKID.js";import"./appointment-2-Chj2HFgd.js";import"./ListItemStandard-XOt9jxnj.js";import"./slim-arrow-left-BF84NwNz.js";import"./Calendar-DeSiT8mM.js";import"./InvisibleMessage-CeA3DNW4.js";import"./index-CxZSpw0g.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
