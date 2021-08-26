import { Select, Pagination } from "gumdrops";
import React, { useState, useEffect } from "react";

export default function TableFooter({ numResults }) {
  const [viewCount, setViewCount] = useState(15);
  const [pages, setPages] = useState({
    activePage: 1,
    lastPage: 3,
  });

  useEffect(() => {
    let totalPages = numResults / viewCount;

    if (totalPages <= 1) {
      setPages({ activePage: pages.activePage, lastPage: 1 });
    } else {
      totalPages = Math.ceil(totalPages);
      setPages({
        activePage: pages.activePage,
        lastPage: totalPages,
      });
    }
  }, [numResults, viewCount, pages.activePage]);

  return (
    <div className="gds-flex gds-flex--align-center gds-text--body-sm -p-h-3 -p-v-2">
      <div className="gds-flex__item gds-flex__item--grow-0">
        {numResults} Results
      </div>
      <div className="gds-flex__item -text-center">
        <Pagination
          activePage={pages.activePage}
          lastPage={pages.lastPage}
          boundaries={true}
          size="xs"
          onChange={() => console.log("button")}
        />
      </div>
      {console.log({ pages })}
      {pages.activePage != pages.lastPage ? (
        <div className="gds-flex__item gds-flex__item--grow-0">
          <Select
            style={{ paddingRight: "1rem" }}
            customName="name"
            customValue="value"
            name="viewCount"
            onChange={(e) => setViewCount(e.target.value)}
            options={[
              {
                name: "15",
                value: "15",
              },
              {
                name: "30 ",
                value: "30",
              },
              {
                name: "60 ",
                value: "60",
              },
            ]}
            size="xs"
            value={viewCount}
          />
        </div>
      ) : null}
    </div>
  );
}
