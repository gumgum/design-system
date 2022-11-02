export const getAtomData = id => {
    let obj = Atoms.find(item => item.id === id);
    return obj;
};

const Atoms = [
    {
        id: 'badge-component',
        gumdrops:
            'https://gumdrops.gumgum.com/?path=/story/atoms-badge--default',
        variants: [
            {
                title: 'Context (Color)',
                values: [
                    'gds-badge--inverse',
                    'gds-badge--success',
                    'gds-badge--success-inverse',
                    'gds-badge--info',
                    'gds-badge--info-inverse',
                    'gds-badge--warning',
                    'gds-badge--warning-inverse',
                    'gds-badge--danger',
                    'gds-badge--danger-inverse',
                ],
            },
            {
                title: 'Empty',
                values: ['gds-badge--empty'],
            },
        ],
        related: [
            {
                title: 'Tag',
                url: '/atoms/tag-component',
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
        id: 'button-component',
        gumdrops:
            'https://gumdrops.gumgum.com/?path=/story/atoms-button--default',
        variants: [
            {
                title: 'Context (Color)',
                values: [
                    'gds-button--default',
                    'gds-button--primary',
                    'gds-button--success',
                    'gds-button--danger',
                    'gds-button--warning',
                    'gds-button--secondary',
                    'gds-button--white',
                    'gds-button--tertiary',
                    'gds-button--info',
                    'gds-button--link',
                    'gds-button--toggle',
                    'gds-button--dark',
                    'gds-button--dark-primary',
                    'gds-button--dark-secondary',
                    'gds-button--dark-tertiary',
                    'gds-button--dark-success',
                    'gds-button--dark-danger',
                    'gds-button--dark-info',
                    'gds-button--dark-warning',
                    'gds-button--dark-toggle',
                ],
            },
            {
                title: 'Size',
                values: [
                    'gds-button--xs',
                    'gds-button--sm',
                    'gds-button--md',
                    'gds-button--lg',
                ],
            },
            {
                title: 'State',
                values: ['gds-button--active', `disabled="disabled"`],
            },
            {
                title: 'Display',
                values: [
                    'gds-button-group__button',
                    'gds-button--block',
                    'gds-button--block-xs',
                    'gds-button--block-sm',
                    'gds-button--block-md',
                    'gds-button--block-lg',
                    'gds-button--block-xl',
                ],
            },
        ],
        related: [
            {
                title: 'Link',
                url: '/atoms/link-component',
            },
            {
                title: 'Button Group',
                url: '/molecules/button-group-component',
            },
            {
                title: 'Button Dropdown',
                url: '/molecules/button-dropdown-component',
            },
        ],

        code: `<button className="gds-button gds-button--default">Default button</button>`,
    },
    {
        id: 'button-text-component',
        gumdrops: '',
        variants: [
            {
                title: 'Context (Color)',
                values: [
                    'gds-text-button--success',
                    'gds-text-button--danger',
                    'gds-text-button--warning',
                    'gds-text-button--info',
                    'gds-text-button--secondary',
                    'gds-text-button--grey',
                    'gds-text-button--gray',
                    'gds-text-button--light-grey',
                    'gds-text-button--light-gray',
                ],
            },
        ],
        related: [
            {
                title: 'Link',
                url: '/atoms/link-component',
            },
            {
                title: 'Button',
                url: '/atoms/button-component',
            },
            {
                title: 'Text',
                url: '/atoms/text-component',
            },
        ],

        code: `
    <div>
      Hello User, please <button className="gds-text-button" onClick={()=> alert("Thank you!💩")}>click me</button>!
    </div>
    `,
    },
    {
        id: 'circular-button-component',
        gumdrops: '',
        variants: [
            {
                title: 'Size',
                values: [
                    'gds-circular-button--xs',
                    'gds-circular-button--sm',
                    'gds-circular-button--lg',
                    'gds-circular-button--xl',
                ],
            },
            {
                title: 'Context (Color)',
                values: [
                    'gds-circular-button--secondary',
                    'gds-circular-button--success',
                    'gds-circular-button--warning',
                    'gds-circular-button--info',
                    'gds-circular-button--danger',
                    'gds-circular-button--white',
                    'gds-circular-button--toggle',
                    'gds-circular-button--dark',
                    'gds-circular-button--dark-primary',
                    'gds-circular-button--dark-secondary',
                    'gds-circular-button--dark-tertiary',
                    'gds-circular-button--dark-success',
                    'gds-circular-button--dark-info',
                    'gds-circular-button--dark-warning',
                    'gds-circular-button--dark-danger',
                    'gds-circular-button--dark-toggle',
                ],
            },
            {
                title: 'State',
                values: [
                    'gds-circular-button--active',
                    'gds-circular-button--inactive',
                    `disabled="disabled"`,
                ],
            },
            {
                title: 'Image',
                values: ['gds-circular-button__image'],
            },
        ],
        related: [
            {
                title: 'Link',
                url: '/atoms/link-component',
            },
            {
                title: 'Circular Thumbnail',
                url: '/atoms/circular-thumbnail-component',
            },
            {
                title: 'Button',
                url: '/atoms/button-component',
            },
            {
                title: 'Button Group',
                url: '/molecules/button-group-component',
            },
            {
                title: 'Button Dropdown',
                url: '/molecules/button-dropdown-component',
            },
            {
                title: 'Button Toolbar',
                url: '/molecules/button-toolbar-component',
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
        id: 'container-component',
        // gumdrops: "",
        variants: [
            {
                title: 'Size',
                values: ['gds-container--sm', 'gds-container--lg'],
            },
            {
                title: 'Context (Color)',
                values: [
                    'gds-container--gray',
                    'gds-container--primary',
                    'gds-container--success',
                    'gds-container--warning',
                    'gds-container--danger',
                ],
            },
        ],
        related: [
            {
                title: 'Card',
                url: '/molecules/card-component',
            },
        ],

        code: `<div className="gds-container">
    <p>Paragraph in container</p>
</div>`,
    },
    {
        id: 'divider-component',
        gumdrops:
            'https://gumdrops.gumgum.com/?path=/story/molecules-divider--default',
        variants: [
            {
                title: 'Text Position',
                values: ['gds-divider--reversed', 'gds-divider--centered'],
            },
            {
                title: 'Add Ons',
                values: [
                    'gds-divider--collapsible',
                    'gds-divider__line',
                    'gds-divider__label',
                    'gds-divider__arrow',
                ],
            },
            {
                title: 'Add On States',
                values: ['gds-divider__arrow--collapse'],
            },
        ],
        related: [
            {
                title: 'Segment',
                url: '/atoms/segment-component',
            },
            {
                title: 'Accordion',
                url: '/molecules/accordion-component',
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
        id: 'images',
        gumdrops: '',
        variants: [
            {
                title: 'Add On',
                values: ['gds-image__label'],
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
        id: 'link-component',
        gumdrops: '',
        variants: [
            {
                title: 'Context (Color)',
                values: [
                    'gds-text--link-secondary',
                    'gds-text--link-grey',
                    'gds-text--link-light-grey',
                ],
            },
        ],
        related: [
            {
                title: 'Button Text Only',
                url: '/atoms/button-text-component',
            },
            {
                title: 'Button',
                url: '/atoms/button-component',
            },
            {
                title: 'Text',
                url: '/atoms/text-component',
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
        id: 'loading-component',
        gumdrops:
            'https://gumdrops.gumgum.com/?path=/story/atoms-loadingdots--default',
        variants: [
            {
                title: 'Context (Color)',
                values: ['gds-loading__dot--white'],
            },
            {
                title: 'Size',
                values: ['gds-loading__dot--lg'],
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
        id: 'segment-component',
        gumdrops: '',
        variants: [
            {
                title: 'Required',
                values: ['gds-segment'],
            },
            {
                title: 'Display',
                values: ['gds-segment--collapse'],
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
      let dividerToggle = isOpen ? "gds-divider__arrow" : "gds-divider__arrow gds-divider__arrow--collapse";
      let segmentToggle = isOpen ? "gds-segment" : "gds-segment gds-segment--collapse";

      return (
        <div className="-p-a-3">

          {/* Demo with divider */}
          <div onClick={()=> setIsOpen(!isOpen)} className="gds-divider gds-divider--collapsible">
            <span className="gds-divider__label">
              Working Example Collapse Divider *Click Me*
            </span>
            <span className="gds-divider__line"></span>
            <span className={dividerToggle}></span>
          </div>
          <div className={segmentToggle} data-gds-segment="1">Content Goes Here</div>
        </div>
      );
    }`,
    },
    {
        id: 'snackbar-component',
        gumdrops:
            'https://gumdrops.gumgum.com/?path=/story/molecules-snackbar--default',
        variants: [
            {
                title: 'Required',
                values: [
                    'gds-snackbar',
                    'gds-snackbar__notification',
                    'gds-snackbar__notification-text',
                ],
            },
            {
                title: 'Display',
                values: ['gds-snackbar__notification--hidden'],
            },
            {
                title: 'Add On',
                values: [
                    'gds-snackbar__notification-text',
                    'gds-snackbar__notification-button',
                ],
            },
            {
                title: 'Context (Color)',
                values: [
                    'gds-snackbar__notification--success',
                    'gds-snackbar__notification--info',
                    'gds-snackbar__notification--warning',
                    'gds-snackbar__notification--danger',
                    'gds-snackbar__notification--hidden',
                    'gds-snackbar__notification-button--dark',
                    'gds-snackbar__notification-button--success',
                    'gds-snackbar__notification-button--info',
                    'gds-snackbar__notification-button--warning',
                    'gds-snackbar__notification-button--danger',
                ],
            },
        ],
        related: [
            {
                title: 'Well',
                url: '/atoms/well-component',
            },
            {
                title: 'Alert',
                url: '/organisms/alert-component',
            },
        ],

        code: `
    <div style={{position: "relative", height: 200, width: "100%"}}>
    {/* The snackbar is fixed position by default. */}
    {/* Ignore the inline styles, these were added for demo purposes */}
    <ul className="gds-snackbar" style={{position: "absolute", top: "1rem"}}>
    <li className="gds-snackbar__notification">
        <p className="gds-snackbar__notification-text">Some text goes here.</p>
        <button className="gds-snackbar__notification-button"></button>
    </li>
    <li className="gds-snackbar__notification">
        <p className="gds-snackbar__notification-text">Some text goes here.</p>
        <button className="gds-snackbar__notification-button"></button>
    </li>
</ul>
</div>`,
    },
    {
        id: 'tag-component',
        gumdrops: 'https://gumdrops.gumgum.com/?path=/story/atoms-tag--default',
        variants: [
            {
                title: 'Required',
                values: ['gds-tag'],
            },
            {
                title: 'Add Ons',
                values: [
                    'gds-tag--with-button',
                    'gds-tag__button',
                    'gds-tag__option',
                ],
            },
            {
                title: 'Size',
                values: [
                    'gds-tag--xs',
                    'gds-tag--sm',
                    'gds-tag--with-button-xs',
                    'gds-tag--with-button-sm',
                    'gds-tag__button--xs',
                    'gds-tag__button--sm',
                ],
            },
            {
                title: 'Context (Color)',
                values: [
                    'gds-tag--primary',
                    'gds-tag--success',
                    'gds-tag--warning',
                    'gds-tag--danger',
                    'gds-tag--blue',
                    'gds-tag--gold',
                    'gds-tag--green',
                    'gds-tag--orange',
                    'gds-tag--purple',
                    'gds-tag--red',
                    'gds-tag--darkblue',
                    'gds-tag--darkgreen',
                    'gds-tag--darkred',
                    'gds-tag--dark',
                    'gds-tag--primary-dark',
                    'gds-tag--secondary-dark',
                    'gds-tag--success-dark',
                    'gds-tag--warning-dark',
                    'gds-tag--danger-dark',
                    'gds-tag--blue-dark',
                    'gds-tag--gold-dark',
                    'gds-tag--green-dark',
                    'gds-tag--orange-dark',
                    'gds-tag--purple-dark',
                    'gds-tag--red-dark',
                    'gds-tag--darkblue-dark',
                    'gds-tag--darkgold-dark',
                    'gds-tag--darkgreen-dark',
                    'gds-tag--darkred-dark',
                ],
            },
            {
                title: 'Context (Color) for button',
                values: [
                    'gds-tag__button--blue',
                    'gds-tag__button--blue-dark',
                    'gds-tag__button--gold-dark',
                    'gds-tag__button--green-dark',
                    'gds-tag__button--orange-dark',
                    'gds-tag__button--purple-dark',
                    'gds-tag__button--red-dark',
                    'gds-tag__button--darkblue-dark',
                    'gds-tag__button--darkgold-dark',
                    'gds-tag__button--darkgreen-dark',
                    'gds-tag__button--darkred-dark',
                    'gds-tag__option--primary',
                    'gds-tag__option--primary-dark',
                    'gds-tag__option--secondary',
                    'gds-tag__option--secondary-dark',
                    'gds-tag__option--success',
                    'gds-tag__option--success-dark',
                    'gds-tag__option--warning',
                    'gds-tag__option--warning-dark',
                    'gds-tag__option--danger',
                    'gds-tag__option--danger-dark',
                    'gds-tag__option--blue',
                    'gds-tag__option--blue-dark',
                    'gds-tag__option--gold',
                    'gds-tag__option--gold-dark',
                    'gds-tag__option--green',
                    'gds-tag__option--green-dark',
                    'gds-tag__option--orange',
                    'gds-tag__option--orange-dark',
                    'gds-tag__option--purple',
                    'gds-tag__option--purple-dark',
                    'gds-tag__option--red',
                    'gds-tag__option--red-dark',
                    'gds-tag__option--darkblue',
                    'gds-tag__option--darkblue-dark',
                    'gds-tag__option--darkgold',
                    'gds-tag__option--darkgold-dark',
                    'gds-tag__option--darkgreen',
                    'gds-tag__option--darkgreen-dark',
                    'gds-tag__option--darkred',
                    'gds-tag__option--darkred-dark',
                ],
            },
        ],
        related: [
            {
                title: 'Badge',
                url: '/atoms/badge-component',
            },
            {
                title: 'Button',
                url: '/atoms/button-component',
            },
            {
                title: 'Link',
                url: '/atoms/link-component',
            },
        ],

        code: `
    <div className="-p-a-3">
      {/* default tag */}
      <div className="gds-tag">This is a tag</div>
      {/* default color with close */}
      <div className="gds-tag gds-tag--with-button">Gillette<button className="gds-tag__button"></button></div>
      {/* primary color with close */}
      <div className="gds-tag gds-tag--with-button gds-tag--primary">Primary Tag<button className="gds-tag__button gds-tag__button--primary"></button></div>
      {/* success color with close */}
      <div className="gds-tag gds-tag--with-button gds-tag--success">Success Tag<button className="gds-tag__button gds-tag__button--success"></button></div>
      {/* warning color with close */}
      <div className="gds-tag gds-tag--with-button gds-tag--warning">Warning Tag<button className="gds-tag__button gds-tag__button--warning"></button></div>
      {/* Option tag feature has color bugs and needs to be improved */}
      <div className="gds-tag gds-tag--with-button gds-tag--danger">Option Danger Tag (to use a different icon)<button className="gds-tag__option gds-tag__option--danger"><i className="fas fa-sm fa-plus"></i></button></div>
      {/* small with close */}
      <div className="gds-tag gds-tag--with-button-sm gds-tag--sm">
          Small Tag<button className="gds-tag__button gds-tag__button--sm"></button>
      </div>
      {/* x-small with close */}
      <div className="gds-tag gds-tag--primary gds-tag--with-button-xs gds-tag--xs">
          X-Small Primary Tag<button className="gds-tag__button gds-tag__button--primary gds-tag__button--xs"></button>
      </div>
</div>`,
    },
    {
        id: 'text-component',
        gumdrops: '',
        variants: [
            {
                title: 'Size - Header',
                values: [
                    'gds-text--header-xs',
                    'gds-text--header-sm',
                    'gds-text--header-md',
                    'gds-text--header-lg',
                    'gds-text--header-xl',
                    'gds-text--header-xxl',
                ],
            },
            {
                title: 'Size - Body',
                values: [
                    'gds-text--body-xs',
                    'gds-text--body-sm',
                    'gds-text--body-md',
                ],
            },
            {
                title: 'Weight',
                values: ['gds-text--regular', 'gds-text--bold'],
            },
            {
                title: 'Context (Color)',
                values: [
                    'gds-text--primary',
                    'gds-text--secondary',
                    'gds-text--success',
                    'gds-text--info',
                    'gds-text--warning',
                    'gds-text--danger',
                ],
            },
            {
                title: 'Additional Context (Color) w/ Utilities (* = 1-5)',
                values: [
                    '-color-tx-lt-1',
                    '-color-tx-lt-2',
                    '-color-tx-lt-3',
                    '-color-tx-lt-4',
                    '-color-tx-lt-5',
                    '-color-tx-dk-1',
                    '-color-tx-dk-2',
                    '-color-tx-dk-3',
                    '-color-tx-dk-4',
                    '-color-tx-dk-5',
                    '-color-tx-white',
                    '-color-tx-pri',
                    '-color-tx-pri-lt-*',
                    '-color-tx-pri-dk-*',
                    '-color-tx-sec',
                    '-color-tx-sec-lt-*',
                    '-color-tx-sec-dk-*',
                    '-color-tx-ter',
                    '-color-tx-ter-lt-*',
                    '-color-tx-ter-dk-*',
                    '-color-tx-suc',
                    '-color-tx-suc-lt-*',
                    '-color-tx-suc-dk-*',
                    '-color-tx-war',
                    '-color-tx-war-lt-*',
                    '-color-tx-war-dk-*',
                    '-color-tx-dan',
                    '-color-tx-dan-lt-*',
                    '-color-tx-dan-dk-*',
                    '-color-tx-inf',
                    '-color-tx-inf-lt-*',
                    '-color-tx-inf-dk-*',
                    '-color-tx-gold',
                    '-color-tx-gold-lt-*',
                    '-color-tx-gold-dk-*',
                    '-color-tx-blue',
                    '-color-tx-blue-lt-*',
                    '-color-tx-blue-dk-*',
                    '-color-tx-red',
                    '-color-tx-red-lt-*',
                    '-color-tx-red-dk-*',
                    '-color-tx-green',
                    '-color-tx-green-lt-*',
                    '-color-tx-green-dk-*',
                    '-color-tx-purple',
                    '-color-tx-purple-lt-*',
                    '-color-tx-purple-dk-*',
                    '-color-tx-orange',
                    '-color-tx-orange-lt-*',
                    '-color-tx-orange-dk-*',
                    '-color-tx-dkblue',
                    '-color-tx-dkblue-lt-*',
                    '-color-tx-dkblue-dk-*',
                    '-color-tx-dkred',
                    '-color-tx-dkred-lt-*',
                    '-color-tx-dkred-dk-*',
                    '-color-tx-dkgreen',
                    '-color-tx-dkgreen-lt-*',
                    '-color-tx-dkgreen-dk-*',
                    '-color-tx-dkgold',
                    '-color-tx-dkgold-lt-*',
                    '-color-tx-dkgold-dk-*',
                    '-color-tx-magenta',
                    '-color-tx-magenta-lt-*',
                    '-color-tx-magenta-dk-*',
                ],
            },
            {
                title: 'Style',
                values: [
                    'gds-text--italic',
                    'gds-text--blockquote',
                    'gds-text--blockquote--footer',
                    'gds-text--highlight',
                    'gds-text--code',
                    'gds-text--keyboard',
                ],
            },
            {
                title: 'List',
                values: [
                    'gds-text__list-item--disc',
                    'gds-text__list-item--number',
                ],
            },
        ],
        related: [
            {
                title: 'Link',
                url: '/atoms/link-component',
            },
            {
                title: 'Button Text Only',
                url: '/atoms/button-text-component',
            },
        ],

        code: `<div className="-p-a-3">
  <h1 className="gds-text--header-xxl -m-b-3"> XXL Header Text</h1>
  <h2 className="gds-text--header-xl -m-b-3"> XL Header Text</h2>
  <h3 className="gds-text--header-lg -m-b-3"> LG Header Text</h3>
  <h4 className="gds-text--header-md -m-b-3"> MD Header Text</h4>
  <h5 className="gds-text--header-sm -m-b-3"> SM Header Text</h5>
  <h6 className="gds-text--header-xs -m-b-3"> XS Header Text</h6>
  <br />
  <p className="gds-text--body-md">MD Body Text (Default)</p>
  <p className="gds-text--body-sm">SM Body Text</p>
  <p className="gds-text--body-xs">XS Body Text</p> 
  <br />
  <p className="gds-text--body-md">
  For 10 years, <span className="gds-text--hero">GumGum</span> has <span className="gds-text--italic">perfected</span> its content analysis capabilities, using the latest in <span className="gds-text--info">deep learning technology</span>.
  </p>
  <br />
  <ul>
    <li className="gds-text__list-item--disc">Cats</li>
    <li className="gds-text__list-item--disc">Dogs</li>
  </ul>
  <br />
  <ol>
    <li className="gds-text__list-item--number">Cats</li>
    <li className="gds-text__list-item--number">Dogs</li>
  </ol>
</div>`,
    },
    {
        id: 'tooltip-component',
        gumdrops:
            'https://gumdrops.gumgum.com/?path=/story/atoms-tooltip--default',
        variants: [
            {
                title: 'Position',
                values: [
                    'gds-tooltip--top',
                    'gds-tooltip--right',
                    'gds-tooltip--bottom',
                    'gds-tooltip--left',
                ],
            },
            {
                title: 'Context (Color)',
                values: [
                    'gds-tooltip--primary',
                    'gds-tooltip--success',
                    'gds-tooltip--info',
                    'gds-tooltip--warning',
                    'gds-tooltip--danger',
                    'gds-tooltip--dark',
                ],
            },
            {
                title: 'Size',
                values: ['gds-tooltip--lg'],
            },
            {
                title: 'State',
                values: [
                    'gds-tooltip--always',
                    'gds-tooltip--no-animate',
                    'gds-tooltip--bounce',
                ],
            },
        ],
        related: [
            {
                title: 'Text',
                url: '/text-component',
            },
            {
                title: 'Button',
                url: '/button-component',
            },
        ],

        code: `<span className="gds-tooltip--right" data-tooltip="I am a tooltip!">
    <button type="button" className="gds-button gds-button--primary">Button with tooltip</button>
</span>`,
    },
    {
        id: 'well-component',
        gumdrops:
            'https://gumdrops.gumgum.com/?path=/story/molecules-well--default',
        variants: [
            {
                title: 'Required',
                values: ['gds-well'],
            },
            {
                title: 'Add Ons',
                values: ['gds-well__text', 'gds-well__button'],
            },
            {
                title: 'Context (Color)',
                values: [
                    'gds-well--success',
                    'gds-well__button--success',
                    'gds-well--info',
                    'gds-well__button--info',
                    'gds-well--warning',
                    'gds-well__button--warning',
                    'gds-well--danger',
                    'gds-well__button--danger',
                    'gds-well--dark',
                ],
            },
        ],
        related: [
            {
                title: 'Snackbar',
                url: '/atoms/snackbar-component',
            },
            {
                title: 'Container',
                url: '/atoms/container-component',
            },
            {
                title: 'Card',
                url: '/molecules/card-component',
            },
        ],

        code: `<div className="-p-a-3">
    <div className="gds-well -m-b-2">
      <p className="gds-well__text">Default well</p>
      <button className="gds-well__button"></button>
    </div>
    <div className="gds-well gds-well--success">
      <p className="gds-well__text">Success well</p>
      <button className="gds-well__button gds-well__button--success"></button>
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
