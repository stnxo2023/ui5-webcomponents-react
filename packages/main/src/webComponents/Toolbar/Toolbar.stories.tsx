import type { Meta, StoryObj } from '@storybook/react';
import ToolbarAlign from '@ui5/webcomponents/dist/types/ToolbarAlign.js';
import { useRef, useState } from 'react';
import { Popover } from '../Popover/index.js';
import type { PopoverDomRef } from '../Popover/index.js';
import { ToolbarButton } from '../ToolbarButton/index.js';
import { ToolbarSelect } from '../ToolbarSelect/index.js';
import { ToolbarSelectOption } from '../ToolbarSelectOption/index.js';
import { ToolbarSeparator } from '../ToolbarSeparator/index.js';
import { ToolbarSpacer } from '../ToolbarSpacer/index.js';
import { Toolbar } from './index.js';

const meta = {
  title: 'Layouts & Floorplans / Toolbar',
  component: Toolbar,
  argTypes: {
    children: { control: { disable: true } },
  },
  args: {
    alignContent: ToolbarAlign.Start,
  },
  tags: ['package:@ui5/webcomponents'],
} satisfies Meta<typeof Toolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Toolbar {...args}>
      <ToolbarButton text="Button 1" />
      <ToolbarSelect>
        <ToolbarSelectOption>Option 1</ToolbarSelectOption>
        <ToolbarSelectOption>Option 2</ToolbarSelectOption>
        <ToolbarSelectOption>Option 3</ToolbarSelectOption>
      </ToolbarSelect>
      <ToolbarSeparator />
      <ToolbarSpacer />
      <ToolbarSeparator />
      <ToolbarButton text="Button 2" />
      <ToolbarSelect>
        <ToolbarSelectOption>Option 1</ToolbarSelectOption>
        <ToolbarSelectOption>Option 2</ToolbarSelectOption>
        <ToolbarSelectOption>Option 3</ToolbarSelectOption>
      </ToolbarSelect>
    </Toolbar>
  ),
};

export const OpenPopover: Story = {
  name: 'Opening Popovers via ToolbarButton',
  render(args) {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const popoverRef = useRef<PopoverDomRef>(null);
    return (
      <>
        <Toolbar {...args}>
          <ToolbarButton
            onClick={(e) => {
              const { targetRef } = e.detail;
              if (popoverRef.current) {
                popoverRef.current.opener = targetRef;
                setPopoverOpen(true);
              }
            }}
            text="Open Popover"
          />
        </Toolbar>
        <Popover
          open={popoverOpen}
          ref={popoverRef}
          onClose={() => {
            setPopoverOpen(false);
          }}
        >
          Content
        </Popover>
      </>
    );
  },
};
