//model
import Ads from "./schema/adsSchema.js";
import Company from "./schema/companySchema.js";

//data
import { adsData } from "./constants/adsData.js";
import { companyData } from "./constants/companyData.js";

//ads data insertion function
export const adsDataInsertion = async () => {
  try {
    await Ads.insertMany(adsData).then(() => {
      console.log("Ads data imported successfully");
    });
  } catch (error) {
    console.log(`Error while incerting Ads data :-${error}`);
  }
};

//company data insertion function 
export const companyDataInsertion = async () => {
  try {
    await Company.insertMany(companyData).then(() => {
      console.log("Company data imported successfully");
    });
  } catch (error) {
    console.log(`Error while incerting Company data :-${error}`);
  }
};
