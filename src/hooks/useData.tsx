import { useDataQuery } from "@dhis2/app-runtime";
import { dhisDates } from "../utils/dhisDates";
import { OrganizationUnitsProps } from "../types/trackedEntity";
import { ROOT_OU } from "../constants/organisationUnit";
import { PROGRAM_ID } from "../constants/teiAttributes";

const PROGRAM_ATTRIBUTES_QUERY = {
  programs: {
    resource: "trackedEntityInstances",
    params: ({ organisationUnit, startDate, endDate, programId }: any) => ({
      ou: organisationUnit,
      ouMode: "DESCENDANTS", //'SELECTED' or 'DESCENDANTS,
      order: "created:desc",
      lastUpdatedStartDate: startDate,
      lastUpdatedEndDate: endDate,
      program: programId,
      paging: true,
    }),
  },
};

export const useData = (
  organisationUnit: OrganizationUnitsProps | null,
  selectedStartDate: Date | null,
  selectedEndDate: Date | null
) => {
  const { loading, error, data, page, totalPage, refetch } = useDataQuery(
    PROGRAM_ATTRIBUTES_QUERY,
    {
      variables: {
        organisationUnit: organisationUnit?.id || ROOT_OU,
        startDate: dhisDates(selectedStartDate),
        endDate: dhisDates(selectedEndDate),
        programId: PROGRAM_ID,
      },
      lazy: true,
    }
  ) as unknown as any; // Error due to OU being null

  return { loading, error, data, page, totalPage, refetch };
};
