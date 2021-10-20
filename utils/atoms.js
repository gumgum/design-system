export const getAtomData = (id) => {
  let obj = Atoms.find((item) => item.id === id);
  return obj;
};

const blankStructure = {
  id: "",
  gumdrops: "",
  variants: [
    {
      title: "",
      values: [],
    },
  ],
  related: [
    {
      title: "",
      url: "",
    },
  ],

  code: ``,
};

const Atoms = [
  {
    id: "badge-component",
    gumdrops: "https://gumdrops.gumgum.com/?path=/story/atoms-badge--default",
    variants: [
      {
        title: "Context (Color)",
        values: [
          "gds-badge--inverse",
          "gds-badge--success",
          "gds-badge--success-inverse",
          "gds-badge--info",
          "gds-badge--info-inverse",
          "gds-badge--warning",
          "gds-badge--warning-inverse",
          "gds-badge--danger",
          "gds-badge--danger-inverse",
        ],
      },
      {
        title: "Empty",
        values: ["gds-badge--empty"],
      },
    ],
    related: [
      {
        title: "Tag",
        url: "/atoms/tag-component",
      },
    ],
    code: `
    <div>
      <p>Default badge<span className="gds-badge">2</span></p>
      <p>Inverse badge<span className="gds-badge gds-badge--inverse">2</span></p>
      <p>Warning badge<span className="gds-badge gds-badge--warning">2</span></p>
      <p>Danger badge<span className="gds-badge gds-badge--danger">2</span></p>
      <p>Empty default badge<span className="gds-badge gds-badge--empty"></span></p>
      <p>Empty info badge<span className="gds-badge gds-badge--info gds-badge--empty"></span></p>
      <p>Empty warning badge<span className="gds-badge gds-badge--warning gds-badge--empty"></span></p>
      <p>Empty danger badge<span className="gds-badge gds-badge--danger gds-badge--empty"></span></p>
    </div>
    `,
  },
  {
    id: "button-component",
    gumdrops: "https://gumdrops.gumgum.com/?path=/story/atoms-button--default",
    variants: [
      {
        title: "Context (Color)",
        values: [
          "gds-button--default",
          "gds-button--primary",
          "gds-button--success",
          "gds-button--danger",
          "gds-button--warning",
          "gds-button--secondary",
          "gds-button--white",
          "gds-button--tertiary",
          "gds-button--info",
          "gds-button--link",
          "gds-button--toggle",
          "gds-button--dark",
          "gds-button--dark-primary",
          "gds-button--dark-secondary",
          "gds-button--dark-tertiary",
          "gds-button--dark-success",
          "gds-button--dark-danger",
          "gds-button--dark-info",
          "gds-button--dark-warning",
          "gds-button--dark-toggle",
        ],
      },
      {
        title: "Size",
        values: [
          "gds-button--xs",
          "gds-button--sm",
          "gds-button--md",
          "gds-button--lg",
        ],
      },
      {
        title: "State",
        values: ["gds-button--active", `disabled="disabled"`],
      },
      {
        title: "Display",
        values: [
          "gds-button-group__button",
          "gds-button--block",
          "gds-button--block-xs",
          "gds-button--block-sm",
          "gds-button--block-md",
          "gds-button--block-lg",
          "gds-button--block-xl",
        ],
      },
    ],
    related: [
      {
        title: "Link",
        url: "/atoms/link-component",
      },
      {
        title: "Circular Button",
        url: "/atoms/circular-button-component",
      },
      {
        title: "Button Group",
        url: "/molecules/button-group-component",
      },
      {
        title: "Button Dropdown",
        url: "/molecules/button-dropdown-component",
      },
      {
        title: "Button Toolbar",
        url: "/molecules/button-toolbar-component",
      },
    ],

    code: `<button className="gds-button gds-button--default">Default button</button>`,
  },
  {
    id: "circular-button-component",
    gumdrops: "",
    variants: [
      {
        title: "Size",
        values: [
          "gds-circular-button--xs",
          "gds-circular-button--sm",
          "gds-circular-button--lg",
          "gds-circular-button--xl",
        ],
      },
      {
        title: "Context (Color)",
        values: [
          "gds-circular-button--secondary",
          "gds-circular-button--success",
          "gds-circular-button--warning",
          "gds-circular-button--info",
          "gds-circular-button--danger",
          "gds-circular-button--white",
          "gds-circular-button--toggle",
          "gds-circular-button--dark",
          "gds-circular-button--dark-primary",
          "gds-circular-button--dark-secondary",
          "gds-circular-button--dark-tertiary",
          "gds-circular-button--dark-success",
          "gds-circular-button--dark-info",
          "gds-circular-button--dark-warning",
          "gds-circular-button--dark-danger",
          "gds-circular-button--dark-toggle",
        ],
      },
      {
        title: "State",
        values: [
          "gds-circular-button--active",
          "gds-circular-button--inactive",
          `disabled="disabled"`,
        ],
      },
      {
        title: "Image",
        values: ["gds-circular-button__image"],
      },
    ],
    related: [
      {
        title: "Link",
        url: "/atoms/link-component",
      },
      {
        title: "Button",
        url: "/atoms/button-component",
      },
      {
        title: "Button Group",
        url: "/molecules/button-group-component",
      },
      {
        title: "Button Dropdown",
        url: "/molecules/button-dropdown-component",
      },
      {
        title: "Button Toolbar",
        url: "/molecules/button-toolbar-component",
      },
    ],

    code: `<div>
   <button className="gds-circular-button gds-circular-button--primary"><i className="fa fa-fw fa-trash-o"></i></button>
   <button className="gds-circular-button gds-circular-button--default">
        <div
          className="gds-circular-button__image"
          style={{
            backgroundImage: 'url("https://assets.ggops.com/images/ken.png")',
          }}
        ></div>
      </button>
  </div>`,
  },
];
