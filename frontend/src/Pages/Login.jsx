import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

function Login({ onUserChange }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setIsSubmitting(true);
      setMessage("");
      setError("");

      const response = await api.post("/auth/login", form);
      setMessage(response.data.message || "Login successful.");
      setUser(response.data.user || null);
      onUserChange?.(response.data.user || null);
      navigate("/destinations");
    } catch (submitError) {
      setUser(null);
      setError(
        submitError.response?.data?.message ||
          submitError.response?.data?.error ||
          "Login failed."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="mx-auto max-w-xl px-6 py-16">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="mb-6 text-3xl font-bold text-slate-900">Log In</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
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
            {isSubmitting ? "Signing In..." : "Login"}
          </button>
        </form>

        {message ? (
          <p className="mt-4 rounded-lg bg-green-50 px-4 py-3 text-green-700">
            {message}
          </p>
        ) : null}

        {user ? (
          <div className="mt-4 rounded-lg bg-slate-50 px-4 py-3 text-slate-700">
            <p className="font-semibold">Welcome back, {user.name || user.firstName}.</p>
            <p>{user.email}</p>
          </div>
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

export default Login;