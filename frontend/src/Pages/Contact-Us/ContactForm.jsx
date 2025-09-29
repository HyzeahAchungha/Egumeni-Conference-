import React, { useState } from "react";
import Navbar from "../../Components/Navbar/navbar";
import Footer from "../../Components/Footer/Footer";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    reason: "",
    unTrustFund: false,
    spotlight: false,
  });

  const [status, setStatus] = useState({ loading: false, msg: "", ok: null });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // basic validation
    if (!formData.email || !formData.reason) {
      setStatus({ loading: false, ok: false, msg: "Email and reason are required." });
      return;
    }

    setStatus({ loading: true, msg: "", ok: null });

    // Map your state to EmailJS template variables
    const templateParams = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      reply_to: formData.email,     // commonly used by EmailJS
      reason: formData.reason,
      un_trust_fund: formData.unTrustFund ? "Yes" : "No",
      spotlight: formData.spotlight ? "Yes" : "No",
      submitted_at: new Date().toISOString(),
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      });

      setStatus({ loading: false, ok: true, msg: "Thanks! Your message has been sent." });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        reason: "",
        unTrustFund: false,
        spotlight: false,
      });
    } catch (err) {
      console.error(err);
      setStatus({ loading: false, ok: false, msg: "Could not send message. Please try again." });
    }
  };

  return (
    <div className="bg-[#f5f5f5] min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <div className="max-w-2xl px-6 py-10 bg-white shadow-sm rounded-md ml-12">
          <h2 className="text-2xl font-semibold mb-6">{t("contact.title")}</h2>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                 {t("contact.firstNameLabel")}
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder={t("contact.firstNamePlaceholder")}
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#ff7c3b] focus:outline-none"
              />
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                {t("contact.lastNameLabel")}
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                  placeholder={t("contact.lastNamePlaceholder")}
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#ff7c3b] focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
               {t("contact.emailLabel")} <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t("contact.emailPlaceholder")}
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#ff7c3b] focus:outline-none"
              />
            </div>

            {/* Reason */}
            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                {t("contact.reasonLabel")}  <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="reason"
                name="reason"
                placeholder={t("contact.reasonPlaceholder")}
                required
                value={formData.reason}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#ff7c3b] focus:outline-none"
              />
            </div>

            {/* Checkboxes */}
            <div className="space-y-3">
              <label className="flex items-start text-sm text-gray-700">
                <input
                  type="checkbox"
                  name="unTrustFund"
                  checked={formData.unTrustFund}
                  onChange={handleChange}
                  className="mr-2 mt-1"
                />
             {t("contact.partnerAucCheckbox")}
              </label>

              <label className="flex items-start text-sm text-gray-700">
                <input
                  type="checkbox"
                  name="spotlight"
                  checked={formData.spotlight}
                  onChange={handleChange}
                  className="mr-2 mt-1"
                />
               {t("contact.spotlightCheckbox")}
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status.loading}
              className="bg-[#F39A22] hover:bg-[#F39A22] disabled:opacity-60 text-white px-5 py-2 rounded-md text-sm font-medium transition"
              aria-busy={status.loading}
            >
             {status.loading ? t("contact.sending") : t("contact.submit")}
            </button>

            {status.msg && (
              <p className={`text-sm mt-2 ${status.ok ? "text-green-600" : "text-red-600"}`}>
                {status.msg}
              </p>
            )}
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ContactForm;
