export const getAtomData = () => {
  return Atoms.find(({ item }) => item === item);
};

export const Atoms = [
  {
    id: "badge-component",
    title: "Badge",
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
        title: "Button Group",
        url: "/",
      },
    ],
    component: `
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
    title: "ButtonDemo",
    id: "example-component",
    variants: [
      {
        title: "Context (Color)",
        values: [
          "gds-button--default",
          "gds-button--primary",
          "gds-button--success",
          "gds-button--danger",
          "gds-button--warning",
        ],
      },
      {
        title: "Size",
        values: ["gds-button--xs", "gds-button--sm", "gds-button--md"],
      },
      {
        title: "State",
        values: [`disabled="disabled"`],
      },
      {
        title: "Display",
        values: ["gds-button--block-xs"],
      },
    ],
    related: [
      {
        title: "Button Group",
        url: "/",
      },
    ],

    component: `<button className="gds-button gds-button--default">Default button</button>`,
  },
];
