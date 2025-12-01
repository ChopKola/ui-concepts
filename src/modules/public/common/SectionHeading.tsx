const SectionHeading = ({ title, subtitle, highlight }: { title: string, subtitle?: string, highlight: string }) => (
  <div className="mb-8">
    <h2 className="text-3xl font-bold text-[#4b5966] font-manrope mb-2">
      {title} <span className="text-brand-orange">{highlight}</span>
    </h2>
    {subtitle && <p className="text-[#777] text-sm max-w-md">{subtitle}</p>}
  </div>
);

export default SectionHeading