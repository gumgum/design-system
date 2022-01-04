export const getMoleculesData = (id) => {
  let obj = Molecules.find((item) => item.id === id);
  return obj;
};

const Molecules = [
  {
    id: "accordion-component",
    gumdrops:
      "https://gumdrops.gumgum.com/?path=/story/molecules-accordion--default",
    variants: [
      {
        title: "State",
        values: ["gds-accordion__item--active"],
      },
      {
        title: "Size",
        values: [
          "gds-accordion__item-title--sm",
          "gds-accordion__child-item-title--sm",
          "gds-accordion__item-icon--sm",
        ],
      },
      {
        title: "Context (Color)",
        values: [
          "gds-accordion--white",
          "gds-accordion__item-title--primary",
          "gds-accordion--dark",
          "gds-accordion__item--dark",
          "gds-accordion__child-item--dark",
          "gds-accordion__child-items--dark",
          "gds-accordion__item--primary",
          "gds-accordion__item--secondary",
          "gds-accordion__item--tertiary",
          "gds-accordion__item--quaternary",
          "gds-accordion__item-title--primary",
          "gds-accordion__item-title--secondary",
          "gds-accordion__item-title--tertiary",
          "gds-accordion__item-title--quaternary",
        ],
      },
    ],
    related: [
      {
        title: "Divider",
        url: "/atoms/divider-component",
      },
    ],
    code: `() => {
      const [isOpen, setIsOpen] = React.useState(true);
      let accordionToggle = isOpen ? "gds-accordion__item gds-accordion__item--active" : "gds-accordion__item";

      return ( 
        <div className="gds-accordion">
          <ul className="gds-accordion-list">
              <li className={accordionToggle}>
                  <h4 className="gds-accordion__item-title" data-gds-accordion-title>Lists
                      <div className="gds-badge">32</div>
                  </h4>
                  <i onClick={()=> setIsOpen(!isOpen)} className="gds-accordion__item-icon"></i>
                  <ul className="gds-accordion__child-items">
                      <li className="gds-accordion__child-item">
                          <h4 className="gds-accordion__child-item-title">Ricardo Vega
                              <div className="gds-badge gds-badge--dark">32</div>
                          </h4>
                      </li>
                      <li className="gds-accordion__child-item gds-accordion__item" data-gds-accordion-item>
                          <h4 className="gds-accordion__child-item-title gds-accordion__item-title" data-gds-accordion-title>David Valdez
                              <div className="gds-badge gds-badge--dark">32</div>
                          </h4>
                          <i className="gds-accordion__child-item-icon gds-accordion__item-icon"></i>
                          <ul className="gds-accordion__child-items">
                              <li className="gds-accordion__child-item gds-accordion__item" data-gds-accordion-item>
                                  <h4 className="gds-accordion__child-item-title gds-accordion__item-title" data-gds-accordion-title>David Valdez
                                      <div className="gds-badge gds-badge--dark">32</div>
                                  </h4>
                                  <i className="gds-accordion__child-item-icon gds-accordion__item-icon"></i>
                                  <ul className="gds-accordion__child-items">
                                      <li className="gds-accordion__child-item">
                                          <h4 className="gds-accordion__child-item-title">Ricardo Vega
                                              <div className="gds-badge gds-badge--dark">32</div>
                                          </h4>
                                      </li>
                                      <li className="gds-accordion__child-item">
                                          <h4 className="gds-accordion__child-item-title">David Valdez
                                              <div className="gds-badge gds-badge--dark">32</div>
                                          </h4>
                                      </li>
                                  </ul>
                              </li>
                          </ul>
                      </li>
                  </ul>
              </li>
              <li className="gds-accordion__item" data-gds-accordion-item>
                  <h4 className="gds-accordion__item-title" data-gds-accordion-title>Controls</h4>
                  <i className="gds-accordion__item-icon"></i>
              </li>
          </ul>
      </div>
      )
    }
    `,
  },
  {
    id: "avatar-component",
    gumdrops:
      "https://gumdrops.gumgum.com/?path=/story/molecules-avatar--default",
    variants: [
      {
        title: "State",
        values: ["gds-bubble__menu--menu-open", "gds-avatar__image--active"],
      },
      {
        title: "Color (Context)",
        values: [
          "gds-avatar__image--dark",
          "gds-avatar__menu--dark",
          "gds-avatar__menu-list--dark",
          "gds-avatar__menu-list-link--dark",
          "gds-avatar__menu-list-divider--dark",
          "gds-avatar__menu-list-item--dark",
        ],
      },
    ],
    related: [
      {
        title: "Circle Button",
        url: "/atoms/circular-button-component",
      },
    ],

    code: `<div className="gds-avatar">
    <div className="gds-avatar__image" data-gds-bubble-button="[data-gds-bubble-menu='avatar']" data-gds-active-className="gds-avatar__image--active">
        <img src="https://assets.ggops.com/images/ken.png" height="100%" alt="Ken Weiner" />
    </div>
    <div className="gds-avatar__menu" data-gds-bubble-menu="avatar">
        <ul className="gds-avatar__menu-list">
            <li className="gds-avatar__menu-list-item -ellipsis -p-h-3 -p-v-2">Ken Weiner</li>
            <li className="gds-avatar__menu-list-divider"></li>
            <li className="gds-avatar__menu-list-item -ellipsis"><a data-gds-bubble-closer className="gds-avatar__menu-list-link" href="#">Profile</a></li>
            <li className="gds-avatar__menu-list-item -ellipsis" data-gds-bubble-closer ><a className="gds-avatar__menu-list-link" href="#">Settings</a></li>
            <li className="gds-avatar__menu-list-divider"></li>
            <li className="gds-avatar__menu-list-item -ellipsis"><a data-gds-bubble-closer className="gds-avatar__menu-list-link" href="#">Logout</a></li>
        </ul>
    </div>
</div>`,
  },
  {
    id: "balloon-component",
    gumdrops: "",
    variants: [
      {
        title: "Position",
        values: [
          `gds-balloon--right`,
          `gds-balloon--left`,
          `gds-balloon--top`,
          `gds-balloon--bottom`,
        ],
      },
      {
        title: "Color (Context)",
        values: [
          `gds-balloon--primary`,
          `gds-balloon--secondary`,
          `gds-balloon--tertiary`,
          `gds-balloon--success`,
          `gds-balloon--warning`,
          `gds-balloon--danger`,
          `gds-balloon--dark`,
          `gds-balloon__label--dark`,
          `gds-balloon__label--primary`,
          `gds-balloon__label--secondary`,
          `gds-balloon__label--tertiary`,
          `gds-balloon__label--success`,
          `gds-balloon__label--warning`,
          `gds-balloon__label--danger`,
          `gds-balloon__group--primary`,
          `gds-balloon__group--secondary`,
          `gds-balloon__group--tertiary`,
          `gds-balloon__group--success`,
          `gds-balloon__group--warning`,
          `gds-balloon__group--danger`,
        ],
      },
      {
        title: "Add Ons",
        values: [
          `gds-balloon__group--divide-bottom`,
          `gds-balloon__group--divide-top`,
        ],
      },
    ],
    related: [
      {
        title: "Tooltip",
        url: "/atoms/tooltip-component",
      },
    ],

    code: `
    <div style={{height: 100}}>
    <div className="gds-balloon gds-balloon--left">
  <div className="gds-balloon__group gds-balloon__group--divide-bottom">
      <span className="gds-balloon__label gds-form-group__label">Balloon Title</span>
  </div>
  <div className="gds-balloon__group">
      <span className="gds-balloon__description">A short description goes here</span>
  </div>
</div>
</div>`,
  },
  {
    id: "button-dropdown-component",
    gumdrops: "",
    variants: [
      {
        title: "State",
        values: [
          "gds-button-dropdown__button--no-rotate",
          "gds-button-dropdown--active",
        ],
      },
      {
        title: "Context (Color)",
        values: [
          "gds-button-dropdown--secondary",
          "gds-button-dropdown--tertiary",
          "gds-button-dropdown__button--dark",
          "gds-button-dropdown__button--dark-primary",
          "gds-button-dropdown__button--dark-secondary",
          "gds-button-dropdown__button--dark-tertiary",
          "gds-button-dropdown__menu--dark",
          "gds-button-dropdown__button--no-rotate",
        ],
      },
      {
        title: "Size",
        values: [
          "gds-button-dropdown--xs",
          "gds-button-dropdown--sm",
          "gds-button-dropdown--lg",
        ],
      },
    ],
    related: [
      {
        title: "Button",
        url: "/atoms/button-component",
      },
      {
        title: "Button Group",
        url: "/atoms/button-group-component",
      },
      {
        title: "Button Toolbar",
        url: "/atoms/button-toolbar-component",
      },
    ],

    code: `()=> {
      const [isOpen, setIsOpen] = React.useState(false);
      let buttonToggle = isOpen ? "gds-button-dropdown gds-button-dropdown--active" : "gds-button-dropdown";

      return (
        <div className={buttonToggle}>
          <button onClick={()=> setIsOpen(!isOpen)} className="gds-button-dropdown__button gds-button--primary">Dropdown Menu</button>
          <ul className="gds-button-dropdown__menu">
              <li className="gds-button-dropdown__menu-item"><a className="gds-button-dropdown__menu-link">Link</a></li>
              <li className="gds-button-dropdown__divider"></li>
              <li className="gds-button-dropdown__menu-item"><a className="gds-button-dropdown__menu-link">Link</a></li>
              <li className="gds-button-dropdown__menu-item"><a className="gds-button-dropdown__menu-link">Link</a></li>
          </ul>
        </div>
      )
    }
  `,
  },
  {
    id: "button-group-component",
    gumdrops:
      "https://gumdrops.gumgum.com/?path=/story/atoms-buttongroup--default",
    variants: [
      {
        title: "Size",
        values: [
          "gds-button-group--lg",
          "gds-button-group__button--lg",
          "gds-button-group--sm",
          "gds-button-group__button--sm",
          "gds-button-group--xs",
          "gds-button-group__button--xs",
        ],
      },
      {
        title: "Display",
        values: [
          "gds-button-group--responsive",
          "gds-button-group__button--responsive",
        ],
      },
    ],
    related: [
      {
        title: "Button",
        url: "/atoms/button-component",
      },
      {
        title: "Button Dropdown",
        url: "/atoms/button-dropdown-component",
      },
      {
        title: "Button Toolbar",
        url: "/atoms/button-toolbar-component",
      },
    ],

    code: `
    <div className="gds-button-group">
    <button type="button" className="gds-button-group__button gds-button--default">Default</button>
    <button type="button" className="gds-button-group__button gds-button--primary">Primary</button>
    <button type="button" className="gds-button-group__button gds-button--success">Success</button>
    <button type="button" className="gds-button-group__button gds-button--info">Info</button>
    <button type="button" className="gds-button-group__button gds-button--warning">Warning</button>
    <button type="button" className="gds-button-group__button gds-button--danger">Danger</button>
    <button type="button" className="gds-button-group__button gds-button--link">Link</button>
</div>`,
  },
  {
    id: "button-toolbar-component",
    gumdrops: "",
    variants: [
      {
        title: "None",
        values: [],
      },
    ],
    related: [
      {
        title: "Button",
        url: "/atoms/button-component",
      },
      {
        title: "Button Dropdown",
        url: "/atoms/button-dropdown-component",
      },
    ],

    code: `
      <div className="gds-button-toolbar">
        <div className="gds-button-group gds-button-group--md">
            <button type="button" className="gds-button-group__button gds-button--default">Default</button>
            <button type="button" className="gds-button-group__button gds-button--primary">Primary</button>
            <button type="button" className="gds-button-group__button gds-button--success">Success</button>
        </div>
        <div className="gds-button-group gds-button-group--md">
            <button type="button" className="gds-button-group__button gds-button--info">Info</button>
            <button type="button" className="gds-button-group__button gds-button--warning">Warning</button>
        </div>
        <div className="gds-button-group gds-button-group--md">
            <button type="button" className="gds-button-group__button gds-button--danger">Danger</button>
        </div>
      </div>`,
  },
];

// to copy and paste for above array
// {
//   id: "",
//   gumdrops: "",
//   variants: [
//     {
//       title: "",
//       values: [],
//     },
//   ],
//   related: [
//     {
//       title: "",
//       url: "",
//     },
//   ],

//   code: ``,
// }
