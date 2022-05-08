export const selectGists = (state) => state.gists.gists;
export const selectGistsError = (state) => state.gists.error;
export const selectGistsLoading = (state) => state.gists.loading;

//запрос
// setIsLoading(true);
//     try {
//       const response = await fetch(API_URL_PUBLIC);

//       if (!response.ok) {
//         throw new Error(`Request failed with status ${response.status}`);
//       }

//       const result = await response.json();
//       setGists(result);
//     } catch (e) {
//       console.log(e);
//       setError(true);
//     } finally {
//       setIsLoading(false);
//     }

// fetch(API_URL_PUBLIC)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`Request failed with status ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((result) => setGists(result))
//   .catch((err) => {
//     setError(true);
//   })
//   .finally(() => setIsLoading(false));
//   }, []);
