export default {
  title: 'Design System/Atoms/Typography',
  argTypes: {
    children: { control: 'text' },
    type: {
      control: {
        type: 'select',
        options: ['header', 'body', 'code'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      },
    },
    weight: {
      control: {
        type: 'select',
        options: ['WIP'],
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['WIP'],
      },
    },
    italic: {
      control: {
        type: 'select',
        options: ['WIP'],
      },
    },
  },
};

const Template = ({ children, size, type }) => {
  const txt = document.createElement('h1');
  txt.className = `gds-text--${type}-${size}`;
  txt.innerText = `${children}`;
  return txt;
};

export const Header = Template.bind({});
Header.args = {
  type: 'header',
  children: `This is a header text`,
  size: 'md'
};


export const Body = Template.bind({});
Body.args = {
  type: 'body',
  children: `This is a body text`,
  size: 'sm'
};

export const Blockquote = Template.bind({});
Body.args = {
  type: 'body',
  children: `This is a body text`,
  size: 'sm'
};

export const Code = Template.bind({});
Body.args = {
  type: 'body',
  children: `This is a body text`,
  size: 'sm'
};

export const Keyboard = Template.bind({});
Body.args = {
  type: 'body',
  children: `This is a body text`,
  size: 'sm'
};

export const List = Template.bind({});
Body.args = {
  type: 'body',
  children: `This is a body text`,
  size: 'sm'
};
