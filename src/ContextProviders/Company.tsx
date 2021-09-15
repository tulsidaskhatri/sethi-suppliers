import React from 'react';
import {Contact, Image, Link} from '../model';

interface I_CompanyContext {
    logo: Image;
    socialPlatforms: Link[];
    contacts: Contact[];
}
export const CompanyContext = React.createContext<I_CompanyContext>({
    logo: {url: ''},
    socialPlatforms: [],
    contacts: [],
});
