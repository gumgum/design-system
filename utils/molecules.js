export const getMoleculesData = id => {
    let obj = Molecules.find(item => item.id === id);
    return obj;
};

const Molecules = [
    {
        id: 'accordion-component',
        gumdrops: 'https://gumdrops.gumgum.com/?path=/story/molecules-accordion--default',
        variants: [
            {
                title: 'State',
                values: ['gds-accordion__item--active'],
            },
            {
                title: 'Size',
                values: [
                    'gds-accordion__item-title--sm',
                    'gds-accordion__child-item-title--sm',
                    'gds-accordion__item-icon--sm',
                ],
            },
            {
                title: 'Context (Color)',
                values: [
                    'gds-accordion--white',
                    'gds-accordion__item-title--primary',
                    'gds-accordion--dark',
                    'gds-accordion__item--dark',
                    'gds-accordion__child-item--dark',
                    'gds-accordion__child-items--dark',
                    'gds-accordion__item--primary',
                    'gds-accordion__item--secondary',
                    'gds-accordion__item--tertiary',
                    'gds-accordion__item--quaternary',
                    'gds-accordion__item-title--primary',
                    'gds-accordion__item-title--secondary',
                    'gds-accordion__item-title--tertiary',
                    'gds-accordion__item-title--quaternary',
                ],
            },
        ],
        related: [
            {
                title: 'Divider',
                url: '/atoms/divider-component',
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
        id: 'avatar-component',
        gumdrops: 'https://gumdrops.gumgum.com/?path=/story/molecules-avatar--default',
        variants: [
            {
                title: 'State',
                values: ['gds-bubble__menu--menu-open', 'gds-avatar__image--active'],
            },
            {
                title: 'Color (Context)',
                values: [
                    'gds-avatar__image--dark',
                    'gds-avatar__menu--dark',
                    'gds-avatar__menu-list--dark',
                    'gds-avatar__menu-list-link--dark',
                    'gds-avatar__menu-list-divider--dark',
                    'gds-avatar__menu-list-item--dark',
                ],
            },
        ],
        related: [
            {
                title: 'Circle Button',
                url: '/atoms/circular-button-component',
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
        id: 'bubble-component',
        gumdrops: '',
        variants: [
            {
                title: 'Display',
                values: [
                    'gds-bubble__menu--offset-xs',
                    'gds-bubble__menu--offset-sm',
                    'gds-bubble__menu--offset-md',
                    'gds-bubble__menu--offset-lg',
                    'gds-bubble__menu--offset-xl',
                    'gds-bubble__menu--menu-open',
                ],
            },
            {
                title: 'Context (Color)',
                values: [
                    'gds-bubble__menu--dark',
                    'gds-bubble__menu-list-item--dark',
                    'gds-bubble__menu-list-link--dark',
                    'gds-bubble__menu-list--dark',
                    'gds-bubble__menu-list-divider--dark',
                ],
            },
        ],
        related: [
            {
                title: 'Balloon',
                url: '/molecules/balloon-component',
            },
        ],

        code: `
  <div className="gds-flex gds-flex--justify-end">  
    <div className="gds-bubble -m-b-6">
      <div
        className="gds-button gds-button--outline gds-button--xs"
      >
        <i className="fa fa-fw fa-ellipsis-h" aria-hidden="true"></i>
      </div>
      <div
        className="gds-bubble__menu gds-bubble__menu gds-bubble__menu--menu-open  gds-bubble__menu--offset-sm">
        <ul className="gds-bubble__menu-list" data-gds-bubble-menu="example">
          <li className="gds-bubble__menu-list-item -ellipsis">
            <a className="gds-bubble__menu-list-link" href="#">Alert 1</a>
          </li>
          <li className="gds-bubble__menu-list-item -ellipsis">
            <a className="gds-bubble__menu-list-link" href="#">Alert 2</a>
          </li>
          <li className="gds-bubble__menu-list-divider"></li>
          <li className="gds-bubble__menu-list-item -ellipsis">
            <a className="gds-bubble__menu-list-link" href="#">Clear Alerts</a>
          </li>
        </ul>
      </div>
    </div>
  </div>`,
    },
    {
        id: 'balloon-component',
        gumdrops: '',
        variants: [
            {
                title: 'Position',
                values: [
                    `gds-balloon--right`,
                    `gds-balloon--left`,
                    `gds-balloon--top`,
                    `gds-balloon--bottom`,
                ],
            },
            {
                title: 'Color (Context)',
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
                title: 'Add Ons',
                values: [`gds-balloon__group--divide-bottom`, `gds-balloon__group--divide-top`],
            },
        ],
        related: [
            {
                title: 'Tooltip',
                url: '/atoms/tooltip-component',
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
        id: 'button-dropdown-component',
        gumdrops: '',
        variants: [
            {
                title: 'State',
                values: ['gds-button-dropdown__button--no-rotate', 'gds-button-dropdown--active'],
            },
            {
                title: 'Context (Color)',
                values: [
                    'gds-button-dropdown--secondary',
                    'gds-button-dropdown--tertiary',
                    'gds-button-dropdown__button--dark',
                    'gds-button-dropdown__button--dark-primary',
                    'gds-button-dropdown__button--dark-secondary',
                    'gds-button-dropdown__button--dark-tertiary',
                    'gds-button-dropdown__menu--dark',
                    'gds-button-dropdown__button--no-rotate',
                ],
            },
            {
                title: 'Size',
                values: [
                    'gds-button-dropdown--xs',
                    'gds-button-dropdown--sm',
                    'gds-button-dropdown--lg',
                ],
            },
        ],
        related: [
            {
                title: 'Button',
                url: '/atoms/button-component',
            },
            {
                title: 'Button Group',
                url: '/atoms/button-group-component',
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
        id: 'button-group-component',
        gumdrops: 'https://gumdrops.gumgum.com/?path=/story/atoms-buttongroup--default',
        variants: [
            {
                title: 'Size',
                values: [
                    'gds-button-group--lg',
                    'gds-button-group__button--lg',
                    'gds-button-group--sm',
                    'gds-button-group__button--sm',
                    'gds-button-group--xs',
                    'gds-button-group__button--xs',
                ],
            },
            {
                title: 'Display',
                values: ['gds-button-group--responsive', 'gds-button-group__button--responsive'],
            },
        ],
        related: [
            {
                title: 'Button',
                url: '/atoms/button-component',
            },
            {
                title: 'Button Dropdown',
                url: '/atoms/button-dropdown-component',
            },
            {
                title: 'Button Toolbar',
                url: '/atoms/button-toolbar-component',
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
        id: 'card-component',
        gumdrops: 'https://gumdrops.gumgum.com/?path=/story/molecules-card--default',
        variants: [
            {
                title: 'Context (Color)',
                values: [
                    'gds-card--white',
                    'gds-card--no-shadow',
                    'gds-card--underlined',
                    'gds-card--underlined-secondary',
                    'gds-card--xl',
                    'gds-card--lg',
                    'gds-card--md',
                    'gds-card--sm',
                    'gds-card--xs',
                    'gds-card--dark',
                ],
            },
            {
                title: 'Size',
                values: [
                    'gds-card--xl',
                    'gds-card--lg',
                    'gds-card--md',
                    'gds-card--sm',
                    'gds-card--xs',
                ],
            },
            {
                title: 'Add Ons',
                values: [
                    'gds-card--no-top',
                    'gds-card__block',
                    'gds-card__text',
                    'gds-card--no-shadow',
                    'gds-card--underlined',
                    'gds-card--underlined-secondary',
                ],
            },
        ],
        related: [
            {
                title: 'Container',
                url: '/atoms/container-component',
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
        id: 'html-preview-component',
        gumdrops: '',
        variants: [
            {
                title: 'State',
                values: [
                    'gds-html-preview--active',
                    'gds-html-preview--disabled',
                    'gds-html-preview--resize',
                ],
            },
        ],
        related: [
            {
                title: 'Container',
                url: '/atoms/container-component',
            },
        ],

        code: `
    <div className="gds-html-preview">
      <iframe className="gds-html-preview__content" frameborder="0" scrolling="0"></iframe>
    </div>`,
    },
    {
        id: 'checkbox-component',
        gumdrops: 'https://gumdrops.gumgum.com/?path=/story/molecules-toggle--default',
        variants: [
            {
                title: 'Size',
                values: ['gds-form-group__checkbox--xs', 'gds-form-group__checkbox--sm'],
            },
            {
                title: 'State',
                values: ['gds-form-group--disabled'],
            },
            {
                title: 'Context (Color)',
                values: [
                    'gds-form-group__checkbox-label--dark',
                    'gds-form-group--success',
                    'gds-form-group--warning',
                    'gds-form-group--danger',
                ],
            },
            {
                title: 'Position',
                values: ['gds-form-group__checkbox--inline'],
            },
        ],
        related: [
            {
                title: 'Inputs',
                url: '/molecules/input-component',
            },
        ],
        code: `
    <div className="gds-form-group">
      <div className="gds-form-group__checkbox">
          <label className="gds-form-group__checkbox-label">
              <input className="gds-form-group__checkbox-input" type="checkbox" />
              <span className="gds-form-group__checkbox-indicator"></span>Checkbox Option
          </label>
      </div>
    </div>
`,
    },
    {
        id: 'input-component',
        gumdrops: 'https://gumdrops.gumgum.com/?path=/story/atoms-textinput--default',
        variants: [
            {
                title: 'Size',
                values: [
                    'gds-form-group__text-input--xs',
                    'gds-form-group__text-input--sm',
                    'gds-form-group__text-input--lg',
                ],
            },
            {
                title: 'Context (Color)',
                values: ['gds-form-group__text-input--dark'],
            },
            {
                title: 'Display',
                values: ['gds-form-group__text-input--search'],
            },
        ],
        related: [
            {
                title: 'Button',
                url: '/atoms/button-component',
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
        id: 'keyboard-shortcuts-component',
        gumdrops: '',
        variants: [
            {
                title: 'State',
                values: ['gds-keyboard-shortcuts--shown'],
            },
        ],
        related: [
            {
                title: '',
                url: '',
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
        id: 'landing-pad-component',
        gumdrops: '',
        variants: [
            {
                title: 'Status',
                values: ['gds-landing-pad--active', 'gds-landing-pad__status'],
            },
            {
                title: 'Context (Color)',
                values: ['gds-landing-pad__status--success', 'gds-landing-pad__status--danger'],
            },
        ],
        related: [
            {
                title: 'Input',
                url: '/molecules/input-component',
            },
            {
                title: 'HTML Preview',
                url: '/molecules/html-preview-component',
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
        id: 'modal-component',
        gumdrops: 'https://gumdrops.gumgum.com/?path=/story/molecules-modal--default',
        variants: [
            {
                title: 'State',
                values: ['gds-modal--shown'],
            },
            {
                title: 'Size',
                values: ['gds-modal__header--sm'],
            },
            {
                title: 'Add Ons',
                values: [
                    'gds-modal__title',
                    'gds-modal__header',
                    'gds-modal__close-button',
                    'gds-modal__body',
                    'gds-modal__footer',
                    'gds-modal__overlay',
                    'gds-modal__form',
                ],
            },
            {
                title: 'Context (Color)',
                values: [
                    'gds-modal--dark',
                    'gds-modal__header--dark',
                    'gds-modal__footer--dark',
                    'gds-modal__header--gradient',
                    'gds-modal__header--primary',
                    'gds-modal__header--secondary',
                    'gds-modal__header--tertiary',
                    'gds-modal__header--quaternary',
                ],
            },
        ],
        related: [
            {
                title: 'Container',
                url: '/atoms/container-component',
            },
            {
                title: 'Card',
                url: '/molecules/card-component',
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
        id: 'multiselect-component',
        gumdrops: 'https://gumdrops.gumgum.com/?path=/story/molecules-multiselect--default',
        variants: [
            { title: 'State', values: ['gds-button-dropdown--active '] },
            {
                title: 'Size',
                values: [
                    'gds-multi-select--xs',
                    'gds-multi-select--sm',
                    'gds-multi-select__button--xs',
                    'gds-multi-select__button--sm',
                ],
            },
            {
                title: 'Context (Color)',
                values: [
                    'gds-multi-select--success',
                    'gds-multi-select--warning',
                    'gds-multi-select--danger',
                ],
            },
        ],
        related: [
            {
                title: 'Input',
                url: '/molecules/input-component',
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
        id: 'nav-component',
        gumdrops: '',
        variants: [
            {
                title: 'Size',
                values: ['gds-nav-tabs--sm', 'gds-nav-tabs--lg'],
            },
            {
                title: 'Context (Color)',
                values: ['gds-nav-tabs--underline-primary', 'gds-nav-tabs--underline-secondary'],
            },
        ],
        related: [
            {
                title: 'Link',
                url: '/atoms/link-component',
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
        id: 'pagination-component',
        gumdrops: 'https://gumdrops.gumgum.com/?path=/story/molecules-pagination--default',
        variants: [
            {
                title: 'State',
                values: ['gds-pagination__page-item--active'],
            },
            {
                title: 'Size',
                values: [
                    'gds-pagination--xs',
                    'gds-pagination--sm',
                    'gds-pagination--lg',
                    'gds-pagination--xl',
                ],
            },
            {
                title: 'Display',
                values: ['gds-pagination--fixed', 'gds-pagination__page-item--fixed'],
            },
            {
                title: 'Add Ons',
                values: ['gds-pagination--mobile-arrows'],
            },
        ],
        related: [
            {
                title: 'Link',
                url: '/atoms/link-component',
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
        id: 'search-select-component',
        gumdrops: 'https://gumdrops.gumgum.com/?path=/story/molecules-searchmultiselect--default',
        variants: [
            {
                title: 'Optional Classes',
                values: [
                    'gds-search-select--success',
                    'gds-search-select--warning',
                    'gds-search-select--danger',
                    'gds-search-select__input--sm',
                    'gds-search-select__input--has-tag',
                    'gds-search-select__input--has-help',
                    'gds-search-select__input--has-tag-sm',
                    'gds-search-select--open',
                    'gds-search-select__tag-indicator--sm',
                    'gds-search-select__tag-holder--bubble',
                    'gds-search-select__tag-holder--bubble-sm',
                    'gds-search-select__tag-holder--bubble-active',
                    'gds-search-select__clear--sm',
                ],
            },
        ],
        related: [
            {
                title: 'Input',
                url: '/molecules/input-component',
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
        id: 'table-component',
        gumdrops: 'https://gumdrops.gumgum.com/?path=/story/molecules-table--default',
        variants: [
            {
                title: 'Display',
                values: ['gds-table--responsive'],
            },
            {
                title: 'Display',
                values: ['gds-table--xs', 'gds-table--sm', 'gds-table--lg', 'gds-table--xl'],
            },
            {
                title: 'Context (Color)',
                values: [
                    'gds-table__header--secondary',
                    'gds-table__header--white',
                    'gds-table--inverse',
                    'gds-table__cell--positive',
                    'gds-table__cell--neutral',
                    'gds-table__cell--negative',
                ],
            },
            {
                title: 'Add Ons',
                values: [
                    'gds-table--striped',
                    'gds-table--inverse-striped',
                    'gds-table__header--selected',
                    'gds-table__header--sort-desc',
                    'gds-table__row--selected',
                    'gds-table__row--disabled',
                ],
            },
        ],
        related: [
            {
                title: '',
                url: '',
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
        id: 'toggle-component',
        gumdrops: 'https://gumdrops.gumgum.com/?path=/docs/molecules-toggle--default',
        variants: [
            {
                title: 'Size',
                values: ['gds-form-group__toggleswitch--xs', 'gds-form-group__toggleswitch--sm'],
            },
        ],
        related: [
            {
                title: 'Inputs',
                url: '/molecules/input-component',
            },
            {
                title: 'Checkbox',
                url: '/molecules/checkbox-component',
            },
        ],
        code: `
          <div className="gds-form-group">
            <label className="gds-form-group__toggleswitch-label">
              <input className="gds-form-group__toggleswitch-input" type="checkbox" />
              <span className="gds-form-group__toggleswitch-indicator">
              <span
                className="gds-form-group__toggleswitch-indicator-labels"
                gg-enabled-text="On"
                gg-disabled-text="Off"
              />
          </span>
            Label
          </label>
        </div>
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
