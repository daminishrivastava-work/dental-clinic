import { GlobalAnimationWrapper } from "@/components/providers/global-animation-wrapper"

export default function Template({ children }: { children: React.ReactNode }) {
  return <GlobalAnimationWrapper>{children}</GlobalAnimationWrapper>
}
