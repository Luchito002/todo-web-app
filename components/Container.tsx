export default function Container({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-box max-w-sm p-4 shadow-md border border-border rounded-lg overflow-auto">
      {/* max-w-sm */}
      {children}
    </div>
  )
}
