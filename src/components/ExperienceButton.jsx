export default function ExperienceButton() {
  return (
    <button
      onClick={() => setTab("studies")}
      id="btnStudies"
      type="button"
      className={`flex-1 py-2 text-sm font-medium ${tab === "studies" ? "bg-white text-black" : "text-white/80"}`}
    >
      Education
    </button>
  );
}
