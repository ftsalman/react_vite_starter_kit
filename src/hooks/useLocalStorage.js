// export const useLocalStorage = () => {
//   const setItem = (key = "", value = "") => {
//     try {
//       window.localStorage.setItem(key, JSON.stringify(value));
//     } catch (error) {
//       console.log(error?.message);
//     }
//   };

//   const getItem = (key = "") => {
//     try {
//       const item = window.localStorage.getItem(key);
//       return item ? JSON.parse(item) : undefined;
//     } catch (error) {
//       console.log(error?.message);
//     }
//   };

//   const removeItem = (key = "") => {
//     try {
//       window.localStorage.removeItem(key);
//     } catch (error) {
//       console.log(error?.message);
//     }
//   };

//    const clearLocalStorage = (states = []) => {
//     if (states.length !== 0) {
//       states.forEach((state) => {
//         localStorage.removeItem(state);
//       });
//     }
//   };
  

//   return { setItem, getItem, removeItem,clearLocalStorage };
// };


// hooks/useLocalStorage.js
export const useLocalStorage = () => {
  const setItem = (key = "", value = "") => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error?.message);
    }
  };

  const getItem = (key = "") => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
    } catch (error) {
      console.log(error?.message);
    }
  };

  const removeItem = (key = "") => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.log(error?.message);
    }
  };

  const clearLocalStorage = (states = []) => {
    try {
      if (states.length !== 0) {
        states.forEach((state) => {
          window.localStorage.removeItem(state);
        });
      }
    } catch (error) {
      console.log(error?.message);
    }
  };

  return { setItem, getItem, removeItem, clearLocalStorage };
};
