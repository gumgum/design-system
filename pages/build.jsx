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
              step="1"
              min="0"
              max="4"
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
              <label
                className={`gds-form-group__range-input-label ${
                  range == 0 && "gds-form-group__range-input-label--active"
                }`}
                style={{
                  position: "absolute",
                  transform: "translateX(-50%)",
                  whiteSpace: "nowrap",
                  left: "0%",
                }}
              >
                Stage 1
              </label>
              <label
                className={`gds-form-group__range-input-label ${
                  range == 1 && "gds-form-group__range-input-label--active"
                }`}
                style={{
                  position: "absolute",
                  transform: "translateX(-50%)",
                  whiteSpace: "nowrap",
                  left: "25%",
                }}
              >
                Stage 2
              </label>
              <label
                className={`gds-form-group__range-input-label ${
                  range == 2 && "gds-form-group__range-input-label--active"
                }`}
                style={{
                  position: "absolute",
                  transform: "translateX(-50%)",
                  whiteSpace: "nowrap",
                  left: "50%",
                }}
              >
                Stage 3
              </label>
              <label
                className={`gds-form-group__range-input-label ${
                  range == 3 && "gds-form-group__range-input-label--active"
                }`}
                style={{
                  position: "absolute",
                  transform: "translateX(-50%)",
                  whiteSpace: "nowrap",
                  left: "75%",
                }}
              >
                Stage 4
              </label>
              <label
                className={`gds-form-group__range-input-label ${
                  range == 4 && "gds-form-group__range-input-label--active"
                }`}
                style={{
                  position: "absolute",
                  transform: "translateX(-50%)",
                  whiteSpace: "nowrap",
                  left: "100%",
                }}
              >
                Stage 5
              </label>
            </div>
          </div>
          <p className="-m-t-4">{getRangeDescription(range)}</p>
        </div>
      </Card>
    </div>
  );
}
