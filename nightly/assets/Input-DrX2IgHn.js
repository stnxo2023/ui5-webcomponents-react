import{j as n}from"./iframe-J46VriOb.js";import{useMDXComponents as o}from"./index-CBla0wLi.js";import{M as l,C as r}from"./blocks-beoBu_qL.js";import"./Tag-DrBKyONn.js";import"./index-_u-v5yqi.js";import{C as c}from"./ControlsWithNote-Dp20gIeT.js";import{D as p}from"./DocsHeader-JnzTcXhY.js";import{F as m}from"./Footer-CEGsJe_E.js";import"./CommandsAndQueries-BzSXHbZJ.js";import"./PageNotFound-D29obeve.js";import{C as i,D as a,W as u}from"./Input.stories-DOhHMviF.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CATkPoRV.js";import"./sys-enter-2-Cc8Mj3l6.js";import"./alert-BWP7y2xA.js";import"./index-CT7sD2iL.js";import"./index-BrGkrW3e.js";import"./Link-B4FJ2xg8.js";import"./copy-OxJaHIT2.js";import"./copy-_0TxAB6h.js";import"./GitHub-Mark-DIlvSSXN.js";import"./TableOfContent-Udn_Do39.js";import"./index-BkIHYavW.js";import"./index-Dt6WNWTR.js";import"./index-Dw3YBt24.js";import"./index-D6itq-2d.js";import"./index-aps2uNQB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DxsI6DA6.js";import"./addCustomCSSWithScoping-Dl6_6-AL.js";import"./Illustrations-D_iUtabn.js";import"./i18n-defaults-CFWtSmu6.js";import"./Input-Ba21Wr_4.js";import"./ResponsivePopoverCommon.css-jKJxzQ6F.js";import"./ValueStateMessage.css-DSOKYmKE.js";import"./Suggestions.css-Dd_ULqQN.js";import"./parameters-bundle.css-BprtGMjT.js";import"./navigation-left-arrow-8hwKGqqI.js";import"./navigation-right-arrow-D_foC3d9.js";import"./index-C5SdIc4S.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:i}),`
`,n.jsx(p,{of:i,experimental:!0}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h2,{id:"example",children:"Example"}),`
`,n.jsx(r,{of:a}),`
`,n.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,n.jsx(c,{of:a}),`
`,n.jsx(e.h2,{id:"input-with-fake-stream",children:"Input with Fake Stream"}),`
`,n.jsx(e.p,{children:"Input component implementing simple stream handling."}),`
`,n.jsx(r,{of:u}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"Show Static Code"}),n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`function useFakeStream(typingDelay = 10, startingDelay = 1500) {
  const [value, setValue] = useState('');
  const [transitionIsPending, startTransition] = useTransition(); // active character updates
  const [isProcessing, setIsProcessing] = useState(false); // starting delay
  const [isTyping, setIsTyping] = useState(false); // actively typing characters
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  type StartStreamOptions = {
    text: string;
    onComplete?: (fullText: string) => void;
    onProcessingComplete?: () => void;
  };

  const startStream = ({ text, onComplete, onProcessingComplete }: StartStreamOptions) => {
    // Stop previous stream and timeout
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    setValue('');
    setIsProcessing(true);

    timeoutRef.current = setTimeout(() => {
      setIsProcessing(false);

      if (onProcessingComplete) {
        onProcessingComplete();
      }

      setIsTyping(true);
      let index = 0;

      intervalRef.current = setInterval(() => {
        if (index < text.length) {
          const nextChar = text[index];
          index++;

          startTransition(() => {
            setValue((prev) => prev + nextChar);
          });
        } else {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          setIsTyping(false);

          if (onComplete) {
            onComplete(text);
          }
        }
      }, typingDelay);
    }, startingDelay);
  };

  const stopStream = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsProcessing(false);
    setIsTyping(false);
  };

  return { value, transitionIsPending, isProcessing, isTyping, setValue, startStream, stopStream };
}

const SAMPLE_TEXTS = {
  en: 'Innovation managers lead with creativity.',
  bg: 'Мениджърите по иновации водят с креативност.',
  de: 'Innovationsmanager führen mit Kreativität.',
  expanded: 'They combine creative ideas with strategic action.',
  simplified: 'They lead using creativity.',
  summarized: 'Driving innovation creatively.',
};

const MENU_CONFIG = [
  {
    text: 'Regenerate',
    action: 'regenerate',
    processingLabel: 'Regenerating text...',
    completedLabel: 'Regenerated text',
    textKey: 'en',
    replaces: 'generate',
  },
  {
    text: 'Fix spelling and grammar',
    action: 'fixSpelling',
    processingLabel: 'Fixing spelling and grammar...',
    completedLabel: 'Fixed spelling and grammar',
    textKey: 'en',
  },
  {
    text: 'Rewrite text',
    isGroup: true,
    children: [
      {
        text: 'Simplify',
        action: 'simplify',
        processingLabel: 'Simplifying text...',
        completedLabel: 'Simplified text',
        textKey: 'simplified',
        isChild: true,
      },
      {
        text: 'Expand',
        action: 'expand',
        processingLabel: 'Expanding text...',
        completedLabel: 'Expanded text',
        textKey: 'expanded',
        isChild: true,
      },
      {
        text: 'Summarize',
        action: 'summarize',
        processingLabel: 'Summarizing text...',
        completedLabel: 'Summarized text',
        textKey: 'summarized',
        isChild: true,
      },
    ],
  },
  {
    text: 'Translate',
    isGroup: true,
    children: [
      {
        text: 'English',
        action: 'translateEN',
        processingLabel: 'Translating to English...',
        completedLabel: 'Translated to English',
        textKey: 'en',
        isChild: true,
      },
      {
        text: 'German',
        action: 'translateDE',
        processingLabel: 'Translating to German...',
        completedLabel: 'Translated to German',
        textKey: 'de',
        isChild: true,
      },
      {
        text: 'Bulgarian',
        action: 'translateBG',
        processingLabel: 'Translating to Bulgarian...',
        completedLabel: 'Translated to Bulgarian',
        textKey: 'bg',
        isChild: true,
      },
    ],
  },
];

