import type React from "react";

const LoginForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = {
      id: "123",
      password: "aa",
    };

    try {
      const response = await fetch("http://localhost:3333/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Błąd podczas wysyłania danych");
      }

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const result = await response.json();
      // eslint-disable-next-line no-console
      console.log("Dane zostały wysłane:", result);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Błąd podczas wysyłania danych:", error);
    }
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
