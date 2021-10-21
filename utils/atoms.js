export const getAtomData = (id) => {
  let obj = Atoms.find((item) => item.id === id);
  return obj;
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
    id: "button-text-component",
    gumdrops: "",
    variants: [
      {
        title: "Context (Color)",
        values: [
          "gds-text-button--success",
          "gds-text-button--danger",
          "gds-text-button--warning",
          "gds-text-button--info",
          "gds-text-button--secondary",
          "gds-text-button--grey",
          "gds-text-button--gray",
          "gds-text-button--light-grey",
          "gds-text-button--light-gray",
        ],
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
        title: "Text",
        url: "/atoms/text-component",
      },
    ],

    code: `
    <div>
      Hello User, please <button className="gds-text-button" onClick={()=> alert("Thank you!💩")}>click me</button>!
    </div>
    `,
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
        title: "Circular Thumbnail",
        url: "/atoms/circular-thumbnail-component",
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
  {
    id: "circular-thumbnail-component",
    gumdrops:
      "https://gumdrops.gumgum.com/?path=/story/atoms-circularthumbnail--default",
    variants: [
      {
        title: "Size",
        values: [
          "gds-circular-thumbnail--xs",
          "gds-circular-thumbnail--sm",
          "gds-circular-thumbnail--lg",
          "gds-circular-thumbnail--xl",
        ],
      },
      {
        title: "Context (Color)",
        values: [
          "gds-circular-thumbnail--secondary",
          "gds-circular-thumbnail--success",
          "gds-circular-thumbnail--warning",
          "gds-circular-thumbnail--info",
          "gds-circular-thumbnail--danger",
          "gds-circular-thumbnail--dark",
          "gds-circular-thumbnail--white",
          "gds-circular-thumbnail--tertiary",
        ],
      },
    ],
    related: [
      {
        title: "Circular Button",
        url: "/atoms/circular-button-component",
      },
    ],

    code: `<img className="gds-circular-thumbnail" src="https://assets.ggops.com/images/ken.png" alt="Ken Weiner" />`,
  },
  {
    id: "container-component",
    // gumdrops: "",
    variants: [
      {
        title: "Size",
        values: ["gds-container--sm", "gds-container--lg"],
      },
      {
        title: "Context (Color)",
        values: [
          "gds-container--gray",
          "gds-container--primary",
          "gds-container--success",
          "gds-container--warning",
          "gds-container--danger",
        ],
      },
    ],
    related: [
      {
        title: "Card",
        url: "/molecules/card-component",
      },
    ],

    code: `<div className="gds-container">
    <p>Paragraph in container</p>
</div>`,
  },
  {
    id: "divider-component",
    gumdrops:
      "https://gumdrops.gumgum.com/?path=/story/molecules-divider--default",
    variants: [
      {
        title: "Text Position",
        values: ["gds-divider--reversed", "gds-divider--centered"],
      },
      {
        title: "Add Ons",
        values: [
          "gds-divider--collapsible",
          "gds-divider__line",
          "gds-divider__label",
          "gds-divider__arrow",
        ],
      },
      {
        title: "Add On States",
        values: ["gds-divider__arrow--collapse"],
      },
    ],
    related: [
      {
        title: "Accordion",
        url: "/molecules/accordion-component",
      },
    ],
    code: `() => {
      const [isOpen, setIsOpen] = React.useState(false);
      {/* By default the arrow is open, so applying gds-divider__arrow--collapse will rotate for close */}
      let classToggle = isOpen ? "gds-divider__arrow" : "gds-divider__arrow gds-divider__arrow--collapse";

      return (
        <div className="-p-a-3">
          {/* Line Only */}
          <div className="gds-divider">
            <span className="gds-divider__line"></span>
          </div>

          {/* Line with text */}
          <div className="gds-divider">
            <span className="gds-divider__label">Standard Divider</span>
            <span className="gds-divider__line"></span>
          </div>

          {/* Line with text and collapse arrow */}
          <div onClick={()=> setIsOpen(!isOpen)} className="gds-divider gds-divider--collapsible">
            <span className="gds-divider__label">
              Working Example Collapse Divider *Click Me*
            </span>
            <span className="gds-divider__line"></span>
            <span className={classToggle}></span>
          </div>

          {/* Line with text and collapse arrow positioned left */}
          <div className="gds-divider gds-divider--collapsible">
            <span className="gds-divider__label">Arrow Left</span>
            <span className="gds-divider__arrow -m-r-2"></span>
            <span className="gds-divider__line"></span>
          </div>

          {/* Line with right text and collapse arrow positioned right */}
          <div className="gds-divider gds-divider--collapsible gds-divider--reversed">
            <span className="gds-divider__label">Arrow Right</span>
            <span className="gds-divider__arrow -m-l-2"></span>
            <span className="gds-divider__line"></span>
          </div>

          {/* Line with center text and collapse arrow */}
          <div className="gds-divider gds-divider--collapsible gds-divider--centered">
            <span className="gds-divider__line"></span>
            <span className="gds-divider__label">Centered Divider</span>
            <span className="gds-divider__line"></span>
            <span className="gds-divider__arrow"></span>
          </div>
        </div>
      );
    }`,
  },
  {
    id: "hotkey-component",
    gumdrops: "",
    variants: [
      {
        title: "Size",
        values: [
          "gds-hotkey--sm",
          "gds-hotkey--xs",
          "gds-hotkey--lg",
          "gds-hotkey--xl",
        ],
      },
      {
        title: "Display",
        values: ["gds-hotkey--block"],
      },
      {
        title: "Context (Color)",
        values: [
          "gds-hotkey--dark",
          "gds-hotkey--light",
          "gds-hotkey--primary",
          "gds-hotkey--secondary",
          "gds-hotkey--tertiary",
          "gds-hotkey--success",
          "gds-hotkey--warning",
          "gds-hotkey--danger",
          "gds-hotkey--info",
          "gds-hotkey--outline",
          "gds-hotkey--outline-secondary",
          "gds-hotkey--outline-success",
          "gds-hotkey--outline-danger",
          "gds-hotkey--white",
          "gds-hotkey--blue",
          "gds-hotkey--dkblue",
          "gds-hotkey--gold",
          "gds-hotkey--red",
          "gds-hotkey--green",
          "gds-hotkey--orange",
          "gds-hotkey--dkgreen",
          "gds-hotkey--purple",
          "gds-hotkey--primary-dark",
          "gds-hotkey--secondary-dark",
          "gds-hotkey--tertiary-dark",
          "gds-hotkey--secondary-dark",
          "gds-hotkey--warning-dark",
          "gds-hotkey--danger-dark",
          "gds-hotkey--info-dark",
        ],
      },
    ],
    related: [
      {
        title: "Hotkey Toggle",
        url: "/molecules/hotkey-toggle-component",
      },
    ],

    code: `<span className="gds-hotkey">A</span>`,
  },
  {
    id: "images",
    gumdrops: "",
    variants: [
      {
        title: "Add On",
        values: ["gds-image__label"],
      },
    ],
    related: [
      // {
      //   title: "",
      //   url: "",
      // },
    ],

    code: `
    <div>
      <img
      className="gds-image" src="https://images.unsplash.com/photo-1574985163277-3fa01bfffc86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80"
      alt="Girl walking on beach"/>
      <div className="gds-image__label">Location: Unknown</div>
    </div>`,
  },
  {
    id: "link-component",
    gumdrops: "",
    variants: [
      {
        title: "Context (Color)",
        values: [
          "gds-text--link-secondary",
          "gds-text--link-grey",
          "gds-text--link-light-grey",
        ],
      },
    ],
    related: [
      {
        title: "Button Text Only",
        url: "/atoms/button-text-component",
      },
      {
        title: "Button",
        url: "/atoms/button-component",
      },
      {
        title: "Text",
        url: "/atoms/text-component",
      },
    ],

    code: `
    <div>
      <a className="gds-text--link" href="#">Default text link</a>
      <br/>
      <a className="gds-text--link-secondary" href="#">Secondary color text link</a>
    </div>
    `,
  },
  {
    id: "loading-component",
    gumdrops:
      "https://gumdrops.gumgum.com/?path=/story/atoms-loadingdots--default",
    variants: [
      {
        title: "Context (Color)",
        values: ["gds-loading__dot--white"],
      },
      {
        title: "Size",
        values: ["gds-loading__dot--lg"],
      },
    ],
    related: [
      // {
      //   title: "",
      //   url: "",
      // },
    ],

    code: `<div className="-p-a-4">
    <div className="gds-loading">
      <div className="gds-loading__dot"></div>
    </div>
</div>`,
  },
  {
    id: "number-circle-component",
    gumdrops:
      "https://gumdrops.gumgum.com/?path=/story/atoms-numbercircle--default",
    variants: [
      {
        title: "Size",
        values: [
          "gds-number-circle--xs",
          "gds-number-circle--sm",
          "gds-number-circle--lg",
          "gds-number-circle--xl",
        ],
      },
      {
        title: "Context (Color)",
        values: [
          "gds-number-circle--secondary",
          "gds-number-circle--success",
          "gds-number-circle--warning",
          "gds-number-circle--info",
          "gds-number-circle--danger",
          "gds-number-circle--white",
        ],
      },
    ],
    related: [
      {
        title: "Ranker Card",
        url: "/organisms/ranker-card-component",
      },
    ],

    code: `<div className="-p-a-3">
      <span className="gds-number-circle">1</span>
      <span className="-clear-both" />
    </div>`,
  },
];

// to copy and paste for above array

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