type VersionHistoryItem = {
  action: string;
  endAction: string;
  timestamp: string;
  value: string;
};

const initialPlaceholder = 'Write your title';

function AIInput(props) {
  const [versionHistory, setVersionHistory] = useState<VersionHistoryItem[]>([]);
  const [currentHistoryIndex, setCurrentHistoryIndex] = useState(-1);
  const [placeholder, setPlaceholder] = useState(initialPlaceholder);
  const hasHistory = versionHistory.length > 0;
  const currentActionRef = useRef<string>('');
  const { value, isTyping, isProcessing, setValue, startStream, stopStream } = useFakeStream();

  const handleVersionChange: InputPropTypes['onVersionChange'] = (e) => {
    setCurrentHistoryIndex((prev) => (e.detail.backwards ? prev - 1 : prev + 1));
  };

  const handleItemClick: InputPropTypes['onItemClick'] = (e) => {
    const { action, processingLabel, textKey } = e.detail.item.dataset;
    if (isProcessing || !action) {
      return;
    }
    currentActionRef.current = action;

    let text = SAMPLE_TEXTS[textKey ?? 'en'];
    switch (action) {
      case 'simplify': {
        text = SAMPLE_TEXTS.simplified;
        break;
      }
      case 'expand': {
        text = SAMPLE_TEXTS.expanded;
        break;
      }
      case 'summarize': {
        text = SAMPLE_TEXTS.expanded;
        break;
      }
      case 'translateEN': {
        text = SAMPLE_TEXTS.en;
        break;
      }
      case 'translateDE': {
        text = SAMPLE_TEXTS.de;
        break;
      }
      case 'translateBG': {
        text = SAMPLE_TEXTS.bg;
        break;
      }
    }

    setPlaceholder(processingLabel);
    startStream({
      text,
      onProcessingComplete: () => {
        setPlaceholder(initialPlaceholder);
      },
      onComplete: (fullText) => {
        setVersionHistory((prev) => [
          ...prev,
          { action, endAction: 'completed', timestamp: new Date().toISOString(), value: fullText },
        ]);
        setCurrentHistoryIndex((prev) => prev + 1);
        setValue('');
      },
    });
  };

  const handleStopGeneration: InputPropTypes['onStopGeneration'] = (e) => {
    stopStream();
    setVersionHistory((prev) => [
      ...prev,
      {
        action: currentActionRef.current,
        endAction: 'stopped',
        timestamp: new Date().toISOString(),
        value: e.target.value,
      },
    ]);
    setCurrentHistoryIndex((prev) => prev + 1);
    setValue('');
  };

  const handleInput: InputPropTypes['onInput'] = (e) => {
    setValue(e.target.value);
  };

  return (
    <Input
      {...props}
      style={{ width: '400px' }}
      value={isProcessing ? '' : value || versionHistory[currentHistoryIndex]?.value || ''}
      placeholder={placeholder}
      currentVersion={currentHistoryIndex + 1}
      totalVersions={versionHistory.length}
      loading={isProcessing || isTyping}
      onVersionChange={handleVersionChange}
      onStopGeneration={handleStopGeneration}
      onItemClick={handleItemClick}
      onInput={handleInput}
      actions={
        <>
          {hasHistory ? (
            MENU_CONFIG.map((configItem, index) => {
              if (configItem.replaces && !hasHistory) {
                return null;
              }

              if (configItem.isGroup && Array.isArray(configItem.children)) {
                return (
                  <MenuItem key={index} text={configItem.text}>
                    {configItem.children.map((child) => (
                      <MenuItem
                        key={child.text}
                        text={child.text}
                        data-action={child.action}
                        data-processing-label={child.processingLabel}
                        data-completed-label={child.completedLabel}
                        data-text-key={child.textKey}
                      />
                    ))}
                  </MenuItem>
                );
              }

              return (
                <MenuItem
                  key={configItem.text}
                  text={configItem.text}
                  data-action={configItem.action}
                  data-processing-label={configItem.processingLabel}
                  data-completed-label={configItem.completedLabel}
                  data-text-key={configItem.textKey}
                />
              );
            })
          ) : (
            <MenuItem key="generate" text="Generate" data-action="generate" data-processing-label="Processing..." />
          )}
        </>
      }
    />
  );
}
`})})]}),`
`,n.jsx(m,{})]})}function $(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{$ as default};
