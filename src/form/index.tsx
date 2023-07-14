import { useState } from "react";

interface IFormProps {
  buttonLabel: string;
}

export const Form = (props: IFormProps) => {
  const { buttonLabel = "submit" } = props;
  const [status, setStatus] = useState("");

  const postData = (login: string, password: string) => {
    fetch("https://www.somesite11111.com", {
      body: JSON.stringify({ login, password }),
      method: "POST",
    }).then((res) => {
      setStatus("200");
    });
  };

  const onFormSubmit = (e: any) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formFields = form.elements;
    const login = formFields[0].value;
    const password = formFields[1].value;
    postData(login, password);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <legend>Do you agree to the terms?</legend>
      <label>
        <input name="login" data-testid="login_input" />
      </label>
      <label>
        <input name="password" data-testid="password_input" />
      </label>
      <button data-testid="submit_button">{buttonLabel}</button>
      {!!status && <span data-testid="request_status">{status}</span>}
    </form>
  );
};
