import { render, screen, fireEvent } from "@testing-library/react";
import { Form } from "../";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.post("https://www.somesite11111.com", (req, res, ctx) => {
    return res(ctx.status(201));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Форма авторизации", () => {
  it("Отправляет запрос из формы", async () => {
    render(<Form buttonLabel="some" />);

    fireEvent.input(screen.getByTestId("login_input"), {
      target: { value: "login_text" },
    });
    fireEvent.input(screen.getByTestId("password_input"), {
      target: { value: "password_text" },
    });
    fireEvent.click(screen.getByTestId("submit_button"));

    await screen.findByTestId("request_status");

    expect(screen.getByTestId("request_status")).toHaveTextContent("200");
  });
});
