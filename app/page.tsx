import heroExperimentQuery from "@/sanity/queries/heroExperimentQuery";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { HeroExperiment } from "@/sanity.types";
import selectVariant from "@/util/selectVariant";
import { DisableDraftMode } from "@/components/DisableDraftMode";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";

export default async function Home() {
  const visitorId = Math.ceil(Math.random()*1000000)
  const heroVariants: HeroExperiment[] = (await sanityFetch({query: heroExperimentQuery})).data;
  const heroVariant = selectVariant(heroVariants, visitorId)
  console.log(visitorId);
  
  return (
    <div className="px-6 pt-14 lg:px-8 bg-gray-900 text-white min-h-screen bg-black">
      <h1 className="flex flex-col text-center text-bold text-4xl font-semibold">{heroVariant.titleText}</h1>
      <h4 className="flex flex-col text-center mt-4 text-sm font-thin text-gray-400">{heroVariant.subtitleText}</h4>
      <SanityLive />
      {(await draftMode()).isEnabled && (
        <>
          <DisableDraftMode/>
          <VisualEditing/>
        </>
      )}
    </div>
  );
}
