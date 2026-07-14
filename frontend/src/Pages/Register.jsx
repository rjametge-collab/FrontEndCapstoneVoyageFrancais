import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

function Register({ onUserChange }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setIsSubmitting(true);
      setMessage("");
      setError("");

      const response = await api.post("/auth/register", form);
      setMessage(response.data.message || "Registration successful.");
      onUserChange?.(response.data.user || null);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
      navigate("/destinations");
    } catch (submitError) {
      setError(
        submitError.response?.data?.message ||
          submitError.response?.data?.error ||
          "Registration failed."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="mx-auto max-w-xl px-6 py-16">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="mb-6 text-3xl font-bold text-slate-900">Create an Account</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="First name"
              className="rounded-lg border border-slate-300 px-4 py-3"
              value={form.firstName}
              onChange={(event) =>
                setForm({ ...form, firstName: event.target.value })
              }
              required
            />

            <input
              type="text"
              placeholder="Last name"
              className="rounded-lg border border-slate-300 px-4 py-3"
              value={form.lastName}
              onChange={(event) =>
                setForm({ ...form, lastName: event.target.value })
              }
              required
            />
          </div>

          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-lg border border-slate-300 px-4 py-3"
            value={form.email}
            onChange={(event) =>
              setForm({ ...form, email: event.target.value })
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border border-slate-300 px-4 py-3"
            value={form.password}
            onChange={(event) =>
              setForm({ ...form, password: event.target.value })
            }
            required
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-slate-900 px-4 py-3 font-semibold text-white hover:bg-slate-800 disabled:opacity-60"
          >
            {isSubmitting ? "Creating Account..." : "Register"}
          </button>
        </form>

        {message ? (
          <p className="mt-4 rounded-lg bg-green-50 px-4 py-3 text-green-700">
            {message}
          </p>
        ) : null}

        {error ? (
          <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-red-700">
            {error}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default Register;