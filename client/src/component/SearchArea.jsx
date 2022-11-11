import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getData } from "../redux/actions/searchAction";
import Grid from "./Grid";
import styles from "./Grid.module.css";

const SearchArea = ({ searchText }) => {
  const emptySearch = searchText === null;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!emptySearch) {
      dispatch(getData(searchText));
    }
  }, [dispatch, searchText, emptySearch]);

  const adsRawData = useSelector((state) => state.data);

  //-------------------------------------------------------------------------------

  const adsMainData = [];

  for (let obj in adsRawData) {
    adsMainData.push(adsRawData[obj]);
  }

  console.log(adsMainData);

  return (
    <div style={{ display: "flex", overflow: "scroll" }}>
      {" "}
      {adsMainData.map((val) => (
        <div className={styles.gridcontainer}>
          <Grid
            company={val.company.name}
            primaryText={val.primaryText}
            headline={val.headline}
            companyurl={val.company.url}
            description={val.description}
            image={val.imageUrl}
            cta={val.CTA}
            className={styles.griditem}
          />
        </div>
      ))}
    </div>
  );
};

export default SearchArea;
