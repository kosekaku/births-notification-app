import { TEI_ATTRIBUTES } from "../constants/teiAttributes";
import { TrackedEntityInstanceProps } from "../types/trackedEntity";

export const attributesData = ({ attributes }: TrackedEntityInstanceProps) => {
  if (attributes === undefined || attributes.length === 0) return;
  let fullNames,
    motherName,
    fatherName,
    dateOfBirth,
    placeOfBirth,
    natureOfBirth,
    gender,
    others;
  attributes?.map(({ value, attribute }) => {
    // Map data to specific atrributes
    switch (attribute) {
      case TEI_ATTRIBUTES["Mother Name"]:
        motherName = value;
        break;
      case TEI_ATTRIBUTES["Father Name"]:
        fatherName = value;
        break;
      case TEI_ATTRIBUTES["Name of the Child"]:
        fullNames = value;
        break;
      case TEI_ATTRIBUTES["Date of birth"]:
        dateOfBirth = value;
        break;
      case TEI_ATTRIBUTES["Place of Birth"]: // Place of Birth => TP7knQneHLj
        placeOfBirth = value;
        break;
      case TEI_ATTRIBUTES["Nature of Birth"]:
        natureOfBirth = value;
        break;
      case TEI_ATTRIBUTES["Sex of the child "]:
        gender = value;
        break;
      default:
        others = value;
    }
    return value; // TODO remove testing value
  });
  return {
    fullNames,
    motherName,
    fatherName,
    dateOfBirth,
    placeOfBirth,
    natureOfBirth,
    gender,
    others,
  };
};
