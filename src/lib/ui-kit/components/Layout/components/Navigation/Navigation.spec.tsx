import { render } from "@testing-library/react";

import { Navigation } from "./Navigation.component";
import { RouterProvider } from "lib/utils";

describe("Navigation", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <RouterProvider>
        <Navigation />
      </RouterProvider>
    );

    expect(baseElement).toBeInTheDocument();
  });
});
