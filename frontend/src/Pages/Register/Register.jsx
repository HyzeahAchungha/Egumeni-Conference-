import Navbar from "../../Components/Navbar/navbar";
import Footer from "../../Components/Footer/Footer";
import React, { useState } from "react";
import { postJson } from "../lib/api";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

// ---- UI helpers ----
const Label = ({ htmlFor, children }) => (
  <label
    htmlFor={htmlFor}
    className="block text-left text-sm font-medium text-gray-700 mb-1"  // <- force text-left
  >
    {children}
  </label>
);

const TextInput = ({ id, value, onChange, onBlur, placeholder, type = "text", hasError }) => (
  <input
    id={id}
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    onBlur={onBlur}
    className={`w-full max-w-md rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 ${hasError ? "border-red-400" : "border-gray-300"
      }`}
  />
);

const ErrorBanner = ({ children }) => (
  <div className="rounded-md border border-red-300 bg-red-50 text-red-700 p-4 text-sm flex items-start gap-2">
    <svg className="h-5 w-5 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20Zm1 14h-2v-2h2v2Zm0-4h-2V6h2v6Z" />
    </svg>
    <div>{children}</div>
  </div>
);

const FieldError = ({ children }) => (
  <p className="mt-2 rounded-md border border-red-200 bg-red-50 text-red-700 text-sm p-3 leading-snug max-w-md text-left">
    {children}
  </p>
);

const Select = ({ id, value, onChange, onBlur, children, hasError }) => (
  <select
    id={id}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    className={`w-full max-w-md rounded-md border px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 ${hasError ? "border-red-400" : "border-gray-300"
      }`}
  >
    {children}
  </select>
);

// ---- Data options ----
const AFFILIATION_OPTIONS = [
  "Not affiliated",
  "Staff Member of a Civil Society Organisation",
  "UN Staff",
  "Practitioner",
  "Researcher",
];

const COUNTRY_OPTIONS = ["Cameroon", "Nigeria", "Ghana", "Kenya", "Rwanda", "Morocco", "South Africa"];

