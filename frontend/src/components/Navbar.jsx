import { useState } from "react";
import { NavLink } from "react-router-dom";

const guestLinks = [
  { to: "/", label: "Home" },
  { to: "/destinations", label: "Destinations" },
  { to: "/lessons", label: "Lessons" },
  { to: "/trips", label: "Trips" },
  { to: "/login", label: "Login" },
  { to: "/register", label: "Register" },
];

const memberLinks = [
  { to: "/", label: "Home" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/destinations", label: "Destinations" },
  { to: "/lessons", label: "Lessons" },
  { to: "/trips", label: "Trips" },
];

function Navbar({ currentUser, onUserChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const links = currentUser ? memberLinks : guestLinks;

  function handleLinkClick() {
    setIsMenuOpen(false);
    setIsAccountMenuOpen(false);
  }

  function handleLogout() {
    onUserChange(null);
    setIsMenuOpen(false);
    setIsAccountMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 md:px-6">
        <div className="flex items-center justify-between">
          <NavLink
            to="/"
            className="flex items-center gap-2 text-lg font-bold tracking-tight text-slate-800"
          >
            <img
              src="/logo.png"
              alt="Voyage Francais logo"
              className="h-9 w-9 rounded-md object-contain"
            />
            <span>Voyage Francais</span>
          </NavLink>

          <button
            type="button"
            className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>

          <nav className="hidden flex-wrap items-center gap-2 md:flex md:gap-3">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `rounded-full px-3 py-1.5 text-sm font-medium transition ${
                    isActive
                      ? "bg-slate-800 text-white"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {currentUser ? (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsAccountMenuOpen((open) => !open)}
                  className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-200"
                  aria-expanded={isAccountMenuOpen}
                  aria-label="Toggle account menu"
                >
                  My Account
                </button>

                {isAccountMenuOpen ? (
                  <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-slate-200 bg-white p-2 shadow-lg">
                    <div className="border-b border-slate-100 px-3 py-2">
                      <p className="text-sm font-semibold text-slate-900">
                        {currentUser.name || currentUser.firstName}
                      </p>
                      <p className="text-xs text-slate-500">{currentUser.email}</p>
                    </div>
                    <div className="mt-2 space-y-1">

  <NavLink
    to="/dashboard"
    onClick={handleLinkClick}
    className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
  >
    Dashboard
  </NavLink>

  <NavLink
    to="/trips"
    onClick={handleLinkClick}
    className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
  >
    My Trips
  </NavLink>

  <button
    type="button"
    onClick={handleLogout}
    className="w-full rounded-xl px-3 py-2 text-left text-sm font-medium text-red-600 hover:bg-red-50"
  >
    Logout
  </button>

</div>
                  </div>
                ) : null}
              </div>
            ) : null}
          </nav>
        </div>

        {isMenuOpen ? (
          <nav className="mt-3 flex flex-col gap-2 border-t border-slate-200 pt-3 md:hidden">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-slate-800 text-white"
                      : "text-slate-700 hover:bg-slate-100"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {currentUser ? (
              <>
                <div className="rounded-md bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700">
                  Signed in as {currentUser.firstName || currentUser.name}
                </div>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded-md px-3 py-2 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                >
                  Logout
                </button>
              </>
            ) : null}
          </nav>
        ) : null}
      </div>
    </header>
  );
}

export default Navbar;
