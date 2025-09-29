import Navbar from "../../Components/Navbar/navbar";
import React, { useState } from "react";
import { postJson } from "../lib/api";
import { useNavigate, Link } from "react-router-dom";
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
    className={`w-full max-w-md rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 ${
      hasError ? "border-red-400" : "border-gray-300"
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
    className={`w-full max-w-md rounded-md border px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 ${
      hasError ? "border-red-400" : "border-gray-300"
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
     navigate("/home", { replace: true }); // go home on success
    } catch (err) {
      setServerError(err.message || "Registration failed");
      setServerFieldErrors(err.fieldErrors || {});
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50 py-10 px-8">
      <div className="px-4 text-left">
        <h2 className="text-2xl font-semibold mb-6 mt-6">Create new account</h2>

        {serverError && (
          <div className="mb-6 max-w-xl">
            <ErrorBanner>
              <strong className="font-semibold">Error:</strong> {serverError}
            </ErrorBanner>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left column: main form */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold">Sign up with email</h2>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6 max-w-xl text-left">
                <p className="text-gray-700 max-w-xl">
                  Welcome to  Egumeni Hub! A welcome message with further instructions will be sent to your email address after you
                  successfully enter your email address and a username. Didn't receive the email? Make sure to check your spam or
                  junk folders or contact us at untf-evaw@unwomen.org
                </p>

                {/* Email */}
                <div className="max-w-md">
                  <Label htmlFor="email">Email address<span className="text-red-600"> *</span></Label>
                  <TextInput
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => touch("email")}
                    hasError={touched.email && !!fieldErrors.email}
                    placeholder="you@example.com"
                  />
                  <p className="mt-2 text-sm text-gray-600 max-w-md">
                    The email address is not made public. It will only be used if you need to be contacted about your account or for
                    opted-in notifications.
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
                  <Label htmlFor="username">Username<span className="text-red-600"> *</span></Label>
                  <TextInput
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onBlur={() => touch("username")}
                    hasError={touched.username && !!fieldErrors.username}
                  />
                  <p className="mt-2 text-sm text-gray-600 max-w-md">
                    Several special characters are allowed, including space, period (.), hyphen (-), apostrophe ('), underscore (_), and
                    the @ sign.
                  </p>
                  {serverFieldErrors.username && <FieldError>{serverFieldErrors.username.join(", ")}</FieldError>}
                </div>

                {/* Password */}
                <div className="max-w-md">
                  <Label htmlFor="password">Password<span className="text-red-600"> *</span></Label>
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
                    <Label htmlFor="first">First name<span className="text-red-600"> *</span></Label>
                    <TextInput
                      id="first"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      onBlur={() => touch("firstName")}
                      hasError={touched.firstName && !!fieldErrors.firstName}
                    />
                    {serverFieldErrors.firstName && <FieldError>{serverFieldErrors.firstName.join(", ")}</FieldError>}
                  </div>

                  <div className="max-w-md">
                    <Label htmlFor="last">Last name<span className="text-red-600"> *</span></Label>
                    <TextInput
                      id="last"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      onBlur={() => touch("lastName")}
                      hasError={touched.lastName && !!fieldErrors.lastName}
                    />
                    {serverFieldErrors.lastName && <FieldError>{serverFieldErrors.lastName.join(", ")}</FieldError>}
                  </div>
                </div>

                {/* Affiliation Tag */}
                <div className="max-w-md">
                  <Label htmlFor="affiliation">Affiliation Tag<span className="text-red-600"> *</span></Label>
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
                  <Label htmlFor="expertise">Countries/territories of expertise<span className="text-red-600"> *</span></Label>
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
                  <Label htmlFor="residence">Country/territory of residence<span className="text-red-600"> *</span></Label>
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
                  <Label htmlFor="function">Function<span className="text-red-600"> *</span></Label>
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
                  <Label htmlFor="org">Organization<span className="text-red-600"> *</span></Label>
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
                      <span>
                        I agree with the / J'accepte la / Estoy de acuerdo con el{" "}
                        <a className="text-blue-700 underline decoration-2 underline-offset-2" href="#">data policy</a>
                        <span className="text-red-600"> *</span>
                      </span>
                    </label>
                  </div>

               
                  <div className="text-sm text-gray-700 mt-3">
                    
                    Have an account already? 
                    <Link to="/login" className="font-semibold text-blue-700 underline">
                                      Log in
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
                    {loading ? "Creating..." : "Create new account"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right column: help panel */}
          <aside className="lg:col-span-1">
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200 bg-gray-600">
                <h2 className="text-xl font-semibold text-white">Sign up</h2>
              </div>
              <div className="p-6 text-gray-700 leading-7">
                <p className="mb-4">Welcome to Egumeni Hub!</p>
                <p className="mb-4">Please enter the following information:</p>
                <ul className="list-disc ml-5 space-y-2">
                  <li><strong>Email Address</strong></li>
                  <li><strong>Username</strong> – it will appear next to your photo when your post a comment</li>
                  <li><strong>First name</strong></li>
                  <li><strong>Last name</strong></li>
                  <li><strong>Affiliation tag</strong> – you have the option to select multiple tags.</li>
                  <li><strong>Countries/territories of expertise</strong></li>
                  <li><strong>Country/territory of residence</strong></li>
                  <li><strong>Organization</strong></li>
                  <li><strong>Function</strong> – Job Title</li>
                </ul>
                <p className="mt-6">
                  <a className="text-blue-700 underline" href="#">Read more</a>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
    </>
  );
}
