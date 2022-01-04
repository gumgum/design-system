---
id: conversation-component
title: Conversation
sidebar_label: Conversation
section: organisms
---

The conversation component, prefixed by `gds-conversation`, is used to display chat interactions.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-conversation" target="_blank">Prototypes Page</a>
</p>

```html
<div className="gds-conversation">
  <div className="gds-conversation__header">
    <img
      className="gds-conversation__thumbnail"
      src="https://assets.ggops.com/images/sample-1.jpg"
    />
    <div className="gds-conversation__title">Conversation Title</div>
    <div className="gds-conversation__options">
      <div className="gds-button gds-button--outline gds-button--xs">
        <i className="fa fa-fw fa-ellipsis-h" aria-hidden="true"></i>
      </div>
      <div className="gds-button gds-button--outline gds-button--xs">
        <i className="fa fa-fw fa-expand" aria-hidden="true"></i>
      </div>
      <div className="gds-button gds-button--outline gds-button--xs">
        <i className="fa fa-fw fa-times" aria-hidden="true"></i>
      </div>
    </div>
  </div>
  <div className="gds-conversation__body">
    <div
      className="gds-conversation__message gds-conversation__message--received"
    >
      <div
        className="gds-conversation__bubble gds-conversation__bubble--received"
      >
        <div
          className="gds-conversation__name gds-conversation__name--received"
        >
          <i className="fa fa-fw fa-twitter -m-r-1" aria-hidden="true"></i>You
        </div>
        <div className="gds-conversation__content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </div>
        <div className="gds-conversation__message-footer">
          <div className="gds-conversation__date">Sent: 9/13/2016</div>
        </div>
      </div>
      <div
        className="gds-conversation__avatar gds-conversation__avatar--received -text-center"
      >
        <img
          src="https://assets.ggops.com/images/ken.png"
          height="100%"
          alt="Ken Weiner"
        />
        <div className="gds-conversation__source"></div>
      </div>
    </div>
    <div className="gds-conversation__date-divider">
      <div className="gds-conversation__datestamp">Mon, 09/12/2016</div>
    </div>
    <div className="gds-conversation__message gds-conversation__message--sent">
      <div
        className="gds-conversation__avatar gds-conversation__avatar--sent gds-conversation__avatar"
      >
        <img
          src="https://assets.ggops.com/images/ken.png"
          height="100%"
          alt="Ken Weiner"
        />
      </div>
      <div className="gds-conversation__bubble gds-conversation__bubble--sent">
        <div className="gds-conversation__name gds-conversation__name--sent">
          <i className="fa fa-fw fa-twitter -m-r-1" aria-hidden="true"></i>Bob
          Smith
        </div>
        <div className="gds-conversation__content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="gds-conversation__message-footer">
          <div className="gds-conversation__date">Sent: 9/13/2016</div>
          <div className="gds-conversation__message-options">
            <a className="gds-conversation__message-option" href="#"
              ><i className="fa fa-fw fa-flag" aria-hidden="true"></i
            ></a>
            <a className="gds-conversation__message-option" href="#"
              ><i className="fa fa-fw fa-ban" aria-hidden="true"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
    <div className="gds-conversation__message gds-conversation__message--sent">
      <div
        className="gds-conversation__avatar gds-conversation__avatar--sent gds-conversation__avatar"
      >
        <img
          src="https://assets.ggops.com/images/ken.png"
          height="100%"
          alt="Ken Weiner"
        />
      </div>
      <div className="gds-conversation__bubble gds-conversation__bubble--sent">
        <div className="gds-conversation__name gds-conversation__name--sent">
          <i className="fa fa-fw fa-twitter -m-r-1" aria-hidden="true"></i>Bob
          Smith
        </div>
        <div className="gds-conversation__content">
          deserunt mollit anim id est laborum.
          <img
            className="gds-conversation__img"
            src="https://assets.ggops.com/images/sample-1.jpg"
          />
        </div>
        <div className="gds-conversation__message-footer">
          <div className="gds-conversation__date">Sent: 9/13/2016</div>
          <div className="gds-conversation__message-options">
            <a className="gds-conversation__message-option" href="#"
              ><i className="fa fa-fw fa-flag" aria-hidden="true"></i
            ></a>
            <a className="gds-conversation__message-option" href="#"
              ><i className="fa fa-fw fa-ban" aria-hidden="true"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
    <div className="gds-conversation__date-divider">
      <div className="gds-conversation__datestamp">Tues, 09/13/2016</div>
    </div>
    <div
      className="gds-conversation__message gds-conversation__message--received"
    >
      <div
        className="gds-conversation__bubble gds-conversation__bubble--received"
      >
        <div
          className="gds-conversation__name gds-conversation__name--received"
        >
          <i className="fa fa-fw fa-twitter -m-r-1" aria-hidden="true"></i>You
        </div>
        <div className="gds-conversation__content">You suck!</div>
        <div className="gds-conversation__message-footer">
          <div className="gds-conversation__date">Sent: 9/13/2016</div>
        </div>
      </div>
      <div
        className="gds-conversation__avatar gds-conversation__avatar--received -text-center"
      >
        <img
          src="https://assets.ggops.com/images/ken.png"
          height="100%"
          alt="Ken Weiner"
        />
        <div className="gds-conversation__source"></div>
      </div>
    </div>
    <div className="gds-conversation__message gds-conversation__message--sent">
      <div
        className="gds-conversation__avatar gds-conversation__avatar--sent gds-conversation__avatar--blocked"
      >
        <img
          src="https://assets.ggops.com/images/ken.png"
          height="100%"
          alt="Ken Weiner"
        />
      </div>
      <div
        className="gds-conversation__bubble gds-conversation__bubble--sent gds-conversation__bubble--blocked"
      >
        <div className="gds-conversation__name gds-conversation__name--sent">
          <i className="fa fa-fw fa-twitter -m-r-1" aria-hidden="true"></i>User
          Blocked!
        </div>
        <div
          className="gds-conversation__content gds-conversation__content--blocked"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="gds-conversation__message-footer">
          <div className="gds-conversation__date">Sent: 9/13/2016</div>
          <div className="gds-conversation__message-options">
            <a className="gds-conversation__message-option" href="#"
              ><i className="fa fa-fw fa-flag" aria-hidden="true"></i
            ></a>
            <a
              className="gds-conversation__message-option gds-conversation__message-option--active"
              href="#"
              ><i className="fa fa-fw fa-ban" aria-hidden="true"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
    <div
      className="gds-conversation__message gds-conversation__message--received"
    >
      <div
        className="gds-conversation__bubble gds-conversation__bubble--received gds-conversation__bubble gds-conversation__bubble--typing"
      >
        <div
          className="gds-conversation__name gds-conversation__name--received"
        >
          <i className="fa fa-fw fa-twitter -m-r-1" aria-hidden="true"></i>You
        </div>
        <div
          className="gds-conversation__content gds-conversation__content--typing"
        >
          <div className="gds-conversation__dots"></div>
        </div>
      </div>
      <div
        className="gds-conversation__avatar gds-conversation__avatar--received -text-center"
      >
        <img
          src="https://assets.ggops.com/images/ken.png"
          height="100%"
          alt="Ken Weiner"
        />
        <div className="gds-conversation__source"></div>
      </div>
    </div>
  </div>
  <div className="gds-conversation__footer">
    <div className="gds-form-group">
      <div className="gds-form-group__text-input--button-cap">
        <span className="gds-conversation__char-count">0/114</span>
        <input
          className="gds-form-group__text-input gds-form-group__text-input--right-edge gds-form-group__text-input--left-edge"
          type="text"
          placeholder="Enter your message"
        />
        <button
          className="gds-button gds-button--primary gds-button--button-cap -p-h-4"
        >
          Send
        </button>
      </div>
    </div>
  </div>
</div>
```
