import{j as t,e as n}from"./iframe-B-pj6tCi.js";import{useMDXComponents as x}from"./index-CV4vE3wQ.js";import{M as d,C as h,a as j,D as i,A as r}from"./blocks-HpriUj6L.js";import"./Tag-BGSRXwU9.js";import"./index-BjTnndjj.js";import{C as f}from"./ControlsWithNote-B7K7QTtI.js";import{D as S}from"./DocsHeader-BCuAJzUi.js";import{F as u}from"./CommandsAndQueries-D5MjQxKD.js";import{S as D}from"./SubcomponentsSection-BVy4lpQe.js";import{C as s,D as m,S as p,F as a,a as c}from"./ViewSettingsDialog.stories-CZ2lQcAX.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D4Uxy2_-.js";import"./sys-enter-2-dO_KPcSs.js";import"./alert-DoolSfaJ.js";import"./index-BOWgSpCi.js";import"./index-BuYTxKvQ.js";import"./Link-C2AEvOhf.js";import"./copy-BVi8j2p3.js";import"./copy-DztVyiyp.js";import"./GitHub-Mark-8l4Jp8Qr.js";import"./TableOfContent-D6cpdcyl.js";import"./index-C-xz_U36.js";import"./index-CBj2QVaO.js";import"./index-BJS1VYKy.js";import"./index-C-cxTaDk.js";import"./index-etFlaHh7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-zIVJXLqJ.js";import"./addCustomCSSWithScoping-NTHEVFVs.js";import"./query-CzSBusdE.js";import"./InvisibleMessage-QwxdDQeA.js";import"./sort-D_DdzlLb.js";import"./filter-Bi23S08g.js";import"./i18n-defaults-BS8OTJAB.js";import"./SegmentedButton-B14_njt4.js";import"./ListItemStandard-DZ46rijL.js";import"./parameters-bundle.css-MDhRcvbE.js";function l(e){const o={code:"code",h2:"h2",p:"p",pre:"pre",...x(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:s}),`
`,t.jsx(S,{of:s,since:"0.20.0"}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(h,{of:m}),`
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(f,{of:m}),`
`,t.jsx(o.h2,{id:"opening-viewsettingsdialog",children:"Opening ViewSettingsDialog"}),`
`,t.jsxs(o.p,{children:["You can open and close the ",t.jsx(o.code,{children:"ViewSettingsDialog"})," component in a declarative way using the ",t.jsx(o.code,{children:"open"})," prop."]}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`const ViewSettingsDialogComponent = () => {
  const [showVSD, setShowVSD] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setShowVSD(true);
        }}
      >
        Open ViewSettingsDialog
      </Button>
      <ViewSettingsDialog
        open={showVSD}
        onClose={() => {
          setShowVSD(false);
        }}
        sortItems={
          <>
            <SortItem text="Name" />
            <SortItem text="Position" />
            <SortItem text="Company" />
            <SortItem text="Department" />
          </>
        }
      />
    </>
  );
};
`})}),`
`,t.jsx(j,{children:D}),`
`,t.jsx(o.h2,{id:"sortitem",children:"SortItem"}),`
`,t.jsx(i,{of:p}),`
`,t.jsx(r,{exclude:n,of:p}),`
`,t.jsx(o.h2,{id:"filteritem",children:"FilterItem"}),`
`,t.jsx(i,{of:a}),`
`,t.jsx(r,{exclude:n,of:a}),`
`,t.jsx(o.h2,{id:"filteritemoption",children:"FilterItemOption"}),`
`,t.jsx(i,{of:c}),`
`,t.jsx(r,{exclude:n,of:c}),`
`,t.jsx(u,{})]})}function nt(e={}){const{wrapper:o}={...x(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(l,{...e})}):l(e)}export{nt as default};
