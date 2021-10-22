export const ExampleComponent = {
  title: "ButtonDemo",
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
  example: {
    button: `<button className="gds-button gds-button--default">Default button</button>`,
    component: `
  class Counter extends React.Component {
    constructor() {
      super()
      this.state = { count: 0 }
    }
    componentDidMount() {
      this.interval = setInterval(() => {
        this.setState(state => ({ count: state.count + 1 }))
      }, 1000)
    }
    componentWillUnmount() {
      clearInterval(this.interval)
    }
    render() {
      return (
        <center>
          <h3>
            {this.state.count}
          </h3>
        </center>
      )
    }
  }
  `,
  },
};
