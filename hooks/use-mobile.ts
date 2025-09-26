import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    // Guard against SSR
    if (typeof window === "undefined") return

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)

    // Set initial value
    setIsMobile(mql.matches)

    // Listener for changes
    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }

    mql.addEventListener("change", handleChange)
    return () => mql.removeEventListener("change", handleChange)
  }, [])

  return isMobile
}
