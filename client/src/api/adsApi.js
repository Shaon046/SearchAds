import axios from "axios";


const adsData = async (search) => {
  const URL = `http://localhost:8000/getads?search=${search}`;

  try {
    await axios
      .post(URL)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(`Error : ${err}`);
  }
};

export default adsData;
