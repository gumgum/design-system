import { useEffect, useState } from "react";
import { Card } from "gumdrops";
import PageTitle from "../components/common/title/pageTitle";

const RangeItems = [
  {
    title: "Stage 1",
    description: "This is info about stage 1.",
  },
  {
    title: "Stage 2",
    description: "This is info about stage 2.",
  },
  {
    title: "Stage 3",
    description: "This is info about stage 3.",
  },
  {
    title: "Stage 4",
    description: "This is info about stage 4.",
  },
  {
    title: "Stage 5",
    description: "This is info about stage 5.",
  },
];

const rangeItems = [
  {
    value: 0.1,
    label: "Stage 1",
  },
  {
    value: 0.2,
    label: "Stage 2",
  },
  {
    value: 0.3,
    label: "Stage 3",
  },
  {
    value: 0.4,
    label: "Stage 4",
  },
  {
    value: 0.5,
    label: "Stage 5",
  },
  {
    value: 0.6,
    label: "Stage 6",
  },
  {
    value: 0.7,
    label: "Stage 7",
  },
  {
    value: 0.8,
    label: "Stage 8",
  },
  {
    value: 0.9,
    label: "Stage 9",
  },
];

export default function BuildPage() {
  const [range, setRange] = useState(0);

  const getRangeDescription = (range) => {
    if (RangeItems[range].description) {
      return RangeItems[range].description;
    }
  };

  return (
    <div>
      <PageTitle title="Build" />
      <Card className="-p-a-3">
        <div className="gds-card -p-a-5">
          <div className="gds-form-group">
            <input
              className="gds-form-group__range-input"
              type="range"
              step=".1"
              min=".1"
              max=".9"
              value={range}
              onChange={({ target: { value: radius } }) => {
                setRange(radius);
              }}
            />
            <div
              style={{
                position: "relative",
                top: 10,
                height: 20,
              }}
            >
              {rangeItems.map((item, index) => {
                const numRangeItems = rangeItems.length - 1;
                const rangeItemPercentage = 100 / numRangeItems;
                const leftPosition = rangeItemPercentage * index;
                return (
                  <label
                    key={index}
                    className={`gds-form-group__range-input-label ${
                      range == item.value &&
                      "gds-form-group__range-input-label--active"
                    }`}
                    style={{
                      position: "absolute",
                      transform: "translateX(-50%)",
                      whiteSpace: "nowrap",
                      left: `${leftPosition}%`,
                    }}
                  >
                    {item.value}
                  </label>
                );
              })}
            </div>
          </div>
          {/* <p className="-m-t-4">{getRangeDescription(range)}</p> */}
        </div>
      </Card>
    </div>
  );
}
