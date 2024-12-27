import { defineQuery } from "next-sanity";

export default defineQuery(`*[_type == "heroExperiment" && (!defined(startDate) || dateTime(now()) > dateTime(startDate))][0]`)
