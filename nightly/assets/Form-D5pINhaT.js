import{j as e}from"./iframe-CeMquKfU.js";import{useMDXComponents as s}from"./index-BbFo7jBM.js";import{M as u,C as o,a as c,D as r,A as i}from"./blocks-Db1iDIvu.js";import"./Tag-DBOPR6ka.js";import"./index-BWGqmYD4.js";import{C as h}from"./ControlsWithNote-BmMLVWWf.js";import{D as I}from"./DocsHeader-CDkUnTUT.js";import{F as y}from"./CommandsAndQueries-DG6G8TEI.js";import{S as x}from"./SubcomponentsSection-BVy4lpQe.js";import{a as p,b as a}from"./index-BIQ5Rmzb.js";import{C as d,D as m,a as F}from"./Form.stories-B_cQ_Cu9.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BF8hjIJ6.js";import"./sys-enter-2-CBCKgEbS.js";import"./alert-DPPxzZqA.js";import"./index-CQMy8EdC.js";import"./index-WnbBQODb.js";import"./Link-B4KwrrH9.js";import"./copy-DoTCoMit.js";import"./copy-DuOXgjDa.js";import"./GitHub-Mark-D5azJnro.js";import"./TableOfContent-DfQZ96tK.js";import"./index-DYb2g8Yq.js";import"./index-srI8srsL.js";import"./index-Brk-KPPC.js";import"./index-jfPm289V.js";import"./index-DMujUK6u.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-RK7-B4yx.js";import"./addCustomCSSWithScoping-06k5HVP6.js";import"./Input-DQRA-VuS.js";import"./ResponsivePopoverCommon.css-BClm2dDh.js";import"./ValueStateMessage.css-CKCH07QR.js";import"./Suggestions.css-BWIb4a3h.js";import"./index-CHxxDtPV.js";import"./index-DSexaJxi.js";import"./Select-mBwpFl_7.js";import"./InvisibleMessage-DPIiF7tN.js";import"./slim-arrow-down-DP9BktZN.js";import"./slim-arrow-down-rp2vwRxt.js";import"./index-UEVtisfD.js";import"./Option-BKd77GhM.js";import"./ListItemBaseTemplate-1_D2ATm3.js";import"./index-CSgwDCvV.js";import"./TextArea-rcfggqLa.js";import"./index-C0E2EBUT.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:d}),`
`,e.jsx(I,{of:d,subComponents:["FormGroup","FormItem"]}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(h,{of:m}),`
`,e.jsx(t.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx(t.h2,{id:"display-only-and-edit-mode",children:"Display-Only and Edit mode"}),`
`,e.jsx(o,{of:F,sourceState:"none"}),`
`,e.jsx(t.h3,{id:"code",children:"Code"}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Show Code"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const StandardField = ({ editMode, value, inputType = InputType.Text, onInput, ...rest }) => {
  if (editMode) {
    return <Input value={value} style={{ width: '100%' }} type={inputType} onInput={onInput} {...rest} />;
  }
  if (inputType === InputType.URL || inputType === InputType.Email) {
    return (
      <Link href={inputType === InputType.Email ? \`mailto:\${value}\` : value} target="_blank" {...rest}>
        {value}
      </Link>
    );
  }
  return <Text {...rest}>{value}</Text>;
};

const reducer = (state, { field, value }) => {
  return { ...state, [field]: value };
};

const FormComponent = (props) => {
  const [editMode, toggleEditMode] = useReducer((prev) => !prev, false, undefined);
  const [formState, dispatch] = useReducer(
    reducer,
    {
      name: 'Red Point Stores',
      street: 'Main St 1618',
      zip: 31415,
      city: 'Maintown',
      country: 'Germany',
      web: 'https://www.sap.com',
      mail: 'john.smith@sap.com',
      twitter: '@sap',
      phone: '+49 1234 56789'
    },
    undefined
  );
  const { zip, city, name, street, country, web, mail, twitter, phone } = formState;

  const handleInput = (e) => {
    dispatch({ field: Object.keys(e.target.dataset)[0], value: e.target.value });
  };

  return (
    <>
      <Button onClick={toggleEditMode}>Toggle {editMode ? 'Display-Only Mode' : 'Edit Mode'}</Button>
      <Form
        {...props}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <FormGroup titleText="Address">
          <FormItem label="Name">
            <StandardField editMode={editMode} value={name} onInput={handleInput} data-name />
          </FormItem>
          <FormItem label="Street">
            <StandardField editMode={editMode} value={street} onInput={handleInput} data-street />
          </FormItem>
          <FormItem label="ZIP Code / City">
            {editMode ? (
              <>
                <Input value={zip} type={InputType.Number} style={{ width: '30%' }} onInput={handleInput} data-zip />
                <Input value={city} style={{ width: '70%' }} onInput={handleInput} data-city />
              </>
            ) : (
              <Text>{\`\${zip} \${city}\`}</Text>
            )}
          </FormItem>
          <FormItem label="Country">
            <StandardField editMode={editMode} value={country} onInput={handleInput} data-country />
          </FormItem>
          <FormItem label="Web">
            <StandardField editMode={editMode} value={web} inputType={InputType.URL} onInput={handleInput} data-web />
          </FormItem>
        </FormGroup>
        <FormGroup titleText="Contact">
          <FormItem label="Email">
            <StandardField
              editMode={editMode}
              value={mail}
              inputType={InputType.Email}
              onInput={handleInput}
              data-email
            />
          </FormItem>
          <FormItem label="Twitter">
            <StandardField editMode={editMode} value={twitter} onInput={handleInput} data-twitter />
          </FormItem>
          <FormItem label="Phone">
            <StandardField
              editMode={editMode}
              value={phone}
              inputType={InputType.Tel}
              onInput={handleInput}
              data-phone
            />
          </FormItem>
        </FormGroup>
      </Form>
    </>
  );
};
`})})]}),`
`,e.jsx(c,{children:x}),`
`,e.jsx(t.h2,{id:"form-group",children:"Form Group"}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(t.h2,{id:"formitem",children:"FormItem"}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(y,{})]})}function se(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}export{se as default};
