interface AboutProps {
  paragraphs: string[]
}

export const About = ({ paragraphs }: AboutProps) => (
  <div className="flex flex-col gap-4">
    {paragraphs.map((text, index) => (
      <div key={index} className="leading-relaxed">
        {text}
      </div>
    ))}
  </div>
)
