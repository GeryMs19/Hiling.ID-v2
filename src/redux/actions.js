import axios from "axios";

// Aksi untuk mengambil data IP
export const fetchIPRequest = () => ({
  type: "FETCH_IP_REQUEST",
});

export const fetchIPSuccess = (data) => ({
  type: "FETCH_IP_SUCCESS",
  payload: data,
});

export const fetchIPFailure = (error) => ({
  type: "FETCH_IP_FAILURE",
  payload: error,
});

// Fungsi async untuk mengambil data IP dari API
export const fetchIP = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchIPRequest());
      const response = await axios.get("https://ifconfig.me/all.json");
      dispatch(fetchIPSuccess(response.data));
    } catch (error) {
      dispatch(fetchIPFailure(error.message));
    }
  };
};
