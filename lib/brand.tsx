export function colorize(text: string): React.ReactNode[] {
  return text.split(/(A—P|Aditya Prasanna)/g).map((part, i) =>
    part === 'A—P' || part === 'Aditya Prasanna'
      ? <span key={i} className="text-crimson">{part}</span>
      : part
  )
}
