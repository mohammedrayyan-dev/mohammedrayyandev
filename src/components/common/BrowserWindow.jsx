import { Lock } from "lucide-react"

const BrowserWindow = ({ src, alt, url = "" }) => {
  const displayUrl = url ? url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "") : "preview.app"

  return (
    <div className="w-full max-w-[540px] mx-auto rounded-2xl overflow-hidden border border-stone-200/90 bg-white shadow-xl shadow-stone-950/5 transition-all duration-500 group-hover/preview:shadow-2xl group-hover/preview:scale-[1.02] group-hover/preview:border-stone-300">
      {/* Sleek macOS Browser Header */}
      <div className="px-4 py-2.5 bg-stone-100/90 border-b border-stone-200/90 flex items-center justify-between gap-3 select-none">
        {/* macOS Traffic Lights */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] border border-black/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] border border-black/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] border border-black/10" />
        </div>

        {/* Centered Minimal Address Bar */}
        <div className="flex-1 max-w-[280px] flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-stone-200/80 text-[11px] font-mono text-stone-600 shadow-2xs truncate">
          <Lock className="w-2.5 h-2.5 text-stone-400 flex-shrink-0" />
          <span className="truncate">{displayUrl}</span>
        </div>

        {/* Spacer for visual balance */}
        <div className="w-10 flex-shrink-0" />
      </div>

      {/* Screenshot Viewport (Natural 16:10 ratio) */}
      <div className="aspect-[16/10] w-full bg-stone-900 overflow-hidden flex items-start justify-center">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-top filter contrast-[1.01]"
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default BrowserWindow
