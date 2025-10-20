import{j as e}from"./iframe-D7LtZGbE.js";import{useMDXComponents as s}from"./index-DPe-hK9n.js";import{M as u,C as o,a as c,D as r,A as i}from"./blocks-pr2PodND.js";import"./Tag-CAGvJLHq.js";import"./index-8IYrQOsB.js";import{C as h}from"./ControlsWithNote-BGB5-nBh.js";import{D as I}from"./DocsHeader-SfH7r9rU.js";import{F as y}from"./CommandsAndQueries-16gk4cWC.js";import{S as x}from"./SubcomponentsSection-BVy4lpQe.js";import{a as p,b as a}from"./index-DlqR0fJf.js";import{C as d,D as m,a as F}from"./Form.stories-DSC_Kqfz.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DGR9jLKW.js";import"./sys-enter-2-pukk9ibo.js";import"./alert-ltuZ9R-x.js";import"./index-nlmJusRV.js";import"./index-DCDoujQt.js";import"./Link-DR-Yc_uT.js";import"./copy-uVLIBiwm.js";import"./copy-irE93QLw.js";import"./GitHub-Mark-q0BPK-l1.js";import"./TableOfContent-BQqicCGe.js";import"./index-CTJj7zal.js";import"./index-CQrPSC4r.js";import"./index-D9f7QWgZ.js";import"./index-7y0cv8s8.js";import"./index-B5kVVFk8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D0rw92sk.js";import"./addCustomCSSWithScoping-Q6oWMzUs.js";import"./Input-smzufGTw.js";import"./ResponsivePopoverCommon.css-BuYzr302.js";import"./ValueStateMessage.css-B17FpIm5.js";import"./Suggestions.css-D7t7e06T.js";import"./index-JiUw2IYU.js";import"./index-1VTd4aoY.js";import"./index-DvCsGyO6.js";import"./Select-BbkKcK4f.js";import"./InvisibleMessage-Cv3DnnE8.js";import"./slim-arrow-down-CRqqmTAd.js";import"./slim-arrow-down-CSg5EB5A.js";import"./index-CyQ4JYW2.js";import"./Option-DijjA4Vk.js";import"./ListItemBaseTemplate-DPI4cuqZ.js";import"./index-DZFiI2KH.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:d}),`
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
`,e.jsx(y,{})]})}function le(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}export{le as default};
