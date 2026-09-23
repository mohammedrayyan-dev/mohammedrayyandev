import { useState } from "react"
import {
  Mail,
  Copy,
  Check,
  Send,
  Github,
  Linkedin,
  MapPin,
  Clock,
  ArrowUpRight,
  MessageSquare,
} from "lucide-react"
import Container from "../components/common/Container"

const Contact = () => {
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const emailAddress = "mohammedrayyandmr@gmail.com"

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`
    setIsSubmitted(true)
  }

  return (
    <div className="py-12 sm:py-16 pb-28">
      <Container>
        <div className="space-y-12">
          
          {/* Header */}
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-stone-500 font-semibold font-mono">
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-stone-950 tracking-tight">
              Let's Discuss an Opportunity
            </h1>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Whether you have an open frontend engineering role, a client web project, or simply want to connect, my inbox is always open.
            </p>
          </div>

          {/* Contact Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Direct Reach-out & Social Info (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Availability Status Card */}
              <div className="p-6 rounded-3xl bg-white border border-stone-200 space-y-2 card-shadow">
                <p className="text-xs uppercase tracking-wider font-semibold text-stone-800 font-mono">
                  [ Current Engagement ]
                </p>
                <p className="text-sm font-bold text-stone-950">
                  Full Stack Developer Intern @ AlMukarramah
                </p>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Contributing full-stack features to Project T57 (global B2B, B2G & G2G trade platform). Open for engineering discussions and future roles.
                </p>
              </div>

              {/* Email Card with Copy & Direct Mail */}
              <div className="p-6 rounded-3xl bg-white border border-stone-200 space-y-4 card-shadow">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-900">
                    <Mail className="w-5 h-5" />
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-medium transition-all"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-stone-950" />
                        <span className="text-stone-950 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-stone-500" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-1 font-mono">
                    Email Address
                  </p>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-base sm:text-lg font-bold text-stone-950 hover:text-stone-700 transition-colors break-all"
                  >
                    {emailAddress}
                  </a>
                </div>

                <p className="text-xs text-stone-500 font-mono">
                  Direct reply guaranteed within 24 hours.
                </p>
              </div>

              {/* Social Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://www.linkedin.com/in/mohammedrayyan-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-white hover:bg-stone-50 border border-stone-200 hover:border-stone-400 transition-all group flex flex-col justify-between gap-4 card-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-900">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-stone-500 group-hover:text-stone-950 transition-transform" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-stone-950 group-hover:text-stone-700 transition-colors">
                      LinkedIn
                    </h3>
                    <p className="text-[11px] text-stone-500 font-mono">
                      mohammedrayyan-dev
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/mohammedrayyan-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-white hover:bg-stone-50 border border-stone-200 hover:border-stone-400 transition-all group flex flex-col justify-between gap-4 card-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-stone-100 flex items-center justify-center text-stone-900">
                      <Github className="w-4 h-4" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-stone-500 group-hover:text-stone-950 transition-transform" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-stone-950 group-hover:text-stone-700 transition-colors">
                      GitHub
                    </h3>
                    <p className="text-[11px] text-stone-500 font-mono">
                      mohammedrayyan-dev
                    </p>
                  </div>
                </a>
              </div>

              {/* Location & Timezone Details */}
              <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200 flex items-center justify-between text-xs text-stone-700 font-mono">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-stone-900" />
                  <span>India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-stone-600" />
                  <span>IST (UTC +5:30)</span>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Contact Form (7 cols) */}
            <div className="lg:col-span-7 rounded-3xl bg-white border border-stone-200 p-6 sm:p-10 card-shadow space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-stone-800 text-xs font-semibold uppercase tracking-wider font-mono">
                  <MessageSquare className="w-4 h-4 text-stone-900" />
                  <span>Send a direct message</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950">
                  Send a Message
                </h2>
                <p className="text-xs sm:text-sm text-stone-600">
                  Fill out the details below and clicking send will launch your email client pre-populated with your inquiry.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-800">
                      Your Name <span className="text-stone-900">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Alex Johnson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:bg-white focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-800">
                      Your Email <span className="text-stone-900">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:bg-white focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-800">
                    Subject or Role Title
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Frontend Developer Role / Project Proposal"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:bg-white focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-800">
                    Message <span className="text-stone-900">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Provide details about the position, project scope, or timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:bg-white focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-stone-950 hover:bg-stone-800 text-white font-bold text-sm shadow-md transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>

                {isSubmitted && (
                  <p className="text-center text-xs text-stone-900 pt-2 font-medium">
                    ✓ Your mail client should be opened with your inquiry ready to send!
                  </p>
                )}
              </form>
            </div>

          </div>

        </div>
      </Container>
    </div>
  )
}

export default Contact