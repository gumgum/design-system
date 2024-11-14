import { getAtomData } from "./atoms";
import { getMoleculesData } from "./molecules";
import { getOrganismsData } from "./organisms";

export const fetchDataByType = (type, id) => {

    switch (type) {
        case 'molecules':
            return getMoleculesData(id);
        case 'organisms':
            return getOrganismsData(id);
        case 'atoms':
            return getAtomData(id);
        default:
            return null;
    }
};