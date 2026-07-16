"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ArrowLeft, 
  Send, 
  Copy, 
  Check, 
  AlertTriangle, 
  Calendar, 
  ClipboardList, 
  Clock, 
  MessageSquare,
  Users,
  CheckSquare,
  Sparkles,
  Info
} from "lucide-react"

// Types for parsed patient task
interface PatientTask {
  id: string
  rawName: string
  detectedName: string
  rawQuery: string
  detectedConcern: string
  priority: "high" | "medium" | "low"
  reason: string
  suggestedAction: string
  draftMessageEn: string
  draftMessageHi: string
}

// Sample text for the user to try
const EXAMPLE_DASHBOARD_DATA = `1. Rajesh Verma, severe toothache in lower molar since yesterday, wants emergency root canal.
2. Suman Singh, WhatsApp query: "What are the timings of Dr. Anil? I want to get normal teeth cleaning done next Monday."
3. Amit Patel, needs to confirm his dental implant appointment for tomorrow at 11:30 AM.
4. Preeti Sharma, wants to know if physical consult fee is Rs 200 or more.`

export default function AdminDashboardPage() {
  const [inputText, setInputText] = React.useState("")
  const [tasks, setTasks] = React.useState<PatientTask[]>([])
  const [isProcessing, setIsProcessing] = React.useState(false)
  const [copiedId, setCopiedId] = React.useState<string | null>(null)
  const [copiedLang, setCopiedLang] = React.useState<string | null>(null)
  const [checkedActions, setCheckedActions] = React.useState<Record<string, boolean>>({})

  // Simple local NLP rules parser for dashboard text
  const analyzeDashboardText = (text: string): PatientTask[] => {
    const lines = text.split(/\n+/).filter(line => line.trim().length > 0)
    
    return lines.map((line, index) => {
      const cleanLine = line.trim()
      
      // Basic name detection
      let name = `Patient #${index + 1}`
      const nameMatch = cleanLine.match(/(?:(?:Patient|Name):\s*)?([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/)
      if (nameMatch && nameMatch[1]) {
        name = nameMatch[1]
      }

      // Priority and Concern classification
      let priority: "high" | "medium" | "low" = "low"
      let concern = "General Query"
      let reason = "General information request"
      let suggestedAction = "Answer query regarding clinic details"
      
      const lowerLine = cleanLine.toLowerCase()

      if (
        lowerLine.includes("pain") || 
        lowerLine.includes("ache") || 
        lowerLine.includes("bleed") || 
        lowerLine.includes("fracture") || 
        lowerLine.includes("broken") || 
        lowerLine.includes("emergency") ||
        lowerLine.includes("दर्द") ||
        lowerLine.includes("खून") ||
        lowerLine.includes("सूजन")
      ) {
        priority = "high"
        concern = lowerLine.includes("rct") || lowerLine.includes("root canal") ? "Root Canal Treatment" : "Dental Emergency"
        reason = "Severe discomfort or critical issue needing immediate care"
        suggestedAction = "Contact immediately to schedule an urgent slot"
      } else if (
        lowerLine.includes("confirm") || 
        lowerLine.includes("book") || 
        lowerLine.includes("appointment") || 
        lowerLine.includes("implant") ||
        lowerLine.includes("braces") ||
        lowerLine.includes("wiring") ||
        lowerLine.includes("अपॉइंटमेंट")
      ) {
        priority = "medium"
        concern = lowerLine.includes("implant") 
          ? "Dental Implant Surgery" 
          : lowerLine.includes("braces") 
            ? "Orthodontic Wiring" 
            : "Appointment Booking"
        reason = "Active treatment scheduling or booking verification"
        suggestedAction = "Verify available slot and confirm schedule"
      } else {
        priority = "low"
        concern = lowerLine.includes("clean") || lowerLine.includes("scale") ? "Teeth Cleaning" : "General Inquiry"
        reason = "General consultation or clinic information lookup"
        suggestedAction = "Provide details and offer general scheduling"
      }

      // Draft messages
      const draftMessageEn = `Hello ${name}, this is Archana Dental Clinic. Regarding your query about "${concern}": Dr. Anil Prajapati (BDS) is available to consult. Would you like to schedule a slot during our hours (10am-2pm or 4pm-8pm)? Our consultation fee is ₹200. Please let us know. Thank you!`
      const draftMessageHi = `नमस्ते ${name}, मैं अर्चना डेंटल क्लिनिक से बात कर रहा हूँ। आपके "${concern}" की पूछताछ के संबंध में: डॉ. अनिल प्रजापति (BDS) परामर्श के लिए उपलब्ध हैं। क्या आप सुबह 10-2 या शाम 4-8 के बीच स्लॉट बुक करना चाहेंगे? हमारा परामर्श शुल्क ₹200 है। कृपया हमें बताएं। धन्यवाद!`

      return {
        id: `task-${index}-${Date.now()}`,
        rawName: name,
        detectedName: name,
        rawQuery: cleanLine,
        detectedConcern: concern,
        priority,
        reason,
        suggestedAction,
        draftMessageEn,
        draftMessageHi
      }
    })
  }

  const handleProcess = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputText.trim()) return

    setIsProcessing(true)
    
    // Simulate processing time
    setTimeout(() => {
      const results = analyzeDashboardText(inputText)
      setTasks(results)
      setIsProcessing(false)
      
      // Reset checklist state
      const initialChecked: Record<string, boolean> = {}
      results.forEach(task => {
        initialChecked[`${task.id}-call`] = false
        initialChecked[`${task.id}-msg`] = false
      })
      setCheckedActions(initialChecked)
    }, 800)
  }

  const handleLoadExample = () => {
    setInputText(EXAMPLE_DASHBOARD_DATA)
  }

  const handleCopyText = (text: string, id: string, lang: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setCopiedLang(lang)
    setTimeout(() => {
      setCopiedId(null)
      setCopiedLang(null)
    }, 2000)
  }

  const toggleAction = (key: string) => {
    setCheckedActions(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  // Group tasks by priority
  const highPriority = tasks.filter(t => t.priority === "high")
  const mediumPriority = tasks.filter(t => t.priority === "medium")
  const lowPriority = tasks.filter(t => t.priority === "low")

  return (
    <div className="min-h-screen bg-background text-foreground py-10 px-4 md:px-8 max-w-7xl mx-auto flex flex-col gap-8">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-border pb-6">
        <div className="flex items-center gap-4">
          <Link 
            href="/"
            className="p-2 border border-border rounded-xl hover:bg-muted transition-colors text-muted-foreground hover:text-foreground cursor-pointer"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <span className="text-xs font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
              Clinic Operations
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight mt-1">
              Patient Coordinator Dashboard (Admin)
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 p-0.5">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-bold leading-none">Archana Dental Clinic</span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Umaria, MP</span>
          </div>
        </div>
      </div>

      {/* Main Form Dashboard Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Input Panel */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="border border-border rounded-3xl bg-background p-6 shadow-sm flex flex-col gap-4 relative overflow-hidden">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center gap-2 text-primary font-bold text-lg">
              <ClipboardList className="h-5 w-5" />
              <h2>Analyze Patient Stream</h2>
            </div>
            
            <p className="text-xs text-muted-foreground leading-relaxed">
              Paste message lists, raw query details, or dashboard exports. The system parses names, prioritizes clinical urgencies, and crafts pre-composed copy-to-send messages.
            </p>

            <form onSubmit={handleProcess} className="flex flex-col gap-4">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Example: Rajesh Verma, severe toothache in lower molar since yesterday..."
                className="w-full h-48 rounded-2xl border border-border bg-muted/20 px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors resize-none placeholder:text-muted-foreground"
              />

              <div className="flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleLoadExample}
                  className="rounded-xl border border-border bg-muted/40 hover:bg-muted text-xs font-semibold px-4 py-2.5 transition-colors cursor-pointer"
                >
                  Load Example Data
                </button>
                <button
                  type="submit"
                  disabled={!inputText.trim() || isProcessing}
                  className="flex-1 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-4 py-2.5 text-xs shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isProcessing ? (
                    <Clock className="h-4 w-4 animate-spin" />
                  ) : (
                    <Sparkles className="h-4 w-4" />
                  )}
                  Process Patient List
                </button>
              </div>
            </form>
          </div>

          {/* Quick Stats Panel */}
          {tasks.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="grid grid-cols-3 gap-4"
            >
              <div className="border border-border bg-red-500/5 rounded-2xl p-4 text-center">
                <p className="text-xs text-red-500 font-bold uppercase tracking-wider">High / Emergency</p>
                <p className="text-3xl font-extrabold text-red-600 mt-1">{highPriority.length}</p>
              </div>
              <div className="border border-border bg-amber-500/5 rounded-2xl p-4 text-center">
                <p className="text-xs text-amber-500 font-bold uppercase tracking-wider">Treatments / Confirm</p>
                <p className="text-3xl font-extrabold text-amber-600 mt-1">{mediumPriority.length}</p>
              </div>
              <div className="border border-border bg-blue-500/5 rounded-2xl p-4 text-center">
                <p className="text-xs text-blue-500 font-bold uppercase tracking-wider">General Inquiry</p>
                <p className="text-3xl font-extrabold text-blue-600 mt-1">{lowPriority.length}</p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Right Output Panel */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <AnimatePresence mode="wait">
            {tasks.length === 0 ? (
              <motion.div 
                key="empty-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="border border-dashed border-border rounded-3xl p-12 text-center flex flex-col items-center justify-center gap-4 text-muted-foreground min-h-[360px]"
              >
                <Users className="h-12 w-12 stroke-[1.5]" />
                <h3 className="font-bold text-lg text-foreground">No Patients Analyzed Yet</h3>
                <p className="text-sm max-w-sm">
                  Load the example data or paste details of incoming queries to prioritize and draft responses.
                </p>
              </motion.div>
            ) : (
              <motion.div 
                key="results-panel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="flex flex-col gap-6"
              >
                {/* 1. Prioritized Patients List */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2 font-bold text-lg text-foreground">
                    <AlertTriangle className="h-5 w-5 text-primary" />
                    <h2>1. Priority Processing Queue</h2>
                  </div>

                  <div className="flex flex-col gap-4">
                    {/* Render High Priority */}
                    {highPriority.map(task => (
                      <PatientTaskCard 
                        key={task.id} 
                        task={task} 
                        copiedId={copiedId}
                        copiedLang={copiedLang}
                        onCopy={handleCopyText}
                      />
                    ))}
                    {/* Render Medium Priority */}
                    {mediumPriority.map(task => (
                      <PatientTaskCard 
                        key={task.id} 
                        task={task} 
                        copiedId={copiedId}
                        copiedLang={copiedLang}
                        onCopy={handleCopyText}
                      />
                    ))}
                    {/* Render Low Priority */}
                    {lowPriority.map(task => (
                      <PatientTaskCard 
                        key={task.id} 
                        task={task} 
                        copiedId={copiedId}
                        copiedLang={copiedLang}
                        onCopy={handleCopyText}
                      />
                    ))}
                  </div>
                </div>

                {/* 2. Daily Action Items Checklist */}
                <div className="flex flex-col gap-4 border-t border-border pt-6">
                  <div className="flex items-center gap-2 font-bold text-lg text-foreground">
                    <CheckSquare className="h-5 w-5 text-primary" />
                    <h2>2. Coordinator Daily Action Checklist</h2>
                  </div>

                  <div className="border border-border rounded-2xl p-6 bg-background flex flex-col gap-3">
                    {tasks.map((task) => {
                      const callKey = `${task.id}-call`
                      const msgKey = `${task.id}-msg`
                      return (
                        <div key={task.id} className="flex flex-col gap-2 pb-3 border-b border-border/40 last:border-0 last:pb-0">
                          <p className="text-xs font-bold text-foreground">
                            {task.detectedName} ({task.detectedConcern})
                          </p>
                          <div className="flex flex-wrap gap-x-6 gap-y-2">
                            <label className="flex items-center gap-2.5 text-xs text-muted-foreground hover:text-foreground cursor-pointer select-none">
                              <input
                                type="checkbox"
                                checked={!!checkedActions[callKey]}
                                onChange={() => toggleAction(callKey)}
                                className="rounded text-primary focus:ring-primary h-3.5 w-3.5 border-border bg-muted"
                              />
                              <span className={checkedActions[callKey] ? "line-through opacity-50" : ""}>
                                {task.priority === "high" ? "🚨 Place immediate phone call" : "📞 Call patient to discuss timings"}
                              </span>
                            </label>

                            <label className="flex items-center gap-2.5 text-xs text-muted-foreground hover:text-foreground cursor-pointer select-none">
                              <input
                                type="checkbox"
                                checked={!!checkedActions[msgKey]}
                                onChange={() => toggleAction(msgKey)}
                                className="rounded text-primary focus:ring-primary h-3.5 w-3.5 border-border bg-muted"
                              />
                              <span className={checkedActions[msgKey] ? "line-through opacity-50" : ""}>
                                💬 Send copy-paste WhatsApp response
                              </span>
                            </label>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

// Subcomponent for patient task cards
function PatientTaskCard({ 
  task, 
  copiedId, 
  copiedLang, 
  onCopy 
}: { 
  task: PatientTask
  copiedId: string | null
  copiedLang: string | null
  onCopy: (text: string, id: string, lang: string) => void
}) {
  const isHigh = task.priority === "high"
  const isMedium = task.priority === "medium"

  const priorityColor = isHigh 
    ? "border-red-500/30 bg-red-500/5 text-red-600 dark:text-red-400"
    : isMedium 
      ? "border-amber-500/30 bg-amber-500/5 text-amber-600 dark:text-amber-400"
      : "border-blue-500/30 bg-blue-500/5 text-blue-600 dark:text-blue-400"

  const priorityLabel = isHigh 
    ? "High Priority (Emergency)" 
    : isMedium 
      ? "Medium Priority (Treatment/Booking)" 
      : "Low Priority (Inquiry)"

  return (
    <div className={`border rounded-2xl p-5 md:p-6 bg-background flex flex-col gap-4 relative shadow-sm ${
      isHigh ? "border-red-500/20" : isMedium ? "border-amber-500/20" : "border-border"
    }`}>
      {/* Task Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/40 pb-3">
        <div>
          <h3 className="font-bold text-foreground text-base leading-none">{task.detectedName}</h3>
          <span className="text-[10px] text-muted-foreground uppercase font-semibold mt-1 inline-block">
            Concern: {task.detectedConcern}
          </span>
        </div>
        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border ${priorityColor}`}>
          {priorityLabel}
        </span>
      </div>

      {/* Raw query query */}
      <div>
        <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider mb-1 flex items-center gap-1">
          <Info className="h-3 w-3" /> Input Data
        </p>
        <p className="text-xs italic text-foreground bg-muted/30 p-2.5 rounded-xl border border-border/50">
          "{task.rawQuery}"
        </p>
      </div>

      {/* Reason and Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div>
          <p className="font-semibold text-muted-foreground uppercase tracking-wider mb-1">Issue Context</p>
          <p className="text-foreground leading-relaxed font-semibold">{task.reason}</p>
        </div>
        <div>
          <p className="font-semibold text-muted-foreground uppercase tracking-wider mb-1">Next Action Step</p>
          <p className="text-primary font-bold leading-relaxed">{task.suggestedAction}</p>
        </div>
      </div>

      {/* Translations Copy-Paste Drafts */}
      <div className="flex flex-col gap-3 pt-2">
        <p className="text-xs font-bold text-foreground flex items-center gap-1">
          <MessageSquare className="h-3.5 w-3.5 text-primary" /> Multi-Language Response Drafts
        </p>

        {/* English Draft */}
        <div className="flex flex-col gap-1 text-xs">
          <div className="flex items-center justify-between text-muted-foreground">
            <span>English (SMS/WhatsApp)</span>
            <button
              onClick={() => onCopy(task.draftMessageEn, task.id, "en")}
              className="flex items-center gap-1 hover:text-primary transition-colors text-[10px] font-bold cursor-pointer"
            >
              {copiedId === task.id && copiedLang === "en" ? (
                <>
                  <Check className="h-3 w-3 text-green-500" />
                  <span className="text-green-500">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <div className="bg-muted/40 p-3 rounded-xl border border-border text-foreground text-xs leading-relaxed">
            {task.draftMessageEn}
          </div>
        </div>

        {/* Hindi Draft */}
        <div className="flex flex-col gap-1 text-xs">
          <div className="flex items-center justify-between text-muted-foreground">
            <span>हिंदी (व्हाट्सएप/एसएमएस)</span>
            <button
              onClick={() => onCopy(task.draftMessageHi, task.id, "hi")}
              className="flex items-center gap-1 hover:text-primary transition-colors text-[10px] font-bold cursor-pointer"
            >
              {copiedId === task.id && copiedLang === "hi" ? (
                <>
                  <Check className="h-3 w-3 text-green-500" />
                  <span className="text-green-500">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <div className="bg-muted/40 p-3 rounded-xl border border-border text-foreground text-xs leading-relaxed">
            {task.draftMessageHi}
          </div>
        </div>
      </div>
    </div>
  )
}
