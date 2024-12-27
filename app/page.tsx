import heroExperimentQuery from "@/sanity/heroExperimentQuery";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home() {
  const visitorId = Math.ceil(Math.random()*1000000).toString();
  async function getHeroContent() {
    const heroExperiment = await sanityFetch({query: heroExperimentQuery});
    if (!heroExperiment.data) {
      return {
        heroTitle: 'Stable variant',
        heroSubtitle: 'Stable subtitle',
      }
    }
  }
  console.log(visitorId)
  console.log(await getHeroContent())
  return (
    <div className="px-6 pt-14 lg:px-8 bg-gray-900 text-white min-h-screen bg-black">
      <h1 className="flex flex-col text-center text-bold text-4xl font-semibold">Hero Variant 1</h1>
      <h4 className="flex flex-col text-center mt-4 text-sm font-thin text-gray-400">Variant 1</h4>
      <SanityLive />
    </div>
  );
}
