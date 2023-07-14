import { render, screen, fireEvent } from "@testing-library/react";
import { Form } from "../";

describe("Форма авторизации", () => {
  it("Рендерится успешно", () => {
    const { baseElement } = render(<Form buttonLabel="some" />);

    expect(baseElement).toMatchSnapshot();

    expect(screen.getByText("some")).toBeInTheDocument();
  });
  it("Заполняется данными и вызывает ивент отправки", async () => {
    const { baseElement } = render(<Form buttonLabel="some" />);

    fireEvent.input(screen.getByTestId("login_input"), {
      target: { value: "login_text" },
    });
    fireEvent.input(screen.getByTestId("password_input"), {
      target: { value: "password_text" },
    });
    const login_input = screen.getByTestId("login_input") as HTMLInputElement;
    const password_input = screen.getByTestId(
      "password_input"
    ) as HTMLInputElement;

    expect(login_input.value).toBe("login_text");
    expect(password_input.value).toBe("password_text");

    expect(baseElement).toMatchSnapshot();
  });
});
