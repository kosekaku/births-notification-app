export interface AttributesProps {
  attribute: string;
  created: string;
  displayName: string;
  lastUpdated: string;
  value: string;
  valueType: string;
}
export interface TrackedEntityInstanceProps {
  attributes: AttributesProps[];
  trackedEntityInstance: string;
  orgUnit: string;
  enrollments: [];
}

export interface OrganizationUnitsProps {
  displayName: string;
  id: string;
  path: string;
}
