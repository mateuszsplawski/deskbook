import { render } from "@testing-library/react";
import { Navigation } from "./Navigation.component";

describe("Navigation", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Navigation />);

    expect(baseElement).toBeInTheDocument();
  });
});
