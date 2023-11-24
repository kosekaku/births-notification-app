import { TEI_ATTRIBUTES } from "../constants/teiAttributes";
import { AttributesProps, TrackedEntityInstanceProps } from "../types/trackedEntity";

export const attributesData = ({attributes, orgUnit}:TrackedEntityInstanceProps) => {
    if(attributes===undefined || attributes.length===0) return 
    console.log('attrinutes and or',orgUnit, attributes)
    let fullNames, motherName, dateOfBirth,placeOfBirth, natureOfBirth, gender, others ;
    attributes?.map(({ displayName, value, attribute }) => {
        // map data to specific atrributes
        switch (attribute) {
          case TEI_ATTRIBUTES['Mother Name']:
            motherName = value;
            break;
          case TEI_ATTRIBUTES['Name of the Child']:
            fullNames = value;
            break;
          case TEI_ATTRIBUTES['Date of birth']:
            dateOfBirth = value;
            break;
          case TEI_ATTRIBUTES['Place of Birth']: // Place of Birth => TP7knQneHLj
            placeOfBirth = value;
            break;
          case TEI_ATTRIBUTES['Nature of Birth']:
            natureOfBirth = value;
            break;
          case TEI_ATTRIBUTES['Sex of the child ']:
            gender = value;
            break;
          default:
            others = value;
        }
    });
    return {fullNames, motherName,dateOfBirth,placeOfBirth, natureOfBirth, gender, others}
};