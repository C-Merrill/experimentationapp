import { defineQuery } from "next-sanity";

export default defineQuery(`*[_type == "heroExperiment"] | order(dateTime(_createdAt))`)
