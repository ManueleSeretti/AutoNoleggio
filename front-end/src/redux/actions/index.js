export const SET_PROFILO = "SET_PROFILO";
export const SET_CARS = "SET_CARS";
export const SET_RENTS = "SET_RENTS";

export const getTokenAction = (token) => ({ type: "LOGIN", payload: token });
export const logoutAction = () => ({ type: "LOGOUT", payload: "" });
export const setProfilo = (data) => ({ type: SET_PROFILO, payload: data });

export const fetchGetAllCars = () => {
  return async (dispatch, getState) => {
    try {
      const resp = await fetch("http://localhost:3001/auth/autos", {});
      const data = await resp.json();
      await dispatch({ type: SET_CARS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchGetAllRents = (token) => {
  return async (dispatch, getState) => {
    try {
      const resp = await fetch("http://localhost:3001/rents", {
        headers: {
          Authorization: `Bearer` + token,
        },
      });
      const data = await resp.json();
      await dispatch({ type: SET_RENTS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchPostCars = (payload, token) => {
  return async (dispatch, getState) => {
    try {
      const resp = await fetch("http://localhost:3001/cars", {
        method: "POST",
        headers: {
          Authorization: `Bearer ` + token,
          "Content-type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (resp.ok) {
        //setta il loader
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchPostRent = (payload, token) => {
  return async (dispatch, getState) => {
    try {
      const resp = await fetch("http://localhost:3001/rents", {
        method: "POST",
        headers: {
          Authorization: `Bearer ` + token,
          "Content-type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (resp.ok) {
        //setta il loader
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchPutCars = (payload, token) => {
  return async (dispatch, getState) => {
    try {
      const resp = await fetch("http://localhost:3001/cars", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ` + token,
          "Content-type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (resp.ok) {
        //setta il loader
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchPutRent = (payload, token) => {
  return async (dispatch, getState) => {
    try {
      const resp = await fetch("http://localhost:3001/rents", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ` + token,
          "Content-type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (resp.ok) {
        //setta il loader
      }
    } catch (error) {
      console.log(error);
    }
  };
};