export default function RegistrationForm() {
  // Values
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [expertiseCountry, setExpertiseCountry] = useState("");
  const [residence, setResidence] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [organization, setOrganization] = useState("");
  const [agree, setAgree] = useState(true); // keep true so button shows
  const navigate = useNavigate();
  // submit state
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [serverFieldErrors, setServerFieldErrors] = useState({});

  // touched map
  const [touched, setTouched] = useState({});
  const touch = (k) => setTouched((t) => ({ ...t, [k]: true }));

  // simple validations
  const invalidEmail = email !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const required = (v) => v.trim() === "";

  const fieldErrors = {
    email: email === "" ? "Required" : invalidEmail ? "Invalid email" : "",
    username: required(username) ? "Required" : "",
    password: password.length < 8 ? "Must be at least 8 characters" : "",
    firstName: required(firstName) ? "Required" : "",
    lastName: required(lastName) ? "Required" : "",
    affiliation: required(affiliation) ? "Required" : "",
    expertiseCountry: required(expertiseCountry) ? "Required" : "",
    residence: required(residence) ? "Required" : "",
    jobTitle: required(jobTitle) ? "Required" : "",
    organization: required(organization) ? "Required" : "",
  };
  const hasErrors = Object.values(fieldErrors).some(Boolean) || !agree;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({
      email: true,
      username: true,
      password: true,
      firstName: true,
      lastName: true,
      affiliation: true,
      expertiseCountry: true,
      residence: true,
      jobTitle: true,
      organization: true,
    });
    if (hasErrors) return;

    setLoading(true);
    setServerError("");
    setServerFieldErrors({});

    const payload = {
      email,
      username,
      password,
      firstName,
      lastName,
      affiliationTags: affiliation ? [affiliation] : [],
      countriesExpertise: expertiseCountry ? [expertiseCountry] : [],
      countryResidence: residence,
      organization,
      jobFunction: jobTitle,
    };

    try {
      const data = await postJson("/api/auth/signup", payload);
      alert("Registered successfully!");
      navigate("/", { replace: true }); // go home on success
    } catch (err) {
      setServerError(err.message || "Registration failed");
      setServerFieldErrors(err.fieldErrors || {});
    } finally {
      setLoading(false);
    }
  };
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-10 px-8">
        <div className="px-4 text-left">
          <h2 className="text-2xl font-semibold mb-6 mt-6">{t("register.pageTitle")}</h2>

          {serverError && (
            <div className="mb-6 max-w-xl">
              <ErrorBanner>
                <strong className="font-semibold">{t("errors.error")}:</strong> {serverError}
              </ErrorBanner>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left column: main form */}
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold">{t("register.cardTitle")}</h2>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6 max-w-xl text-left">
                  <p className="text-gray-700 max-w-xl">
                    {t("register.intro")}
                  </p>

                  {/* Email */}
                  <div className="max-w-md">
                    <Label htmlFor="email"> {t("fields.email")}<span className="text-red-600"> *</span></Label>
                    <TextInput
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => touch("email")}
                      hasError={touched.email && !!fieldErrors.email}
                      placeholder={t("placeholders.email")}
                    />
                    <p className="mt-2 text-sm text-gray-600 max-w-md">
                     {t("help.emailPrivacy")}
                    </p>
                    {touched.email && fieldErrors.email && (
                      <FieldError>
                        Due to privacy concerns, we can't disclose the existence of registered email addresses. Please make sure the email
                        address is entered correctly and try again.
                      </FieldError>
                    )}
                    {serverFieldErrors.email && <FieldError>{serverFieldErrors.email.join(", ")}</FieldError>}
                  </div>

                  {/* Username */}
                  <div className="max-w-md">
                    <Label htmlFor="username">{t("fields.username")}<span className="text-red-600"> *</span></Label>
                    <TextInput
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      onBlur={() => touch("username")}
                      hasError={touched.username && !!fieldErrors.username}
                      placeholder={t("placeholders.username")}
                    />
                    <p className="mt-2 text-sm text-gray-600 max-w-md">
                       {t("help.usernameChars")}
                    </p>
                    {serverFieldErrors.username && <FieldError>{serverFieldErrors.username.join(", ")}</FieldError>}
                  </div>

                  {/* Password */}
                  <div className="max-w-md">
                    <Label htmlFor="password"> {t("fields.password")}<span className="text-red-600"> *</span></Label>
                    <TextInput
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onBlur={() => touch("password")}
                      hasError={touched.password && !!fieldErrors.password}
                      placeholder="••••••••"
                    />
                    {touched.password && fieldErrors.password && <FieldError>{fieldErrors.password}</FieldError>}
                    {serverFieldErrors.password && <FieldError>{serverFieldErrors.password.join(", ")}</FieldError>}
                  </div>

                  {/* Names — stacked (each on its own line) */}
                  <div className="space-y-6">
                    <div className="max-w-md">
                      <Label htmlFor="first">{t("fields.firstName")}<span className="text-red-600"> *</span></Label>
                      <TextInput
                        id="first"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        onBlur={() => touch("firstName")}
                        hasError={touched.firstName && !!fieldErrors.firstName}
                        placeholder={t("placeholders.firstName")}
                      />
                      {serverFieldErrors.firstName && <FieldError>{serverFieldErrors.firstName.join(", ")}</FieldError>}
                    </div>

                    <div className="max-w-md">
                      <Label htmlFor="last">{t("fields.lastName")}<span className="text-red-600"> *</span></Label>
                      <TextInput
                        id="last"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        onBlur={() => touch("lastName")}
                        hasError={touched.lastName && !!fieldErrors.lastName}
                        placeholder={t("placeholders.lastName")}

                      />
                      {serverFieldErrors.lastName && <FieldError>{serverFieldErrors.lastName.join(", ")}</FieldError>}
                    </div>
                  </div>

                  {/* Affiliation Tag */}
                  <div className="max-w-md">
                    <Label htmlFor="affiliation">{t("fields.affiliation")}<span className="text-red-600"> *</span></Label>
                    <Select
                      id="affiliation"
                      value={affiliation}
                      onChange={(e) => setAffiliation(e.target.value)}
                      onBlur={() => touch("affiliation")}
                      hasError={touched.affiliation && !!fieldErrors.affiliation}
                    >
                      <option value="">- Select -</option>
                      {AFFILIATION_OPTIONS.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </Select>
                    {serverFieldErrors.affiliation && <FieldError>{serverFieldErrors.affiliation.join(", ")}</FieldError>}
                  </div>

                  {/* Expertise country */}
                  <div className="max-w-md">
                    <Label htmlFor="expertise">{t("fields.expertise")}<span className="text-red-600"> *</span></Label>
                    <Select
                      id="expertise"
                      value={expertiseCountry}
                      onChange={(e) => setExpertiseCountry(e.target.value)}
                      onBlur={() => touch("expertiseCountry")}
                      hasError={touched.expertiseCountry && !!fieldErrors.expertiseCountry}
                    >
                      <option value="">- Select -</option>
                      {COUNTRY_OPTIONS.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </Select>
                    {serverFieldErrors.countriesExpertise && (
                      <FieldError>{serverFieldErrors.countriesExpertise.join(", ")}</FieldError>
                    )}
                  </div>

                  {/* Residence */}
                  <div className="max-w-md">
                    <Label htmlFor="residence"> {t("fields.residence")}<span className="text-red-600"> *</span></Label>
                    <Select
                      id="residence"
                      value={residence}
                      onChange={(e) => setResidence(e.target.value)}
                      onBlur={() => touch("residence")}
                      hasError={touched.residence && !!fieldErrors.residence}
                    >
                      <option value="">- Select -</option>
                      {COUNTRY_OPTIONS.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </Select>
                    {serverFieldErrors.countryResidence && <FieldError>{serverFieldErrors.countryResidence.join(", ")}</FieldError>}
                  </div>

                  {/* Function */}
                  <div className="max-w-md">
                    <Label htmlFor="function">{t("fields.function")}<span className="text-red-600"> *</span></Label>
                    <TextInput
                      id="function"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      onBlur={() => touch("jobTitle")}
                      hasError={touched.jobTitle && !!fieldErrors.jobTitle}
                    />
                    {serverFieldErrors.jobFunction && <FieldError>{serverFieldErrors.jobFunction.join(", ")}</FieldError>}
                  </div>

                  {/* Organization */}
                  <div className="max-w-md">
                    <Label htmlFor="org">{t("fields.organization")}<span className="text-red-600"> *</span></Label>
                    <TextInput
                      id="org"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      onBlur={() => touch("organization")}
                      hasError={touched.organization && !!fieldErrors.organization}
                    />
                    {serverFieldErrors.organization && <FieldError>{serverFieldErrors.organization.join(", ")}</FieldError>}
                  </div>

                  {/* Agreement + login (left) */}
                  <div className="mt-6 border-t pt-4 max-w-xl text-left">
                    <div className="flex items-start justify-start">
                      <label className="flex items-start gap-3 text-sm text-gray-700">
                        <input
                          type="checkbox"
                          className="mt-1 h-4 w-4"
                          checked={agree}
                          onChange={(e) => setAgree(e.target.checked)}
                        />
                        <Trans i18nKey="register.agree">
                            I agree with the <a className="text-blue-700 underline decoration-2 underline-offset-2" href="#">data policy</a><span className="text-red-600"> *</span>
                          </Trans>
                      </label>
                    </div>


                    <div className="text-sm text-gray-700 mt-3">

                      {t("register.haveAccount")}{" "}
                      <Link to="/login" className="font-semibold text-blue-700 underline-none">
                         {t("login")}
                      </Link>
                    </div>
                  </div>


                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={!agree || loading}
                      className="rounded-lg bg-blue-700 text-white px-5 py-3 font-medium shadow hover:bg-blue-800 disabled:opacity-60"
                      style={{ backgroundColor: '#F39A22  ', color: '#fff' }}
                    >
                         {loading ? t("register.creating") : t("register.submit")}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right column: help panel */}
            <aside className="lg:col-span-1">
              <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-600">
                  <h2 className="text-xl font-semibold text-white">{t("register.side.title")}</h2>
                </div>
                <div className="p-6 text-gray-700 leading-7">
                  <p className="mb-4">{t("register.side.welcome")}</p>
                  <p className="mb-4">{t("register.side.enterInfo")}</p>
                  <ul className="list-disc ml-5 space-y-2">
                    <li><strong>{t("fields.email")}</strong></li>
                    <li><strong>{t("fields.username")}</strong> – {t("register.side.usernameNote")}</li>
                    <li><strong>{t("fields.firstName")}</strong></li>
                    <li><strong>{t("fields.lastName")}</strong></li>
                    <li><strong>{t("fields.affiliation")}</strong> — {t("register.side.tagsNote")}</li>
                    <li><strong>{t("fields.expertise")}</strong></li>
                    <li><strong>{t("fields.residence")}</strong></li>
                    <li><strong>{t("fields.organization")}</strong></li>
                    <li><strong>{t("fields.function")}</strong> — {t("register.side.jobTitle")}</li>
                  </ul>
                  <p className="mt-6">
                    <a className="text-blue-700 underline" href="#">{t("register.side.readMore")}</a>
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
