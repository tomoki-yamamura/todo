import { ReactNode } from "react"

export default function Button({ type, children }: {
  type: string
  children: ReactNode
}) {
  return (
    <button className={`btn ${type === "secondary" ? "btn--secondary" : ""}`}>{children}</button>
  )
}
