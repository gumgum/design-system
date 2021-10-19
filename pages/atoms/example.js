import React from "react";
import PageTitle from "../../components/common/title/pageTitle";
import { Card, CardBlock, Column, Row } from "gumdrops";

function createMarkup() {
  return {
    __html: `
      <div className="gds-grid__container gds-grid__container--fluid-xs-1 gds-grid__container--fluid-sm-2 gds-grid__container--fluid-md-3 gds-grid__container--fluid-lg-4 gds-grid__container--fluid-xl-5">
        <div className="gds-card -m-b-0">
          <div className="gds-card__img-container--top gds-card__img-container"></div>
          <div className="gds-card__block">
            <h4 className="gds-card__title">Card title</h4>
            <h2 className="gds-card__hero gds-text--header-md gds-text--hero">
              Hero Text
            </h2>
            <p className="gds-card__text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="gds-card -m-b-0">
          <div className="gds-card__img-container--top gds-card__img-container"></div>
          <div className="gds-card__block">
            <h4 className="gds-card__title">Card title</h4>
            <h2 className="gds-card__hero gds-text--header-md gds-text--hero">
              Hero Text
            </h2>
            <p className="gds-card__text">
              Some cards will have a lot more content than other cards but a
              css-grid will normalize the height of all cards in a row
              automatically. How cool is this shit?
            </p>
          </div>
        </div>
        <div className="gds-card -m-b-0">
          <div className="gds-card__img-container--top gds-card__img-container"></div>
          <div className="gds-card__block">
            <h4 className="gds-card__title">Card title</h4>
            <h2 className="gds-card__hero gds-text--header-md gds-text--hero">
              Hero Text
            </h2>
            <p className="gds-card__text">
              Some cards have little content but are still sized the same
            </p>
          </div>
        </div>
        <div className="gds-card -m-b-0">
          <div className="gds-card__img-container--top gds-card__img-container"></div>
          <div className="gds-card__block">
            <h4 className="gds-card__title">Card title</h4>
            <h2 className="gds-card__hero gds-text--header-md gds-text--hero">
              Hero Text
            </h2>
            <p className="gds-card__text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="gds-card -m-b-0">
          <div className="gds-card__img-container--top gds-card__img-container"></div>
          <div className="gds-card__block">
            <h4 className="gds-card__title">Card title</h4>
            <h2 className="gds-card__hero gds-text--header-md gds-text--hero">
              Hero Text
            </h2>
            <p className="gds-card__text">
              Some cards will have a lot more content than other cards but a
              css-grid will normalize the height of all cards in a row
              automatically. How cool is this shit?
            </p>
          </div>
        </div>
        <div className="gds-card -m-b-0">
          <div className="gds-card__img-container--top gds-card__img-container"></div>
          <div className="gds-card__block">
            <h4 className="gds-card__title">Card title</h4>
            <h2 className="gds-card__hero gds-text--header-md gds-text--hero">
              Hero Text
            </h2>
            <p className="gds-card__text">
              Some cards have little content but are still sized the same
            </p>
          </div>
        </div>
        <div className="gds-card -m-b-0">
          <div className="gds-card__img-container--top gds-card__img-container"></div>
          <div className="gds-card__block">
            <h4 className="gds-card__title">Card title</h4>
            <h2 className="gds-card__hero gds-text--header-md gds-text--hero">
              Hero Text
            </h2>
            <p className="gds-card__text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="gds-card -m-b-0">
          <div className="gds-card__img-container--top gds-card__img-container"></div>
          <div className="gds-card__block">
            <h4 className="gds-card__title">Card title</h4>
            <h2 className="gds-card__hero gds-text--header-md gds-text--hero">
              Hero Text
            </h2>
            <p className="gds-card__text">
              Some cards will have a lot more content than other cards but a
              css-grid will normalize the height of all cards in a row
              automatically. How cool is this shit?
            </p>
          </div>
        </div>
        <div className="gds-card -m-b-0">
          <div className="gds-card__img-container--top gds-card__img-container"></div>
          <div className="gds-card__block">
            <h4 className="gds-card__title">Card title</h4>
            <h2 className="gds-card__hero gds-text--header-md gds-text--hero">
              Hero Text
            </h2>
            <p className="gds-card__text">
              Some cards have little content but are still sized the same
            </p>
          </div>
        </div>
        <div className="gds-card -m-b-0">
          <div className="gds-card__img-container--top gds-card__img-container"></div>
          <div className="gds-card__block">
            <h4 className="gds-card__title">Card title</h4>
            <h2 className="gds-card__hero gds-text--header-md gds-text--hero">
              Hero Text
            </h2>
            <p className="gds-card__text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      `,
  };
}

export default function ExamplePage() {
  console.log(createMarkup());
  return (
    <div>
      <PageTitle title="Example Component" />
      <Row>
        <Column md="6">
          <div className="description">
            All colors used in the Design System are provided below, for use in
            JavaScript: Blue Theme The blue theme is used on the following
            products: GumGum Dashboard GumGum Dental GumGum Dental Uploader
            (demo tool)
          </div>
        </Column>
        <Column md="6">
          <Card>
            <CardBlock>Hello World</CardBlock>
          </Card>
        </Column>
      </Row>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
}
