import userEvent from "@testing-library/user-event";

import { render } from "@testing-library/react";
import Form from "./Form";

it("navigates to the detail page on form submit", async () => {
  const user = userEvent.setup();
  const mockFn = jest.fn();
  const { getByPlaceholderText, getByRole } = render(
    <Form handleSubmit={mockFn} />
  );

  const input = getByPlaceholderText("ülke ismine göre ara");
  await user.type(input, "Turkey");
  const submitButton = getByRole("button");
  await user.click(submitButton);

  expect(mockFn).toHaveBeenCalled();
});
