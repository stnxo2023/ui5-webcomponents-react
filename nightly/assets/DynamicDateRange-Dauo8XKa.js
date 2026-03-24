import{j as e}from"./iframe-DBRigOoU.js";import{useMDXComponents as s}from"./index-apRVXKap.js";import{M as m,C as o}from"./blocks-BfIRBmeA.js";import"./Tag-DEWl5_iK.js";import"./index-CtZlHOCH.js";import{C as p}from"./ControlsWithNote-Cx-tNe7A.js";import{D as l}from"./DocsHeader-Cr7QkAfd.js";import{F as d}from"./Footer-C0l-yj0s.js";import"./CommandsAndQueries-CSuPwIuY.js";import"./PageNotFound-CQZvX7Tj.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-CzooJ_VI.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Di_zbJNn.js";import"./sys-enter-2-CpC_ZrXX.js";import"./alert-CuS5B2OC.js";import"./index-DWKSf_OJ.js";import"./index-DxEJ2UxM.js";import"./Link-WDyL8T_Q.js";import"./copy--UdGxiKh.js";import"./copy-D7myjbZ2.js";import"./GitHub-Mark-BBZ9Y9kL.js";import"./TableOfContent-CWrNTkbt.js";import"./index-C-7GLaxU.js";import"./index-DybExlT-.js";import"./index-NhTjO4vR.js";import"./index-BAsbE3_A.js";import"./index-u05fNeKh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bc6gryl9.js";import"./addCustomCSSWithScoping-Oz7AbKTz.js";import"./Illustrations-aiaUW8Wr.js";import"./i18n-defaults-CFWtSmu6.js";import"./Gregorian-CNQE-lPt.js";import"./FormatUtils-tXLcsNQ7.js";import"./query-CzSBusdE.js";import"./Input-CtHTs60C.js";import"./ResponsivePopoverCommon.css-Da1SZvGe.js";import"./ValueStateMessage.css-nbS3DH35.js";import"./Suggestions.css-W26MlxzS.js";import"./appointment-2-KTMb2qpv.js";import"./ListItemStandard-BfX1rpOQ.js";import"./slim-arrow-left-CpzhfOav.js";import"./Calendar-DudQISUW.js";import"./InvisibleMessage-CdaXnoMp.js";import"./index-rB7yhNqF.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
`,e.jsx(l,{of:r}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(p,{of:a}),`
`,e.jsx(t.h2,{id:"more-examples",children:"More examples"}),`
`,e.jsx(t.h3,{id:"value-change",children:"Value Change"}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(t.h4,{id:"code",children:"Code"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`function DynamicDateRangeComponent() {
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
`,e.jsx(d,{})]})}function re(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{re as default};
