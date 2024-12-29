import { useFormikContext } from "formik";
import { FarmFormValues } from "../../Types/FarmFormTypes";
import { IoLocation } from "react-icons/io5";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
const ApikeyForOpenCage = import.meta.env.VITE_OPENCAGE_APIKEY;
const AddressInputField = () => {
  const { values, handleChange, handleBlur, errors, touched, setFieldValue } =
    useFormikContext<FarmFormValues>();
  const [loading, setLoading] = useState(false);
  const getGeoLocation = async (latitude, longitude) => {
    try {
      // fetch the user location using the API
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}%2C${longitude}&key=${ApikeyForOpenCage}`
      );
      const data = await response.json();
      const fetchedAddress = data.results[0]?.formatted || "Unknown location";
      return fetchedAddress;
    } catch (err) {
      console.error(err);
      return "Error fetching address";
    }
  };

  const storeUserLocation = async () => {
    if (!navigator.geolocation) {
      alert(
        "The Browser doesn't support users location, Please Input the Address in Input field"
      );
      return;
    }
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const Address = await getGeoLocation(latitude, longitude);
        setFieldValue("Address", Address);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching location:", error);
        alert("Unable to fetch your location");
        setLoading(false);
      }
    );
  };

  return (
    <div>
      {loading ? (
        <div className="w-full flex justify-center">
          <CircularProgress />
        </div>
      ) : (
        <div className="flex  gap-10">
          <input
            type="text"
            name="Address"
            placeholder="Enter Your Address"
            value={values.Address}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-1/2 p-2 border-2 border-black"
          ></input>
          {errors.Address && touched.Address && (
            <div className="text-red-500">{errors.Address}</div>
          )}
          <Tooltip title="Use My Current Location">
            <button onClick={() => storeUserLocation()}>
              <IoLocation size={32} />
            </button>
          </Tooltip>
        </div>
      )}
    </div>
  );
};

export default AddressInputField;
