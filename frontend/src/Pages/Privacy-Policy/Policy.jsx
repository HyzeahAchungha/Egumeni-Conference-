// src/Pages/Legal/PrivacyPolicy.jsx
import React from "react";
import Navbar from "../../Components/Navbar/navbar";
 import Footer from "../../Components/Footer/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-[900px] px-4 sm:px-6 md:px-8 py-10 text-gray-800">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Privacy Policy
        </h1>

        <p className="mt-6">
          This Privacy Policy explains how <strong>Egumeni </strong> (“we”, “us”, “our”)
          collects, uses, discloses, and safeguards personal information when you visit{" "}
          <strong>Egumeni — the EAGER Knowledge Hub</strong> and related pages (the “Site”),
          including conference registration pages, community features, and resources available at{" "}
          <code className="bg-gray-100 px-1 py-0.5 rounded">egumeni-conference-qvrx.onrender.com</code>{" "}
          (and any successor domains).
        </p>
        <p className="mt-4">
          By using the Site, you agree to this Privacy Policy. If you do not agree, please do not use the Site.
        </p>

        {/* 1) Who we are */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold">1) Who we are</h2>
          <ul className="mt-3 space-y-1">
            <li><strong>Controller:</strong> Egumeni </li>
            
          </ul>
          <p className="mt-3">
            We may operate the Site in partnership with regional or technical partners
            (including AUC entities and the World Bank EAGER programme). Where partners act
            as independent controllers or processors, we will indicate this below.
          </p>
        </section>

        {/* 2) What this policy covers */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold">2) What this policy covers</h2>
          <ul className="mt-3 list-disc pl-6 space-y-1">
            <li>Visitors to the Site</li>
            <li>Individuals who register for Egumeni/EAGER events (e.g., the 1–2 Oct 2025 meeting)</li>
            <li>Community participants (e.g., sign-ups, mailing lists, discussion groups)</li>
            <li>People who contact us or submit forms</li>
          </ul>
          <p className="mt-3">
            This Policy does not cover third-party platforms linked from the Site
            (e.g., external resources, event tools, video conferencing). Those are governed by
            their own privacy policies.
          </p>
        </section>

        {/* 3) Information we collect */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold">3) Information we collect</h2>

          <h3 className="mt-4 font-semibold">a) Information you provide</h3>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li><strong>Account/registration details:</strong> name, email, organization, role, country, language, accessibility preferences.</li>
            <li><strong>Event information:</strong> attendance, session preferences, dietary/access needs.</li>
            <li><strong>Community contributions:</strong> posts, comments, resources, uploaded files (if enabled).</li>
            <li><strong>Contact content:</strong> questions, feedback, support requests.</li>
            <li><strong>Consent/choices:</strong> newsletter opt-ins, cookie preferences.</li>
          </ul>

          <h3 className="mt-4 font-semibold">b) Information collected automatically</h3>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li><strong>Usage data:</strong> pages viewed, links clicked, session timestamps, referring URLs.</li>
            <li><strong>Device/technical data:</strong> IP address, browser type, operating system, screen size.</li>
            <li><strong>Cookies/local storage:</strong> for session management, preferences, analytics (see §8).</li>
          </ul>

          <h3 className="mt-4 font-semibold">c) Information from partners (where lawful)</h3>
          <p className="mt-2">
            We may receive limited user or aggregate event metrics from AUC partners (WGYD, HHSD, AU CIEFFA) and
            World Bank/EAGER programme systems when needed to run the event or community operations.
          </p>
        </section>

        {/* 4) How we use your information */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold">4) How we use your information</h2>
          <ul className="mt-3 list-disc pl-6 space-y-1">
            <li><strong>Provide &amp; operate the Site:</strong> authentication, session management, feature delivery.</li>
            <li><strong>Event operations:</strong> registration, scheduling, communications, interpretation support.</li>
            <li><strong>Community of Practice:</strong> membership management, moderation, knowledge-sharing.</li>
            <li><strong>Communications:</strong> service messages, updates, newsletters (with opt-out).</li>
            <li><strong>Improvement &amp; safety:</strong> analytics, quality assurance, troubleshooting, security monitoring.</li>
            <li><strong>Compliance:</strong> to meet legal obligations and enforce our Terms.</li>
          </ul>
        </section>

        {/* 5) Legal bases */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold">5) Legal bases (EEA/UK, where applicable)</h2>
          <ul className="mt-3 list-disc pl-6 space-y-1">
            <li><strong>Contractual necessity</strong> (Art. 6(1)(b) GDPR): to provide the Site/event you requested.</li>
            <li><strong>Legitimate interests</strong> (Art. 6(1)(f)): secure, improve, and measure the Site; operate the CoP; prevent abuse.</li>
            <li><strong>Consent</strong> (Art. 6(1)(a)): non-essential cookies, newsletters, optional profiling.</li>
            <li><strong>Legal obligation</strong> (Art. 6(1)(c)): recordkeeping, compliance.</li>
          </ul>
          <p className="mt-3">You can withdraw consent at any time (does not affect prior processing).</p>
        </section>

        {/* 6) Sharing your information */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold">6) Sharing your information</h2>
          <p className="mt-3">We may share personal information with:</p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li><strong>Service providers/processors</strong> strictly for: hosting, analytics, email delivery, meeting tools, form handling, translation/interpretation.</li>
            <li><strong>Programme partners</strong> (AUC WGYD/HHSD/AU CIEFFA, World Bank EAGER) for event/community coordination where relevant and lawful.</li>
            <li><strong>Legal &amp; safety:</strong> if required by law, regulation, or to protect rights, safety, or integrity of the Site and users.</li>
            <li><strong>Business continuity:</strong> in a reorganization or transition, subject to confidentiality and applicable law.</li>
          </ul>
          <p className="mt-3">We do <strong>not</strong> sell personal information.</p>
        </section>

        {/* 7) International transfers */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold">7) International transfers</h2>
          <p className="mt-3">
            Your information may be transferred to and processed in countries outside your own. Where required, we use appropriate
            safeguards (e.g., Standard Contractual Clauses, data-processing agreements, risk assessments).
          </p>
        </section>

        {/* 8) Cookies */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold">8) Cookies &amp; similar technologies</h2>
          <ul className="mt-3 list-disc pl-6 space-y-1">
            <li><strong>Strictly necessary cookies:</strong> security, session, load balancing.</li>
            <li><strong>Preferences:</strong> language, accessibility, saved settings.</li>
            <li><strong>Analytics:</strong> understanding feature usage to improve the Site.</li>
          </ul>
          <p className="mt-3">
            You can control cookies in your browser and via our cookie banner (where shown).
            Disabling some cookies may limit functionality.
          </p>
        </section>

        {/* 9) Data retention */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold">9) Data retention</h2>
          <p className="mt-3">
            We keep personal data only as long as necessary for:
          </p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>Providing the Site and the Egumeni/EAGER activities you requested</li>
            <li>Meeting legal, tax, and audit requirements</li>
            <li>Resolving disputes and enforcing terms</li>
          </ul>
          <p className="mt-3">
            When no longer needed, we securely delete or anonymize data.
          </p>
        </section>

        {/* 10) Your rights */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold">10) Your rights</h2>
          <p className="mt-3">Depending on your location, you may have rights to:</p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>Access the personal data we hold about you</li>
            <li>Rectify inaccurate or incomplete data</li>
            <li>Erase data (subject to legal/operational exceptions)</li>
            <li>Restrict or object to processing in certain cases</li>
            <li>Data portability</li>
            <li>Withdraw consent where processing is based on consent</li>
            <li>Lodge a complaint with a supervisory authority</li>
          </ul>
          <p className="mt-3">
            To exercise rights, contact <strong>Egumeni </strong>. We may verify your identity before acting on requests.
          </p>
        </section>

        {/* 11) Children’s privacy */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold">11) Children’s privacy</h2>
          <p className="mt-3">
            The Site is not intended for children under 13 (or the applicable age of consent).
            We do not knowingly collect personal data from children without appropriate consent.
            If you believe a child has provided data, contact us to remove it.
          </p>
        </section>

        {/* 12) Security */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold">12) Security</h2>
          <p className="mt-3">
            We implement administrative, technical, and physical safeguards appropriate to the risks
            (e.g., TLS encryption in transit, access controls, least-privilege, logging). No method of
            transmission or storage is 100% secure; we work to continuously improve our protections.
          </p>
        </section>

        {/* 13) Third-party links */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold">13) Third-party links &amp; integrations</h2>
          <p className="mt-3">
            The Site may link to external sites or tools (e.g., document hosts, conferencing platforms)
            with their own privacy policies. We are not responsible for third-party practices;
            review their policies before using those services.
          </p>
        </section>

        {/* 14) Changes */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold">14) Changes to this policy</h2>
          <p className="mt-3">
            We may update this Privacy Policy as our services or legal requirements evolve. We’ll post
            updates on this page with a new “Last updated” date. Material changes may be communicated by additional notice.
          </p>
        </section>

       
      </main>
      {/* <Footer /> */}
    </>
  );
}
