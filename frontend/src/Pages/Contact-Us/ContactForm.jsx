import { useState } from "react";
import Navbar from "../../Components/Navbar/navbar";
import Footer from "../../Components/Footer/Footer";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    reason: "",
    unTrustFund: false,
    spotlight: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Your form has been submitted.");
  };

  return (
    <div className="bg-[#f5f5f5] min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <div className="max-w-2xl px-6 py-10 bg-white shadow-sm rounded-md ml-12">
          <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#ff7c3b] focus:outline-none"
              />
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#ff7c3b] focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#ff7c3b] focus:outline-none"
              />
            </div>

            {/* Reason */}
            <div>
              <label
                htmlFor="reason"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Tell us the reason why you would like to contact us{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="reason"
                name="reason"
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
                Select if your organization is supported by the UN Trust Fund to
                End Violence against Women.
              </label>

              <label className="flex items-start text-sm text-gray-700">
                <input
                  type="checkbox"
                  name="spotlight"
                  checked={formData.spotlight}
                  onChange={handleChange}
                  className="mr-2 mt-1"
                />
                Select if your organization supported by the Spotlight
                Initiative.
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-[#0056b3] hover:bg-[#004494] text-white px-5 py-2 rounded-md text-sm font-medium transition"
            >
              Submit
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ContactForm;
