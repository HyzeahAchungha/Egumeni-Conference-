
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { postJson } from "../lib/api";
import Navbar from "../../Components/Navbar/navbar";
import Footer from "../../Components/Footer/Footer";
import { useTranslation } from "react-i18next";
const Label = ({ htmlFor, children }) => (
  <label
    htmlFor={htmlFor}
    className="block text-sm font-semibold text-gray-800 mb-1 text-left"
  >
    {children}
  </label>
);

const TextInput = ({ id, value, onChange, type = "text" }) => (
  <input
    id={id}
    type={type}
    value={value}
    onChange={onChange}
    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
  />
);

const ErrorBanner = ({ children }) => (
  <div className="rounded-md border border-red-300 bg-red-50 text-red-700 p-3 text-sm">
    {children}
  </div>
);

export default function Login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setServerError("");
    try {
      await postJson("/api/auth/login", { identifier, password });
      navigate("/", { replace: true });
    } catch (err) {
      setServerError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray text-left px-12">
        <h2 className="text-2xl font-semibold mb-6  mt-6">{t("auth:login.pageTitle")}</h2>


        <div className="w-full max-w-[920px]">
          <div className="w-full rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold">{t("auth:login.cardTitle")}</h2>
            </div>


            <form onSubmit={onSubmit} className="p-6 space-y-5 max-w-lg">
              <p className="text-gray-700">{t("auth:login.welcomeBack")}</p>

              {serverError && <ErrorBanner>{serverError}</ErrorBanner>}

              <div>
                <Label htmlFor="identifier">
                  {t("auth:login.identifier")} <span className="text-red-600">*</span>
                </Label>
                <TextInput
                  id="identifier"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                />
                <p className="mt-2 text-sm text-gray-600">
                  {t("auth:login.identifierHelp")}
                </p>
              </div>

              <div>
                <Label htmlFor="password">
                  {t("auth:fields.password")} <span className="text-red-600">*</span>
                </Label>
                <TextInput
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="mt-2">
                  <a href="#" className="text-sm font-semibold text-blue-700 underline">
                    {t("auth:login.forgot")}

                  </a>
                </div>
              </div>


              <div className="mt-5 pt-4 border-t border-gray-200 flex items-center justify-between">
                <p className="text-gray-800">
                  {t("auth:login.noAccount")}{" "}
                  <Link to="/register" className="font-semibold text-blue-700 underline">
                    {t("auth:login.signupLink")}
                  </Link>
                </p>


              </div>
              <button
                type="submit"
                disabled={loading}
                className="rounded-lg bg-blue-700 text-white px-5 py-2.5 font-semibold shadow hover:bg-blue-800 disabled:opacity-60"
                style={{ backgroundColor: '#F39A22', color: '#fff' }}
              >
                {loading ? t("auth:login.loggingIn") : t("auth:login.button")}
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
