// Skeleton
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import dynamic from "next/dynamic";

const DynamicLibraryDatabase = dynamic(() => import("@/components/library/LibraryDatabase"), {
  loading: () => (
    <>
      <SkeletonTheme baseColor="#0e0e0ecc" highlightColor="#14141411">
        <Skeleton borderRadius={12} className="w-full h-7 sm:h-10" count={10} containerClassName="h-fit"/>
      </SkeletonTheme>
      <div className="w-full h-6"></div>
    </>
  ),
  ssr: false,
})

export default DynamicLibraryDatabase;