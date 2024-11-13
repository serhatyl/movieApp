const fetchHelper = async (url: string, options: RequestInit = {}) => {
  const apiBaseUrl = process.env.JSON_SERVER_BASE_URL;

  try {
    const response = await fetch(`${apiBaseUrl}${url}`, options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch error: ", error);
    throw new Error("Something went wrong with the request.");
  }
};

export default fetchHelper;
