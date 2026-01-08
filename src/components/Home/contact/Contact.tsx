  "use client";
  import React, { useRef, useState } from "react";
  import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
  import emailjs from "@emailjs/browser"
import { Icon } from "@iconify/react/dist/iconify.js";
  const ContactME = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
const formRef = useRef<HTMLFormElement>(null);

    const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData(prev => ({ ...prev, [field]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        // replace default alert with a temporary no-op, then show a custom modal
        const _prevAlert = window.alert;
        window.alert = () => {};

        /* create modal */
        const modal = document.createElement("div");
        modal.innerHTML = `
          <div style="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;z-index:9999">
            <div id="copilot-overlay" style="position:absolute;inset:0;background:rgba(2,6,23,0.6);backdrop-filter:blur(4px)"></div>
            <div role="dialog" aria-modal="true" style="position:relative;z-index:10000;max-width:420px;width:90%;background:#071226;color:#fff;border-radius:12px;padding:18px;box-shadow:0 12px 40px rgba(2,6,23,0.6);font-family:system-ui">
              <div style="display:flex;gap:12px;align-items:center">
                <div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#06b6d4,#0ea5e9);display:flex;align-items:center;justify-content:center;font-weight:700">✓</div>
                <div>
                  <div style="font-size:18px;font-weight:700">Message sent</div>
                  <div style="opacity:0.85;margin-top:6px;font-size:14px">Thanks for reaching out — I’ll get back to you soon.</div>
                </div>
              </div>
              <div style="display:flex;justify-content:flex-end;margin-top:14px">
                <button id="copilot-close" style="background:#fff;color:#061826;padding:8px 12px;border-radius:8px;font-weight:700;border:none;cursor:pointer">Close</button>
              </div>
            </div>
          </div>
        `;
        document.body.appendChild(modal);

        const cleanup = () => {
          modal.remove();
          window.alert = _prevAlert;
        };

        modal.querySelector("#copilot-overlay")?.addEventListener("click", cleanup);
        modal.querySelector("#copilot-close")?.addEventListener("click", cleanup);

        // auto-close after 4.5s
        setTimeout(cleanup, 4500);
        alert("Message sent successfully!");
        formRef.current?.reset();
      })
      .catch(() => {
        alert("Failed to send message. Please try again.");
      })
      .finally(() => setLoading(false));
  };

    return (
      <section id="contact" className="w-full   min-h-screen  py-12">
        <div className="w-full  max-w-[1440px]  mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center min-h-[600px] gap-6 lg:gap-10">

            {/* Left - Contact info */}
            <div className="w-full lg:w-[38%] flex flex-col gap-8 items-start">
              <div className="flex flex-col gap-3 w-full">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4 sm:gap-0">
                  <div className="flex items-center gap-3 bg-[#1B525E] rounded-full p-2">
                    <div className="flex items-center bg-[#45727D] rounded-full p-2">
                      <div className="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-white">?</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold  px-2 text-white">Contact</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <a aria-label="Facebook" href="https://www.facebook.com/share/17HG9TK76r/" className="text-[#45727D] hover:text-blue-700/90 text-2 xl"><FaFacebookF /></a>
                    <a aria-label="GitHub" href="#" className="text-[#45727D] hover:text-gray-900 text-2xl"><FaGithub /></a>
                    <a aria-label="LinkedIn" href="#" className="text-[#45727D] hover:text-blue-500  text-2xl"><FaLinkedinIn /></a>
                    <a aria-label="Instagram" href="https://www.instagram.com/aqil_ey2024?igsh=MW10dXdoajhvODN6Yw==" className="text-[#45727D] hover:text-purple-600 text-2xl"><FaInstagram /></a>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Get in touch</h2>

                <p className="text-base text-white">
                  if you have a project, idea, or just want to
                  <br />
                  say hello, feel free to contact me.
                </p>
              </div>

              <div className="flex  flex-col w-full gap-4">
                <div className="flex h-[96px] items-center w-full p-6 rounded-2xl bg-[#1B525E]">
                  <div className="flex-1 flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#45727d] rounded-sm grid grid-col-3 justify-center content-center">
                      <Icon icon="ic:email" className="w-10 h-10 " />
                      </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">My Email</h3>
                      <p className="text-base text-white">mraqil1236@gmail.com</p>
                    </div>
                  </div>
                  {/* this button direct to gmail.com for send message / without milto */}
                  <button className="ml-3 w-15 h-15 p-2  rounded-full   bg-dark-mode-a hover:opacity-80" aria-label="Send email"><img src="https://i.ibb.co/5X2y2p75/button.png"/></button>
                </div>

                <div className="flex items-center h-[96px] w-full p-6 rounded-2xl bg-[#1B525E]">
                  <div className="flex-1 flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#45727d] rounded-sm grid content-center grid-col-3 justify-center">
                      <Icon icon="ic:phone" className="w-10 h-10" />
                      </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Call me</h3>
                      <p className="text-base text-white">(93) 747-620-796</p>
                    </div>
                  </div>
                  <button className="ml-3 w-15 h-15 p-2 rounded-full bg-dark-mode-a hover:opacity-80" aria-label="Call" onClick={() => window.location.href = "tel:+93747620796"}><img src="https://i.ibb.co/5X2y2p75/button.png"/></button>
                </div>

                <div className="flex items-center h-[96px] w-full p-6 rounded-2xl bg-[#1B525E] ">
                  <div className="flex-1 flex items-start gap-4">
                    <div className="w-12 h-12  bg-[#45727d] rounded-sm  grid grid-col-3 content-center justify-center " >
                    <Icon  icon="ci:location"  className="w-10 h-10 "/>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Location</h3>
                      <p className="text-base text-white">Jebrael, Herat, Afghanistan</p>
                    </div>
                  </div>
                  
                  <button className="ml-3 w-15 h-15 p-2 rounded-full bg-dark-mode-a  hover:opacity-80" aria-label="View location" onClick={() => window.location.href = "https://maps.app.goo.gl/EiKvY4dvHqnn7EUK6"}><img src="https://i.ibb.co/5X2y2p75/button.png"/></button>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="w-full lg:w-[44%]  sm:w-full flex justify-center items-center">
              <div className="w-full sm:max-w-[900px]  max-w-[584px] bg-[#1B525E] h-[512px] rounded-2xl p-10">
                <form ref={formRef}  onSubmit={handleSubmit} className="flex justify-center  flex-col gap-4 w-full h-full">
                  <input
                    className="w-full bg-[#45727D] text-white placeholder:text-white/70 rounded-md py-3 px-4"
                    placeholder="Name"
                     name="user_name"
                    onChange={handleInputChange("name")}
                    required
                  />

                  <input
                    type="email"
                     name="user_email"
                    className="w-full bg-[#45727D] text-white placeholder:text-white/70 rounded-md py-3 px-4"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange("email")}
                    aria-label="Email"
                  />

                  <textarea
                    className="w-full bg-[#45727D] text-white placeholder:text-white/70 rounded-md py-3 px-4 min-h-[180px]"
                    placeholder="Message"
                    name="message"
                    onChange={handleInputChange("message")}
                    required
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-3 px-6 rounded-md ${ loading ? 'bg-green-300' :'bg-white' } text-[#111111] font-bold hover:bg-gray-100 transition-colors`}
                  >
                    {loading ?" Send Successfuly! " : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    );
  }

  export default ContactME;