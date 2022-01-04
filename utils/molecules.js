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
  {
    id: "card-component",
    gumdrops:
      "https://gumdrops.gumgum.com/?path=/story/molecules-card--default",
    variants: [
      {
        title: "Context (Color)",
        values: [
          "gds-card--white",
          "gds-card--no-shadow",
          "gds-card--underlined",
          "gds-card--underlined-secondary",
          "gds-card--xl",
          "gds-card--lg",
          "gds-card--md",
          "gds-card--sm",
          "gds-card--xs",
          "gds-card--dark",
        ],
      },
      {
        title: "Size",
        values: [
          "gds-card--xl",
          "gds-card--lg",
          "gds-card--md",
          "gds-card--sm",
          "gds-card--xs",
        ],
      },
      {
        title: "Add Ons",
        values: [
          "gds-card__block",
          "gds-card__text",
          "gds-card--no-shadow",
          "gds-card--underlined",
          "gds-card--underlined-secondary",
        ],
      },
    ],
    related: [
      {
        title: "Container",
        url: "/atoms/container-component",
      },
    ],

    code: `
    <div className="gds-card">
      <div className="gds-card__block">
          <p className="gds-card__text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>`,
  },
  {
    id: "checklist-component",
    gumdrops: "",
    variants: [
      {
        title: "Size",
        values: [
          "gds-checklist__item--sm",
          "gds-checklist__item--lg",
          "gds-checklist__item--inverse",
          "gds-checklist__item--active",
          "gds-checklist__item--completed",
        ],
      },
      {
        title: "State",
        values: [
          "gds-checklist__item--active",
          "gds-checklist__item--completed",
        ],
      },
      {
        title: "Context (Color)",
        values: [
          "gds-checklist__item--inverse",
          "gds-checklist__item--active",
          "gds-checklist__item--completed",
        ],
      },
    ],
    related: [
      {
        title: "Text",
        url: "/atoms/text-component",
      },
      {
        title: "Inputs",
        url: "/molecules/input-component",
      },
    ],

    code: `
    <ul className="gds-checklist">
      <li className="gds-checklist__item gds-checklist__item--sm gds-checklist__item--completed">
          <span className="gds-checklist__item-text">Milk</span>
      </li>
      <li className="gds-checklist__item gds-checklist__item--sm gds-checklist__item--completed">
          <span className="gds-checklist__item-text">Bread</span>
      </li>
      <li className="gds-checklist__item gds-checklist__item--sm gds-checklist__item--active">
          <span className="gds-checklist__item-text">Eggs</span>
      </li>
      <li className="gds-checklist__item gds-checklist__item--sm">
          <span className="gds-checklist__item-text">Waffles</span>
      </li>
    </ul>`,
  },
  {
    id: "chooser-component",
    gumdrops: "",
    variants: [
      {
        title: "Context (Color)",
        values: [
          "gds-chooser--secondary",
          "gds-chooser--tertiary",
          "gds-chooser__menu--secondary",
          "gds-chooser__menu--tertiary",
        ],
      },
      {
        title: "State",
        values: ["gds-chooser__console--active"],
      },
    ],
    related: [
      {
        title: "Navigation",
        url: "/molecules/nav-component",
      },
    ],

    code: `()=> {
      const [isOpen, setIsOpen] = React.useState(false);
      let classToggle = isOpen ? "gds-chooser__console gds-chooser__console--active" : "gds-chooser__console";

      return (
        <div className="gds-chooser">
          <button className="gds-chooser__button gds-chooser__button--left"><i className="btl bt-fw bt-angle-left"></i></button>
          <div className={classToggle}>
              <div onClick={()=>setIsOpen(!isOpen)} className="gds-chooser__currentItem">
                <span className="gds-chooser__item-name">This is the current Item<i className="gds-chooser__item-icon fa fa-caret-right" aria-hidden="true"></i></span>
              </div>
              <ul className="gds-chooser__menu">
                  <li className="gds-chooser__menu-item"><a className="gds-chooser__menu-link">Link</a></li>
                  <li className="gds-chooser__menu-item"><a className="gds-chooser__menu-link">Link</a></li>
                  <li className="gds-chooser__menu-item"><a className="gds-chooser__menu-link">Link</a></li>
              </ul>
          </div>
          <button className="gds-chooser__button gds-chooser__button--right"><i className="btl bt-fw bt-angle-right"></i></button>
        </div>   
      )
    }`,
  },
  {
    id: "hotkey-toggle-component",
    gumdrops: "",
    variants: [
      {
        title: "State",
        values: ["gds-hotkey-toggle--active"],
      },
      {
        title: "Context (Color)",
        values: [
          "gds-hotkey-toggle--primary",
          "gds-hotkey-toggle--secondary",
          "gds-hotkey-toggle--success",
          "gds-hotkey-toggle--warning",
          "gds-hotkey-toggle--danger",
          "gds-hotkey-toggle--info",
          "gds-hotkey-toggle--dark-primary",
          "gds-hotkey-toggle--dark-secondary",
          "gds-hotkey-toggle--dark-tertiary",
          "gds-hotkey-toggle--dark-success",
          "gds-hotkey-toggle--dark-warning",
          "gds-hotkey-toggle--dark-danger",
          "gds-hotkey-toggle--dark-info",
        ],
      },
      {
        title: "Size",
        values: [
          "gds-hotkey-toggle--block",
          "gds-hotkey-toggle--xs",
          "gds-hotkey-toggle--sm",
          "gds-hotkey-toggle--lg",
          "gds-hotkey-toggle--xl",
          "gds-hotkey-toggle__label--xs",
          "gds-hotkey-toggle__label--sm",
          "gds-hotkey-toggle__label--lg",
          "gds-hotkey-toggle__label--xl",
          "gds-hotkey-toggle__icon--xs",
          "gds-hotkey-toggle__icon--sm",
          "gds-hotkey-toggle__icon--overlay",
          "gds-hotkey-toggle__icon--overlay-xs",
          "gds-hotkey-toggle__icon--overlay-sm",
          "gds-hotkey-toggle__icon--overlay-lg",
          "gds-hotkey-toggle__icon--overlay-xl",
        ],
      },
    ],
    related: [
      {
        title: "Hotkey",
        url: "/atoms/hotkey-component",
      },
    ],

    code: `()=> {
      const [isOpen, setIsOpen] = React.useState(false);
      let classToggle = isOpen ? "gds-hotkey-toggle gds-hotkey-toggle--active" : "gds-hotkey-toggle";

      return (
          <div className={classToggle} onClick={()=>setIsOpen(!isOpen)}>
            <div className="gds-hotkey -m-r-1">E</div>
            <span className="gds-hotkey-toggle__label -m-r-4">Click Me</span>
            <i className="gds-hotkey-toggle__icon fa fa-fw fa-check"></i>
          </div>
      )
    }

    `,
  },
  {
    id: "html-preview-component",
    gumdrops: "",
    variants: [
      {
        title: "State",
        values: [
          "gds-html-preview--active",
          "gds-html-preview--disabled",
          "gds-html-preview--resize",
        ],
      },
    ],
    related: [
      {
        title: "Container",
        url: "/atoms/container-component",
      },
    ],

    code: `
    <div className="gds-html-preview">
      <iframe className="gds-html-preview__content" frameborder="0" scrolling="0"></iframe>
    </div>`,
  },
  {
    id: "input-component",
    gumdrops:
      "https://gumdrops.gumgum.com/?path=/story/atoms-textinput--default",
    variants: [
      {
        title: "Size",
        values: [
          "gds-form-group__text-input--xs",
          "gds-form-group__text-input--sm",
          "gds-form-group__text-input--lg",
        ],
      },
      {
        title: "Context (Color)",
        values: ["gds-form-group__text-input--dark"],
      },
      {
        title: "Display",
        values: ["gds-form-group__text-input--search"],
      },
    ],
    related: [
      {
        title: "Button",
        url: "/atoms/button-component",
      },
    ],

    code: `
    <div className="gds-form-group">
  <label className="gds-form-group__label">Example Text Input</label>
  <input
    className="gds-form-group__text-input"
    type="text"
    placeholder="Enter Text"
  />
  <small className="gds-form-group__text-help"
    >text input hint / validation error text.</small
  >
</div>`,
  },
  {
    id: "keyboard-shortcuts-component",
    gumdrops: "",
    variants: [
      {
        title: "State",
        values: ["gds-keyboard-shortcuts--shown"],
      },
    ],
    related: [
      {
        title: "Hotkey",
        url: "/atoms/hotkey-component",
      },
    ],

    code: `
    ()=> {
      const [isOpen, setIsOpen] = React.useState(false);
      let classToggle = isOpen ? "gds-keyboard-shortcuts gds-keyboard-shortcuts--shown" : "gds-keyboard-shortcuts";

      return (
        <div>
          <button onClick={()=> setIsOpen(!isOpen)} className="gds-button gds-button--outline">Toggle Keyboard Shortcuts</button>
          <div className={classToggle}>
            <label className="gds-keyboard-shortcuts__label">Keyboard Shortcuts</label>
            <ul className="-block">
              <li className="-block">
                <span className="gds-keyboard-shortcuts__trigger">a</span>Main Menu
              </li>
              <li className="-block">
                <span className="gds-keyboard-shortcuts__trigger">s</span>Search
              </li>
            </ul>
            <button
            onClick={()=> setIsOpen(!isOpen)}
              className="gds-button gds-button--xs gds-button--block gds-button--primary -m-t-1"
            >
              Got it, don't show again
            </button>
          </div>
        </div>
      )
    }
    `,
  },
  {
    id: "landing-pad-component",
    gumdrops: "",
    variants: [
      {
        title: "Status",
        values: ["gds-landing-pad--active", "gds-landing-pad__status"],
      },
      {
        title: "Context (Color)",
        values: [
          "gds-landing-pad__status--success",
          "gds-landing-pad__status--danger",
        ],
      },
    ],
    related: [
      {
        title: "Input",
        url: "/molecules/input-component",
      },
      {
        title: "HTML Preview",
        url: "/molecules/html-preview-component",
      },
    ],

    code: `
    <div className="gds-landing-pad">
      <input className="gds-landing-pad__input" type="file" />
      <div className="gds-landing-pad__icon">
        <div
          className="gds-landing-pad__icon-piece gds-landing-pad__icon-piece--1"
        ></div>
        <div
          className="gds-landing-pad__icon-piece gds-landing-pad__icon-piece--2"
        ></div>
        <div
          className="gds-landing-pad__icon-piece gds-landing-pad__icon-piece--3"
        ></div>
        <div
          className="gds-landing-pad__icon-piece gds-landing-pad__icon-piece--4"
        ></div>
        <div
          className="gds-landing-pad__icon-piece gds-landing-pad__icon-piece--5"
        ></div>
        <div
          className="gds-landing-pad__icon-piece gds-landing-pad__icon-piece--6"
        ></div>
      </div>
      <p className="gds-landing-pad__text">Click or Drag Logo Here</p>
    </div>`,
  },
  {
    id: "legend-component",
    gumdrops: "",
    variants: [
      {
        title: "Display",
        values: [
          "gds-legend--overlay",
          "gds-legend--overlay-center",
          "gds-legend__items--stacked",
          "gds-legend__item--stacked",
          "gds-legend__swatch--tip",
          "gds-legend__swatch--square",
        ],
      },
      {
        title: "Size",
        values: [
          "gds-legend__value--xs",
          "gds-legend__value--sm",
          "gds-legend__value--md",
          "gds-legend__value--lg",
          "gds-legend__value--xl",
        ],
      },
      {
        title: "Context (Color) [set by data attr]",
        values: [
          "data-gds-color=red",
          "data-gds-color=red-dk-1",
          "data-gds-color=red-dk-2",
          "data-gds-color=red-dk-3",
          "data-gds-color=red-dk-4",
          "data-gds-color=red-lt-1",
          "data-gds-color=red-lt-2",
          "data-gds-color=red-lt-3",
          "data-gds-color=red-lt-4",
          "data-gds-color=green",
          "data-gds-color=green-dk-1",
          "data-gds-color=green-dk-2",
          "data-gds-color=green-dk-3",
          "data-gds-color=green-dk-4",
          "data-gds-color=green-lt-1",
          "data-gds-color=green-lt-2",
          "data-gds-color=green-lt-3",
          "data-gds-color=green-lt-4",
          "data-gds-color=blue",
          "data-gds-color=blue-dk-1",
          "data-gds-color=blue-dk-2",
          "data-gds-color=blue-dk-3",
          "data-gds-color=blue-dk-4",
          "data-gds-color=blue-lt-1",
          "data-gds-color=blue-lt-2",
          "data-gds-color=blue-lt-3",
          "data-gds-color=blue-lt-4",
          "data-gds-color=gold",
          "data-gds-color=gold-dk-1",
          "data-gds-color=gold-dk-2",
          "data-gds-color=gold-dk-3",
          "data-gds-color=gold-dk-4",
          "data-gds-color=gold-lt-1",
          "data-gds-color=gold-lt-2",
          "data-gds-color=gold-lt-3",
          "data-gds-color=gold-lt-4",
          "data-gds-color=purple",
          "data-gds-color=purple-dk-1",
          "data-gds-color=purple-dk-2",
          "data-gds-color=purple-dk-3",
          "data-gds-color=purple-dk-4",
          "data-gds-color=purple-lt-1",
          "data-gds-color=purple-lt-2",
          "data-gds-color=purple-lt-3",
          "data-gds-color=purple-lt-4",
          "data-gds-color=dkgreen",
          "data-gds-color=dkgreen-dk-1",
          "data-gds-color=dkgreen-dk-2",
          "data-gds-color=dkgreen-dk-3",
          "data-gds-color=dkgreen-dk-4",
          "data-gds-color=dkgreen-lt-1",
          "data-gds-color=dkgreen-lt-2",
          "data-gds-color=dkgreen-lt-3",
          "data-gds-color=dkgreen-lt-4",
          "data-gds-color=orange",
          "data-gds-color=orange-dk-1",
          "data-gds-color=orange-dk-2",
          "data-gds-color=orange-dk-3",
          "data-gds-color=orange-dk-4",
          "data-gds-color=orange-lt-1",
          "data-gds-color=orange-lt-2",
          "data-gds-color=orange-lt-3",
          "data-gds-color=orange-lt-4",
        ],
      },
    ],
    related: [
      {
        title: "Badge",
        url: "/atoms/badge-component",
      },
    ],

    code: `
    <div className="gds-legend">
      <ul className="gds-legend__items">
        <li className="gds-legend__item">
          <span className="gds-legend__swatch" data-gds-color="red"></span>
          <span className="gds-legend__label">Label</span>
        </li>
        <li className="gds-legend__item">
          <span className="gds-legend__swatch" data-gds-color="green"></span>
          <span className="gds-legend__label">Label</span>
        </li>
        <li className="gds-legend__item">
          <span className="gds-legend__swatch" data-gds-color="blue"></span>
          <span className="gds-legend__label">Label</span>
        </li>
        <li className="gds-legend__item">
          <span className="gds-legend__swatch" data-gds-color="gold"></span>
          <span className="gds-legend__label">Label</span>
        </li>
      </ul>
    </div>
    `,
  },
  {
    id: "modal-component",
    gumdrops:
      "https://gumdrops.gumgum.com/?path=/story/molecules-modal--default",
    variants: [
      {
        title: "State",
        values: ["gds-modal--shown"],
      },
      {
        title: "Size",
        values: ["gds-modal__header--sm"],
      },
      {
        title: "Add Ons",
        values: [
          "gds-modal__title",
          "gds-modal__header",
          "gds-modal__close-button",
          "gds-modal__body",
          "gds-modal__footer",
          "gds-modal__overlay",
          "gds-modal__form",
        ],
      },
      {
        title: "Context (Color)",
        values: [
          "gds-modal--dark",
          "gds-modal__header--dark",
          "gds-modal__footer--dark",
          "gds-modal__header--secondary",
          "gds-modal__close-button--secondary",
          "gds-modal__footer--secondary",
          "gds-modal__header--quaternary",
          "gds-modal__close-button--quaternary",
          "gds-modal__footer--quaternary",
        ],
      },
    ],
    related: [
      {
        title: "Container",
        url: "/atoms/container-component",
      },
      {
        title: "Card",
        url: "/molecules/card-component",
      },
    ],

    code: `
    () => {
      const [isOpen, setIsOpen] = React.useState(false);
      let classToggle = isOpen ? "gds-modal__overlay gds-modal--shown" : "gds-modal__overlay";
      return (
        <div>
          <button className="gds-button gds-button--outline" onClick={()=> setIsOpen(!isOpen)}>Open Modal</button>
          <div className={classToggle}>
            <div className="gds-modal gds-layout__column--md-12">
              <form className="gds-modal__form">
                <div className="gds-modal__header">
                  <h2 className="gds-modal__title gds-text--header-sm">
                    Modal title goes here...
                  </h2>
                  <button
                    className="gds-modal__close-button"
                    onClick={()=> setIsOpen(!isOpen)}
                  ></button>
                </div>
                <div className="gds-modal__body">
                  <p className="-m-b-3">Modal body content goes here.</p>
                </div>
                <div className="gds-modal__footer -text-right">
                  <button
                    onClick={()=> setIsOpen(!isOpen)}
                    className="gds-button gds-button--default gds-button--block-sm -m-b-3-sm -m-r-3"
                  >
                    Cancel</button
                  ><button
                    onClick={()=> setIsOpen(!isOpen)}
                    className="gds-button gds-button--primary gds-button--block-sm"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )
    }
    `,
  },
  {
    id: "multiselect-component",
    gumdrops:
      "https://gumdrops.gumgum.com/?path=/story/molecules-multiselect--default",
    variants: [
      { title: "State", values: ["gds-button-dropdown--active "] },
      {
        title: "Size",
        values: [
          "gds-multi-select--xs",
          "gds-multi-select--sm",
          "gds-multi-select__button--xs",
          "gds-multi-select__button--sm",
        ],
      },
      {
        title: "Context (Color)",
        values: [
          "gds-multi-select--success",
          "gds-multi-select--warning",
          "gds-multi-select--danger",
        ],
      },
    ],
    related: [
      {
        title: "Input",
        url: "/molecules/input-component",
      },
    ],

    code: `
    ()=>{
      const [isOpen, setIsOpen] = React.useState(false);
      let classToggle = isOpen ? "gds-multi-select gds-button-dropdown--active" : "gds-multi-select";
      return (
        <div className={classToggle}>
          <button className="gds-multi-select__button" onClick={()=> setIsOpen(!isOpen)}>
            Multi-select
          </button>
          <ul className="gds-multi-select__menu">
            <li className="gds-multi-select__menu-item">
              <div className="gds-multi-select__menu-link">
                <div className="gds-form-group gds-multi-select__option">
                  <div className="gds-form-group__checkbox">
                    <label className="gds-form-group__checkbox-label">
                      <input
                        className="gds-form-group__checkbox-input"
                        type="checkbox"
                        value=""
                      />
                      <span className="gds-form-group__checkbox-indicator"></span>Check
                      All
                    </label>
                  </div>
                </div>
              </div>
            </li>
            <li className="gds-button-dropdown__divider"></li>
            <li className="gds-multi-select__menu-item">
              <div
                className="gds-multi-select__menu-link gds-multi-select__menu-link--collapsable"
                data-gds-nested-dropdown
              >
                <div
                  className="gds-form-group gds-multi-select__option"
                  data-gds-form-group
                >
                  <div className="gds-form-group__checkbox">
                    <label className="gds-form-group__checkbox-label">
                      <input
                        className="gds-form-group__checkbox-input"
                        type="checkbox"
                        value=""
                      />
                      <span className="gds-form-group__checkbox-indicator"></span
                      >Checkbox Option
                    </label>
                  </div>
                </div>
                <div className="gds-multi-select__sub-menu" data-gds-nested-menu>
                  <div className="gds-multi-select__menu-link">
                    <div
                      className="gds-form-group gds-multi-select__option"
                      data-gds-form-group
                    >
                      <div className="gds-form-group__checkbox">
                        <label
                          className="gds-form-group__checkbox-label"
                        
                        >
                          <input
                            className="gds-form-group__checkbox-input"
                            type="checkbox"
                            value=""
                          />
                          <span className="gds-form-group__checkbox-indicator"></span
                          >Sub-Menu Checkbox Option
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="gds-multi-select__menu-link">
                    <div
                      className="gds-form-group gds-multi-select__option"
                      data-gds-form-group
                    >
                      <div className="gds-form-group__checkbox">
                        <label
                          className="gds-form-group__checkbox-label"
                        
                        >
                          <input
                            className="gds-form-group__checkbox-input"
                            type="checkbox"
                            value=""
                          />
                          <span className="gds-form-group__checkbox-indicator"></span
                          >Sub-Menu Checkbox Option
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="gds-button-dropdown__divider"></li>
            <li className="gds-multi-select__menu-item">
              <div className="gds-multi-select__menu-link">
                <div
                  className="gds-form-group gds-multi-select__option"
                  data-gds-form-group
                >
                  <div className="gds-form-group__checkbox">
                    <label className="gds-form-group__checkbox-label">
                      <input
                        className="gds-form-group__checkbox-input"
                        type="checkbox"
                        value=""
                      />
                      <span className="gds-form-group__checkbox-indicator"></span
                      >Checkbox Option
                    </label>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      )
    }
    `,
  },
  {
    id: "nav-component",
    gumdrops: "",
    variants: [
      {
        title: "Size",
        values: ["gds-nav-tabs--sm", "gds-nav-tabs--lg"],
      },
      {
        title: "Context (Color)",
        values: [
          "gds-nav-tabs--underline-primary",
          "gds-nav-tabs--underline-secondary",
        ],
      },
    ],
    related: [
      {
        title: "Link",
        url: "/atoms/link-component",
      },
    ],

    code: `
    <div>
      <nav>
        <ul className="gds-nav-tabs">
          <li
            className="gds-nav-tabs__list-item gds-nav-tabs__list-item--active">
            <a className="gds-nav-tabs__link">One</a>
          </li>
          <li className="gds-nav-tabs__list-item">
            <a className="gds-nav-tabs__link">Two</a>
          </li>
          <li className="gds-nav-tabs__list-item">
            <a className="gds-nav-tabs__link">Three</a>
          </li>
          <li
            className="gds-nav-tabs__list-item gds-nav-tabs__list-item--disabled"
          
          >
            <a className="gds-nav-tabs__link">Disabled</a>
          </li>
        </ul>
      </nav>
      <section>
        <div className="-block">
          Tab one content goes here.
        </div>
        <div className="-none">
          Tab two content goes here.
        </div>
        <div className="-none">
          Tab three content goes here.
        </div>
        <div className="-none">
          Tab four content goes here.
        </div>
      </section>
      Justified Tabs
      For justified tabs, use gds-nav-tabs--justified.

      <nav>
        <ul className="gds-nav-tabs gds-nav-tabs--justified">
          <li
            className="gds-nav-tabs__list-item gds-nav-tabs__list-item--active">
            <a
              className="gds-nav-tabs__link">One</a>
          </li>
          <li className="gds-nav-tabs__list-item">
            <a className="gds-nav-tabs__link">Two</a>
          </li>
          <li className="gds-nav-tabs__list-item">
            <a className="gds-nav-tabs__link">Three</a>
          </li>
          <li
            className="gds-nav-tabs__list-item gds-nav-tabs__list-item--disabled"
          
          >
            <a className="gds-nav-tabs__link">Disabled</a>
          </li>
        </ul>
      </nav>
      <section>
        <div className="-block">
          Tab one content goes here.
        </div>
        <div className="-none">
          Tab two content goes here.
        </div>
        <div className="-none">
          Tab three content goes here.
        </div>
        <div className="-none">
          Tab four content goes here.
        </div>
      </section>
      Pills
      For pill nav, use gds-nav-pills.
      
      <nav>
        <ul className="gds-nav-pills">
          <li
            className="gds-nav-pills__list-item gds-nav-pills__list-item--active"
            data-gds-nav-item
          >
            <a
              className="gds-nav-pills__link"
              data-gds-nav-button="1"
              data-gds-nav-type="pill"
              >One</a
            >
          </li>

          <li className="gds-nav-pills__list-item" data-gds-nav-item>
            <a
              className="gds-nav-pills__link"
              data-gds-nav-button="2"
              data-gds-nav-type="pill"
              >Two</a
            >
          </li>

          <li className="gds-nav-pills__list-item" data-gds-nav-item>
            <a
              className="gds-nav-pills__link"
              data-gds-nav-button="3"
              data-gds-nav-type="pill"
              >Three</a
            >
          </li>

          <li
            className="gds-nav-pills__list-item gds-nav-pills__list-item--disabled"
            data-gds-nav-item
          >
            <a
              className="gds-nav-pills__link"
              data-gds-nav-button="4"
              data-gds-nav-type="pill"
              >Disabled</a
            >
          </li>
        </ul>
      </nav>
      <section data-gds-nav-contents="4">
        <div className="-block" data-gds-nav-content="1">
          Tab one content goes here.
        </div>
        <div className="-none" data-gds-nav-content="2">
          Tab two content goes here.
        </div>
        <div className="-none" data-gds-nav-content="3">
          Tab three content goes here.
        </div>
        <div className="-none" data-gds-nav-content="4">
          Tab four content goes here.
        </div>
      </section>
      Underline
      For alternate, underlined tabs, use gds-nav-tabs--underline.
      
      <nav>
        <ul className="gds-nav-tabs gds-nav-tabs--underline" data-gds-nav="2">
          <li
            className="gds-nav-tabs__list-item gds-nav-tabs__list-item--underline gds-nav-tabs__list-item--active"
            data-gds-nav-item
          >
            <a
              className="gds-nav-tabs__link gds-nav-tabs--underline__link"
              data-gds-nav-button="1"
              data-gds-nav-type="tab"
              >One</a
            >
          </li>

          <li
            className="gds-nav-tabs__list-item gds-nav-tabs__list-item--underline"
            data-gds-nav-item
          >
            <a
              className="gds-nav-tabs__link gds-nav-tabs__link--underline"
              data-gds-nav-button="2"
              data-gds-nav-type="tab"
              >Two</a
            >
          </li>

          <li
            className="gds-nav-tabs__list-item gds-nav-tabs__list-item--underline"
            data-gds-nav-item
          >
            <a
              className="gds-nav-tabs__link gds-nav-tabs__link--underline"
              data-gds-nav-button="3"
              data-gds-nav-type="tab"
              >Three</a
            >
          </li>

          <li
            className="gds-nav-tabs__list-item gds-nav-tabs__list-item--underline gds-nav-tabs__list-item--disabled"
            data-gds-nav-item
          >
            <a
              className="gds-nav-tabs__link gds-nav-tabs__link--underline"
              data-gds-nav-button="4"
              data-gds-nav-type="tab"
              >Disabled</a
            >
          </li>
        </ul>
      </nav>
      <section data-gds-nav-contents="2">
        <div className="-block" data-gds-nav-content="1">
          Tab one content goes here.
        </div>
        <div className="-none" data-gds-nav-content="2">
          Tab two content goes here.
        </div>
        <div className="-none" data-gds-nav-content="3">
          Tab three content goes here.
        </div>
        <div className="-none" data-gds-nav-content="4">
          Tab four content goes here.
        </div>
      </section>
    </div>
    
    `,
  },
  {
    id: "pagination-component",
    gumdrops:
      "https://gumdrops.gumgum.com/?path=/story/molecules-pagination--default",
    variants: [
      {
        title: "State",
        values: ["gds-pagination__page-item--active"],
      },
      {
        title: "Size",
        values: [
          "gds-pagination--xs",
          "gds-pagination--sm",
          "gds-pagination--lg",
          "gds-pagination--xl",
        ],
      },
      {
        title: "Display",
        values: ["gds-pagination--fixed", "gds-pagination__page-item--fixed"],
      },
      {
        title: "Add Ons",
        values: ["gds-pagination--mobile-arrows"],
      },
    ],
    related: [
      {
        title: "Link",
        url: "/atoms/link-component",
      },
    ],

    code: `
    <nav>
      <ul
        className="gds-pagination gds-pagination--mobile-arrows gds-pagination--fixed"
      >
        <li className="gds-pagination__page-item gds-pagination__page-item--fixed">
          <a
            className="gds-pagination__page-link gds-pagination__page-link--fixed"
            data-page-change="prev"
            ><span className="-vis-hidden">&laquo;</span
            ><span className="-sr-only">Previous</span></a
          >
        </li>
        <li
          className="gds-pagination__page-item gds-pagination__page-item--fixed gds-pagination__page-item--active"
        >
          <a className="gds-pagination__page-link gds-pagination__page-link--fixed"
            >1</a
          >
        </li>
        <li className="gds-pagination__page-item gds-pagination__page-item--fixed">
          <a className="gds-pagination__page-link gds-pagination__page-link--fixed"
            >2</a
          >
        </li>
        <li className="gds-pagination__page-item gds-pagination__page-item--fixed">
          <a className="gds-pagination__page-link gds-pagination__page-link--fixed"
            >3</a
          >
        </li>
        <li className="gds-pagination__page-item gds-pagination__page-item--fixed">
          <a
            className="gds-pagination__page-link gds-pagination__page-link--fixed"
            data-page-change="next"
            ><span className="-vis-hidden" aria-hidden="true">&raquo;</span
            ><span className="-sr-only">Next</span></a
          >
        </li>
        <span className="gds-pagination__page-indicator"></span>
      </ul>
    </nav>`,
  },
  {
    id: "radio-block-component",
    gumdrops: "",
    variants: [
      {
        title: "Optional Classes",
        values: [
          "gds-radio-block--dark",
          "gds-radio-block__button--secondary",
          "gds-radio-block__button--tertiary",
          "gds-radio-block__button--quaternary",
          "gds-radio-block__button--sm",
          "gds-radio-block__button--lg",
          "gds-radio-block__button--active",
          "gds-radio-block__button--no-pad",
        ],
      },
    ],
    related: [
      {
        title: "",
        url: "",
      },
    ],

    code: `
    <div className="gds-radio-block">
      <button className="gds-radio-block__button">
        <span className="gds-radio-block__button-text">Background</span>
      </button>
      <button className="gds-radio-block__button gds-radio-block__button--active">
        <span className="gds-radio-block__button-text">Foreground</span>
      </button>
    </div>
    `,
  },
  {
    id: "ranker-ensign-component",
    gumdrops: "",
    variants: [
      {
        title: "Optional Classes",
        values: [
          "gds-ranker-ensign--secondary",
          "gds-ranker-ensign--tertiary",
          "gds-ranker-ensign--xs",
          "gds-ranker-ensign--sm",
          "gds-ranker-ensign--lg",
          "gds-ranker-ensign--xl",
          "gds-ranker-ensign__thumbnail--secondary",
          "gds-ranker-ensign__thumbnail--tertiary",
          "gds-ranker-ensign__thumbnail--xs",
          "gds-ranker-ensign__thumbnail--sm",
          "gds-ranker-ensign__thumbnail--lg",
          "gds-ranker-ensign__thumbnail--xl",
          "gds-ranker-ensign__label--xs",
          "gds-ranker-ensign__label--sm",
          "gds-ranker-ensign__label--lg",
          "gds-ranker-ensign__label--xl",
          "gds-ranker-ensign__title--secondary",
          "gds-ranker-ensign__title--tertiary",
          "gds-ranker-ensign__title--xs",
          "gds-ranker-ensign__title--sm",
          "gds-ranker-ensign__title--lg",
          "gds-ranker-ensign__title--xl",
          "gds-ranker-ensign__number--sup",
        ],
      },
    ],
    related: [
      {
        title: "",
        url: "",
      },
    ],

    code: `
    <div className="gds-ranker-ensign">
      <img
        className="gds-ranker-ensign__thumbnail"
        src="https://assets.ggops.com/images/ken.png"
      />
      <div className="gds-ranker-ensign__content">
        <span className="gds-ranker-ensign__label">Golden State</span>
        <span className="gds-ranker-ensign__title">Warriors</span>
      </div>
      <span className="gds-ranker-ensign__number"
        >15 <sup className="gds-ranker-ensign__number--sup">th</sup></span
      >
    </div>
    `,
  },
  {
    id: "search-select-component",
    gumdrops:
      "https://gumdrops.gumgum.com/?path=/story/molecules-searchmultiselect--default",
    variants: [
      {
        title: "Optional Classes",
        values: [
          "gds-search-select--success",
          "gds-search-select--warning",
          "gds-search-select--danger",
          "gds-search-select__input--sm",
          "gds-search-select__input--has-tag",
          "gds-search-select__input--has-help",
          "gds-search-select__input--has-tag-sm",
          "gds-search-select--open",
          "gds-search-select__tag-indicator--sm",
          "gds-search-select__tag-holder--bubble",
          "gds-search-select__tag-holder--bubble-sm",
          "gds-search-select__tag-holder--bubble-active",
          "gds-search-select__clear--sm",
        ],
      },
    ],
    related: [
      {
        title: "Input",
        url: "/molecules/input-component",
      },
    ],

    code: `
    ()=> {
      return (
        <div style={{height: 300}}>
          <form className="gds-form">
            <div className="gds-form-group" data-gds-form-group>
              <label className="gds-form-group__label" for="searcchselect-input-0"
                >Multi-Value Search Select</label
              >
              <div className="gds-search-select gds-search-select--open">
                <div
                  className="gds-search-select__control"
                  data-gds-search-select-control
                >
                  <div
                    className="gds-search-select__tag-indicator gds-search-select__tag-indicator--sm gds-tag gds-tag--xs gds-tag--primary gds-tag--with-button gds-tag--with-button-xs"
                    data-gds-tag-indicator=""
                  >
                    <span>5 Selected</span
                    ><button
                      className="gds-tag__option gds-tag__option--xs gds-tag__option--primary"
                    >
                      <i className="btl bt-fw bt-times"></i>
                    </button>
                  </div>
                  <input
                    id="searcchselect-input-0"
                    type="text"
                    placeholder="Choose a State..."
                    className="gds-search-select__input gds-search-select__input--sm gds-search-select__input--has-tag-sm"
                    data-gds-search-select-input
                    autocomplete="off"
                  />
                  <button
                    className="gds-search-select__toggle-button"
                    data-gds-search-select-toggle
                  ></button>
                  <small className="gds-search-select__text-help"
                    >This is some hint text</small
                  >
                </div>
                <div
                  className="gds-search-select__tag-holder gds-search-select__tag-holder--bubble gds-search-select__tag-holder--bubble-sm gds-search-select__tag-holder--bubble-active"
                  data-gds-search-select-tag-holder
                >
                  <div className="gds-search-select__tag-overflow">
                    <div
                      className="-m-a-1 gds-tag gds-tag--xs gds-tag--primary gds-tag--with-button gds-tag--with-button-xs"
                      data-gds-search-select-tag="null"
                    >
                      Arkansas<button
                        className="gds-tag__option gds-tag__option--xs gds-tag__option--primary"
                      >
                        <i className="btl bt-fw bt-times"></i>
                      </button>
                    </div>
                    <div
                      className="-m-a-1 gds-tag gds-tag--xs gds-tag--primary gds-tag--with-button gds-tag--with-button-xs"
                      data-gds-search-select-tag="null"
                    >
                      California<button
                        className="gds-tag__option gds-tag__option--xs gds-tag__option--primary"
                      >
                        <i className="btl bt-fw bt-times"></i>
                      </button>
                    </div>
                    <div
                      className="-m-a-1 gds-tag gds-tag--xs gds-tag--primary gds-tag--with-button gds-tag--with-button-xs"
                      data-gds-search-select-tag="null"
                    >
                      Mississippi<button
                        className="gds-tag__option gds-tag__option--xs gds-tag__option--primary"
                      >
                        <i className="btl bt-fw bt-times"></i>
                      </button>
                    </div>
                    <div
                      className="-m-a-1 gds-tag gds-tag--xs gds-tag--primary gds-tag--with-button gds-tag--with-button-xs"
                      data-gds-search-select-tag="null"
                    >
                      Montana<button
                        className="gds-tag__option gds-tag__option--xs gds-tag__option--primary"
                      >
                        <i className="btl bt-fw bt-times"></i>
                      </button>
                    </div>
                    <div
                      className="-m-a-1 gds-tag gds-tag--xs gds-tag--primary gds-tag--with-button gds-tag--with-button-xs"
                      data-gds-search-select-tag="null"
                    >
                      Wyoming<button
                        className="gds-tag__option gds-tag__option--xs gds-tag__option--primary"
                      >
                        <i className="btl bt-fw bt-times"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="gds-search-select__menu" data-gds-search-select-menu>
                  <ul
                    className="gds-search-select__menu-items"
                    data-gds-search-select-list
                  >
                    <li
                      className="gds-search-select__menu-item"
                      data-gds-search-select-item="0"
                    >
                      Alaska
                    </li>
                    <li
                      className="gds-search-select__menu-item"
                      data-gds-search-select-item="14"
                    >
                      Iowa
                    </li>
                    <li
                      className="gds-search-select__menu-item"
                      data-gds-search-select-item="15"
                    >
                      Kansas
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </form>
        </div> 
      )
    }
    `,
  },
  {
    id: "slab-nav-component",
    gumdrops: "",
    variants: [
      {
        title: "Optional Classes",
        values: [
          "gds-slab-nav--vertical",
          "gds-slab-nav--dark",
          "gds-slab-nav__items--vertical",
          "gds-slab-nav__items--justify",
          "gds-slab-nav__item--justify",
          "gds-slab-nav__item--xs",
          "gds-slab-nav__item--sm",
          "gds-slab-nav__item--lg",
          "gds-slab-nav__item--xl",
          "gds-slab-nav__item--vertical",
          "gds-slab-nav__item--active",
          "gds-slab-nav__item--secondary",
          "gds-slab-nav__item--tertiary",
          "gds-slab-nav__item--quaternary",
          "gds-slab-nav__item-icon--xs",
          "gds-slab-nav__item-icon--sm",
          "gds-slab-nav__item-icon--lg",
          "gds-slab-nav__item-icon--xl",
          "gds-slab-nav__item-label--xs",
          "gds-slab-nav__item-label--sm",
          "gds-slab-nav__item-label--lg",
          "gds-slab-nav__item-label--xl",
        ],
      },
    ],
    related: [
      {
        title: "Navigation",
        url: "/molecules/nav-component",
      },
    ],

    code: `
    <div className="gds-card">
      <div className="gds-slab-nav">
        <ul className="gds-slab-nav__items">
          <li className="gds-slab-nav__item gds-slab-nav__item--active">
            <i
              className="gds-slab-nav__item-icon fa fa-fw fa-bullhorn"
              aria-hidden="true"
            ></i>
            <h4 className="gds-slab-nav__item-label">Nav Label</h4>
          </li>
          <li className="gds-slab-nav__item gds-slab-nav__item--secondary">
            <i
              className="gds-slab-nav__item-icon fa fa-fw fa-bullhorn"
              aria-hidden="true"
            ></i>
            <h4 className="gds-slab-nav__item-label">Nav Label</h4>
            <div className="gds-slab-nav__item-indicator">
              <span className="gds-slab-nav__item-badge">23</span>
            </div>
          </li>
          <li className="gds-slab-nav__item gds-slab-nav__item--tertiary">
            <i
              className="gds-slab-nav__item-icon fa fa-fw fa-bullhorn"
              aria-hidden="true"
            ></i>
            <h4 className="gds-slab-nav__item-label">Nav Label</h4>
          </li>
          <li className="gds-slab-nav__item gds-slab-nav__item--quaternary">
            <i
              className="gds-slab-nav__item-icon fa fa-fw fa-bullhorn"
              aria-hidden="true"
            ></i>
            <h4 className="gds-slab-nav__item-label">Nav Label</h4>
            <div className="gds-slab-nav__item-indicator">
              <i
                className="gds-slab-nav__item-warning fa fa-fw fa-exclamation-circle"
              ></i>
            </div>
          </li>
        </ul>
      </div>
      <div
        className="gds-card__block -p-v-6 gds-flex gds-flex--justify-center gds-flex--align-center"
      >
        <span className="gds-text--header-md">Content goes here</span>
      </div>
    </div>`,
  },
  {
    id: "table-component",
    gumdrops:
      "https://gumdrops.gumgum.com/?path=/story/molecules-table--default",
    variants: [
      {
        title: "Display",
        values: ["gds-table--responsive"],
      },
      {
        title: "Display",
        values: [
          "gds-table--xs",
          "gds-table--sm",
          "gds-table--lg",
          "gds-table--xl",
        ],
      },
      {
        title: "Context (Color)",
        values: [
          "gds-table__header--secondary",
          "gds-table__header--white",
          "gds-table--inverse",
          "gds-table__cell--positive",
          "gds-table__cell--neutral",
          "gds-table__cell--negative",
        ],
      },
      {
        title: "Add Ons",
        values: [
          "gds-table--striped",
          "gds-table--inverse-striped",
          "gds-table__header--selected",
          "gds-table__header--sort-desc",
          "gds-table__row--selected",
          "gds-table__row--disabled",
        ],
      },
    ],
    related: [
      {
        title: "Checklist",
        url: "/molecules/checklist-component",
      },
    ],

    code: `
    <div className="gds-table--responsive">
  <table className="gds-table">
    <thead>
      <tr className="gds-table__row">
        <th className="gds-table__header">#</th>
        <th className="gds-table__header -text-left">First Name</th>
        <th className="gds-table__header -text-left">Last Name</th>
        <th
          className="gds-table__header gds-table__header--selected -text-left"
        >
          Username (selected)
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="gds-table__row">
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr className="gds-table__row">
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr className="gds-table__row gds-table__row--selected">
        <th scope="row">3</th>
        <td>Selected Row</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
      <tr className="gds-table__row gds-table__row--disabled">
        <th scope="row">4</th>
        <td>Disabled Row</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
    </tbody>
  </table>
</div>
    
    `,
  },
  {
    id: "tree-component",
    gumdrops: "",
    variants: [
      {
        title: "State",
        values: ["gds-tree__link--active"],
      },
      {
        title: "Context (Color)",
        values: [
          "gds-tree--dark",
          "gds-tree__link--active",
          "gds-tree__link--primary",
          "gds-tree__link--secondary",
          "gds-tree__link--tertiary",
          "gds-tree__link--quaternary",
        ],
      },
    ],
    related: [
      {
        title: "Checklist",
        url: "/molecules/checklist-component",
      },
    ],

    code: `
    <ul>
      <li>
        <span
          className="gds-tree__link gds-tree__link--active gds-tree__link--secondary"
        >
          Golden State Warriors<i
            className="gds-tree__status-icon fa fa-fw fa-caret-left"
          ></i>
        </span>
        <ul className="gds-tree__sub-nav">
          <li className="gds-tree__sub-item">
            <span
              className="gds-tree__link gds-tree__link--active gds-tree__link--tertiary gds-tree__link--btn-options"
            >
              Nike<i className="gds-tree__status-icon fa fa-fw fa-caret-left"></i>
              <button className="gds-tree__link-option">
                <i className="fa fa-fw fa-trash"></i>
              </button>
            </span>
            <ul className="gds-tree__sub-nav">
              <li className="gds-tree__sub-item">
                <span
                  className="gds-tree__link gds-tree__link--active gds-tree__link--primary"
                >
                  Scoreboard LED<i
                    className="gds-tree__status-icon fa fa-fw fa-caret-left"
                  ></i>
                  <button className="gds-tree__link-option">
                    <i className="fa fa-fw fa-trash"></i>
                  </button>
                </span>
              </li>
              <li className="gds-tree__sub-item">
                <span className="gds-tree__link gds-tree__link--primary">
                  Basket Stanchion<i
                    className="gds-tree__status-icon fa fa-fw fa-check -m-l-1"
                  ></i>
                  <button className="gds-tree__link-option">
                    <i className="fa fa-fw fa-trash"></i>
                  </button>
                </span>
              </li>
              <li className="gds-tree__sub-item">
                <span className="gds-tree__link gds-tree__link--primary">
                  Arena LED<i
                    className="gds-tree__status-icon fa fa-fw fa-check -m-l-1"
                  ></i>
                  <button className="gds-tree__link-option">
                    <i className="fa fa-fw fa-trash"></i>
                  </button>
                </span>
              </li>
            </ul>
          </li>
          <li className="gds-tree__sub-item">
            <span className="gds-tree__link gds-tree__link--tertiary">
              Kia<i className="gds-tree__status-icon fa fa-check -m-l-1"></i>
            </span>
            <ul className="gds-tree__sub-nav">
              <li className="gds-tree__sub-item">
                <span className="gds-tree__link gds-tree__link--primary">
                  Scoreboard LED<i
                    className="gds-tree__status-icon fa fa-check -m-l-1"
                  ></i>
                </span>
              </li>
              <li className="gds-tree__sub-item">
                <span className="gds-tree__link gds-tree__link--primary">
                  Basket Stanchion<i
                    className="gds-tree__status-icon fa fa-check -m-l-1"
                  ></i>
                </span>
              </li>
              <li className="gds-tree__sub-item">
                <span className="gds-tree__link gds-tree__link--primary">
                  Arena LED<i
                    className="gds-tree__status-icon fa fa-check -m-l-1"
                  ></i>
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    
    `,
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
