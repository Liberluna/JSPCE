export function isPlatform(userAgent: string): "sp" | "pc" {
    if (
      userAgent.includes("android") ||
      userAgent.includes("webos") ||
      userAgent.includes("iphone") ||
      userAgent.includes("ipad") ||
      userAgent.includes("ipod") ||
      userAgent.includes("blackberry") ||
      userAgent.includes("windows phone")
    ) {
      return "sp";
    } else {
      return "pc";
    }
}
