import { Card } from "gumdrops";
import PageTitle from "../components/common/title/pageTitle";

export default function BuildPage() {
  return (
    <div>
      <PageTitle title="Build" />
      <Card className="-p-a-3">
        <div className="gds-card -p-a-5">
          <div className="gds-form-group">
            <input
              className="gds-form-group__range-input"
              type="range"
              step="25"
              min="0"
              max="100"
              id="range-input-0"
            />
            <div
              style={{
                position: "relative",
                top: 10,
                height: 20,
              }}
            >
              <label
                className="gds-form-group__label"
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
                className="gds-form-group__label"
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
                className="gds-form-group__label"
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
                className="gds-form-group__label"
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
                className="gds-form-group__label"
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
        </div>
      </Card>
    </div>
  );
}
